import { server } from '../../../../config'
import Link from "next/link";
import { useRouter } from "next/router";

const article = ({ article }: any) => {
  return (
    <>
      <h2>{article?.title}</h2>
      <p>{article?.body}</p>
      <Link href="/">Go back</Link>
    </>
  );
};

// TODO: fix the API routes 
export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.id}`
  );
  const articles = await res.json();

  return {
    props: articles,
  };
};

export const getStaticPaths = async (id: string) => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();

  const ids = articles.map((article: any) => article.id);
  const paths = ids.map((id: string) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

// export const getStaticProps = async (context: any) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/${context.params.id}`
//   );
//   const articles = await res.json();

//   return {
//     props: articles,
//   };
// };

// export const getStaticPaths = async (id: string) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   const ids = articles.map((article: any) => article.id);
//   const paths = ids.map((id: string) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
