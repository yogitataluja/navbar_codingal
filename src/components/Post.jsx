import React, { useEffect, useState} from 'react'
import axios from 'axios'
import Scroll from './Scroll'
import Pagination from './Pagination'


const Post = () => {

    const [posts, setposts] = useState([])
    const [loading, setloading] = useState(false)
    const [currpage, setcurrpage] = useState(1)
    const [postsperpage] = useState(10)
    useEffect(() => {
        const fetchPost = async () => {
            setloading(true)
            const url = "https://jsonplaceholder.typicode.com/posts"
            const res = await axios.get(url)
            setposts(res.data)
            setloading(false)
        }
        fetchPost()
    }, [])

    // get current post
    const indexoflastpost = currpage * postsperpage
    const indexoffirstpost = indexoflastpost - postsperpage
    const currentpost = posts.slice(indexoffirstpost, indexoflastpost)
    // Change page
    const paginate = (pageNumber) => (
        setcurrpage(pageNumber)
           
    )
    return (
        <>
            <div className="container mt-5 ">
                <h1 className="text-primary text-center mb-3 ">Ours Post</h1>
                <Scroll posts={currentpost} loading={loading} />
                <Pagination postsperpage={postsperpage} totalposts={posts.length} paginate={paginate} />
            </div>
        </>
    )
}

export default Post
