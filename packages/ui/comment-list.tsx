import React from 'react';
import { Comment } from 'types/comment';

interface CommentCardProps {
  comment: Comment;
}

function CommentCard(props: CommentCardProps) {
  return <li>{props.comment.content}</li>;
}

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList(props: CommentListProps) {
  return (
    <>
      {props.comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </>
  );
}
