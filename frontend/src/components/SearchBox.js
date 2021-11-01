import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form onSubmit={submitHandler} className="d-flex">
     
        <Form.Control
          type="text"
          name="q"
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Search Products..."
          className="me-sm-1 ms-sm-5"
        ></Form.Control>

        <Button type="submit"  variant="outline-success" >
          Search
        </Button>
      
    </Form>
  );
};

export default SearchBox;
