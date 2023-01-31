import { articles } from '../../../../data';

// req: any, res: any
// or replace with { query: { id } }
export default function handler({ query: { id } }: any, res: any) {
    const filtered = articles.filter((article: { id: any; }) => article.id === id);

    if(filtered.length > 0) {
        res.status(200).json(filtered[0]);     
    } else {
        res.status(404).json({ message: `Article with the id of ${id} is not found` });
    }
}