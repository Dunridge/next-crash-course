import { FunctionComponent } from 'react';
import articleStyles from '../src/styles/Article.module.css';
import ArticleItem from './ArticleItem';

// TODO: figure out how to give type to the components 
const ArticleList = ({ articles }: any) => {
    return ( 
        <div className={articleStyles.grid}>
          {/* {articles.map((article: any) => <h3>{article.title}</h3>)} */}
          {articles.map((article: any) => <ArticleItem article={article}/>)}
        </div>
        );
}
 
export default ArticleList;