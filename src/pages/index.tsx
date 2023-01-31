import ArticleList from 'components/ArticleList';
import { server } from 'config';
import Head from 'next/head'

export default function Home({ articles }: any) {
  console.log(articles);
  // TODO: see the type for the components
  
  return (
    <div>
      <Head>
        <title>WebDev News</title>
        <meta name='keywords' content='web development, programming'/>
      </Head>
      <ArticleList articles={articles}></ArticleList>
    </div>
  )
}

// TODO: replace getStaticProps with getServerSideProps 
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();


  return {
    props: {
      articles
    }
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//   const articles = await res.json();

//   return {
//     props: {
//       articles 
//     }
//   }
// }