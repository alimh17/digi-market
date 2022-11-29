import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import MainLayouts from "./Layouts/index.jsx";
import Home from "./pages/Home/index.jsx";
import MobileProduct from "./pages/Products/MobileProduct";
import LaptopProduct from "./pages/Products/LaptopProduct";
import Console from "pages/Console";
import Mobile from "./pages/Mobile/index.jsx";
import Cart from "./pages/Cart/index.jsx";
import NotFoundPage from "./pages/404/NotFoundPage";
import Laptops from "./pages/Laptop/index.jsx";
import Tablets from "./pages/Tablets/index.jsx";
import TabletProduct from "./pages/Products/TabletProduct/index.jsx";
import ConsoleProduct from "./pages/Products/ConsoleProduct";
import Offers from "./pages/Offers/index.jsx";
import SmartWatch from "./pages/SmartWatch/index.jsx";
import BestSelling from "./pages/BestSelling/index.jsx";
import SmartwatchProduct from "./pages/Products/SmartwatchProduct/index.jsx";
import Dashboard from "pages/Dashboard";
import Login from "./pages/Login";
import Brands from "./pages/Brands/index.jsx";
import News from "./pages/News/index.jsx";
import Shop from "./pages/Shop/index.jsx";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainLayouts>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="mobiles" element={<Mobile />} />
            <Route path="mobiles/:id" element={<MobileProduct />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/laptops/:id" element={<LaptopProduct />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/tablets/:id" element={<TabletProduct />} />
            <Route path="/consoles" element={<Console />} />
            <Route path="/consoles/:id" element={<ConsoleProduct />} />
            <Route path="/smartwatchs" element={<SmartWatch />} />
            <Route path="/smartwatchs/:id" element={<SmartwatchProduct />} />
            <Route path="/best-selling" element={<BestSelling />} />
            <Route path="/brands/:id" element={<Brands />} />
            <Route path="/news/:id" element={<News />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayouts>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
