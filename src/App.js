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
    this.updateState = this.updateState.bind(this);
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

  updateState(updated) {
    this.setState({
      todoItem: updated,
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
          updateState={this.updateState}
        />
      </Layout>
    );
  }
}
export default TodoApp;
