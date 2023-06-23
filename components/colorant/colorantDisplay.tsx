import { useQuery, useQueryClient, QueryClient } from "react-query";
import { toast } from "react-toastify";
import axiosClient from "../../axiosClient";


interface ColorantDisplayProps {
  child: string;
  alertKey: string;
}

interface ColorantData {
  [key: string]: any;
}

const getColorantData = async (child: string, alertKey: string): Promise<ColorantData> => {
  try {
    const response = await axiosClient.get(`/colorant?${child}=${alertKey}`);
    return response.data;

  } catch (error: unknown) {
    const errorMessage = typeof error === "string" ? error : "Failed to fetch colorant data";
    toast.error(errorMessage);
    throw new Error(errorMessage);
  }
};

const ColorantDisplay: React.FC<ColorantDisplayProps> = ({ child, alertKey }) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<ColorantData>(
    ["colorantData", child, alertKey],
    () => getColorantData(child, alertKey),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["colorantData", child, alertKey]);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Something went wrong.</div>;
  }

  const colorantData = data as ColorantData;
  console.log('====================================');
  console.log(colorantData);
  console.log('====================================');
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 cursor-crosshair">
        <button className={colorantData.value ? `w-auto h-8 bg-blue-500 text-white font-bold py-2 px-4 rounded` : `bg-black text-white font-bold py-2 px-4 rounded w-auto h-8`}>
          {[alertKey]} ({colorantData.value})
        </button>
      </div>
    </div>
  );
};

export default ColorantDisplay;

