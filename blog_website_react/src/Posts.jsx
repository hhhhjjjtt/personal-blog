import React, { useState, useEffect } from 'react';
import { getPosts } from '../client.js'; // adjust the path as necessary
import { client } from '../client';

const PostsComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post"]{
        title,
        slug,
        body,
        "imageUrl": mainImage.asset->url
    }`;
    client.fetch(query)
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h1>{post.title}</h1>
            <p>{post.slug.current}</p>
            <div>{post.body}</div>
            <img 
                src={post.imageUrl} 
                alt={`Cover for ${post.title}`}
                style={{ width: '50%' }}
            />
            {/* Additional post details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;