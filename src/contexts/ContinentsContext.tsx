import { useState, createContext, useEffect} from "react";

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

type Continents = {
  presentation: {
    background: string;
    header: string;
    info: string;
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
    plus100Cards: {
      banner: string;
      citie: string;
      country: string;
      flag: string;
    }
  }
}

interface ContinentsContextProps {
  continents: Continents[];
}

export const ContinentsContext = createContext({} as ContinentsContextProps);

export const ContinentsContextProvider: React.FC = ({ children }) => {
  const [continents, setContinents] = useState<Continents[]>([]);

  useEffect(() => {
    async function getContinents() {
      const response = await api.get('/continents');
      setContinents(response.data);
      console.log(response);
    }
    getContinents();
  }, []);

  return (
    <ContinentsContext.Provider
      value={{continents}}
    >
      {children}
    </ContinentsContext.Provider>
  )
}