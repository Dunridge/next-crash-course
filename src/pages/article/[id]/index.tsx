import Link from "next/link";
import { useRouter } from "next/router";

const article = (props: any) => {
    console.log('props', props);

    return (<>
        <h2>{props?.user}</h2>
        <p>{props?.fact}</p>
        <Link href='/'>Go back</Link>
        </>);
};

export const getServerSideProps = async (context: any) => {
    // TODO: fix the error here
    const res = await fetch('https://cat-fact.herokuapp.com/facts');
    const facts = await res.json();
    console.log('context', context);
    const id = Math.floor(Math.random() * 6); 
    console.log('facts[id]', facts[id]);

    return {
        props: {
            user: facts[id].user ? facts[id].user : 'Undefined',
            fact: facts[id].text ? facts[id].text : 'Random desc' 
        }
    }
}

export default article;
