import {createContext , useState} from 'react'

export const BlogContext = createContext()

export const BlogProvider= ({children}) => {
    const [posts , setPosts] = useState([])
    const [editMode, setEditMode] = useState(false)
    const [currentPost, setCurrentPost] = useState(null)

    function addPost(post){
        setPosts([...posts, {id:posts.length + 1, ...post}])
    }

    function deletePost(id) {
        setPosts(posts.filter(post => post.id !== id));
    }

    function editPost(id, updatedPost) {
        setPosts(posts.map(post => (post.id === id ? { ...post, ...updatedPost } : post)));
        setEditMode(false)
        setCurrentPost(null)
    }

    function startEdit(post) {
        setEditMode(true)
        setCurrentPost(post)
    }

    return (
        <BlogContext.Provider value={{posts , addPost, deletePost, editPost, editMode, setEditMode, currentPost, setCurrentPost, startEdit}}>
            {children}
        </BlogContext.Provider>
    )
}
