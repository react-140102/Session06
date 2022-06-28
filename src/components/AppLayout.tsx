import { Layout, Menu } from "antd";
import { lazy } from "react";
import { SelectColor } from "./SelectColor";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "hooks/redux";
import { authSelector } from "features/auth/auth.slice";

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
  const auth = useAppSelector(authSelector);
  if (!auth.token) {
    return <Navigate to="/login"></Navigate>;
  }
  return (
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
};
