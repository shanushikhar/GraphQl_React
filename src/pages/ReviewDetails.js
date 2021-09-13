import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import useFetch from '../hooks/useFetch'

const REVIEW = gql`
    query getReview($id: ID!){
      testReview(id: $id) {
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

export default function ReviewDetails() {
    const { id } = useParams()
    // const { loading, error, data } = useFetch('http://localhost:1337/test-reviews/' + id)
    const { loading, error, data } = useQuery(REVIEW, {
        variables: { id: id }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log('review details ', data.testReview.test_categories)

    return (
        <div className='review-card'>
            <div className='rating'>{data.testReview.rating}</div>
            <h2>{data.testReview.title}</h2>

            {data.testReview.test_categories.map(c => (
                <small key={c.id}>{c.name}</small>
            ))}

            <p>{data.testReview.body}</p>
        </div>
    )
}
