import React from 'react'
import {fetch} from 'react-fetch'

function App(props) {
    const data = fetch(`http://localhost:4000/api/${props.page}/${props.pageNo}`).json()

    return (
        <div>
            From Server Component :
            <br/>
            {JSON.stringify(data)}
        </div>
    )
}

export default App
