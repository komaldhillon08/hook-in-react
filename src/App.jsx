import { useState } from 'react'
import { MyContext } from './assets/store/Context'
import UseContextHook from './assets/component/UseContextHook'
import "./app.css"
import UseReducerHook from './assets/component/UseReducerHooks'



function App() {
  const [count, setCount] = useState(0)
  const [shoeReducer, setShoeReducer] = useState(false);

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
        </>
      )}
    </MyContext.Provider>
  )
}

export default App
