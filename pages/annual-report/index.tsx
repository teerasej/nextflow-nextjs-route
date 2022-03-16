
import { NextPage } from "next"
import Link from "next/link"
import styles from '../../styles/Home.module.css'

const AnnualReport: NextPage = () => {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Annual Report
        </h1>
        <Link href={'annual-report/january'}>
          <p>January</p>
        </Link>
        <Link href={'annual-report/february'}>
          <p>February</p>
        </Link>
      </main>
    </div>
  )
}

export default AnnualReport