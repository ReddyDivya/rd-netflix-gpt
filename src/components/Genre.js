import React from 'react'

const Genre = ({genre}) => {
  return (
    <div className="flex items-center bg-cyan-700 px-2 py-1 rounded-md mr-2 text-xs">
        <h3>{genre}</h3>
    </div>
  )
}

export default Genre