import { Link } from "react-router-dom";

interface IButton {
  text: string;
  goTo: string;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({ text, goTo, onClick }) => {
  return (
    <Link onClick={onClick} to={goTo} className="bg-lime-600 hover:bg-lime-400 w-full md:w-1/3 lg:w-1/5 text-lime-950 flex flex-row text-center justify-around border rounded-md p-3 border-lime-400">
      {text}
    </Link>
  );
};
