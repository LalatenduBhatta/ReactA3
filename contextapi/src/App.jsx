import Componet1 from "./components/Componet1"
import { ContextWrapperFunction } from "./context/Context"

function App() {
  return (
    <>
      <ContextWrapperFunction>
        <Componet1 />
      </ContextWrapperFunction>
    </>
  )
}

export default App