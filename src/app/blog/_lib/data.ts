export const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the first post",
    author: "John Doe",
    date: "2021-01-01",
    tags: ["tag1", "tag2", "tag3"],
    comments: [
      {
        id: 1,
        content: "This is the first comment",
        author: "Jane Doe",
        date: "2021-01-01",
      },
    ],
  },
  {
    id: 2,
    title: "Post 2",
    content: "This is the second post",
    author: "Jane Doe",
    date: "2021-01-02",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 3,
    title: "Post 3",
    content: "This is the third post",
    author: "John Doe",
    date: "2021-01-03",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 4,
    title: "Post 4",
    content: "This is the fourth post",
    author: "Jane Doe",
    date: "2021-01-04",
    tags: ["tag1", "tag2", "tag3"],
  },
  {
    id: 5,
    title: "Post 5",
    content: "This is the fifth post",
    author: "John Doe",
    date: "2021-01-05",
    tags: ["tag1", "tag2", "tag3"],
  },
];

export type Post = (typeof posts)[number];
