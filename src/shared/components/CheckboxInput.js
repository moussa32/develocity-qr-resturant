import * as Checkbox from "@radix-ui/react-checkbox";
import { AiOutlineCheck } from "react-icons/ai";
import { memo, useState } from "react";

const CheckboxInput = ({ id, checked = false, onCheck, name, ...attr }) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckbox = checkStatus => {
    setIsChecked(checkStatus);
    if (onCheck) {
      onCheck({ id, checked, name, ...attr });
    }
  };

  return (
    <Checkbox.Root
      className={`order-1 w-5 h-5 border-1 rounded flex-none ${
        isChecked ? "bg-primary border-primary" : "bg-transparent border-white"
      }`}
      id={id}
      checked={isChecked}
      onCheckedChange={handleCheckbox}
      name={name}
      {...attr}
    >
      <Checkbox.Indicator className="flex items-center justify-center">
        <AiOutlineCheck className="font-bold" />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};

export default memo(CheckboxInput);
