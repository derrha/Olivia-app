import React from "react";

interface SwitchProps {
  isSleeping: boolean;
  onSwitchChange: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isSleeping, onSwitchChange }) => {
  const handleClick = () => {
    onSwitchChange();
  };

  const classDivSwitch = `w-20 h-10 rounded-full transition-all duration-300 cursor-pointer ${
    isSleeping ? "bg-green-500" : "bg-slate-600"
  }`;
  const classSpanSwitch = `w-10 h-10 bg-white rounded-full transition-all duration-300 block ${
    isSleeping ? "ml-10" : ""
  }`;

  return (
    <div onClick={handleClick} className={classDivSwitch}>
      <span className={classSpanSwitch}></span>
    </div>
  );
};

export default Switch;
