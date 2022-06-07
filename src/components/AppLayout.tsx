import { Layout, Menu, Divider } from "antd";
import {lazy, Suspense} from 'react';
import { Comments } from "./Comments";
import { Posts } from "./Posts";
import { Todos } from "./Todos";
import TaskList from "./Task/TaskList";
import { SelectColor } from "./SelectColor";
import { Link, Route, Routes, Navigate } from "react-router-dom";
import {NotFound} from './NotFound';

// import { Photos } from "./Photos";
// import { PhotoDetail } from "./PhotoDetail";

const Photos = lazy(() => import("./Photos").then(({ Photos }) => ({ default: Photos })));
const PhotoDetail = lazy(() => import("./PhotoDetail").then(({ PhotoDetail }) => ({ default: PhotoDetail })));

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
          <Route path="photos" element={<Suspense fallback={<div>loading ...</div>}><Photos /></Suspense>  } />
          <Route path="photos/:id" element={<Suspense fallback={<div>loading ...</div>}><PhotoDetail /></Suspense>} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace={true} />}/>
        </Routes>
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>ReactCourse 140102</Footer>
  </Layout>
);
