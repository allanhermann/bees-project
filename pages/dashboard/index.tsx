import dynamic from "next/dynamic";
import { useEffect } from "react";
import { LoadingState } from "../../src/components/dashboard/partials/loading";

const DashboardPage = () => {
  useEffect(() => {
    document.title = "Breweries";
  });

  const DynamicDashboard = dynamic(
    () => import("../../src/components/dashboard/dashboard"),
    { loading: () => <LoadingState /> }
  );

  return <DynamicDashboard />;
};

export default DashboardPage;
