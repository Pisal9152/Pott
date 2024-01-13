
import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
import DisplayProduct from "./DisplayProduct";
import './HomeProps.css'

import { Input, Space } from 'antd';
const { Search } = Input;

function Search_bar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
        <Search className="search"
         id="searchInput"
         type="text"
        placeholder="input search text"  
         value={searchTerm}
         onChange={(event) => {
           setSearchTerm(event.target.value);
        
         }}
        enterButton />
        <div className="event">
          <p>ASEAN Celebration  |</p> &emsp;
         <p>Events |</p>&emsp;
         <p>Festivals</p>
        </div>
        </div>
        <div className="template_Container">
          {/* Pass searchTerm to DisplayCam and DisplayProduct */}
          
          <DisplayProduct searchTerm={searchTerm}/>
       
         
        </div>
      </div>
    </>
  );
}

export default Search_bar;
