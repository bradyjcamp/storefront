import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Box, Card }  from '@mui/material';



const CheckoutForm = () => {

  //state for displaying message after pressing submit in checkout
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  //brings in cart state from redux to display list of items in cart
  let cart = useSelector((state) => state.cart);

  //function for added total price in checkout
  const handleTotalPrice = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i].price;
    }
    return total;
  };

  const handleCheckout = () => {
    setPurchaseComplete(true);
  }
  
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
          <Form.Control type="text" placeholder="Full Name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Address" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="City" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="State" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Zip" />
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
          <Form.Control type="text" placeholder="Expiration --- mm/dd/yyy" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="CVV">
          <Form.Control type="password" placeholder="CVV" />
        </Form.Group>
        {purchaseComplete ? <h4>Your Order has been Submitted</h4> : <p></p>}
        <Button variant="primary" onClick={() => handleCheckout()}>
          Submit
        </Button>
      </Form>
      </Card>
    </Box>
    </>
  );
};

export default CheckoutForm;
