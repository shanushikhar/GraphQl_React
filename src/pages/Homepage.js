import React from 'react'
import { Link } from 'react-router-dom'

import { useQuery, gql } from '@apollo/client'
import useFetch from '../hooks/useFetch'

const REVIEWS = gql`
    query getReviews{
      testReviews{
        title,
        id,
        rating,
        body,
        test_categories{
            name,
            id
        }
       }
    }
`

export default function Homepage() {
    // const { loading, error, data } = useFetch('http://localhost:1337/test-reviews')

    const { loading, error, data } = useQuery(REVIEWS)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>


    return (
        <div>
            {data ? data.testReviews.map(review => (
                <div key={review.id} className='review-card'>
                    <div className='rating'>{review.rating}</div>
                    <h2>{review.title}</h2>

                    {review.test_categories.map(c => (
                        <small key={c.id}>{c.name}</small>
                    ))}

                    <p>{review.body.substring(0, 100)}...</p>

                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            )) : error.message}
        </div>
    )
}
