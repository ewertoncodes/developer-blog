import { Link, useLoaderData } from 'remix';

export type Post = {
  slug: string;
  title: string;
}


export const loader = async () => {
  const posts: Post[] = [
    {
      slug: 'my-first-post',
      title: 'my first post',
    },
    {
      slug: '90s-mix-tape',
      title: 'A mixtape I made just for you'
    }
  ]; return posts;
};

export default function Posts() {
  const posts = useLoaderData<Post[]>();
  
  console.log(posts);
  
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}