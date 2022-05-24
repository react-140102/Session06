import { Layout, Menu, Divider } from "antd";
import { Comments } from "./Comments";
import { Posts } from "./Posts";
import { Todos } from "./Todos";
import TaskList from "./Task/TaskList";
import { SelectColor } from "./SelectColor";
import { Link, Route, Routes } from "react-router-dom";

const { Header, Content, Footer } = Layout;

export const AppLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item>
          <Link to="/posts">Posts</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/comments">Comments</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/tasks">Tasks</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/todos">Todos</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
        <SelectColor></SelectColor>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>HOME</h1>
              </>
            }
          />
          <Route path="posts" element={<Posts />} />
          <Route path="tasks" element={<TaskList />} />
          <Route path="comments" element={<Comments />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>ReactCourse 140102</Footer>
  </Layout>
);
