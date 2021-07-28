import React from "react";
import "./App.css";
import { Layout, PageHeader } from "antd";
import NewTask from "./Components/NewTask/NewTask.js";
import ListItems from "./Components/ListItems/ListItems.js";

const { Header } = Layout;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.priorityChange = this.priorityChange.bind(this);
    this.colorChange = this.colorChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.notesUpdate = this.notesUpdate.bind(this);
    this.checkedStatus = this.checkedStatus.bind(this);
  }

  addItem(newTodoItem) {
    
    this.setState((prevState) => ({
      todoItem: [...prevState.todoItem, newTodoItem],
    }));
  }

  deleteItem(id) {
    const filtered = this.state.todoItem.filter((i) => i.id !== id);
    this.setState({
      todoItem: filtered,
    });
  }

  editItem(text, id) {
    const inp = this.state.todoItem;
    inp.map((item) => {
      if (item.id === id) {
        item.text = text;
      }
    });
    this.setState({
      todoItem: inp,
    });
  }

  priorityChange(id) {
    const val = this.state.todoItem;
    val.map((i) => {
      if (i.id === id) {
        i.priority = !i.priority;
      }
    });
    this.setState({
      todoItem: val,
    });
  }

  colorChange(color, id) {
    const val = this.state.todoItem;
    val.map((i) => {
      if (i.id === id) {
        i.color = color;
      }
    });
    this.setState({
      todoItem: val,
    });
  }

  dateChange(value, id) {
    const val = this.state.todoItem;
    val.map((i) => {
      if (i.id === id) {
        i.date = value;
      }
    });
    this.setState({
      todoItem: val,
    });
  }
  notesUpdate(event, id) {
    const val = this.state.todoItem;
    val.map((i) => {
      if (i.id === id) {
        i.notes = event;
      }
    });
    this.setState({
      todoItem: val,
    });
  }
  checkedStatus(id) {
    const val = this.state.todoItem;
    val.map((i) => {
      if (i.id === id) {
        i.checked = !i.checked;
      }
    });
    this.setState({
      todoItem: val,
    });
  }
  render() {
    return (
      <Layout className="mainLayout">
        <Header className="headingHeader">
          <PageHeader className="mainHeading">
            Shoot things you got to do!
          </PageHeader>
        </Header>
        <NewTask addItem={this.addItem} />
        <ListItems
          item={this.state.todoItem}
          deleteItem={this.deleteItem}
          editItem={this.editItem}
          priorityChange={this.priorityChange}
          colorChange={this.colorChange}
          dateChange={this.dateChange}
          notesUpdate={this.notesUpdate}
          checkedStatus={this.checkedStatus}
        />
      </Layout>
    );
  }
}
export default TodoApp;
