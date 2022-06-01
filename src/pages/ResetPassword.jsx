import React from "react";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <section className="login-form">
      <div className="form-container w-50 m-auto text-center">
        <h2 className="text-center pt-3">Passwort zurücksetzen</h2>
        <Form action="" className="pt-5  ">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3 outline-warning"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          
          <Button
            variant="primary"
            type="submit"
            className="btn mt-4 btn-action-primary m-auto "
          >
            zurücksetzen
          </Button>
        </Form>
        <div className="row mt-2">
          <div className="col-12">
            <Link to="/login" className="text-decoration">
              Anmelden
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResetPassword;
