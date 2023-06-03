import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface InputProps {
  deviceLabel: string;
  variableLabel: string;
  variableId: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ deviceLabel, variableLabel, variableId, name }) => {
  const [value, setValue] = useState<number | null>(null);
  const [sirenActive, setSirenActive] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await axios.get(`https://industrial.api.ubidots.com/api/v1.6/variables/${variableId}/values`, {
          headers: {
            'X-Auth-Token': API_KEY,
            'Content-Type': 'application/json',
          },
        });

        const fetchedValue = response.data.results[0].value;
        setValue(fetchedValue);
        setSirenActive(fetchedValue === 1);
      } catch (error) {
        console.error('Error fetching variable value:', error);
      }
    };

    fetchValue();
  }, [variableId]);

  const API_KEY = process.env.UBIDOTS_API_TOKEN;

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const inputValue = inputRef.current?.value;

      if (inputValue && !isNaN(Number(inputValue))) {
        const newNumericValue = Number(inputValue);

        // Send the updated value to the API
        await updateVariableValue(newNumericValue);
      }
    }
  };

  const updateVariableValue = async (newValue: number) => {
    try {
      const response = await axios.post(`https://industrial.api.ubidots.com/api/v1.6/variables/${variableId}/values`, {
        value: newValue,
      }, {
        headers: {
          'X-Auth-Token': API_KEY,
          'Content-Type': 'application/json',
        },
      });

      const updatedValue = response.data.value;
      setValue(updatedValue);
      setSirenActive(updatedValue === 1);
    } catch (error) {
      console.error('Error updating variable value:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center gap-2">
        <label htmlFor="inputValue">{name}</label>
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 w-24 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter value"
          ref={inputRef}
          onKeyDown={handleKeyPress}
          defaultValue={value !== null ? value.toString() : ''}
        />

      </div>
    </div>
  );
};

export default Input;
