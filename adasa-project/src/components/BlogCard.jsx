import { Link } from 'react-router-dom'

function BlogCard({ post, viewMode = 'grid' }) {
  return (
    <article className={`blog-card ${viewMode === 'list' ? 'list-card' : ''}`}>
      <Link to={`/blog/${post.slug}`} className="card-image-link">
        <img src={post.image} alt={post.title} className="blog-image" />
      </Link>

      <div className="blog-card-content">
        <div className="card-top-line">
          <span className="category-badge">{post.category}</span>
          <span>{post.readTime}</span>
        </div>

        <Link to={`/blog/${post.slug}`} className="card-title-link">
          <h3>{post.title}</h3>
        </Link>

        <p>{post.excerpt}</p>

        <div className="author-row">
          <img src={post.author.avatar} alt={post.author.name} />
          <div>
            <strong>{post.author.name}</strong>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogCard
