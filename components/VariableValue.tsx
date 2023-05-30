import { useState } from 'react';
import { usePostDeviceVariableValue } from '../hooks/ubidotsService';

interface VariableValueProps {
  variableLabel: string;
}

function VariableValue({ variableLabel }: VariableValueProps) {
  const postDeviceVariableValue = usePostDeviceVariableValue();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      await postDeviceVariableValue(variableLabel, value);
      setInputValue('');
      window.location.reload();
    }
  };

  return (
    <div>
      <h2>Variable Value: {variableLabel}</h2>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Post Value</button>
      </div>
    </div>
  );
}

export default VariableValue;
