import Link from "next/link";
import type { Metadata } from "next";
import PostComponent from "./_components/Post";
import { posts } from "./_lib/data";

export const metadata: Metadata = {
  title: "Blog Page. This is a blog page",
  description: "Blog page. This is a blog page",
};

export default function BlogPage() {
  return (
    <div>
      <h1>{metadata.title as string}</h1>
      <p>{metadata.description as string}</p>
      <Link href="/blog/authors">Authors</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <PostComponent post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
