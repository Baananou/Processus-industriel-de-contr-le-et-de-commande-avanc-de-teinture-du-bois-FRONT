import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

interface MelangeurInputProps {
  child: string; // "input" or "output"
  inputkey: string;
}

const MelangeurInput: React.FC<MelangeurInputProps> = ({ child, inputkey }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Send POST request
    const data = {
      [child]: {
        [inputkey]: inputValue,
      },
    };

    axios
      .post("http://127.0.0.1:8080/melangeur", data)
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
        type="text"
        value={value}
        onChange={handleChange}
        className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2"
        placeholder={inputkey}
      />
    </div>
  );
};

export default MelangeurInput;
