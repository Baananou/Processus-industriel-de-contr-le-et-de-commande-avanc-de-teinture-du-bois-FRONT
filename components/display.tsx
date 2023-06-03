import Image from 'next/image';
import sirenOnImage from '../public/siren_on.png';
import sirenOffImage from '../public/siren_off.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

interface DisplayProps {
  deviceLabel: string;
  variableLabel: string;
  variableId: string;
  name: string;
}

const Display: React.FC<DisplayProps> = ({ deviceLabel, variableLabel, variableId, name }) => {
  const [value, setValue] = useState<number | null>(null);
  const [sirenActive, setSirenActive] = useState<boolean>(false); // Initialize the constant

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await axios.get(`https://industrial.api.ubidots.com/api/v1.6/devices/${deviceLabel}/${variableLabel}/lv`, {
          headers: {
            'X-Auth-Token': API_KEY,
            'Content-Type': 'application/json',
          },
        });

        const fetchedValue = response.data;
        setValue(fetchedValue);
        console.log(response.data);

        // Test the value and set the constant
        setSirenActive(fetchedValue === 1);

      } catch (error) {
        console.error('Error fetching variable value:', error);
      }
    };

    fetchValue();
  }, [variableLabel]);

  const API_KEY = process.env.UBIDOTS_API_TOKEN;

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button className={sirenActive ? `bg-blue-500 text-white font-bold py-2 px-4 rounded` : `bg-black text-white font-bold py-2 px-4 rounded`}>
          {name}
        </button>
      </div>
    </div>
  );
};

export default Display;
