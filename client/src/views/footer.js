import Snabbdom from 'snabbdom-pragma'

const staticRoot = process.env.STATIC_ROOT || ''
const links = process.env.FOOTER_LINKS ? JSON.parse(process.env.FOOTER_LINKS) : {
   [staticRoot+'img/github_blue.png']: 'https://github.com/blockstream/esplora',
   [staticRoot+'img/twitter.png']: 'https://twitter.com/BlockchainComns',
   [staticRoot+'img/rss_feed.png']: 'https://www.blockchaincommons.com/atom.xml'
  }




export default ({ t, page }) =>
  <footer className="footer">
    <div className="container">
      <div className="footer_container_content">
        <div className="footer_container_content_about">
          <h1 className="footer_container_content_about_heading">
            About Bitcoin Esplora
          </h1>
          <p className="footer_container_content_about_text">
          Our block explorer allows users to search and view specific data that is published in real-time to the Bitcoin blockchain and the Liquid sidechain. As a Bitcoin explorer, it offers many new features compared to existing block explorer choices - the information it presents is drawn from an up to date Bitcoin Core full node, as well as natively supporting SegWit, bech32, and other modern Bitcoin features. The Blockstream Explorer is intended to be easy to use for the casual user, but will increasingly pack some powerful features under the hood for developers. Read more about <a href="https://medium.com/shapeshift-stories/whats-the-deal-with-block-explorers-9fcdb161e788">Block Explorers</a>
          </p>
          <div className="footer_container_content_about_bc">
              <img className="main-nav-container-image" alt="BC Commons Logo" src='img/bc_logo_light.png'/>
              <p>
                This site is a proof-of-concept. It is intended to demonstrate the <a href="https://github.com/BlockchainCommons/Gordian#gordian-principles">Principles</a> of the <a href="https://github.com/BlockchainCommons/Gordian/blob/master/README.md">Gordian Architecture</a>. Use at your own risk. For more info on this site, please see its repo. For more info on Blockchain Commons, please see our <a href="https://www.blockchaincommons.com/">main web page</a>. If you'd like to become a sponsor of work like this, please visit our <a href="https://github.com/sponsors/BlockchainCommons">Sponsors Page</a>.
              </p>
            
          </div>
        </div>
        <div className="language">
          <form method="get">
            { !process.browser && Object.entries(page.query).map(([k, v]) =>
              k != 'lang' && <input type="hidden" name={k} value={v} />
            ) }
            <select className="language-selector" name="lang">
              { Object.entries(t.langs).map(([ lang_id, lang_t ]) =>
                <option value={lang_id} attrs={lang_id == t.lang_id ? { selected: true } : {}}>{lang_t`lang_name`}</option>
              ) }
            </select>
            { !process.browser && <input type="submit" className="language-submit" value={t`Go`} /> }
          </form>
        </div>
        <div className="footer_container_content_row">

          <div className="footer_container_content_row_social-media_container">
            { Object.entries(links).map(([ imgSrc, url ]) =>
                <a className="footer_container_content_row_social-media_link" href={url} target="_blank">
                  <img className="footer_container_content_row_social-media_item" alt="" src={imgSrc} />
                </a>
            ) }
          </div>
          { (process.env.ONION_V3) &&
            <div className="footer_container_content_row_onion_container">
              <div className="footer_container_content_row_onion_icon"></div>
              <div className="footer_container_content_row_onion_link-container">
                { process.env.ONION_V3 && <a className="footer_container_content_row_onion_link" href={ process.env.ONION_V3 } target="_blank">Onion V3</a> }
              </div>
            </div>
          }

        </div>
        <div className="footer_container_content_copyright">
          <div>
          { process.env.TERMS && <span><a href={ process.env.TERMS } target="_blank">Terms &amp; </a></span>}
          { process.env.PRIVACY && <span><a href={ process.env.PRIVACY } target="_blank">Privacy</a></span> }
          </div>
          <div>{ process.env.SITE_FOOTER || t`Powered by esplora` }</div>
        </div>
      </div>
    </div>
  </footer>
