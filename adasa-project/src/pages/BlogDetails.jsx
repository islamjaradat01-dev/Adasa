import { Link, useParams } from 'react-router-dom'
import data from '../data/data.json'
import NotFound from './NotFound'

function BlogDetails() {
  const { slug } = useParams()
  const post = data.posts.find((item) => item.slug === slug)

  if (!post) {
    return <NotFound />
  }

  const contentParts = post.content.split('\n\n')

  return (
    <article className="details-page">
      <div className="container details-container">
        <Link to="/blog" className="back-link">← العودة إلى المدونة</Link>

        <header className="details-header">
          <span className="category-badge">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="details-excerpt">{post.excerpt}</p>

          <div className="details-meta">
            <div className="author-row large-author">
              <img src={post.author.avatar} alt={post.author.name} />
              <div>
                <strong>{post.author.name}</strong>
                <span>{post.author.role}</span>
              </div>
            </div>

            <div className="post-meta-text">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <img src={post.image} alt={post.title} className="details-image" />

        <div className="article-content">
          {contentParts.map((part, index) => {
            if (part.startsWith('## ')) {
              return <h2 key={index}>{part.replace('## ', '')}</h2>
            }

            return <p key={index}>{part}</p>
          })}
        </div>

        <div className="tags-box">
          <strong>الوسوم:</strong>
          <div>
            {post.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogDetails
