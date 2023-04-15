import "./styles/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard, HomePage } from "./pages";
import { Layout, VerticalNav} from "./components";

export default function Home() {
  return (
    <div className="w-full relative">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}
