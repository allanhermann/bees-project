import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../pages/context/userContext";
import { Card } from "./partials/card";
import { CardContainer, PageContainer } from "./style";
import axios from "axios";
import useSWR from "swr";
import { useRouter } from "next/router";
import { EmptyState } from "./partials/empty";
import { Header } from "./partials/header";
import { Breweries } from "./types/brewerie";

export const Dashboard = () => {
  const router = useRouter();

  const { userName } = useContext(UserContext);

  let cardId = 1;

  const [totalCards, setTotalCards] = useState<number>(0);
  const [breweries, setBreweries] = useState<Breweries[]>();
  const [numberOfCards, setNumberOfCards] = useState<number>(5);
  const [childNumber, setChildNumber] = useState<number>(-1);
  const [errorHandling, setErrorHandling] = useState<string>();
  const [deletedCards, setDeletedCards] = useState<number>(0);

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(
    "https://api.openbrewerydb.org/breweries",
    fetcher
  );
  useEffect(() => {
    setBreweries(data);
    setTotalCards(data?.length + 1);
  }, [data]);

  useEffect(() => {
    setNumberOfCards(numberOfCards + 1);
    setDeletedCards(deletedCards + 1);
  }, [childNumber]);

  useEffect(() => {
    if (userName === "" || error) {
      setErrorHandling("error");
    }

    if (errorHandling === "error") {
      console.log(errorHandling);
      router.push("/error");
    }
  }, [errorHandling, userName, error]);

  return (
    <PageContainer>
      <Header />
      <CardContainer>
        {breweries ? (
          breweries
            .slice(0, numberOfCards)
            .map((data: Breweries) => (
              <Card
                id={cardId}
                title={data.name}
                address={data.street}
                location={data.city + ", " + data.state + " - " + data.country}
                brewery={data.brewery_type}
                postalCode={data.postal_code}
                telephone={data.phone}
                passCardNumber={setChildNumber}
                {...cardId++}
              />
            ))
        ) : (
          <Card id={0} title="Carregando..." passCardNumber={setChildNumber} />
        )}
      </CardContainer>
      {totalCards === deletedCards && <EmptyState />}
    </PageContainer>
  );
};
