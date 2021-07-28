import React from "react";
import "./ListItems.css";
import { Input, Form, Checkbox, Popover } from "antd";
import { CaretDownFilled } from "@ant-design/icons";
import Dropdown from "../Dropdown/Dropdown";
class ListItems extends React.Component {
  getDropdown(item) {
    return (
      <Dropdown
        item={item}
        delete={this.props.deleteItem}
        edit={this.props.editItem}
        priorityChange={this.props.priorityChange}
        colorChange={this.props.colorChange}
        dateChange={this.props.dateChange}
        notesUpdate={this.props.notesUpdate}
      />
    );
  }

  render() {
    const items = this.props.item;
    const listitem = items.map((item) => {
      return (
        <div className="list" key={item.id}>
          <Form className="tasks" style={{ backgroundColor: item.color }}>
            <Checkbox
              className="checkbox"
              onChange={() => {
                this.props.checkedStatus(item.id);
              }}
            ></Checkbox>

            <Input
              type="text"
              value={item.text}
              className="editclass"
              onChange={(e) => this.props.editItem(e.target.value, item.id)}
              style={{ textDecoration: item.checked ? "line-through" : "none" }}
            />
            <Popover
              className="span2"
              trigger="click"
              content={this.getDropdown(item)}
              title="Edit Task"
              placement="bottomRight"
            >
              <CaretDownFilled className="icon" style={{ fontSize: "25px" }} />
            </Popover>
          </Form>
        </div>
      );
    });
    return <div className="listClass">{listitem}</div>;
  }
}
export default ListItems;
