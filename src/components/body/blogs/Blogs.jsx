import { useEffect, useState } from 'react'
import Blog from './Blog'
import PropTypes from 'prop-types';

const Blogs = ({handleBookMark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
      .then(response => response.json())
      .then(json => setBlogs(json))
      }, []);

  return (
    <div className='md:w-2/3 shadow-2xl rounded-xl mb-10 p-5'>
      {
      blogs.map((blog=> {
        return (
            <Blog 
            key={blog.id} 
            blog={blog} 
            handleBookMark = {handleBookMark}
            handleMarkAsRead= {handleMarkAsRead}
            ></Blog>
        )
      }))
      }
    </div>
  )
}
Blogs.propTypes = {
  handleBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};
export default Blogs
