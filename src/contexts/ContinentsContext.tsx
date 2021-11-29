import { useState, createContext, useEffect} from "react";

import axios from 'axios';
import { useRouter } from "next/router";

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

export interface ContinentCard {
  id: number;
  banner: string;
  citie: string;
  country: string;
  flag: string;
}

export type Continents = {
  presentation: {
    background: string;
    header: string;
    info: string;
    href: string;
  },
  pageDetails: {
    banner: {
      background: string;
      header: string;
    },
    curiosities: {
      info: string;
      data: {
        countries: number;
        languages: number;
        plus100Numbers: number;
      }
    },
    plus100Cards: ContinentCard[];
  }
}

interface ContinentsContextProps {
  continents: Continents[];
  handleButtonState: () => void;
  button: boolean;
}

export const ContinentsContext = createContext({} as ContinentsContextProps);

export const ContinentsContextProvider: React.FC = ({ children }) => {
  const [continents, setContinents] = useState<Continents[]>([]);
  const [button, setButton] = useState(false);
  const { asPath } = useRouter();

  useEffect(() => {
    if ( asPath !== '/') {
      setButton(true);
    }
  }, []);

  function handleButtonState() {
    setButton(!button);
  }

  useEffect(() => {
    async function getContinents() {
      const response = await api.get('/continents');
      setContinents(response.data);
    }
    getContinents();
  }, []);

  return (
    <ContinentsContext.Provider
      value={{
        continents,
        button,
        handleButtonState
      }}
    >
      {children}
    </ContinentsContext.Provider>
  )
}