import { useState, useEffect } from 'react';
import axios from 'axios';

interface BtnProps {
  deviceLabel: string;
  variableLabel: string;
  variableId: string;
  name: string;
  apiToken: any;
}

const Btn: React.FC<BtnProps> = ({ deviceLabel, variableLabel, variableId, name, apiToken }) => {
  const [value, setValue] = useState<number | null>(null);
  const [sirenActive, setSirenActive] = useState<boolean>(false);

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
        setSirenActive(fetchedValue === 1);
      } catch (error) {
        console.error('Error fetching variable value:', error);
      }
    };

    fetchValue();
  }, [variableId, apiToken]);

  const handleClick = async () => {
    try {
      const newValue = sirenActive ? 0 : 1;
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
      setSirenActive(updatedValue === 1);
    } catch (error) {
      console.error('Error updating variable value:', error);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button
          className={sirenActive ? `bg-blue-500 text-white font-bold py-2 px-4 rounded` : `bg-black text-white font-bold py-2 px-4 rounded`}
          onClick={handleClick}
        >
          {name} ({value})
        </button>
      </div>
    </div>
  );
};

export default Btn;
