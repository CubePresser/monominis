export type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
};

export type Post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};