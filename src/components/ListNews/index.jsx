import React from 'react';
import Single from './single';

export default function ListNews({ posts }) {
  return (
    <div>
      <div className="w-full text-gray-900 bg-white rounded-lg py-4">
        {posts && posts.length > 0 ? (
          posts.map((post) => <Single key={post.id} post={post} />)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}