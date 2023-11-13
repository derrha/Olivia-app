import { useState } from "react";
import Modal from "./components/Modal";
import Switch from "./components/Switch";

function App() {
  const [isModalOn, setIsModalOn] = useState(false);

  return (
    <>
    <Modal 
      isActive={isModalOn}
      setIsActive={setIsModalOn}/>
      <section className='flex items-center justify-center w-screen h-screen bg-sky-900'>
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="text-3xl font-bold select-none uppercase">Olivia duerme?</h1>
          <Switch handler={setIsModalOn}/>
        </div>
      </section>
    </>
  )
}

export default App
