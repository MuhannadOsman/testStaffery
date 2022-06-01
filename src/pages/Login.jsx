import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {

  return (
    <section className="login-form">
      <div className="form-container w-50 m-auto text-center">
        <h2 className="text-center pt-3">Login</h2>
        <Form action="" className="pt-5  ">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <Button
            variant="primary"
            type="submit"
            className="btn mt-4 btn-action-primary m-auto "
          >
            Anmelden
          </Button>
        </Form>
        <div className="row mt-2">
          <div className="col-12">
            <Link to="/reset-password" className="text-decoration">
              Passwort vergessen?
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
