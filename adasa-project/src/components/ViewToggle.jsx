function ViewToggle({ viewMode, onChange }) {
  return (
    <div className="view-toggle">
      <button
        aria-label="عرض شبكي"
        className={viewMode === 'grid' ? 'view-btn active' : 'view-btn'}
        onClick={() => onChange('grid')}
      >
        ▦
      </button>
      <button
        aria-label="عرض قائمة"
        className={viewMode === 'list' ? 'view-btn active' : 'view-btn'}
        onClick={() => onChange('list')}
      >
        ☰
      </button>
    </div>
  )
}

export default ViewToggle
