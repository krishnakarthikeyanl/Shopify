// import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Usefetch from './Usefetch';
// import './Home.css';
//  const Home = () => {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     fetch("http://localhost:4000/products", { method: "GET" })
// //       .then((response) => {
// //         if (!response.ok) {
// //           throw new Error("Network response was not ok");
// //         }
// //         return response.json();
// //       })
// //       .then((data) => {
// //         setProducts(data);
// //         setLoading(false);
// //       })
// //       .catch((err) => {
// //         setError(err.message);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) {
// //     return <h2>Loading...</h2>;
// //   }

// //   if (error) {
// //     return <h2>Error: {error}</h2>;
// //   }
//    let {products,error}=Usefetch("http://localhost:4000/products")
//    if(error){
//     return <h2>Error: {error}</h2>
//    }

//    return (
//     <Container className="my-4">
//   <Row className="justify-content-center g-4">
//     {products.map((product) => (
//       <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
//         <Card className="product-card h-100">
//           <Card.Img
//             variant="top"
//             src={product.image}
//             className="product-image"
//           />
//           <Card.Body className="d-flex flex-column">
//             <Card.Title>{product.title}</Card.Title>
//             <Card.Text>${product.price}</Card.Text>
//             <div className="mt-auto d-grid">
//               <Button variant="success">Buy Now</Button>
//             </div>
//           </Card.Body>
//         </Card>
//       </Col>
//     ))}
//   </Row>
// </Container>

//   );
// };

// export default Home;
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Usefetch from './Usefetch';
import './Home.css';

const Home = () => {
  const { products, error } = Usefetch("http://localhost:4000/products");

  if (error) {
    return <h2>Error: {error}</h2>;
  }

  return (
    <Container className="my-4">
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card h-100">
              <Card.Img
                variant="top"
                src={product.image}
                className="product-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <div className="mt-auto">
                  <Button variant="primary" className="w-100">
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
