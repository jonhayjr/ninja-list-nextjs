import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../comps/Navbar';
import Footer from '../comps/Footer';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Labore irure ex amet do cillum duis. Amet occaecat aute ut amet. Cupidatat ea cupidatat aliqua voluptate elit culpa labore magna. Esse dolore aliquip nulla laboris excepteur exercitation commodo nostrud. Labore reprehenderit nisi esse officia reprehenderit excepteur consequat non qui minim non. Commodo fugiat do excepteur dolore ex ad duis. Anim Lorem deserunt voluptate eu consequat Lorem minim aliquip qui ad dolor.</p>
        <p className={styles.text}>Labore irure ex amet do cillum duis. Amet occaecat aute ut amet. Cupidatat ea cupidatat aliqua voluptate elit culpa labore magna. Esse dolore aliquip nulla laboris excepteur exercitation commodo nostrud. Labore reprehenderit nisi esse officia reprehenderit excepteur consequat non qui minim non. Commodo fugiat do excepteur dolore ex ad duis. Anim Lorem deserunt voluptate eu consequat Lorem minim aliquip qui ad dolor.</p>
        <Link href="/ninjas"><a className={styles.btn}>See ninja listing</a></Link>
      </div>
    </>
  )
}
