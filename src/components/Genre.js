import React from 'react'

const Genre = ({genre}) => {
  return (
    <div className="flex flex-wrap items-center bg-cyan-700 px-2 py-1 rounded-md mr-2 text-xs text-white w-24 h-8">
        <h3>{genre}</h3>
    </div>
  )
}

export default Genre