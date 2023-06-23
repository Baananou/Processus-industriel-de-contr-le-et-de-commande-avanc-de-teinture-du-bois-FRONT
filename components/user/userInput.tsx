import { useState } from "react";
import { toast } from "react-toastify";

interface InputFieldProps {
  inputKey: string;
  child: string;
}

const UserInput: React.FC<InputFieldProps> = ({ inputKey, child }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Send POST request
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key: inputKey,
        value: inputValue,
        child: child,
      }),
    };

    fetch("http://127.0.0.1:8080/user", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update value");
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Value updated successfully");
        console.log(data);
      })
      .catch((error) => {
        toast.error("Failed to update value");
        console.error(error);
      });
  };

  return (
    <div>
      <label htmlFor={inputKey} className="mb-2 font-bold text-primary">
        {inputKey}:
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className="border px-4 py-2 rounded-md focus:outline-none focus:border-primary bg-white w-56 mx-2"
        placeholder={inputKey}
      />
    </div>
  );
};

export default UserInput;
