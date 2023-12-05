import { useEffect, useState } from 'react';

import * as postService from '../../services/postService';
import Post from "../post/Post";



function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(result => setPosts(result));
    }, []);
    const filteredPosts = posts.filter(post => post.title && post.description);
    return (
        <>
            {filteredPosts.length > 0 ? (
        filteredPosts.map(post => (
          <Post key={post._id} {...post} />
        ))
      ) : (
        <h3>No posts yet</h3>
      )}
        </>


    );
}

export default Home