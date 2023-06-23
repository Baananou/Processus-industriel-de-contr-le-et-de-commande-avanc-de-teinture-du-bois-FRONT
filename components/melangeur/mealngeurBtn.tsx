import { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface MelangeurBtnProps {
  inputKey: string;
  child: string;
}

const MelangeurBtn: React.FC<MelangeurBtnProps> = ({ inputKey, child }) => {
  const [value, setValue] = useState<string>("true");

  useEffect(() => {
    fetchUserValue();
  }, []);

  const fetchUserValue = () => {
    // Send GET request to fetch the current value from the server
    fetch(`http://127.0.0.1:8080/melangeur?${child}=${inputKey}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch value");
        }
        return response.json();
      })
      .then((data) => {
        setValue(data.value.toString()); // Convert the fetched value to a string
      })
      .catch((error) => {
        toast.error("Failed to fetch value");
        console.error(error);
      });
  };

  const handleClick = () => {
    const updatedValue = value === "true" ? "false" : "true"; // Toggle the value

    // Send POST request to update the value
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        [child]: {
          [inputKey]: updatedValue,
        },
      }),
    };

    fetch("http://127.0.0.1:8080/melangeur", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update value");
        }
        return response.json();
      })
      .then(() => {
        toast.success("Value updated successfully");
        setValue(updatedValue); // Update the local state with the updated value
      })
      .catch((error) => {
        toast.error("Failed to update value");
        console.error(error);
      });
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button
          className={value === "true" ? "w-24 h-8 bg-blue-500 text-white font-bold py-2 px-4 rounded" : "bg-black text-white font-bold py-2 px-4 rounded w-24 h-8"}
          onClick={handleClick}
        >
          {inputKey}
        </button>
      </div>
    </div>
  );
};

export default MelangeurBtn;
