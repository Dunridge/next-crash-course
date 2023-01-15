import Head from "next/head";

// const about = ({ articles }: any) => {
const about = () => {
    //console.log(articles);

  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>About</h1>
    </div>
  );
};

// TODO: delete
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

export default about;
