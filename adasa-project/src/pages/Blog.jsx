import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import SearchBar from '../components/SearchBar'
import CategoryFilter from '../components/CategoryFilter'
import ViewToggle from '../components/ViewToggle'
import Pagination from '../components/Pagination'
import data from '../data/data.json'

function Blog() {
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const validCategory = data.categories.some((category) => category.name === categoryFromUrl)

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(validCategory ? categoryFromUrl : 'الكل')
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 6

  const filteredPosts = data.posts.filter((post) => {
    const searchValue = searchTerm.trim().toLowerCase()
    const matchesSearch =
      post.title.toLowerCase().includes(searchValue) ||
      post.excerpt.toLowerCase().includes(searchValue)

    const matchesCategory =
      selectedCategory === 'الكل' || post.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const handleSearch = (value) => {
    setSearchTerm(value)
    setCurrentPage(1)
  }

  const handleCategory = (category) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="page-section">
      <div className="container">
        <div className="page-header">
          <span className="eyebrow">مقالات ونصائح</span>
          <h1>مدونة عدسة</h1>
          <p>استكشف مقالات تساعدك على تطوير مهاراتك في التصوير الفوتوغرافي.</p>
        </div>

        <div className="blog-tools">
          <SearchBar value={searchTerm} onChange={handleSearch} />
          <ViewToggle viewMode={viewMode} onChange={setViewMode} />
        </div>

        <CategoryFilter
          categories={data.categories}
          selectedCategory={selectedCategory}
          onChange={handleCategory}
        />

        <div className="results-line">
          <span>عدد النتائج: {filteredPosts.length}</span>
          {selectedCategory !== 'الكل' && <span>التصنيف: {selectedCategory}</span>}
        </div>

        {currentPosts.length > 0 ? (
          <div className={viewMode === 'grid' ? 'posts-grid' : 'posts-list'}>
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div>📷</div>
            <h2>لا توجد نتائج</h2>
            <p>جرّب كلمة بحث أخرى أو اختر تصنيفاً مختلفاً.</p>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </section>
  )
}

export default Blog
