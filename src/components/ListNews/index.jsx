import React from 'react';
import Single from './single';

export default function ListNews({ posts, widget }) {
  return (
    <div>
      {widget?.title}
      <div className="w-full text-gray-900 bg-white rounded-lg py-4">
        {posts && posts.length > 0 ? (
          posts.map((post) => <Single key={post.id} post={post} category={widget.category.nodes[0].slug} />)
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
}