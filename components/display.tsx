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
  apiToken: any;
}

const Display: React.FC<DisplayProps> = ({ deviceLabel, variableLabel, variableId, name, apiToken }) => {
  const [value, setValue] = useState<number | null>(null);
  const [sirenActive, setSirenActive] = useState<boolean>(false);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await axios.get(`https://industrial.api.ubidots.com/api/v1.6/devices/${deviceLabel}/${variableLabel}/lv`, {
          headers: {
            'X-Auth-Token': apiToken,
            'Content-Type': 'application/json',
          },
        });

        const fetchedValue = response.data;
        setValue(fetchedValue);
        console.log(response.data);

        setSirenActive(fetchedValue === 1);
      } catch (error) {
        console.error('Error fetching variable value:', error);
      }
    };

    fetchValue();
  }, [variableLabel, apiToken]);

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
