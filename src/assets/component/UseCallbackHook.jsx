import { useCallback, useState, memo } from "react"

// create components start
const Button = memo(function Button({ onclick, children }) {
    console.log(`Button ${children} rendered`);

    return (
        <>
            <button onClick={onclick}>{children}</button>

        </>
    )
})
// components end 

export default function UseCallbackHook() {

    const [count, setCount] = useState(0)

    const increment = useCallback(() => {
        console.log(" inside  increment>>>>>>>>>>> + 1");
        setCount((prev) => prev + 1)

    }, [])
    const decrement = useCallback(() => {
        console.log(" inside  decrement>>>>>>>>>>> + 1");
        setCount((prev) => prev - 1)
    }, []);



    console.log("check>>>>>>>>> UseCallbackHook ");

    return (
        <>
            <h2>UseCallbackHook</h2>

            <Button>{count}</Button>
            <Button onclick={increment}>Increment</Button>
            <Button onclick={decrement}>Decrement</Button>

        </>
    )
}