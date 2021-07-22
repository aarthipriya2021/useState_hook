// Class Component:

// import React from 'react'

// export class Counter extends React.Component {
//     constructor(){
//         super()
//         this.state = { count: 0};
//         this.incrementCount = this.incrementCount.bind(this);
//     }
//     incrementCount(){
//         this.setState({ count: this.state.count + 1})
//     }
//     render() {
//         return (
//             <div>
//                 <p>You clicked : {this.state.count} times</p>
//                 <button onClick={this.incrementCount}>Click me</button>
//             </div>
//         )
//     }
// }

// export default Counter

// Function Component:

import React, { useState} from 'react'

function Counter() {

    const [counter, setCounter] = useState(0);
    const incrementCount = () => setCounter(counter + 1)
    

    return (
        <div>
            <p>You clicked : {counter} times</p>
            <button onClick={incrementCount}>Click me</button>
        </div>
    )
}

export default Counter
