import { FormEvent, useState } from 'react';
import axios from 'axios';
import { PostsCreate } from 'ui/PostsCreate';

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
      <PostsCreate onSubmit={handleSubmit} setTitleValue={setTitleValue} />
    </>
  );
}
