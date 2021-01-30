import getWpPosts from "../../lib/getWpPosts";
import Layout from "../../components/layout";
import Head from "next/head";
import {getWpPostContent} from "../../lib/getWpPostContent";

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title.rendered}</title>
            </Head>
            <div>
                <div dangerouslySetInnerHTML={{ __html: postData.content.rendered }} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    let posts = await getWpPosts()


    const slugPaths = posts.map(p => {
        return {
            params: {
                slug: p.slug
            }
        }
    })

    console.log("slugPaths", slugPaths)


    return {
        paths: slugPaths,
        fallback: false
    }
}



export async function getStaticProps({params}) {
    // const postData = posts.filter(p=>p.id.toString()===params.id)[0]
    const postData = {title: 'tt', content: 'ccc'}

    let content = await getWpPostContent(params.slug)

    console.log("content",content)

    return {
        props: {
            postData:content
        }
    }
}
