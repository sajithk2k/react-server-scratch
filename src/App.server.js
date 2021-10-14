import React from 'react'
import {fetch} from 'react-fetch'
import Routing from './Routing.client'


function App(props) {
    const data = fetch(`http://localhost:4000/api/${props.page}/${props.pageNo}`).json()

    return (
        <>
        <Routing />
      </>
    )
}

export default App
