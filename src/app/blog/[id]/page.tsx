import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "../_lib/data";

function getPostByIdParam(idParam: string) {
  const id = Number.parseInt(idParam, 10);
  if (Number.isNaN(id)) return undefined;
  return posts.find((post) => post.id === id);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = getPostByIdParam(id);
  if (!post) {
    return { title: "Post not found" };
  }
  return {
    title: post.title,
    description: post.content,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = getPostByIdParam(id);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href="/blog">Back to blog</Link>
      <Link href="/blog/authors">Authors</Link>
    </div>
  );
}
