import "./css/output.css"

import BreakpointIndicator from "./components/util/BreakpointIndicator"
import EquipSummary from "./components/EquipSummary"
import Header from "./components/Header"
import ChartValueTabs from "./components/ChartValueTabs"
import ChartFiltersWrapper from "./components/ChartFiltersWrapper"
import ComparablesTabs from "./components/ComparablesTabs"
import CardSelectSort from "./components/CardSelectSort"
import ComparablesCardList from "./components/ComparablesCardList"
import Footer from "./components/Footer"


export default function App() {
  return (
    <>
      <BreakpointIndicator />

      <EquipSummary />
      <Header />
      <ChartValueTabs />
      <ChartFiltersWrapper />
      <ComparablesTabs />
      <CardSelectSort />
      <ComparablesCardList />
      
      <Footer />
    </>
  );
}