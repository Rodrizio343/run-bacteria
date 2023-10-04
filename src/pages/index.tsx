import Head from 'next/head'
import Slider from '@/components/Home/Slider/Slider.component'
import { getSlides } from '@/@core/infraestructure/slides.service'
import PostsList from '@/components/Home/PostsList/PostsList.component'
import { getInitialPosts, getPostsPaginationData } from '@/@core/infraestructure/posts.service'


export default function Home({slides, posts, pagination}) {
  return (
    <>
      <Head>
        <title>Run Bacteria</title>
        <meta name="description" content="Home run bacteria" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{backgroundImage: 'url(/posts-bg.png)'}}>
        <Slider slides={slides} />
        <PostsList posts={posts} pagination={pagination}/>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const slides = await getSlides();
  const posts = await getInitialPosts()
  const pagination = await getPostsPaginationData()
  return {
    props: {
      slides,
      posts,
      pagination
    },
  };
}