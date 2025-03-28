// import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Config from "./Products.json";
// import "./Products.css";

// const Products = () => {
//   const cardArr = Config;

//   return (
//     <div className="product">
//       <h3>💚🍃OUR PRODUCTS:</h3>
//     <div className="row">
//       {cardArr.map((eachCard, index) => (
//         <div key={index} className="card-container">
//           <Card className="card">
//             <Card.Img
//               className="card-img-top"
//               variant="top"
//               src={require(`./images/${eachCard.img}.jpg`)}
//               alt={eachCard.title}
//             />
//             <Card.Body className="card-body">
//               <Card.Title className="card-title">{eachCard.title}</Card.Title>
//               <Card.Text className="card-text">{eachCard.text}</Card.Text>
//               <Button
//                 variant="primary"
//                 onClick={() => alert(`Price: ${eachCard.Price}`)}
//               >
//                 Show Price
//               </Button>
//             </Card.Body>
//           </Card>
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// };

// export default Products;





import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Config from "./Products.json";
import "./Products.css";

const Products = () => {
  return (
    <div className="product">
      <h3>💚🍃OUR PRODUCTS:</h3>
      <div className="row">
        {Config.map((eachCard, index) => (
          <div key={index} className="card-container">
            <Card className="card">
              <Card.Img
                className="card-img-top"
                variant="top"
                src={eachCard.img}
                alt={eachCard.Title}
              />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{eachCard.Title}</Card.Title>
                <Card.Text className="card-text">{eachCard.text}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => alert(`Price: ${eachCard.Price}`)}
                >
                  Show Price
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

