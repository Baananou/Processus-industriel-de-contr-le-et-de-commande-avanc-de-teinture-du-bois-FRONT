import { useState } from "react";
import { toast } from "react-toastify";

interface InputFieldProps {
  child: "input" | "output";
  key: string;
  jsonData: {
    input: Record<string, any>;
    output: Record<string, any>;
  };
}

const UserBtn: React.FC<InputFieldProps> = ({ child, key, jsonData }) => {
  const [value, setValue] = useState(jsonData[child][key]);

  const handleClick = () => {
    const currentValue = jsonData[child][key];
    const updatedValue = currentValue === true || currentValue === "1" ? false : true;

    // Update the value in the JSON data
    const updatedData = {
      ...jsonData,
      [child]: {
        ...jsonData[child],
        [key]: updatedValue,
      },
    };

    // Send POST request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    };

    fetch("http://127.0.0.1:8080/melangeur", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update value");
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Value updated successfully");
        setValue(updatedValue);
        console.log(data);
      })
      .catch((error) => {
        toast.error("Failed to update value");
        console.error(error);
      });
  };

  return (
    <div>
      <button onClick={handleClick} className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary">
        {value === true || value === "1" ? "0" : "1"}
      </button>
    </div>
  );
};

export default UserBtn;
