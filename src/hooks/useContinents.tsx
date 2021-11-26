import { useContext } from 'react';
import { ContinentsContext } from '../contexts/ContinentsContext';

export const useContinents = () => {
  const continentsContext = useContext(ContinentsContext);
  return continentsContext;
}