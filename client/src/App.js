import "./styles/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, HomePage } from "./pages";
import { Layout, VerticalNav, NavBar } from "./components";

export default function Home() {
  return (
    <div className="w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Layout>
              <HomePage />
            </Layout>
          } />
          <Route path="/dashboard" element={
            <>
              <NavBar />
              <VerticalNav>
                <Dashboard />
              </VerticalNav>
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
