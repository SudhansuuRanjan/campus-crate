import "./styles/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, HomePage, NewProposal, Proposal, Vote } from "./pages";
import { Layout, VerticalNav } from "./components";
import { ThirdwebProvider } from "@thirdweb-dev/react";

export default function Home() {


  return (
    <div className="w-full relative">
      <BrowserRouter>
        <ThirdwebProvider activeChain={"mumbai"}>

          <Routes>
            <Route path="/" element={
              <Layout>
                <HomePage />
              </Layout>
            } />

            <Route path="/dashboard" element={
              <>
                <VerticalNav name={'Dashboard'}>
                  <Dashboard />
                </VerticalNav>
              </>
            } />

            <Route path="/proposals" element={
              <>
                <VerticalNav name={'Proposals'}>
                  <Proposal />
                </VerticalNav>
              </>
            } />

            <Route path="/new-proposal" element={
              <>
                <VerticalNav name={'New Proposal'}>
                  <NewProposal />
                </VerticalNav>
              </>
            } />

            <Route path="/vote" element={
              <>
                <VerticalNav name={'Vote'}>
                  <Vote />
                </VerticalNav>
              </>
            } />

          </Routes>
        </ThirdwebProvider>
      </BrowserRouter>
    </div>
  );
}
