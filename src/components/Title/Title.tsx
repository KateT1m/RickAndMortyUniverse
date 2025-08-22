
interface ITitle {
    text: string
}
export const Title: React.FC<ITitle> = ({text}) => {
    return (
        <h1 className="text-lime-400 font-sans font-bold text-4xl">
            {text}
        </h1>
    )
}