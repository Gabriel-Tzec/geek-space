"use client";
import Image from "next/image";

import { characterApi } from "@/services/character";
import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";

import { CharacterProps } from "@/types/character";

import Link from "next/link";
import Header from "@/components/header/header";
import MainTitle from "@/components/main-title/main-title";
import NoResults from "@/components/no-results/no-results";
import InviteToFavorites from "@/components/invite-favorite/invite-favorite";
import Card from "@/components/card/card";
import Grid from "@/components/grid/grid";
import {
  useDeleteCharacter,
  useGetAllCharacter,
} from "@/hooks/characters/use-characters";
import { MESSAGES } from "@/constants/message-character";
import { useGetAllCharacterExternal } from "@/hooks/characters/use-characters-external";
import { Show } from "@/components/show/show";

export default function Home() {
  const { data = [], isFetched } = useGetAllCharacter();
  const { mutate: deleteCharacter } = useDeleteCharacter();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    characterApi.findAll().then((response) => {
      setCharacters(response);
    });
  }, []);

  const onRemove = (character: CharacterProps) => {
    const id = character.id;
    deleteCharacter(id as number, {
      onSuccess: () => {
        toast.success(MESSAGES.deleteSuccess);
      },
      onError: () => {
        toast.error(MESSAGES.deleteError);
      },
    });
  };

  return (
    <div className="bg-white">
      <MainTitle>Mis Favoritos</MainTitle>

      <Show condition={data.length >= 0}>
        <Grid>
          {data.map((character: CharacterProps, index: number) => {
            return (
              <Fragment key={index}>
                <Card
                  character={character}
                  addFavorite={() => {}}
                  removeFavorite={() => onRemove(character)}
                />
              </Fragment>
            );
          })}
        </Grid>
      </Show>

      <Show condition={isFetched && data.length <= 0}>
        <InviteToFavorites />
      </Show>
    </div>
  );
}
