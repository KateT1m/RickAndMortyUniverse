import { useEffect, useState } from "react";
import { ItemsList } from "../../components/ItemsList/Itemslist";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Selector } from "../../components/Selector/Selector";
import { Title } from "../../components/Title/Title";
import type { Character } from "../../types";

function MainPage() {
  const [characters, setCharacters] = useState([] as Character[]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    status: "Выберите статус",
    race: "Выберите расу",
    episode: "",
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
        const response = await fetch(`${url}`);
        if (!response.ok) {
          setCharacters([]);
        } else {
          const data = await response.json();
          setCharacters(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharacters();
  }, [search]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
  };

  const hendleRaceSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, race: value }));
  };

  const handleStatusSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFilters((prevFilters) => ({ ...prevFilters, status: value }));
  };
  const handleEpisodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const episodeNumber = event.target.value;
    if (episodeNumber === "") {
      setFilters((prevFilters) => ({ ...prevFilters, episode: "" }));
    }
    const episodeUrl = `https://rickandmortyapi.com/api/episode/${episodeNumber}`;
    setFilters((prevFilters) => ({ ...prevFilters, episode: episodeUrl }));
  };

  const filteredCharacters = () => {
    if (
      filters.status === "Выберите статус" &&
      filters.race === "Выберите расу" &&
      filters.episode === ""
    ) {
      return characters;
    }

    return characters.filter((character) => {
      const statusMatch =
        filters.status === "Выберите статус" ||
        character.status === filters.status;
      const raceMatch =
        filters.race === "Выберите расу" || character.species === filters.race;
      const episodeMatch =
        !filters.episode || character.episode.includes(filters.episode);
      return statusMatch && raceMatch && episodeMatch;
    });
  };

  return (
    <div className="flex flex-col gap-10 pt-10 pb-10 items-center">
      <Title text="Вселенная Рик и Морти" />
      <SearchBar title="Имя персонажа" onChange={handleInputChange} />
      <div className="flex gap-10 w-1/2">
        <Selector
          onChange={handleStatusSelectChange}
          title={"Жив?"}
          options={["Выберите статус", "Dead", "Alive", "unknown"]}
        />
        <Selector
          onChange={hendleRaceSelectChange}
          title={"Раса"}
          options={["Выберите расу", "Human", "Alien"]}
        />
      </div>
      <SearchBar title="Эпизод" onChange={handleEpisodeChange} />
      <ItemsList items={filteredCharacters()} />
    </div>
  );
}

export default MainPage;
