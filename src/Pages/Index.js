import React, { Component } from "react";
import "./style.scss";
import { Form, Button } from "react-bootstrap";
import My_image from "../image/js.png";
import axios from "axios";

class Index extends Component {
  state = {
    UserId: "",
  };

  //Need when want to use api.

  // header = {
  //   headers: {
  //     "Content-Type": "application/json",
  //     Module: "JW9tc0ByZWRsdGQl",
  //   },
  // };

  changehandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submithandler = async (event) => {
    event.preventDefault();
    this.props.history.push("/otp");

    //Need when want to use api.

    //   try {
    //     const response = await axios.post(
    //       `http://oms.redltd.tech:9004/api/auth/userlogin/`,
    //       this.state,
    //       this.header
    //     );

    //     if (response.data.success === true) {
    //       console.log(response.data);
    //       this.props.history.push("/home");
    //     }

    //     else if (response.data.success === false) {
    //       console.log(response.data);
    //     }
    //   } catch (error) {
    //     if (error) {
    //       console.log(error.response);
    //     }
    //  }
  };

  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-md-4 m-auto pt">
              <div className="card border-0 bg-white shadow">
                <div className="card-header bg-white text-center p-3">
                  <img
                    src={My_image}
                    alt="Logo"
                    style={{ width: 50, height: 50 }}
                  />
                  <h3>Login</h3>
                </div>
                <div className="card-body p-3">
                  <Form onSubmit={this.submithandler}>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Phone Number</label>
                      <input
                        type="number"
                        className="form-control"
                        name="UserId"
                        placeholder="+8801xxxxxxxxx"
                        onChange={this.changehandler}
                        required
                      ></input>
                    </div>
                    <hr />
                    <Button type="submit" className="btn btn-primary bttn">
                      NEXT
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Index;
