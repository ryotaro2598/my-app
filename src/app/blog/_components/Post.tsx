import Link from "next/link";
import type { Post } from "../_lib/data";

export default function PostComponent({ post }: { post: Post }) {
  return <Link href={`/blog/${post.id}`}>{post.title}</Link>;
}
