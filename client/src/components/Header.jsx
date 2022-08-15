import React from 'react'

const Header = ({ heading }) => {
  return (
    <div>
      <p className="font-weight-light text-primary display-4 text-center align-items-center">{heading} </p>
    </div>
  )
}

export default Header