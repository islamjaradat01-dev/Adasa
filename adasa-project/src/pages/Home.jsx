import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import data from '../data/data.json'

function Home() {
  const featuredPosts = data.posts.filter((post) => post.featured)
  const latestPosts = data.posts.slice(0, 6)

  const categoryCounts = data.categories.map((category) => ({
    ...category,
    count: data.posts.filter((post) => post.category === category.name).length,
  }))

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="eyebrow">عالم التصوير الفوتوغرافي</span>
            <h1>حوّل كل لحظة إلى قصة تستحق أن تُروى</h1>
            <p>{data.siteInfo.description}</p>
            <div className="hero-actions">
              <Link to="/blog" className="primary-btn">استكشف المقالات</Link>
              <a href="#featured" className="secondary-btn">المقالات المميزة</a>
            </div>
          </div>

          <div className="hero-card">
            <img src={data.posts[0].image} alt="تصوير الساعة الذهبية" />
            <div className="hero-card-info">
              <span>مقال مميز</span>
              <h2>{data.posts[0].title}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-grid">
          <div><strong>{data.posts.length}</strong><span>مقال</span></div>
          <div><strong>{data.categories.length}</strong><span>تصنيفات</span></div>
          <div><strong>{featuredPosts.length}</strong><span>مقالات مميزة</span></div>
        </div>
      </section>

      <section className="section" id="featured">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">اختياراتنا</span>
              <h2>مقالات مميزة</h2>
            </div>
            <Link to="/blog">عرض كل المقالات ←</Link>
          </div>

          <div className="posts-grid">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">اختر ما تحب</span>
              <h2>التصنيفات</h2>
            </div>
          </div>

          <div className="categories-grid">
            {categoryCounts.map((category) => (
              <Link
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className="category-card"
                key={category.name}
              >
                <span className="category-camera">📸</span>
                <h3>{category.name}</h3>
                <p>{category.count} مقالات</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">جديد عدسة</span>
              <h2>أحدث المقالات</h2>
            </div>
            <Link to="/blog">اذهب للمدونة ←</Link>
          </div>

          <div className="posts-grid">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
