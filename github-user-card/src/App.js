import React from "react";
import { Layout, Form, Input, Button } from "antd";
import axios from "axios";
import User from "./components/User";
import Followers from "./components/Followers";
const { Header: AntHeader } = Layout;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: {},
      followers: [],
      username: "",
    };
  }

  getUser = (values) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      username: values.username,
    });
    axios
      .get("https://api.github.com/users/" + values.username)
      .then((res) => {
        this.setState({
          ...this.state,
          userData: res.data,
        });
        axios.get(res.data.followers_url).then((res) => {
          this.setState({
            ...this.state,
            followers: res.data,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Layout>
        <AntHeader className="header">
          <div>Github User Card</div>
        </AntHeader>
        <Form className="forms" name="search" onFinish={this.getUser}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "please input your username!",
              },
            ]}
          >
            <Input name="username" placeholder="username" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
        {console.log(this.state.userData)}
        {this.state.userData.name ? (
          <div className="user-info">
            <User data={this.state.userData} />
            <h1>{this.state.userData.name} Followers</h1>
            <div className="user-followers">
              {this.state.followers.map((user) => {
                return <Followers data={user} />;
              })}
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Layout>
    );
  }
}

export default App;
