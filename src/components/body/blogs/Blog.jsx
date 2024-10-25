import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";
function Blog({ blog, handleBookMark, handleMarkAsRead}) {
const {id, cover, title, author_img, author, posted_date, reading_time, hashtags } = blog
const [bookmarked, setBookmarked] = useState(false)
  return (
    <div className='mb-20 space-y-4'>
        <img src={cover} className='w-full mb-8' alt={title} />
        <div className="flex justify-between mb-4 ">
            <div className='flex'>
                <img className='w-14' src={author_img} alt="" />
                <div className='ml-6'>
                <h3 className="text-2xl">{author}</h3>
                <p className="text-lg">{posted_date}</p>
                </div>
            </div>
            <div className='flex items-center'>
                <span>{reading_time} min read</span>
                <button 
                    onClick={()=>{
                        handleBookMark(blog, setBookmarked)}
                    } 
                    className={`ml-2 ${ bookmarked ? 'text-red-700':'text-gray-400'} text-xl`}>
                <FaBookmark />
                </button>
            </div>
        </div>
        <h2 className='text-4xl'>{title}</h2>
        <p>
            {
                hashtags.map((hash, i) => <span className='text-gray-600' key={i}><a  href=''>#{hash} </a></span>)
            }
        </p>
        <button className='text-purple-600 font-bold underline' onClick={()=>{handleMarkAsRead(id, setBookmarked)}}>Mark As Read</button>
    </div>
  );
}


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;