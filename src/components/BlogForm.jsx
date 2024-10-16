import { useContext, useState, useEffect } from "react"
import { BlogContext } from "../context/BlogContext"
import { motion } from "framer-motion"
import { FaPlus } from "react-icons/fa"
import 'tailwindcss/tailwind.css'

const BlogForm = () => {
    const { addPost, editPost, editMode, currentPost, setEditMode } = useContext(BlogContext)
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        imageURL: ""
    })

    useEffect(() => {
        if (editMode && currentPost) {
            setFormData({
                title: currentPost.title,
                description: currentPost.description,
                imageURL: currentPost.imageURL
            })
        }
    }, [editMode, currentPost])

    function handleSubmit(e) {
        e.preventDefault()
        if (editMode) {
            editPost(currentPost.id, formData)
        } else {
            addPost(formData)
        }
        setFormData({
            title: "",
            description: "",
            imageURL: ""
        })
        setEditMode(false)
    }

    function handleChange(e) {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev, [name]: value
        }))
    }

    return (
        <section className="p-2 sm:p-6 mt-4 sm:mt-8 w-full max-w-5xl flex flex-col items-center ">
            <motion.h1 
                className="text-xl sm:text-3xl font-semibold sm:font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5 }}
            >
                {editMode ? "Edit Blog Details" : "Add Blog Details"}
            </motion.h1>
            <form onSubmit={handleSubmit} className="space-y-4 w-full sm:w-2/3 flex flex-col items-center">
                <div className="space-y-2 w-full">
                    <label htmlFor="title" className="block text-white">Title</label>
                    <input placeholder="Title" required type="text" name="title" value={formData.title} onChange={handleChange} className="input input-bordered w-full" />
                </div>
                <div className="space-y-2 w-full">
                    <label htmlFor="description" className="block text-white">Description</label>
                    <textarea
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className="textarea textarea-bordered w-full"
                    />
                </div>
                <div className="space-y-2 w-full">
                    <label htmlFor="imageURL" className="block text-white">Image URL</label>
                    <input placeholder="Image URL" required type="text" name="imageURL" value={formData.imageURL} onChange={handleChange} className="input input-bordered w-full" />
                </div>
                <button type="submit" className="btn btn-primary flex items-center my-4 w-full max-w-2xl">
                    <FaPlus className="mr-2" /> {editMode ? "Update Blog" : "Add Blog"}
                </button>
            </form>
        </section>
    )
}

export default BlogForm