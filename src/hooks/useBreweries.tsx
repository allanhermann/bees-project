import axios from "axios";
import useSWR from "swr";

export const useBreweries = () => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const { data, error } = useSWR(
    "https://api.openbrewerydb.org/breweries",
    fetcher
  );

  return { data, error };
};
