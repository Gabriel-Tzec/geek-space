"use client";
import Image from "next/image";

import { characterApi } from "@/services/character";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CharacterProps } from "@/types/character";

import Link from "next/link";
import Header from "@/components/header/header";
import SearchBar from "@/components/search/search";
import FavoriteButton from "@/components/favorite-button/favorite-button";
import Grid from "@/components/grid/grid";
import MainTitle from "@/components/main-title/main-title";
import Card from "@/components/card/card";
import CardSkeleton from "@/components/card-skeleton/card-skeleton";
import Logo from "@/components/logo/logio";
import NoResults from "@/components/no-results/no-results";
import Loading from "@/components/loading/loading";
import { useGetAllCharacterExternal } from "@/hooks/characters/use-characters-external";
import { Show } from "@/components/show/show";
import { MESSAGES } from "@/constants/message-character";
import { useCreateCharacter } from "@/hooks/characters/use-characters";
import adaptServerCharacter from "@/adapters/adapter-server-character";
import { filterByName } from "@/utilities/filters";

export default function Home() {
  const { data: { results = [] } = { results: [] }, isFetched } =
    useGetAllCharacterExternal();

  const { mutate: createCharacter } = useCreateCharacter();

  const [term, setTerm] = useState("");

  useEffect(() => {}, []);

  const onClick = (character: CharacterProps) => {
    const payloadFormatted = adaptServerCharacter(character);

    createCharacter(payloadFormatted, {
      onSuccess: () => {
        toast.success(MESSAGES.addSuccess);
      },
      onError: () => {
        toast.error(MESSAGES.addError);
      },
    });
  };

  const onSearch = (term: string) => setTerm(term);

  const resultsByTerm = filterByName(results, term);

  return (
    <div className="bg-white pb-4">
    
      <figure className="flex items-center justify-center mb-4">
        <Logo />
      </figure>

      <div className="w-10/12 m-auto mb-8">
        <SearchBar onSearch={onSearch} />
      </div>

      <Show condition={!isFetched}>
        <Loading />
      </Show>

      <Show condition={isFetched && results.length <= 0}>
        <NoResults />
      </Show>

      <Grid>
        {resultsByTerm.map((character: CharacterProps, index: number) => (
          <Fragment key={index}>
            <Card
              character={character}
              addFavorite={() => onClick(character)}
              removeFavorite={() => onClick(character)}
              isMain
            />
          </Fragment>
        ))}
      </Grid>
    </div>
  );
}
