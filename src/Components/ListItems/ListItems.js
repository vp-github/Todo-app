import React from "react";
import "./ListItems.css";
import { Input, Form, Checkbox, Popover, Tooltip, Select } from "antd";
import { CaretDownFilled, CaretUpFilled, FireFilled } from "@ant-design/icons";
import Dropdown from "../Dropdown/Dropdown";
class ListItems extends React.Component {
  constructor(props) {
    super(props);

    this.checkedStatus = this.checkedStatus.bind(this);
    this.clickedStatus = this.clickedStatus.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  clickedStatus(id) {
    const val = this.props.item;
    val.map((i) => {
      if (i.id === id) {
        i.clicked = !i.clicked;
      }
    });
    this.props.updateState(val);
  }
  editItem(text, id) {
    const inp = this.state.todoItem;
    inp.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
    });
    this.props.updateState(inp);
  }

  checkedStatus(id) {
    const val = this.props.item;
    val.map((i) => {
      if (i.id === id) {
        i.checked = !i.checked;
      }
    });
    this.props.updateState(val);
  }

  getDropdown(item) {
    return (
      <Dropdown
        todoList={this.props.item}
        item={item}
        updateState={this.props.updateState}
        delete={this.props.deleteItem}
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
                this.checkedStatus(item.id);
              }}
            ></Checkbox>
            <Tooltip placement="b" title={item.notes}>
              <Input
                type="text"
                value={item.text}
                className="editclass"
                onChange={(e) => this.editItem(e.target.value, item.id)}
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              />
            </Tooltip>
            {item.priority ? <FireFilled className="star" /> : null}

            <Popover
              className="span2"
              trigger="click"
              content={this.getDropdown(item)}
              title="Edit Task"
              placement="bottomRight"
              onVisibleChange={() => {
                this.clickedStatus(item.id);
              }}
            >
              {item.clicked ? (
                <CaretUpFilled className="iconChange" />
              ) : (
                <CaretDownFilled className="iconChange" />
              )}
            </Popover>
          </Form>
        </div>
      );
    });
    return <div className="listClass">{listitem}</div>;
  }
}
export default ListItems;
