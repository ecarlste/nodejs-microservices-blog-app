import React from 'react';
import { Post } from 'types/post';

function PostCard(props: { post: Post }) {
  return <p>{props.post.title}</p>;
}

export function PostList(props: { posts: any }) {
  const posts: Post[] = Object.values(props.posts);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Post List
        </h2>

        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
