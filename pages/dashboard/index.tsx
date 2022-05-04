import { useEffect } from "react";
import { Dashboard } from "../../src/components";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Breweries";
  });

  return <Dashboard />;
};

export default DashboardPage;
