import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const SingleBlog = ({post, onEdit, onDelete}) => {
    const {title , description , imageURL} = post;
    
  return (
    <motion.li 
      className="bg-gradient-to-t from-base-100/50 to-null rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
        <img src={imageURL} alt={title} className="w-full max-w-2xl object-cover card h-auto rounded-md" />
        <h3 className="text-2xl text-center font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-grey-100 my-4">{description}</p>
      
        <button onClick={() => onEdit(post)} className="btn btn-sm sm:mdn-md w-1/3 max-w-2xl btn-accent to-null text-lg mx-2 border-none ">Edit</button>
        <button onClick={() => onDelete(post.id)} className="btn btn-sm sm:mdn-md w-1/3 max-w-2xl bg-gradient-to-r from-red-700 to-red-800 text-lg mx-2 border-none text-white">Delete</button>
    </motion.li>
  )
}

export default SingleBlog;
