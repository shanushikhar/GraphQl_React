import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client' 

const CATEGORY = gql`
    query getCategory($id: ID!){
        testCategories(id: $id){
            name,
            id
        }
    }
`

export default function Category() {

    const { id } = useParams()
    const { loading, error, data } = useQuery(CATEGORY, {
        variables: { id: id }
    })

    console.log('main ', data, id)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

   

    return (
        <div>
            {/* <h2>{data.testCategory.name}</h2> */}
            {/* {data.testCategory.testReviews.map(review => (
                <div key={review.id} className='review-card'>
                    <div className='rating'>{review.rating}</div>
                    <h2>{review.title}</h2>

                    <small>Console list</small>

                    <p>{review.body.substring(0, 100)}...</p>

                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            ))} */}
        </div>
    )
}
