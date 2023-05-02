import { FormEvent, useState } from 'react';
import { Button } from './button';
import { InputWithLabel } from './input-with-label';

export type CommentCreateFormEventHandler = (
  event: FormEvent,
  postId: string,
  content: string
) => void;

interface CommentCreateProps {
  postId: string;
  onSubmit: CommentCreateFormEventHandler;
}

export function CommentCreate(props: CommentCreateProps) {
  const [content, setContent] = useState('');

  return (
    <form onSubmit={(event) => props.onSubmit(event, props.postId, content)}>
      <div>
        <InputWithLabel
          label="New Comment"
          inputId="content"
          inputType="text"
          setValue={setContent}
        />
      </div>
      <Button className="mt-4" size="sm">
        Submit
      </Button>
    </form>
  );
}
