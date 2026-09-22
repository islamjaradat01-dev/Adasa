function CategoryFilter({ categories, selectedCategory, onChange }) {
  return (
    <div className="category-filter">
      <button
        className={selectedCategory === 'الكل' ? 'filter-btn active' : 'filter-btn'}
        onClick={() => onChange('الكل')}
      >
        الكل
      </button>

      {categories.map((category) => (
        <button
          key={category.name}
          className={selectedCategory === category.name ? 'filter-btn active' : 'filter-btn'}
          onClick={() => onChange(category.name)}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
