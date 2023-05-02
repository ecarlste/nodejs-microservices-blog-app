import { FormEvent } from 'react';
import axios from 'axios';
import { Post } from 'types/post';
import { PostCreate } from 'ui/post-create';
import { PostList } from 'ui/post-list';

export default function Home(props: { posts: Post[] }) {
  async function handleCreatePostSubmit(event: FormEvent, title: string) {
    event.preventDefault();

    const response = await axios.post('http://localhost:4000/posts', {
      title,
    });

    console.log(response.data);
  }

  async function handleCreateCommentSubmit(
    event: FormEvent,
    postId: string,
    content: string
  ) {
    event.preventDefault();

    const response = await axios.post(
      `http://localhost:4001/posts/${postId}/comments`,
      {
        postId,
        content,
      }
    );

    console.log(response.data);
  }

  return (
    <>
      <PostCreate onSubmit={handleCreatePostSubmit} />
      <PostList onSubmit={handleCreateCommentSubmit} posts={props.posts} />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get('http://localhost:4000/posts');

  const posts = response.data as Post[];

  console.log(posts);

  return {
    props: { posts },
    revalidate: 10,
  };
}
