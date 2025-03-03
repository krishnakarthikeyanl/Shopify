import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Usefetch from './Usefetch';

 const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:4000/products", { method: "GET" })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <h2>Loading...</h2>;
//   }

//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }
   let {products,error}=Usefetch("http://localhost:4000/products")

  return (
    <div style={{display:'flex',justifyContent:"space-evenly",alignItems:"center"}}>
     
      <Row> 
        {products.map((product) => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card style={{ width: '18rem',flexGrow:1,padding:15,justifyContent:"Center"}}>
              <center>   <Card.Img variant="top" src={product.image} alt={product.name} style={{width:"9rem",height:"12rem"}}/>
              </center> 
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text style={{overflow:"scroll",height:"200px"}}>{product.description}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
  