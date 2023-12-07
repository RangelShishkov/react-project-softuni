import React, { useEffect, useState } from 'react';
import * as postService from '../../services/postService';
import Post from "../post/Post";

function Home() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        postService.getAll()
            .then(result => {
                // Check if the result is an array before setting the state
                if (Array.isArray(result)) {
                    setPosts(result);
                } else {
                    setError("Failed to fetch posts. Please try again later.");
                }
            })
            .catch(err => {
                console.error("Error fetching posts:", err);
                setError("Failed to fetch posts. Please try again later.");
            });
    }, []);

    // Validate each post to ensure it has a title and description
    const filteredPosts = posts.filter(post => post.title && post.description);

    return (
        <>
            {error ? (
                <h3>{error}</h3>
            ) : filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                    <Post key={post._id} {...post} />
                ))
            ) : (
                <h3>Be the first to create a post!</h3>
            )}
        </>
    );
}

export default Home;
