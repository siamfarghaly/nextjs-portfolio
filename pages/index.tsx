import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { SocialIcon } from 'react-social-icons';


export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    
      <section className={utilStyles.headingMd}>
        <p>I'm a Webdeveloper & Digital creator focussed on front-end development, crossmedia design and online marketing.</p>
      </section>
      <section className={utilStyles.socials}>
        <SocialIcon url="https://www.linkedin.com/in/siam-farghaly/" bgColor="#58a0f5" />
        <SocialIcon url="https://www.github.com/siamfarghaly/" bgColor="#58a0f5" />
        <SocialIcon url="https://www.instagram.com/siamfrghly/" bgColor="#58a0f5" />
        <SocialIcon url="mailto:siam_farghaly@hotmail.be" bgColor="#58a0f5" />
        <SocialIcon url="tel:0032494770327" bgColor="#58a0f5" />
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>My Work</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}