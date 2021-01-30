import {getAllJsonPostIds} from "../../lib/getAllJsonPostIds";
import Layout from "../../components/layout";
import Head from "next/head";
import posts from '../../data/posts.json'

export default function Post({postData}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <div>
                {/*todo replaced with __html test <strong>tag</strong>*/}
                content <br/>
                <div dangerouslySetInnerHTML={{ __html: postData.content }} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllJsonPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const postData = posts.filter(p=>p.id.toString()===params.id)[0]
    // const postData = {title: 'tt', content: 'ccc'}
    return {
        props: {
            postData
        }
    }
}
