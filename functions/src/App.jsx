import { useState } from "react"

const App = () => {

  const [num, setnum] = useState(10)
  return (
    <div className="counter">
      <h1>
        value {num}
      </h1>
      
      <button onClick={function () {
       setnum(num + 10)
      }}>Clicked increment</button>
      <button onClick={function(){
        setnum(num-10)
      }}>Decrement</button>
    </div>
  )
}

export default App