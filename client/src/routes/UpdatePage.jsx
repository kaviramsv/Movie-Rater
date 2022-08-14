import React from 'react'
import { useParams } from 'react-router-dom'
import UpdateMovie from '../components/UpdateMovie'

const UpdatePage = (props) => {

  return (
    <>
      <h1>Movie Update</h1>
      <UpdateMovie />
    </>
  )
}

export default UpdatePage