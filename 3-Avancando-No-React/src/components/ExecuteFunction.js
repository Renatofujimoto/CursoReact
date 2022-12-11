import React from 'react'

const ExecuteFunction = ({ myFuction }) => {
  return (
    <div>
      <button onClick={myFuction}>Clique em mim!</button>
    </div>
  )
}

export default ExecuteFunction
