import { useContext } from "react"
import { BlogContext } from "./context/BlogContext"
import BlogForm from "./components/BlogForm"
import BlogList from "./components/BlogList"
import { motion } from "framer-motion"
import { FaBlog } from "react-icons/fa"

function App() {
  const { posts } = useContext(BlogContext)

  return (
    <main className=" w-full  min-h-screen bg-gradient-to-t from-primary to-null p-1 sm:p-5 flex items-center flex-col">
      <motion.h1 
        className="text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <FaBlog className="inline mr-2 text-primary" /> My-Blog
      </motion.h1>
      <h3 className="text-xl text-white">My Total Blog - {posts.length}</h3>
      <BlogForm />
      <BlogList />
    </main>
  )
}

export default App