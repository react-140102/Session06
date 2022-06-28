import { Button, Layout, Menu } from "antd";
import { lazy } from "react";
import { SelectColor } from "./SelectColor";
import { Link, Outlet } from "react-router-dom";
import { useAppDispatch } from "hooks/redux";
import { logout } from "features/auth/auth.slice";

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

export const AppLayout = () => {
  const dispatch = useAppDispatch();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="post">
            <Link to="/posts">Posts</Link>
          </Menu.Item>
          <Menu.Item key="comments">
            <Link to="/comments">Comments</Link>
          </Menu.Item>
          <Menu.Item key="tasks">
            <Link to="/tasks">Tasks</Link>
          </Menu.Item>
          <Menu.Item key="todos">
            <Link to="/todos">Todos</Link>
          </Menu.Item>
          <Menu.Item key="photos">
            <Link to="/photos">Photos</Link>
          </Menu.Item>
          <Menu.Item key="counter">
            <Link to="/counter">Counter</Link>
          </Menu.Item>
          <Menu.Item key="logout">
            <Button onClick={() => dispatch(logout())}>logout</Button>
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
};
