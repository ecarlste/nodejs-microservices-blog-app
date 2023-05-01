import { Input } from './input';
import { Label } from './label';

export function PostsCreate() {
  return (
    <div>
      <form>
        <div>
          <Label>Title</Label>
          <Input />
          <Label>Title</Label>
          <Input />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
