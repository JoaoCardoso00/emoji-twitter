import { api } from "~/utils/api";
import { LoadingSpinner } from "./Loading";
import { Post } from "./Post";

export function Feed() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">
        <LoadingSpinner size={40} />
      </div>
    );

  if (!data) return <div>Something went wrong</div>;

  return (
    <div className="flex flex-col">
      {data.map(({ post, author }) => (
        <Post post={post} author={author} key={post.id} />
      ))}
    </div>
  );
}
