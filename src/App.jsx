import { useState } from 'react'
import { MyContext } from './assets/store/Context'
import UseContextHook from './assets/component/UseContextHook'
import "./app.css"
import UseReducerHook from './assets/component/UseReducerHooks'
import UseCallbackHook from './assets/component/UseCallbackHook'
import UseEffectHook from './assets/component/UseEffectHook'

// add the custom hook
import useToggle from './custon-hook/useToggel'



function App() {
  const [count, setCount] = useState(0)
  const [shoeReducer, setShoeReducer] = useState(false);
  // got to setUseCallbackHook file
  const [useCallbackHook, setUseCallbackHook] = useState(false)
  const [useEffectHook, setUseEffectHook] = useState(false)

  // add the custom hook
  // const[toggelValue , toggelVal]=useToggel(true);
  const { toggleValue, toggleVal } = useToggle(true);



  const useContextHookObj = {
    counter: count,
    setCounter: setCount,
  }

  // UseReducerHook code 
  function reducerFuntion() {
    setShoeReducer(true)
  }

  function goBack() {
    setShoeReducer(false)
  }

  // got to callback hook 
  function goToCallbackHook() {
    setUseCallbackHook(true)
  }
  if (useCallbackHook) {
    return (
      <>
        <UseCallbackHook />
      </>
    )
  }

  // got to go To UseEffect hook file 
  function goToUseEffect() {
    setUseEffectHook(true)
  }
  if (useEffectHook) {
    return (
      <>
        <UseEffectHook />
      </>
    )
  }
  return (

    // <MyContext.Provider value={{ count, setCount }}  >
    <MyContext.Provider value={useContextHookObj}  >

      {shoeReducer ? (
        <>
          {shoeReducer && <UseReducerHook />}
          <button onClick={goBack}>back to the page </button>
        </>
      ) : (
        <>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <UseContextHook />
          <button onClick={reducerFuntion}>go to reducer file</button>
          <button onClick={goToUseEffect}>go to useEffect file</button>
          <button onClick={goToCallbackHook}>go to callback hook file</button>


          {/* using the custom hooks in react  */}

          <div>
            <button onClick={toggleVal}>Show and Hide Text</button>
            <button onClick={() => toggleVal(false)}>Hide Text</button>
            <button onClick={() => toggleVal(true)}>Show Text</button>

            {toggleValue && <h2>show and hide text with custom hook</h2>}
          </div>

        </>
      )}
    </MyContext.Provider>
  )
}

export default App
