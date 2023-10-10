import React from 'react'

import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [imgIndex, setImgIndex] = React.useState(Math.round(Math.random()*58))
  const backgroundImageUrl = React.useMemo(() => {
    return `https://kitdesai.s3.amazonaws.com/panoramas/IMG_${imgIndex}.jpg`
  }, [imgIndex])
  
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
          <div className={styles.backgroundImage} style={{backgroundImage: `url("${backgroundImageUrl}")`}}>
            <div className={styles.innerContainer}>
              <div>
                <img className={styles.innerContainer__pfp} src='/pfp.jpg' />
                <div className={styles.innerContainer__header}>Ankit Desai</div>
                <div>Software Developer</div>
                <div>12+ years experience</div>
                <div>Full stack</div>
                <div>Mobile</div>
                <div>Smart Contracts & NFTs</div>
              </div>
              <div className={styles.innerContainer__icons}>
                <a href='https://github.com/kitdesai' target='__blank'><img className={styles.innerContainer__icons__png} src='/github.svg' /></a>
                <a href='https://twitter.com/kitdesai' target='__blank'><img className={styles.innerContainer__icons__png} src='/twitter.svg' /></a>
                <a href='https://linkedin.com/in/kitdesai' target='__blank'><img className={styles.innerContainer__icons__png} src='/linkedin.png' /></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
