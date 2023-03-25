import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export function CreatePostWizzard() {
  const { user } = useUser();

  console.log(user);

  if (!user) return null;

  return (
    <div className="flex w-full gap-3">
      <Image
        src={user.profileImageUrl}
        alt="Profile image"
        className="h-14 rounded-full"
        width={56}
        height={56}
      />
      <input
        type="text"
        placeholder="Type some emojis!"
        className="grow bg-transparent outline-none"
      />
    </div>
  );
}
