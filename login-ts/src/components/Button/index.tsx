import type { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled = false }: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full py-3 px-6 rounded-xl font-medium text-white
        transition-all duration-300 transform hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
        shadow-lg
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-primary hover:bg-primary-dark'}
      `}
    >
      {title}
    </button>
  );
};

export default Button;