import type { IInputProps } from "./types";
import { Controller } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";

const Input = ({ 
  control, 
  name, 
  errorMessage, 
  type = "text",
  ...rest 
}: IInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="w-full mb-4">
      <div className={`relative rounded-xl overflow-hidden border-2 ${
        errorMessage 
          ? 'border-red-500' 
          : 'border-gray-200 hover:border-primary focus-within:border-primary'
      } transition-all duration-300 bg-white`}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <div className="relative">
              <input
                {...rest}
                type={isPassword && !showPassword ? "password" : "text"}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
                className="w-full px-5 py-4 text-gray-700 bg-transparent outline-none placeholder-gray-500"
              />
              {isPassword && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              )}
            </div>
          )}
        />
      </div>
      {errorMessage && (
        <p className="mt-2 ml-2 text-sm text-red-500 animate-fade-in">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;