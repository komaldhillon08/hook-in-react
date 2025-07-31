import { useState } from "react";

export default function useToggle(defaultValue) {
  const [toggleValue, setToggleValue] = useState(defaultValue);

  function toggleVal(val) {
    if (typeof val === 'boolean') {
      setToggleValue(val);
    } else {
      setToggleValue(prev => !prev);
    }
  }

  return {
    toggleValue,
    toggleVal
  };
}
