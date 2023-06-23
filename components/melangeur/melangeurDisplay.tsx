import { useQuery, useQueryClient, QueryClient } from "react-query";
import { toast } from "react-toastify";
import axiosClient from "../../axiosClient";


interface MelangeurDisplayProps {
  child: string;
  alertKey: string;
}

interface MelangeurData {
  [key: string]: any;
}

const getMelangeurData = async (child: string, alertKey: string): Promise<MelangeurData> => {
  try {
    const response = await axiosClient.get(`/melangeur?${child}=${alertKey}`);
    return response.data;

  } catch (error: unknown) {
    const errorMessage = typeof error === "string" ? error : "Failed to fetch melangeur data";
    toast.error(errorMessage);
    throw new Error(errorMessage);
  }
};

const MelangeurDisplay: React.FC<MelangeurDisplayProps> = ({ child, alertKey }) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<MelangeurData>(
    ["melangeurData", child, alertKey],
    () => getMelangeurData(child, alertKey),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["melangeurData", child, alertKey]);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Something went wrong.</div>;
  }

  const melangeurData = data as MelangeurData;
  console.log('====================================');
  console.log(melangeurData);
  console.log('====================================');
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2 cursor-crosshair">
        <button className={melangeurData.value ? `w-auto h-8 bg-blue-500 text-white font-bold py-2 px-4 rounded` : `bg-black text-white font-bold py-2 px-4 rounded w-auto h-8`}>
          {[alertKey]} ({melangeurData.value})
        </button>
      </div>
    </div>
  );
};

export default MelangeurDisplay;

