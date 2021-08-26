import Layout from '../../components/layout'

import { getAllPostIds, getPostData } from '../../lib/posts'

// static props again can only be called at the page level
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  // Paths returns the array of objects with the params/ids contained.
  return {
    paths,
    fallback: false
  }
}

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    )
  }
