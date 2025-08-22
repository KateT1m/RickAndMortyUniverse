interface ISelector {
  options: string[];
  title: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Selector: React.FC<ISelector> = ({ options, title, onChange }) => {
  return (
    <>
      <div className="flex flex-col gap-2 w-full">
        <label className="text-lime-400 font-sans font-bold text-2xl">
          {title}
        </label>
        <div className="relative after:absolute after:top-1/2 after:right-2 after:transform after:-translate-y-1/2 after:border-b-4 after:border-l-4 after:rotate-315 after:border-lime-400 after:w-2 after:h-2">
          <select onChange={onChange} name={title} className="capitalize appearance-none text-lime-950 bg-lime-600 border border-lime-400 placeholder-lime-600 rounded-md p-2 w-full focus-visible:outline-0 focus-visible:border-lime-100">
            {options.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};
