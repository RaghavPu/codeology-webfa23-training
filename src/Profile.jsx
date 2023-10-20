import React from 'react'

function Profile(props) {
    // const {name, grade, home} = props
  return (
    <div>
        <h1>Hello World: {props.name}</h1>
        <h2>Grade: {props.grade}</h2>
        <h3>Hometown: {props.home}</h3>
        <hr/>
    </div>
  )
}

export default Profile