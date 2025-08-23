import { Link } from "react-router-dom";

interface IButton {
  text: string;
  goTo: string;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({ text, goTo, onClick }) => {
  return (
    <Link onClick={onClick} to={goTo} className="bg-lime-600 text-lime-950 w-1/6 flex flex-row justify-around border rounded-md p-3 border-lime-400">
      {text}
    </Link>
  );
};
