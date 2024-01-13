import { Link } from "react-router-dom";
import { Row, Col, Input } from "antd";
import "../../Home/HomeProps.css";
import "../../Home/DisplayProduct.css";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
const { Search } = Input;

const DisplayPhilipine = ({ cards, onUpdate, search }) => {
  const toggleFavorite = async (id) => {
    const card = cards.filter((e) => e.id == id);
    const updatedCard = { ...card[0], isFavorite: !card[0].isFavorite };
    await axios.put(`http://localhost:3001/all_data/add/${id}`, updatedCard);
    onUpdate();
  };

  return (
    <div style={{ padding: "2%" }}>
      <div className="popular">
        <div className="pop">
          <div className="popular1">
            <h2>ASEAN </h2>
          </div>
          <div className="popular2">
            <h2>Brunei ASEAN Celebration </h2>
          </div>
        </div>
      </div>
      <br />
      <br />

      <Row gutter={1}>
        {cards
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((card) => {
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

                <Link to={card.id.toString()}>
                  <div className="Boutton_Home">{card.name}</div>
                </Link>

                <br />
              </Col>
            );
          })}
      </Row>
    </div>
  );
};

export default DisplayPhilipine;
