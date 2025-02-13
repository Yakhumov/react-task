import { IPosts } from '../../../../../entities/Posts/types/types'

interface PostItemProps {
  post: IPosts;
}

export const PostsItem = ({ post }: PostItemProps) => {
  return (
    <li className="post-item">
      <h2 className="post-title">{post.title}</h2>
      <article className="post-body">{post.body}</article>
    </li>
  );
};
