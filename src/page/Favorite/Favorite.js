import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Favorite = () => {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [updateFlag, setUpdateFlag] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3001/all_data");
        const favoriteCard = data.filter((e) => e.isFavorite == 1);
        setCards(favoriteCard);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [updateFlag]);

  const toggleFavorite = async (id) => {
    const card = cards.filter((e) => e.id == id);
    const updatedCard = { ...card[0], isFavorite: !card[0].isFavorite };
    await axios.put(`http://localhost:3001/all_data/add/${id}`, updatedCard);
    setUpdateFlag(!updateFlag);
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Row gutter={1}>
        {cards.map((card) => {
          return (
            <Col
              sm={{ span: 24 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              key={card.id}
            >
              <div className="product">
                <img src={card.image} className="Home_img" />
                <div className="name">
                  <b>{card.name}</b>
                </div>
                <div className="heart">
                  <div>
                    <div className="desc">{card.desc}</div>
                    <div className="descs">{card.descs}</div>
                  </div>

                  <button
                    className="heartBtn"
                    onClick={() => toggleFavorite(card.id)}
                  >
                    {card.isFavorite ? (
                      <FaHeart color="red" />
                    ) : (
                      <FaHeart color="black" />
                    )}
                  </button>
                </div>
              </div>

              <br />

              <Link to={`/${card.route}/${card.id}`}>
                <div className="Boutton_Home">{card.name}</div>
              </Link>

              <br />
            </Col>
          );
        })}
      </Row>
    );
  }
};

export default Favorite;
