import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import posts from '../../data/posts.json'
export default function FirstPost({posts}) {
  let postsDiv = posts.map(p=><div key={p.id}>{p.id} {p.title}</div>)
    return (
    <Layout>
      <Head>
        <title>First! !Post</title>
      </Head>
      <h1>First Post</h1>
        {postsDiv}
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
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
