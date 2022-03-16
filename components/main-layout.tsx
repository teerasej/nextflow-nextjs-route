import { NextComponentType } from "next";
import Link from "next/link";


const MainLayout: NextComponentType = ({children}) => {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
             | 
            <Link href="/about">
                <a>About</a>
            </Link>
             | 
            <Link href="/annual-report">
                <a>Annual Report</a>
            </Link>
             | 
            <Link href="/users-static">
                <a>User</a>
            </Link>
            {children}
        </div>
    )
}

export default MainLayout