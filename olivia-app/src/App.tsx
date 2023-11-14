import { useState } from "react";
import axios from "axios";
import Switch from "./components/Switch";
import Modal from "./components/Modal";
const url = 'http://localhost:3000';

function App() {
  const [isSleeping, setIsSleeping] = useState(false);
  const [isModalOn, setIsModalOn] = useState(false);

  const handleSwitchChange = async () => {
    try {
      await axios.post(url, { estaDurmiendo: !isSleeping });
      setIsSleeping((prevState) => !prevState);

      if (!isSleeping) {
        setIsModalOn(true);
      }
    } catch (error) {
      console.error("Error al actualizar el estado en el servidor", error);
    }
  };

  const closeModal = () => {
    setIsModalOn(false);
  };

  return (
    <section className="flex items-center justify-center w-screen h-screen bg-sky-900">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="text-3xl font-bold select-none uppercase">Olivia duerme?</h1>
        <Switch isSleeping={isSleeping} onSwitchChange={handleSwitchChange} />
      </div>
      <Modal isActive={isModalOn} setIsActive={closeModal} />
    </section>
  );
}

export default App;
