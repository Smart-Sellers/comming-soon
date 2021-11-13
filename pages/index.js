import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Timer from "../components/Countdown/Timer";

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
         <Timer />
      
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
