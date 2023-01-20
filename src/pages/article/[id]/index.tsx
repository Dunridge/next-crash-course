import { useRouter } from "next/router";

const article = (props: any) => {
    console.log(props);

    return (<>
        <h2>{props?.user}</h2>
        <p>{props?.fact}</p>
        </>);
};

export const getServerSideProps = async (context: any) => {
    // TODO: fix the error here
    const res = await fetch('https://cat-fact.herokuapp.com/facts');
    const facts = await res.json();
    const id = Math.floor(Math.random() * 10); 
    console.log(facts[id]);

    return {
        props: {
            user: facts[id]?.user,
            fact: facts[id]?.text
        }
    }
}

export default article;
