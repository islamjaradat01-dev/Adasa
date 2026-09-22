import data from '../data/data.json'

function Footer() {
  const { siteInfo } = data

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div>
          <h3>{siteInfo.name}</h3>
          <p>{siteInfo.description}</p>
        </div>

        <div>
          <h4>تواصل معنا</h4>
          <a href={`mailto:${siteInfo.email}`}>{siteInfo.email}</a>
          <div className="social-links">
            <a href={siteInfo.social.twitter} target="_blank" rel="noreferrer">Twitter</a>
            <a href={siteInfo.social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={siteInfo.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">© 2026 عدسة - جميع الحقوق محفوظة</div>
    </footer>
  )
}

export default Footer
