import "./styles/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, HomePage } from "./pages";
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
          </Routes>
        </ThirdwebProvider>
      </BrowserRouter>
    </div>
  );
}
