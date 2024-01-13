import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../Home/HomeList.css";
import axios from "axios";

const CambodiaList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/all_data/all");
        setData(data);
        console.log(data)
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const goBack = () => {
    window.history.back(); // Navigate back using window.history
  };
  const { id } = useParams();
  const Data = data.find((e) => e.id == id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <article className="card-container">
        <div className="conten">
          <img className="conten_img" src={Data.image_list} alt="" />
        </div>
        <div className="conten">
          <h1 className="conten_name">{Data.name_list}</h1>
          <p>{Data.desc_list}</p>
          <p>{Data.descs_list}</p>
        </div>
        <button className="backBtn" onClick={goBack}>
          Back
        </button>
      </article>
    );
  }
};

export default CambodiaList;
