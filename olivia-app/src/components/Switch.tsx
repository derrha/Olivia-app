import { useState } from 'react';

interface Props {
    handler: Function
}

const Switch = ({handler}:Props) => {
    const [isOn, setIsOn] = useState(false);

    function handleClick() {
        !isOn && handler(true) 
        setIsOn((prevState)=>(!prevState));   
    }

    const classDivSwitch = `${isOn ? `bg-green-500`:`bg-slate-600`}`
    const classSpanSwitch = `${isOn ? 'ml-10' : ''}`

  return (
    <div onClick={handleClick} className={`w-20 h-10 rounded-full transition-all duration-300 cursor-pointer ${classDivSwitch}`}>
        <span  className={`w-10 h-10 bg-white rounded-full transition-all duration-300 block ${classSpanSwitch}`}></span> 
    </div>
  )
}

export default Switch