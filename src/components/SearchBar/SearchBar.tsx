
interface ISearchBar {
    title: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

export const SearchBar: React.FC<ISearchBar> = ({title, onChange, value}) => {
    return (
        <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="search" className="text-lime-400 font-sans font-bold text-2xl">{title}</label>
            <input value={value} onChange={onChange} name="search" className="border bg-lime-600 border-lime-400 text-lime-950 placeholder-lime-950 rounded-md p-2 w-full focus-visible:outline-0 focus-visible:border-lime-100" type="text" placeholder="Поиск" />
        </div>
    )
}