import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayCambodia from "./DisplayHomeCard";

import "./HomeProps.css";
import { Input } from "antd";
import CarouselHome from "../../componet/Carousel/CarouselHome";

function Home() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [search, setSearch] = useState("");
  const { Search } = Input;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone_1 = await axios.get("http://localhost:3001/all_data");
        setCards(respone_1.data);
        console.log(respone_1.data)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
   
  }, [updateFlag]);
  const brunei = cards.filter(e => e.route == "cambodia" || e.route == "thailand");
  const handleDisplayUpdate = () => {
    // This function can be called to update the DisplayBrunei component
    setUpdateFlag((prevFlag) => !prevFlag);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div style={{ padding: "2%"}}>
       
        <div >
          <div >
            <Search
              className="search"
              id="searchInput"
              type="text"
              placeholder="input search text"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
              }}
              enterButton
            />
            <div className="event">
              <p>ASEAN Celebration |</p> &emsp;
              <p>Events |</p>&emsp;
              <p>Festivals</p>
            </div>
            <br/>
             <CarouselHome/>
          </div>
        </div>

        <div className="display">
        <DisplayCambodia
          cards={brunei}
          onUpdate={handleDisplayUpdate}
          search={search}
        />

        &emsp; 
        <div className="body-content2">
          <div className="add">Celebration</div>
          <br />
          <iframe
            width="100%"
            height="215"
            src="https://www.youtube.com/embed/HdSlI6fqMMw?si=DXKZStuEVqEBRwEl"
            frameBorder="0"
            allowFullScreen
            title="Video Player"
          ></iframe>
          <br />
          <br />
          <br />
          <br />
          <br />

          <div className="add1">Advertisement</div>
          <br />
          <img src="https://tpc.googlesyndication.com/simgad/7373588473816201172?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkIeavxLOUePm8Kgy1aAwcMu2CibQ" />
        </div>
      </div>
      </div>
    );
  }
}

export default Home;
