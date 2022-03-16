import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { UserArray } from "../../types/user-array";



export const getStaticProps: GetStaticProps = async () => {

    const results: UserArray = require('../../data/mock_data.json')


    return {
        props: {
            results
        }
    }
}



const UserListPage: NextPage = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {

    return (
        <div>
            <h1>Users</h1>
            {
                (results as UserArray).map(user => {
                    return (
                        <Link href={`users-static/${user.id}`} key={user.id.toString()}>
                            <p>{user.firstName} {user.lastName}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default UserListPage