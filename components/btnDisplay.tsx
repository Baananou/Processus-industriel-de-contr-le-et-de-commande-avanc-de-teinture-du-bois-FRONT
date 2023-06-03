import { useState, useEffect } from 'react';
import axios from 'axios';

interface BtnDisplayProps {
  deviceLabel: string;
  variableLabel: string;
  variableId: string;
  name: string;
  apiToken: any;
}

const BtnDisplay: React.FC<BtnDisplayProps> = ({ deviceLabel, variableLabel, variableId, name, apiToken }) => {
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    const fetchValue = async () => {
      try {
        const response = await axios.get(
          `https://industrial.api.ubidots.com/api/v1.6/variables/${variableId}/values`,
          {
            headers: {
              'X-Auth-Token': apiToken,
              'Content-Type': 'application/json',
            },
          }
        );

        const fetchedValue = response.data.results[0].value;
        setValue(fetchedValue);
      } catch (error) {
        console.error('Error fetching variable value:', error);
      }
    };

    fetchValue();
  }, [variableId, apiToken]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" disabled>
          {name} ({value})
        </button>
      </div>
    </div>
  );
};

export default BtnDisplay;
