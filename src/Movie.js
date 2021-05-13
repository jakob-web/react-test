import React from 'react'


function getStars(rating){
    const star = []
    for(let i=0; i<rating; i++){

      star.push(<img src="./star.png" alt="star" />)

    }
    return star
}


export default function Movie(props){
  return (
    <li className="list-group-item">
      { props.item.title }
      <img onClick={() => {props.deleteMovie(props.item.id)}} src="./delete.png"/>
      {getStars(props.item.rating)}

    </li>
  )
}
