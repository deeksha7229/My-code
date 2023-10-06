import React from 'react'
import Dee from './Dee'
import PropsSample from './PropsSample'
import Counter from './Counter'
import Alpha from './image/dore.jpg'
export default function Home() {
  return (
<>
<Dee/>
<PropsSample/>

<img src={Alpha}></img>
<Counter/>



</>  )
}