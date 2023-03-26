import Image from "next/image";
import { RouterOutputs } from "~/utils/api";
import { Time } from "~/utils/time";

type PostWithUser = RouterOutputs["posts"]["getAll"][number];

export function Post({ post, author }: PostWithUser) {
  const formattedPostHeader = `@${author.username}`;
  const formattedPostTime = Time(post.createdAt).fromNow();

  return (
    <div
      key={post.id}
      className="flex items-center gap-3 border-b border-slate-400 p-4"
    >
      <Image
        src={author.profileImageUrl}
        alt={`${author.username}'s profile picture}`}
        className="rounded-full"
        width={56}
        height={56}
      />
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <span className="font-bold">{formattedPostHeader}</span>
          <span className="font-light text-slate-400">
            · {formattedPostTime}
          </span>
        </div>
        <span className="text-xl">{post.content}</span>
      </div>
    </div>
  );
}
