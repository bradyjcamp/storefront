import React from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Box, Card }  from '@mui/material';



const CheckoutForm = () => {

  let cart = useSelector((state) => state.cart);
  const handleTotalPrice = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].price;
    }
    return total;
  };

  return (
    <>
      {
        cart.cart.map((item) => (
          <div key={item._id}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price}</p>
          </div>
        ))
      }
      <h4>Total: ${handleTotalPrice(cart.cart).toFixed(2)}</h4>
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <Card sx={{ margin: "10px"}} >
      <Form>
        <Form.Group>
          <Form.Label>Billing Adress</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Full Name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Address" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="City" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="State" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Zip" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
      </Form>
      </Card>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
    <Card sx={{ margin: "10px"}} >
      <Form>
        <Form.Group>
          <Form.Label>Payment Details</Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="CreditCard">
          <Form.Control type="password" placeholder="Credit Card #" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Expiration --- mm/dd/yyy" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="CVV">
          <Form.Control type="password" placeholder="CVV" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Checkbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary">
          Submit
        </Button>
      </Form>
      </Card>
    </Box>
    </>
  );
};

export default CheckoutForm;