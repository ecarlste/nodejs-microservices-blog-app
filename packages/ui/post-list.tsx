import { Post } from 'types/post';
import { CommentCreate, CommentCreateFormEventHandler } from './comment-create';

interface PostCardProps {
  post: Post;
  onSubmit: CommentCreateFormEventHandler;
}

function PostCard(props: PostCardProps) {
  return (
    <div className="container px-0 border-2 rounded-md">
      <div className="flex flex-col space-y-4 bg-slate-100 p-4">
        <h3 className="text-xl">{props.post.title}</h3>
        <div className="border-t-2 border-slate-400" />
        <CommentCreate postId={props.post.id} onSubmit={props.onSubmit} />
      </div>
    </div>
  );
}

interface PostListProps {
  posts: any;
  onSubmit: CommentCreateFormEventHandler;
}

export function PostList(props: PostListProps) {
  const posts: Post[] = Object.values(props.posts);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-4 px-4 mx-auto max-w-2xl">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Post List
        </h2>

        <div className="flex flex-col space-y-4">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} onSubmit={props.onSubmit} />
          ))}
        </div>
      </div>
    </section>
  );
}
