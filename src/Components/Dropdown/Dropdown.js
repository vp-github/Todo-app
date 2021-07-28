import React from "react";
import "./Dropdown.css";
import { Form, DatePicker, Button, Switch, Input, Popover } from "antd";
class Dropdown extends React.Component {
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
                this.props.priorityChange(this.props.item.id);
              }}
            />
          </div>

          <div className="dateDiv">
            <p className="p2"> Due Date</p>
            <DatePicker
              value={this.props.item.date}
              onChange={(value) => {
                this.props.dateChange(value, this.props.item.id);
              }}
            />
          </div>
        </div>
        <div className="notDiv">
          <p>Notes</p>
          <Input
            value={this.props.item.notes}
            onChange={(event) => {
              this.props.notesUpdate(event.target.value, this.props.item.id);
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
                this.props.colorChange("#ff704d", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonYellow"
              onClick={() => {
                this.props.colorChange("#ffff99", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonGreen"
              onClick={() => {
                this.props.colorChange("lightgreen", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonBlue"
              onClick={() => {
                this.props.colorChange("#b3d9ff", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonWhite"
              onClick={() => {
                this.props.colorChange("white", this.props.item.id);
              }}
            >
              .
            </Button>
            <Button
              type="primary"
              shape="circle"
              className="buttonPink"
              onClick={() => {
                this.props.colorChange("pink", this.props.item.id);
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
