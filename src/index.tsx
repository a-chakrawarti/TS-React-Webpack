import React from 'react'
import ReactDOM from 'react-dom'

export default function App(): JSX.Element {

    function sum(a: number, b:number): number {
        return a + b
    }
    return (
        <div>
            Hello {sum(10, 5)}
        </div>
    )
}

const root = document.getElementById('root')

ReactDOM.render(<App />, root)
