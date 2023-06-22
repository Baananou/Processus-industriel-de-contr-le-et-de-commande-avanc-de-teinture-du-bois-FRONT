import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface RecetteInputProps {
  child: string; // "input" or "output"
  inputkey: string;
}

const RecetteInput: React.FC<RecetteInputProps> = ({ child, inputkey }) => {
  const [value, setValue] = useState<number | undefined>(undefined);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);
    setValue(inputValue);

    // Send POST request
    const data = {
      [child]: {
        [inputkey]: inputValue,
      },
    };

    axios
      .post("http://127.0.0.1:8080/recette", data)
      .then((response) => {
        toast.success("Value updated successfully");
        console.log(response.data); // Success response
      })
      .catch((error) => {
        toast.error("Failed to update value");
        console.error(error); // Error response
      });
  };

  return (
    <div>
      <label htmlFor={inputkey} className="mb-2 font-bold text-primary">
        {inputkey}:
      </label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2"
        placeholder={inputkey}
      />
    </div>
  );
};

export default RecetteInput;
