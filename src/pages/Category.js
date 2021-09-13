import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CATEGORY = gql`
    query getCategory($id: ID!){
        testCategory(id: $id){
            name,
            id,
            test_reviews{
                title,
                rating,
                body,
                id,
                test_categories{
                    name,
                    id
                }
            }
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
    if (error) return <p>{error.message}</p>


    return (
        <div>
            {<h2>{data.testCategory.name}</h2>}
            {
                data.testCategory.test_reviews.map(review => (
                    <div key={review.id} className='review-card'>
                        <div className='rating'>{review.rating}</div>
                        <h2>{review.title}</h2>

                        {review.test_categories.map(c => (
                            <small key={c.id}>{c.name}</small>
                        ))}

                        <p>{review.body.substring(0, 100)}...</p>

                        <Link to={`/details/${review.id}`}>Read more</Link>
                    </div>
                ))
            }
        </div>
    )
}
