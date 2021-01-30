import Head from 'next/head'
import Layout from '../../components/layout'
import posts from '../../data/posts.json'
import Link from "next/link";
export default function JsonIndex({posts}) {
    // let postsDiv = posts.map(p=><div key={p.id}>{p.id} {p.title}</div>)

    let postsDiv = posts.map(p => <div key={p.id}>
        <Link href={`/posts/${p.id}`}>
            {p.title}
        </Link>
    </div>)


    return (
        <Layout>
            <Head>
                <title>json index</title>
            </Head>
            <h1>json index Post</h1>
            {postsDiv}
        </Layout>
    )
}
export async function getStaticProps() {

    return {
        props: {
            posts
        }
    }
}
