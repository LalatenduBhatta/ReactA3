import Child from "./components/Child"
import Chlid1 from "./components/Chlid1"
import { UserContextAPI } from "./context/userContext"

function App() {
  return (
    <>
      <h1>APP COMPONENT</h1>
      <UserContextAPI>
        <Child />
        <Chlid1 />
      </UserContextAPI>
    </>
  )
}

export default App