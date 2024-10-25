import PropTypes from 'prop-types'

export default function BookMarks({ bookmarks, readingTime }) {
  return (
    <div className='md:w-1/3'>

      <div className='p-4 rounded-xl shadow-2xl bg-gray-50 '>
        <div className='flex justify-center py-4 bg-blue-200 text-xl font-bold mb-3 rounded-xl'>
          <h3>
            Reading Time: {readingTime}
          </h3>
        </div>
        <h2 className='text-3xl text-center'>Bookmarked Blog: { bookmarks.length}</h2>
        <div>

          {
            bookmarks.map((bookmark, i) => {
              return (
                <div className='bg-slate-200 p-4 m-4 rounded-xl' key={i}>{bookmark.title}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
BookMarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
}
