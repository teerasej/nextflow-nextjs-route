
import { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../../styles/Home.module.css'
import { QueryMonthDay } from "../../types/month-day"



const AnnualReportMonth: NextPage = () => {

  const router = useRouter()
  const { month } = router.query as QueryMonthDay

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Annual Report: {month}
        </h1>
      </main>
    </div>
  )
}

export default AnnualReportMonth