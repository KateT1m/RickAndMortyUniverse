import type { Character } from "../../types"
import { Item } from "../Item/Item"
import { Title } from "../Title/Title"

interface IItemsList {
    items: Character[]
}

export const ItemsList: React.FC<IItemsList> = ({items}) => {
    return (
        <div className="flex flex-col gap-5 justify-center items-start w-1/2">
            <Title text="Найдено" />
            <ul>
                <li></li>
            </ul>
            <ul className="flex flex-col gap-5 justify-center items-center w-full">
                {items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>
    )
}