/* import { useContext } from "react"
import { MyContext } from "../store/Context"

export default function UseContextHook() {
    const counter = useContext(MyContext)
    return (
        <div>
            <h1> this is use the hook use Context {counter}</h1>
            <h2>{counter}</h2>
            <button>add count </button>
        </div>
    )
} */

/* import { useContext } from "react"
import { MyContext } from "../store/Context"

export default function UseContextHook() {
    const {count , setCount } = useContext(MyContext)
    return (
        <div>
            <h1> this is use the hook use Context {count}</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>add count </button>
        </div>
    )
} */


// using the object in context hook 


import { useContext } from "react"
import { MyContext } from "../store/Context"

export default function UseContextHook() {
    const { counter , setCounter } = useContext(MyContext)
    return (
        <div>
            <h1>use the hook use Context {counter}</h1>
            <h2>{counter}</h2>
            <button onClick={() => setCounter(prev => prev + 1)}>add count in context file</button>
        </div>
    )
}

