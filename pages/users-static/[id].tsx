import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType, NextPage } from "next"
import { ParsedUrlQuery } from "querystring"
import type { UserArray, User } from '../../types/user-array'

interface IParams extends ParsedUrlQuery {
    id:string
}

export const getStaticPaths: GetStaticPaths = async () => {
    const users:UserArray = require('../../data/mock_data.json')

    const generatedPaths = users.map(user => ({
        params: { id: user.id.toString() }
    }))


    return {
        paths: generatedPaths,
        fallback: true
    }

}


export const getStaticProps:GetStaticProps = async (context:GetStaticPropsContext) => {

    const { id } = context.params as IParams

    const users: UserArray = require('../../data/mock_data.json')

    const filteredUsers = users.filter((user) => user.id.toString() == id)

    return {
        props: {
            userProfile: filteredUsers[0]
        }
    }
}

const UserProfilePage: NextPage = ({ userProfile }: InferGetStaticPropsType<typeof getStaticProps>) => {

    const user = userProfile as User

    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
        </div>
    )
}

export default UserProfilePage