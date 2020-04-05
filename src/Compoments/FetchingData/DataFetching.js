import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState({})
    // const [posts, setPosts] = useState([])
    const [id, setId] = useState({ setData: '' })
    const [btn, setBtn] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${btn}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [btn])

    const setdata = (e) => (
        setId({
            ...id,
            [e.target.name]: e.target.value
        })
    )

    const handlePost = () => {
        setBtn(id.setData)
    }

    return (
        <div>
            <input type="text" name="setData" value={id.setData} onChange={setdata} />
            <button onClick={handlePost}>Fetch Post</button>
            <h3>Hello -- > {id.setData}</h3>

            {/* <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
            {posts.title}
        </div>
    )
}

export default DataFetching
