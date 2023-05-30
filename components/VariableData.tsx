import { useDeviceVariableData } from '../hooks/ubidotsService';

interface VariableDataProps {
  variableLabel: string;
}

function VariableData({ variableLabel }: VariableDataProps) {
  const variableData = useDeviceVariableData(variableLabel);
  const lastStoredValue = variableData.length > 0 ? variableData[0] : null;

  return (
    <div>
      <h2>Variable Data: {variableLabel}</h2>
      {lastStoredValue ? (
        <p>{`${lastStoredValue.value} at ${lastStoredValue.timestamp}`}</p>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
}

export default VariableData;
