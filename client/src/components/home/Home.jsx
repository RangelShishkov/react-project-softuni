import { useEffect, useState } from 'react';

import * as postService from '../../services/postService';
import Post from "../post/Post";



function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(result => setPosts(result));
    }, []);

    return (
        posts.map(post => (
            <Post key={post._id} {...post} />
        ))
    );
}

export default Home