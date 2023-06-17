import { useQuery, useQueryClient, QueryClient } from "react-query";
import { toast } from "react-toastify";
import axiosClient from "../axiosClient";
import Image from "next/image";
import sirenOnImage from "../public/siren_on.png";
import sirenOffImage from "../public/siren_off.png";

interface UserDisplayProps {
  child: string;
  alertKey: string; // Renamed from 'key' to 'alertKey'
}

interface UserData {
  [key: string]: any; // Add other properties based on your user data structure
}

const getUserData = async (child: string, alertKey: string): Promise<UserData> => {
  try {
    const response = await axiosClient.get(`/user?${child}=${alertKey}`);
    return response.data;

  } catch (error: unknown) {
    const errorMessage = typeof error === "string" ? error : "Failed to fetch user data";
    toast.error(errorMessage);
    throw new Error(errorMessage);
  }
};

const UserDisplay: React.FC<UserDisplayProps> = ({ child, alertKey }) => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<UserData>(
    ["userData", child, alertKey],
    () => getUserData(child, alertKey),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["userData", child, alertKey]);
      },
    }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: Something went wrong.</div>;
  }

  const userData = data as UserData; // Type assertion to UserData

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button className={userData[child]?.[alertKey] ? `w-52 h-8 bg-blue-500 text-white font-bold py-2 px-4 rounded` : `bg-black text-white font-bold py-2 px-4 rounded w-52 h-8`}>
          {userData[child]?.[alertKey]}
        </button>
      </div>
      {/* <div className="h-10 flex flex-col items-center justify-center gap-2">
        <Image
          src={userData[child]?.[alertKey] ? sirenOnImage : sirenOffImage}
          alt="Siren"
          className="w-10 h-10"
        />
        <div className="font-bold uppercase">{[alertKey]}</div>
      </div> */}
    </div>
  );
};

export default UserDisplay;

