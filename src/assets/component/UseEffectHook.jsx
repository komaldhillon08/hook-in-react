/* import { useEffect, useState } from "react"

export default function UseEffectHook() {

    const [useEffectCount, setUseEffectCount] = useState(0)

    useEffect(() => {
        console.log("hello komal count is ", useEffectCount);
    }, [useEffectCount])

    // this array re-render the state 
    // if you can not use the current state so sate is on render only one time render like this to [useEffectCount] this  []



    return (
        <>
            <h3 className="heading-effect">this is useEffec Hook file</h3>
            <h2>count : {useEffectCount}</h2>
            <button onClick={() => setUseEffectCount(useEffectCount+ 1)} >add count</button>
        </>
    )
} */
import { useEffect, useState } from "react"
import UseCallbackHook from "./UseCallbackHook"

export default function UseEffectHook() {

    const [date, setDate] = useState(0)

   


    useEffect(() => {
        setInterval(() => {
            const updateDate = new Date();
            setDate(updateDate.toLocaleTimeString())
        }, 1000)

    }, [])

    return (
        <>
            <h3 className="heading-effect">this is useEffec Hook file</h3>
            <h2>count : {date}</h2>


            
        </>
    )
}