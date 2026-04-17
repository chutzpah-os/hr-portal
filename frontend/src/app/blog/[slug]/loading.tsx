export default function Loading() {
  return (
    <main style={{ minHeight: '100svh', backgroundColor: 'rgb(0,0,0)', paddingTop: '7rem' }}>
      <div className="max-w-2xl mx-auto px-6 md:px-10 animate-pulse">
        <div className="h-4 bg-gray-800 rounded w-24 mb-8"></div> {/* Back button placeholder */}
        <div className="h-10 bg-gray-800 rounded w-3/4 mb-4"></div> {/* Title placeholder */}
        <div className="h-4 bg-gray-800 rounded w-full mb-2"></div> {/* Content line 1 */}
        <div className="h-4 bg-gray-800 rounded w-full mb-2"></div> {/* Content line 2 */}
        <div className="h-4 bg-gray-800 rounded w-2/3 mb-2"></div> {/* Content line 3 */}
      </div>
    </main>
  )
}