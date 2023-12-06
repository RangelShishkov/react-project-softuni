import React, { useEffect, useState, useContext } from 'react';

import * as postService from '../../services/postService';
import Post from "../post/Post";
import AuthContext from "../../contexts/authContext";




export default function MyPost() {
    const [posts, setPosts] = useState([]);
    const { userId } = useContext(AuthContext);


    useEffect(() => {
        postService.getAll()
            .then(result => setPosts(result));
    }, []);

    const filteredPosts = posts.filter(post => post._ownerId == userId);


    return (
        <>
            {filteredPosts.length > 0 ? (
                filteredPosts.map(post => (
                    <Post key={post._id} {...post} />
                ))
            ) : (
                <h3>You don't have any posts yet.</h3>
            )}
        </>
    )
}