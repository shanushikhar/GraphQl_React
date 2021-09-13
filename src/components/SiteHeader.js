import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CATEGORIES = gql`
    query getCategories{
        testCategories{
            name,
            id
        }
    }
`

export default function SiteHeader() {

    const { loading, error, data } = useQuery(CATEGORIES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error site Header :(</p>

    console.log('.....',data)

    return (
        <div className="site-header">
            <Link to='/'>Ninja Review</Link>
            <nav className='categories'>
                <span>Filter reviews by Category: </span>
                {data.testCategories.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        {category.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
