import { Dispatch, FormEvent, SetStateAction, useRef } from 'react';
import { Button } from './button';
import { InputWithLabel } from './input-with-label';

interface PostCreateProps {
  onSubmit: (event: FormEvent) => {};
  setTitleValue: Dispatch<SetStateAction<string>>;
}

export function PostCreate(props: PostCreateProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Posts Create
        </h2>
        <form onSubmit={props.onSubmit}>
          <div className="flex flex-col gap-4 sm:gap-6">
            <InputWithLabel
              label="Title"
              inputId="title"
              inputType="text"
              setValue={props.setTitleValue}
            />
          </div>

          <Button className="mt-4 sm:mt-6" size="sm">
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}
