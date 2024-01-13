import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayPhilipine from "./DisplayPhiliCard";
import { Input } from "antd";

function Philipine() {
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
  const brunei = cards.filter(card => card.route === "philippines");
  const handleDisplayUpdate = () => {
    // This function can be called to update the DisplayBrunei component
    setUpdateFlag((prevFlag) => !prevFlag);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <div className="templateContainer">
          <div className="searchInput_Container">
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
          </div>
        </div>
        <DisplayPhilipine
          cards={brunei}
          onUpdate={handleDisplayUpdate}
          search={search}
        />
      </div>
    );
  }
}

export default Philipine;
