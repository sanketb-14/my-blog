import { useContext } from "react"
import { BlogContext } from "../context/BlogContext"
import SingleBlog from "./SingleBlog"


const BlogList = () => {
    const { posts, deletePost, startEdit } = useContext(BlogContext)

    if(posts.length === 0) return <h1 className="text-center text-2xl font-semibold">No Blog Found</h1>

    return (
        <section className="p-1 sm:p-6 bg-transparent my-2 rounded-lg w-full max-w-5xl flex flex-col space-y-4 items-center">
            <h1 className="text-2xl sm:text-4xl font-semibold sm:font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">My Blog List</h1>
            <ul className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {posts.map(post => (
                    <SingleBlog key={post.id} post={post} onEdit={startEdit} onDelete={deletePost} />
                ))}
            </ul>
        </section>
    )
}

export default BlogList