import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Sellers - Скоро будет</title>
        <meta name="description" content="Точный сервис анализа прибыльности для продавцов на Ozon - Smart Sellers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
         <span className={styles.logo}>
            <Image src="/logo.svg" alt="Smart Sellers Logo" width={124} height={124} />
          </span>

        <h1 className={styles.title}>
          Добро пожаловать в <span className={styles.name}>Smart Sellers!</span>
        </h1>

        <p className={styles.description}>
          Начни увеличивать свои продажи вместе с нами
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
           SmartSellers.net © 2021. Все права защищены
        </a>
      </footer>
    </div>
  )
}
