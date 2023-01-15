import Link from 'next/link';
import articleStyles from '../src/styles/Article.module.css';

// TODO: define the props and the component type
const ArticleItem = ({ article } : any) => {
    return ( <>
        <Link href="article/[id]" as={`article/${article.id}`}>
            <p className={articleStyles.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </p>
        </Link>
    </> );
}
 
export default ArticleItem;