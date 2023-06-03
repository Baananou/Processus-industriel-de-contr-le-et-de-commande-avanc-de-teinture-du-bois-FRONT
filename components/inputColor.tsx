import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface InputColorProps {
  deviceLabel: string;
  variableLabel: string;
  variableId: string;
  name: string;
  color: string;
  apiToken: any;
}

const InputColor: React.FC<InputColorProps> = ({ deviceLabel, variableLabel, variableId, name, color, apiToken }) => {
  const [value, setValue] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await axios.get(`https://industrial.api.ubidots.com/api/v1.6/variables/${variableId}/values`, {
          headers: {
            'X-Auth-Token': apiToken,
            'Content-Type': 'application/json',
          },
        });

        const fetchedValue = response.data.results[0].value;
        setValue(fetchedValue);
      } catch (error) {
        console.error('Error fetching variable value:', error);
      }
    };

    fetchValue();
  }, [variableId]);

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputValue = inputRef.current?.value;

      if (inputValue) {
        // Send the updated value to the API
        await updateVariableValue(inputValue);
      }
    }
  };

  const updateVariableValue = async (newValue: string) => {
    try {
      const response = await axios.post(`https://industrial.api.ubidots.com/api/v1.6/variables/${variableId}/values`, {
        value: newValue,
      }, {
        headers: {
          'X-Auth-Token': apiToken,
          'Content-Type': 'application/json',
        },
      });

      const updatedValue = response.data.value;
      setValue(updatedValue);
    } catch (error) {
      console.error('Error updating variable value:', error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-4">
        <label htmlFor={`${name}Input`} className={`text-${color}-500 text-2xl font-bold`}>
          {name}
        </label>
        <input
          id={`${name}Input`}
          type="text"
          className={`border border-${color}-500 px-4 py-2 rounded-md focus:outline-none focus:border-${color}-500`}
          placeholder="Enter value"
          ref={inputRef}
          onKeyDown={handleKeyPress}
          defaultValue={value !== null ? value : ''}
        />
      </div>
    </div>
  );
};

export default InputColor;
