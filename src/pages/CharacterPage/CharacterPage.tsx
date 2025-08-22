import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Title } from "../../components/Title/Title";
import type { Character } from "../../types";
import { Link } from "react-router-dom";

export const CharacterPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState<Character>({} as Character);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const data = await response.json();
      setCharacter(data);
      setIsLoading(false);
    };
    fetchCharacter();
  }, [id]);

  if (isLoading) {
    return (
      <p className="flex justify-center items-center h-screen text-lime-400 font-sans font-bold text-5xl">
        Загрузка...
      </p>
    );
  }

  return (
    <div className="h-screen p-20 flex flex-col gap-10 justify-center items-center w-full">
      <Title text="Вселенная Рик и Морти" />
      <img className="w-1/3" src={character?.image} alt="" />
      <p className="text-lime-400 font-sans font-bold text-2xl">
        Персонаж {character?.name}
      </p>
      <div className="flex flex-row gap-10 w-1/2 justify-center items-center">
        <p className="text-lime-400 font-sans font-bold text-2xl">
          Пол: {character?.gender}
        </p>
        <p className="text-lime-400 font-sans font-bold text-2xl">
          Раса: {character?.species}
        </p>
        <p className="text-lime-400 font-sans font-bold text-2xl">
          Статус: {character?.status}
        </p>
      </div>
      <p className="text-lime-400 font-sans font-bold text-2xl w-1/2 text-center">
        Эпизоды:{" "}
        {character?.episode
          .map((episode) => episode.split("/").pop())
          .join(", ")}
      </p>
      <Link
        to="/"
        className="leading-none border-lime-400 bg-lime-600 text-lime-950 font-sans font-bold text-2xl border rounded-md p-4"
      >
        На главную
      </Link>
    </div>
  );
};
