const Modal = ({isActive, setIsActive} : { isActive:boolean, setIsActive : Function }) => {

    function closeModal() {
        setIsActive(false);   
    }

  return isActive && (
    <div className="w-screen h-screen absolute flex justify-center items-center bg-slate-800/75">
        <div className="w-[600px] h-[350px] bg-white rounded-xl flex items-center justify-around pt-10 flex-col">
            <div className="flex flex-col items-center select-none">
                <h1 className="text-black text-lg font-medium text-center uppercase px-4">Esto enviará una notificación a todos</h1>
                <h1 className="text-black text-3xl text-center uppercase">Estás segurx?</h1>
            </div>
            <div onClick={closeModal} className="select-none cursor-pointer h-[70px] w-[300px] bg-green-600 flex justify-center items-center text-xl uppercase rounded-xl">Confirmar</div>
        </div>
    </div>
  )
}

export default Modal