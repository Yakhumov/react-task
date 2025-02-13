import { useEffect } from "react";
import { useAppDispatch } from "../../../app/providers/store/store";
import { fetchPosts } from "../model/slices/PostsSlices";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/providers/store/store";
import { IPosts } from "../../../shared/types/types";

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
      <h1 style={{ textAlign: "center", padding: "2rem" }}>Новости</h1>
      {posts.length > 0 ? (
        posts.slice(0, 20).map((post: IPosts, index: number) => (
          <div key={post.id || index}>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-body">{post.body}</div>
          </div>
        ))
      ) : (
        <p>Новостей пока нет.</p>
      )}
    </div>
  );
};
