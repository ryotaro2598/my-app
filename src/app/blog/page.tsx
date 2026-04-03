import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <Link href="/blog/authors">Authors</Link>
    </div>
  );
}
