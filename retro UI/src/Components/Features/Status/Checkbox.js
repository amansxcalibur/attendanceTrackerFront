import React, { useState } from 'react';
const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    if (isChecked){
      const color="black";
    }
  };
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Check me!
      </label>
    </div>
  );
};
export default Checkbox;