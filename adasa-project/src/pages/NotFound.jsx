import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="not-found page-section">
      <div className="container">
        <div className="not-found-code">404</div>
        <h1>الصفحة غير موجودة</h1>
        <p>يبدو أن الصفحة التي تحاول الوصول إليها غير موجودة.</p>
        <Link to="/" className="primary-btn">العودة للرئيسية</Link>
      </div>
    </section>
  )
}

export default NotFound
