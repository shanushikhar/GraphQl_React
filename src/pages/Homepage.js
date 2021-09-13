import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Homepage() {
    const { loading, error, data } = useFetch('http://localhost:1337/test-reviews')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <div>
            {data ? data.map(review => (
                <div key={review.id} className='review-card'>
                    <div className='rating'>{review.rating}</div>
                    <h2>{review.title}</h2>

                    <small>Console list</small>

                    <p>{review.body.substring(0,100)}...</p>

                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            )) : error.message}
        </div>
    )
}
