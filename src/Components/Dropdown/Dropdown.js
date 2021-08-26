import React from "react";
import "./Dropdown.css";
import { Form, DatePicker, Button, Switch, Input, Modal } from "antd";
import moment from "moment";
class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.priorityChange = this.priorityChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.notesUpdate = this.notesUpdate.bind(this);
  }
  priorityChange(id) {
    const val = this.props.todoList;
    val.map((i) => {
      if (i.id === id) {
        i.priority = !i.priority;
      }
    });
    this.props.updateState(val);
  }

  colorChange(color, id) {
    const val = this.props.todoList;
    val.map((i) => {
      if (i.id === id) {
        i.color = color;
      }
    });
    this.props.updateState(val);
  }

  dateChange(value, id) {
    const val = this.props.todoList;
    val.map((i) => {
      if (i.id === id) {
        i.date = value;
      }
    });
    this.props.updateState(val);
  }
  notesUpdate(event, id) {
    const val = this.props.todoList;
    val.map((i) => {
      if (i.id === id) {
        i.notes = event;
      }
    });
    this.props.updateState(val);
  }

  render() {
    return (
      <Form className="ddform">
        <div className="div1">
          <div className="switchDiv">
            <p className="p1">Priority </p>
            <Switch
              className="switch"
              checkedChildren="High"
              unCheckedChildren="Low"
              checked={this.props.item.priority}
              onChange={() => {
                this.priorityChange(this.props.item.id);
              }}
            />
          </div>

          <div className="dateDiv">
            <p className="p2"> Due Date</p>
            <DatePicker
              value={moment(this.props.item.date)}
              onChange={(value) => {
                this.dateChange(value.toString(), this.props.item.id);
              }}
            />
          </div>
        </div>

        <div className="notDiv">
          <p>Notes</p>
          <Input
            value={this.props.item.notes}
            onChange={(event) => {
              this.notesUpdate(event.target.value, this.props.item.id);
            }}
          />
        </div>

        <div className="div2">
          <p>Pick a Color</p>
          <div className="buttonDiv">
            <Button
              type="primary"
              shape="circle"
              className="buttonRed"
              onClick={() => {
                this.colorChange("#ff704d", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonYellow"
              onClick={() => {
                this.colorChange("#ffff99", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonGreen"
              onClick={() => {
                this.colorChange("lightgreen", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonBlue"
              onClick={() => {
                this.colorChange("#b3d9ff", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonWhite"
              onClick={() => {
                this.colorChange("white", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonPink"
              onClick={() => {
                this.colorChange("pink", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              className="delButton"
              type="primary"
              onClick={() => {
                this.props.delete(this.props.item.id);
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </Form>
    );
  }
}
export default Dropdown;
