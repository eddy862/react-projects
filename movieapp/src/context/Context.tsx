import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextValue = {
  favorites: Favorite[] | undefined;
  setFavorites: React.Dispatch<React.SetStateAction<Favorite[] | undefined>>;
  history: History[] | undefined;
  setHistory: React.Dispatch<React.SetStateAction<History[] | undefined>>
};

export type Favorite = {
  id: string | undefined;
  title: string | undefined;
  release: string | undefined,
  plot: string | undefined,
  year: string | undefined;
  rate: string | undefined;
  imgUrl: string | undefined;
  date: Date;
}

export type History = {
  id: string;
  title: string;
  year: string;
}

export const Context = createContext<ContextValue | undefined>(undefined);

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[] | undefined>(undefined);
  const [history, setHistory] = useState<History[] | undefined>(undefined)

  const contextValue = {
    favorites,
    setFavorites,
    history,
    setHistory
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
