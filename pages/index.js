import React from 'react'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

const SOCIALS = [
  {
    url: 'https://github.com/kitdesai',
    imgUrl: '/github.svg'
  },
  {
    url: 'https://twitter.com/kitdesai',
    imgUrl: '/twitter.svg'
  },
  {
    url: 'https://linkedin.com/in/kitdesai',
    imgUrl: '/linkedin.png'
  },
  {
    url: 'https://linktr.ee/kitdesai',
    imgUrl: '/linktree.png'
  }
]

export default function Home() {

  const [imgUrl, setImgUrl] = React.useState(null)
  React.useEffect(() => {
    fetch('/api/backgrounds').then(res => res.json()).then(url => { setImgUrl(url) })
  }, [])

  return (
    <>
      <Head>
        <title>kitdesai.com</title>
        <meta name="description" content="Personal website for Ankit Desai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.container}>
          <div className={styles.backgroundImage} style={{backgroundImage: `url("${imgUrl}")`}}>
            <div className={styles.innerContainer}>
              <div>
                <img className={styles.innerContainer__pfp} src='/pfp.jpg' />
                <div className={styles.innerContainer__header}>Ankit Desai</div>
                <div>Software Developer</div>
                <div>15+ years experience</div>
                <div>Full stack</div>
                <div>Mobile</div>
                <div>Smart Contracts & NFTs</div>
              </div>
              <div className={styles.innerContainer__icons}>
                {SOCIALS.map((social, index) => {
                  const { url, imgUrl } = social
                  return <a key={`social_${index}`} href={url} target='__blank'><img className={styles.innerContainer__icons__png} src={imgUrl} /></a>
                })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
