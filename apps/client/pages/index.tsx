import { FormEvent, useState } from 'react';
import axios from 'axios';
import { Post } from 'types/post';
import { PostCreate } from 'ui/post-create';
import { PostList } from 'ui/post-list';

export default function Home(props: { posts: Post[] }) {
  const [titleValue, setTitleValue] = useState('');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const response = await axios.post('http://localhost:4000/posts', {
      title: titleValue,
    });
  }

  return (
    <>
      <PostCreate onSubmit={handleSubmit} setTitleValue={setTitleValue} />
      <PostList posts={props.posts} />
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
