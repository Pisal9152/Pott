import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutmain from "./componet/layout/Layoutmain";
import AboutPage from "./page/About/AboutPage";
import Cambodia from "./page/Country/Cambodia/Cambodia";
import Thailand from "./page/Country/Thailand/Thailand";
import Login from "./page/login/Login";
import Routenotfound from "./page/Route-not-found/Routenotfound";
import LayoutDashbord from "./componet/layout/LayoutDashbord";
import CamList from "./page/Country/Cambodia/CambodiaList";
import Home from "./page/Home/Home";
import HomeList from "./page/Home/HomeList";
import Com from "./Comment/Com";
import ThaiList from "./page/Country/Thailand/ThaiList";
import Vietnam from "./page/Country/Vietnam/Vietnam";
import VNList from "./page/Country/Vietnam/VietnamList";
import Indonesia from "./page/Country/Indonesia/Indonesia";
import INList from "./page/Country/Indonesia/IndonasiaList";
import Myanmar from "./page/Country/Myanmar/Myanmar";
import MyList from "./page/Country/Myanmar/MyanmarList";
import Malaysia from "./page/Country/Malaysia/Malaysia";
import MalaysiaList from "./page/Country/Malaysia/MalaysiaList";
import Lao from "./page/Country/Laos/Laos";
import LaoList from "./page/Country/Laos/LaosList";
import Philippines from "./page/Country/Philippines/Philipines";
import PhilippinesList from "./page/Country/Philippines/PhilipinesList";
import Singapore from "./page/Country/Singapore/Singapore";
import SingaporeList from "./page/Country/Singapore/SingaporeList";
import Brunei from "./page/Country/Brunei/Brunie";
import BruneiList from "./page/Country/Brunei/BruneiList";
// import FavoriteList from "./page/Home/FavoriteList";
import Favorite from "./page/Favorite/Favorite";
// import Favorite from "./page/Favorite/Favorite";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Website */}
        <Route path="/" element={<Layoutmain />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<HomeList />} />
          <Route path="/cambodia" element={<Cambodia />} />
          <Route path="/cambodia/:id" element={<CamList />} />
          <Route path="/thai" element={<Thailand />} />
          <Route path="/thai/:id" element={<ThaiList />} />
          <Route path="/vietnam" element={<Vietnam />} />
          <Route path="/vietnam/:id" element={<VNList />} />
          <Route path="/indonesia" element={<Indonesia />} />
          <Route path="/indonesia/:id" element={<INList />} />
          <Route path="/myanmar" element={<Myanmar />} />
          <Route path="/myanmar/:id" element={<MyList />} />
          <Route path="/malaysia" element={<Malaysia />} />
          <Route path="/malaysia/:id" element={<MalaysiaList />} />
          <Route path="/lao" element={<Lao />} />
          <Route path="/lao/:id" element={<LaoList />} />
          <Route path="/philippines" element={<Philippines />} />
          <Route path="/philippines/:id" element={<PhilippinesList />} />
          <Route path="/Singapore" element={<Singapore />} />
          <Route path="/Singapore/:id" element={<SingaporeList />} />
          <Route path="/brunei" element={<Brunei />} />
          <Route path="/brunei/:id" element={<BruneiList />} />
          <Route path="/Favorite" element={<Favorite />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/com" element={<Com />} />
          {/* <Route path="/favorites" render={(props) => <Favorites data={data} {...props} />} /> */}
          {/* <Route path="/favorites" element={<FavoriteList />} /> */}
          {/* <Route path="/favorites" element={<FavoriteList/>} /> */}
          <Route path="*" element={<Routenotfound />} />
        </Route>

        {/* Backend */}
        {/* <Route path="/dashbord" element={<LayoutDashbord />}> */}

        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
