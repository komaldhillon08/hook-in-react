import { useReducer, useState } from "react"
import UseEffectHook from "./UseEffectHook"
export default function UseReducerHook() {

    function reducer(counter, action) {

        switch (action.type) {
            case "increment":
                return {count : counter.count + 1 }

            case "decrement":
                return {count : counter.count - 1} 
            case "reset":
                return { count: 0 };
            default:
                return counter
        }
    }
    const [counter, dispatch] = useReducer(reducer, {count : 0});

    // go to useEffectHook file that is why i can create the new State hook
    const [showEffectHook, setShowEffectHook] = useState(false);

    function goToEffectComponent() {
        setShowEffectHook(true)
    }
    // Conditional rendering
    if (showEffectHook) {
        return (
            <>
                <UseEffectHook />
            </>
        )
    }
    return (
        <>
            <h1>UseReducerHook</h1>
            <h2>counter : {counter.count}</h2>
            <button onClick={() => dispatch({ type: "increment" })}>+ Increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>- Decrement</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>


           {/* go to the components  */}
            <button onClick={goToEffectComponent}>go to Effect file </button>

        </>
    )
}