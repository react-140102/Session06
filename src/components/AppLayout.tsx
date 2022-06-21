import { Layout, Menu, Divider } from "antd";
import { lazy, Suspense } from "react";
import { Comments } from "./Comments";
import { Posts } from "../features/posts/Posts";
import { Todos } from "./Todos";
import TaskList from "./Task/TaskList";
import { SelectColor } from "./SelectColor";
import { Link, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { NotFound } from "./NotFound";
import Login from "features/auth/Login";

// import { Photos } from "./Photos";
// import { PhotoDetail } from "./PhotoDetail";

const Photos = lazy(() =>
  import("./Photos").then(({ Photos }) => ({ default: Photos }))
);
const PhotoDetail = lazy(() =>
  import("./PhotoDetail").then(({ PhotoDetail }) => ({ default: PhotoDetail }))
);
const Counter = lazy(() => import("./Counter/Couter"));

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
        <Menu.Item>
          <Link to="/photos">Photos</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/counter">Counter</Link>
        </Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
        <SelectColor></SelectColor>
        <Outlet></Outlet>
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>ReactCourse 140102</Footer>
  </Layout>
);
