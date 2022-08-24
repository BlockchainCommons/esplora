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
          {process.env.ABOUT_BC_E && <h1 className="footer_container_content_about_heading">
            {process.env.ABOUT_BC_E}
          </h1>}
          {process.env.ABOUT_BC_E_TEXT && <p className="footer_container_content_about_text">
            {process.env.ABOUT_BC_E_TEXT}
          </p>}
          <div className="footer_container_content_about_bc">
              <img className="main-nav-container-image" alt="BC Commons Logo" src='img/bc_logo_light.png'/>
              {process.env.BC_PROOF_OF_CONCEPT && <p>
                {process.env.BC_PROOF_OF_CONCEPT}
              </p>}
            
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
