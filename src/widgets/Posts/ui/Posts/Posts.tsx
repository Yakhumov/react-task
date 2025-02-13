import { useEffect } from "react";
import { useAppDispatch } from "../../../../app/providers/store/store";
import { fetchPosts } from "../../../../entities/Posts/model/slices/PostsSlices";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/providers/store/store";
import { IPosts } from "../../../../entities/Posts/types/types";
import { PostsItem } from "./PostItem/PostsItem";

export const Posts = () => {
  const dispatch = useAppDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="news">
      <h1 style={{ textAlign: "center", padding: "2rem" }}>Посты</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.slice(0, 20).map((post: IPosts) => (
            <PostsItem post={post} />
          ))}
        </ul>
      ) : (
        <p>Новостей пока нет.</p>
      )}
    </div>
  );
};
