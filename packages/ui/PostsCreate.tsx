import { InputWithLabel } from './input-with-label';

export function PostsCreate() {
  return (
    <div>
      <form>
        <InputWithLabel label="Email" inputId="email" inputType="email" />

        <button>Submit</button>
      </form>
    </div>
  );
}
