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
        body
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

    console.log(data)

    return (
        <div className='review-card'>
            <div className='rating'>{data.testReview.rating}</div>
            <h2>{data.testReview.title}</h2>

            <small>Console list</small>

            <p>{data.testReview.body}</p>
        </div>
    )
}
