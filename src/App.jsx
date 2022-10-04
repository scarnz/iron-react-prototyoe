import "./css/output.css";

import DevTray from "./components/util/DevTray";
import TopNav from "./components/TopNav";
import SidebarNav from "./components/SidebarNav";

import EquipSummary from "./components/EquipSummary";
import Header from "./components/Header";

import ChartValueTabs from "./components/HeadlessTabs";

import ComparablesCardTabs from "./components/ComparablesCardTabs";

import Footer from "./components/Footer";





export default function App() {
  return (
    <>
      <DevTray />

      <TopNav />

      <SidebarNav />

      {/*Main content area*/}
      <div className="xl:pl-64 md:mt-8 flex flex-col flex-1 mx-auto bg-white border-x border-gray-100">

        <EquipSummary />

        <section id="comparablesContent" className="flex-1 px-0 sm:px-4 2xl:px-6">
          <Header />

          <ChartValueTabs />

          <ComparablesCardTabs />
        </section>

      </div>

      <Footer />
    </>
  );
}