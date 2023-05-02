import { FormEvent, useState } from 'react';
import { Button } from './button';
import { InputWithLabel } from './input-with-label';

type PostCreateFormEventHandler = (event: FormEvent, title: string) => void;

interface PostCreateProps {
  onSubmit: PostCreateFormEventHandler;
}

export function PostCreate(props: PostCreateProps) {
  const [title, setTitle] = useState('');

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Create Post
        </h2>
        <form onSubmit={(event) => props.onSubmit(event, title)}>
          <div className="flex flex-col gap-4 sm:gap-6">
            <InputWithLabel
              label="Title"
              inputId="title"
              inputType="text"
              setValue={setTitle}
            />
          </div>

          <Button className="mt-4" size="sm">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
