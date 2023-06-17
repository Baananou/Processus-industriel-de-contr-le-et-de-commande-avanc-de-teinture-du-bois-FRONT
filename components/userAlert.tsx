import { useQuery, useQueryClient, QueryClient } from "react-query";
import { toast } from "react-toastify";
import axiosClient from "../axiosClient";
import Image from "next/image";
import sirenOnImage from "../public/siren_on.png";
import sirenOffImage from "../public/siren_off.png";

interface UserAlertProps {
  child: string;
  alertKey: string; // Renamed from 'key' to 'alertKey'
}

interface UserData {
  [key: string]: any; // Add other properties based on your user data structure
}

const getUserData = async (child: string, alertKey: string): Promise<UserData> => {
  try {
    const response = await axiosClient.get(`/user?${child}=${alertKey}`);
    // console.log('====================================');
    // console.log(response.data);
    // console.log('====================================');
    return response.data;

  } catch (error: unknown) {
    const errorMessage = typeof error === "string" ? error : "Failed to fetch user data";
    toast.error(errorMessage);
    throw new Error(errorMessage);
  }
};

const UserAlert: React.FC<UserAlertProps> = ({ child, alertKey }) => {
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
      <div className="h-10 flex flex-col items-center justify-center gap-2">
        <Image
          src={userData[child]?.[alertKey] ? sirenOnImage : sirenOffImage}
          alt="Siren"
          className="w-10 h-10"
        />
        <div className="font-bold uppercase">{[alertKey]}</div>
      </div>
    </div>
  );
};

export default UserAlert;
