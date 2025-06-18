import type { Control } from "react-hook-form";
import type { IFormLogin } from "../../pages/Login/types";

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control<IFormLogin, unknown>   
  name: "email" | "password";
  errorMessage?: string;
}