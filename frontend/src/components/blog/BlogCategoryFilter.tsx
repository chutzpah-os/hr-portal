'use client'

type Category = 'Technical' | 'Non-Technical'

interface BlogCategoryFilterProps {
  selectedCategory: Category | 'All'
  onCategoryChange: (category: Category | 'All') => void
}

export default function BlogCategoryFilter({
  selectedCategory,
  onCategoryChange
}: BlogCategoryFilterProps) {
  const categories: (Category | 'All')[] = ['All', 'Technical', 'Non-Technical']

  return (
    <div className="space-y-3">
      <h3
        className="text-sm font-medium"
        style={{ color: 'var(--white-80)' }}
      >
        Category
      </h3>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isSelected = selectedCategory === category
          return (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`px-4 py-2 text-sm rounded-lg border transition-all duration-200 hover:scale-105 ${
                isSelected ? 'opacity-100' : 'opacity-70 hover:opacity-90'
              }`}
              style={{
                backgroundColor: isSelected
                  ? 'var(--white-15)'
                  : 'rgba(5, 5, 5, 0.9)',
                border: isSelected
                  ? '1px solid var(--white-25)'
                  : '1px solid var(--white-10)',
                color: isSelected
                  ? 'var(--white-100)'
                  : 'var(--white-60)',
                fontWeight: isSelected ? '500' : '400',
              }}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}