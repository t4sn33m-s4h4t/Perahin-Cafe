import React, { useEffect, useState } from 'react'
import Blogs from './blogs/Blogs'
import BookMarks from './bookmarks/BookMarks'

export default function Body() {

  const [readingTime, setReadingTime] = useState(0);
  const [bookmarks, setBookmarks] = useState([]);

  function calculateTotalReadingTime(bookmarks) {
    let totalTime = 0;
    for (let i = 0; i < bookmarks.length; i++) {
      const bookmark = bookmarks[i];
      totalTime += bookmark.reading_time;

    }
    return totalTime;
  }
  useEffect(() => {
    const total_time = calculateTotalReadingTime(bookmarks);
    setReadingTime(total_time);
  }, [bookmarks]);


  function handleMarkAsRead(id, setBookmarked) {
    const newBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    if (newBookmarks.length !== bookmarks.length) {
      setBookmarks(newBookmarks);
      setBookmarked(false);
    }
  }


  function handleBookMark(blog, setBookmarked) {
    let uniqueLists = bookmarks
    const duplicate = bookmarks.findIndex(bookmark => bookmark.id == blog.id)
    if (duplicate !== -1) {
      handleMarkAsRead(blog.id, setBookmarked)
    } else {
      uniqueLists = [...bookmarks, blog]
      setBookmarked(true)
      setBookmarks(uniqueLists)
    }
  }


  return (
    <div className='md:flex space-x-4 mt-7'>
      <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark} ></Blogs>
      <BookMarks readingTime={readingTime} bookmarks={bookmarks}></BookMarks>
    </div>
  )
}
