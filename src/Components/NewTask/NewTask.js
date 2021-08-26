import React from "react";
import "./NewTask.css";
import { PlusOutlined, UserAddOutlined } from "@ant-design/icons";
import { Form, Button, Input, Layout } from "antd";
import moment from "moment";

class NewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: {
        text: "",
        id: "",
        color: "white",
        priority: false,
        checked: false,
        date: moment().toString(),
        notes: "",
        clicked: false,
      },
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState((prevState) => ({
      currentValue: {
        ...prevState.currentValue,
        text: e.target.value,
      },
    }));
  }

  submitHandler() {
    const { currentValue } = this.state;
    const newItemValues = {
      ...this.state.currentValue,
      id: Date.now(),
    };

    if (newItemValues.text !== "") {
      this.props.addItem(newItemValues);
      this.setState((prevState) => ({
        currentValue: {
          ...prevState.currentValue,
          text: "",
          id: "",
        },
      }));
    } else {
      alert("Task Cannot Be Empty!");
    }
  }

  render() {
    return (
      <Layout className="formLayout">
        <Form className="newForm">
          <Button
            type="primary"
            className="addSym"
            onClick={this.submitHandler}
          >
            <PlusOutlined />
          </Button>
          <Input
            className="addNew"
            placeholder="Add a New Task"
            onPressEnter={this.submitHandler}
            value={this.state.currentValue.text}
            onChange={this.changeHandler}
          ></Input>
        </Form>
      </Layout>
    );
  }
}
export default NewTask;
