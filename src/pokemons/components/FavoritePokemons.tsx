"use client";
import { useEffect, useState } from "react";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons);

  console.log({ favoritePokemons });

  /* const [pokemons] = useState(favoritePokemons); */

  useEffect(() => {
    console.log({ favoritePokemons });
  }, [favoritePokemons]);

  return (
    <>
      {favoritePokemons.length ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={Object.values(favoritePokemons)} />
      )}
    </>
  );
};

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay Favoritos</span>
    </div>
  );
};
