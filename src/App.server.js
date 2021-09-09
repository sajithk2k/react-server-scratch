import React from 'react'
import {fetch} from 'react-fetch'

function App() {
    const data = fetch('http://localhost:4000/content').json()

    return (
        <div>
            From Server Component :
            <br/>
            {JSON.stringify(data)}
        </div>
    )
}

export default App
