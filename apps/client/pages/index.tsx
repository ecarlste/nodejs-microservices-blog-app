import { FormEvent, useState } from 'react';
import axios from 'axios';
import { PostCreate } from 'ui/post-create';
import { PostList } from 'ui/post-list';

export default function Home() {
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
      <PostList />
    </>
  );
}
