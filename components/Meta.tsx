import Head from "next/head";

const Meta = ({ title, keywords } : any) => {

    // TODO: work on this 
    return (
        <Head>
            <meta name="" />
            <meta />
            <meta />
            <meta />
            <link rel="stylesheet" href="" />
            <title>{title}</title>
        </Head>
    );
};

Meta.defaultProps = {
    title: '',
    keywords: '',
    description: ''
}

export default Meta;
