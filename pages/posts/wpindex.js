import Layout from '../../components/layout'
import Head from "next/head";
import getWpPosts from "../../lib/getWpPosts";
import Link from "next/link";

export default function WpIndex({posts}) {
    let postsDiv = posts.map(p => <div key={p.id}>{p.slug}
        <Link href={`/wpposts/${p.slug}`}>
            {p.title.rendered}
        </Link> <br/>
        <Link href={`/posts/${p.slug}`}>
            {p.title.rendered}
        </Link>
    </div>)
    return (
        <Layout>
            <Head>
                <title>First! !Post</title>
            </Head>
            {postsDiv}
        </Layout>
    )
}


export async function getServerSideProps() {
    let posts = await getWpPosts()

    return {
        props: {
            posts: posts
        }
    }
}
