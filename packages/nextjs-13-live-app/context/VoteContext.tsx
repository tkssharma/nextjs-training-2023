"use client";

import { createContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";

interface VoteContextType {
  handleVote: (pokemonId: number) => void;
  isLoading: boolean;
}

export const VoteContext = createContext({} as VoteContextType);

export default function VoteContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const route = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  // Create inline loading UI
  const isLoading = isFetching || isPending;

  async function handleVote(pokemonId: number) {
    setIsFetching(true);
    await fetch(`http://localhost:3000/api/vote/${pokemonId}`, {
      method: "POST",
    });
    setIsFetching(false);
    route.refresh();
  }







  return (
    <VoteContext.Provider value={{ handleVote, isLoading }}>
      {children}
    </VoteContext.Provider>
  );
}
