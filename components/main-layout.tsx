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
            {children}
        </div>
    )
}

export default MainLayout