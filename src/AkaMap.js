import React from 'react'

function AkaMap() {
    let arr = ['akansha','ko','map','nahi','atta','itna ','padhane ','k','baad','bhi...']

    let name = ['anu','akku','viany']
    let [x , y, z] = name
  return (
    <div>
      {arr.map( (value,index) => <li key={index}>{value}</li>)}
      <h1>{x}</h1>
    </div>
  )
}

export default AkaMap
