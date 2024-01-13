import React from "react";
import { Button, Carousel } from "antd";
import "./CarouselHome.css"
// import hidden from "../../assent/logo/hidden.jpg"
import asean from "../../assent/asean.png"
import aseannum from "../../assent/aseannum.png"
import asean1 from"../../assent/asean1.png"

function CarouselHome() {

  return (
      <div>
      <Carousel autoplay autoplaySpeed={3000} className="cas">
      <div className="Itemstyle">
          <img className="img" src={asean1} />

        </div>
        <div className="Itemstyle">
        <img src="https://study-asean.mgimo.ru/images/4490916.jpg" width={"100%"} height={"100%"}/>
        </div>
        <div className="Itemstyle">
          <img className="img" src={asean} />

        </div>

        <div className="Itemstyle">
        <img className="img" src={aseannum} />
        </div>
       
      </Carousel>
     
      </div>
      
  );
}

export default CarouselHome;


// import React from "react";
// import { Carousel } from "antd";
// import "./CarouselHome.css";
// import asean from "../../assent/asean.png";
// import aseannum from "../../assent/aseannum.png";
// import asean1 from "../../assent/asean1.png";

// function CarouselHome() {
//   return (
//     <div className="carousel-container">
//       <Carousel autoplay autoplaySpeed={3000} className="cas">
//         <div className="Itemstyle">
//           <img className="img" src={asean1} alt="Asean 1" />
//         </div>
//         <div className="Itemstyle">
//           <img
//             src="https://study-asean.mgimo.ru/images/4490916.jpg"
//             alt="Asean Image"
//             className="responsive-image"
//           />
//         </div>
//         <div className="Itemstyle">
//           <img className="img" src={asean} alt="Asean" />
//         </div>
//         <div className="Itemstyle">
//           <img className="img" src={aseannum} alt="Asean Num" />
//         </div>
//       </Carousel>
//     </div>
//   );
// }

// export default CarouselHome;
