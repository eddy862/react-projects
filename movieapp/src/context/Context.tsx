import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ContextValue = {
  favorites: Favorite[] | undefined;
  setFavorites: React.Dispatch<React.SetStateAction<Favorite[] | undefined>>;
};

export type Favorite = {
  id: string | undefined;
  title: string | undefined;
  release: string | undefined,
  plot: string | undefined,
  year: string | undefined;
  rate: string | undefined;
  imgUrl: string | undefined;
}

export const Context = createContext<ContextValue | undefined>(undefined);

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<Favorite[] | undefined>(undefined);

  const contextValue = {
    favorites,
    setFavorites,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
