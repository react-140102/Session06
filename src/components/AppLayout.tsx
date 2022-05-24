import { Layout, Menu, Divider } from "antd";
import { Comments } from "./Comments";
import { Posts } from "./Posts";
import { Todos } from "./Todos";
import TaskList from "./Task/TaskList";
import { SelectColor } from "./SelectColor";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: "1",
    label: "Posts",
  },
  {
    key: "2",
    label: "Comments",
  },
];

export const AppLayout = () => (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      />
    </Header>
    <Content style={{ padding: "0 50px" }}>
      <div className="site-layout-content">
        <Divider></Divider>
        <SelectColor></SelectColor>
        <Divider></Divider>
        <TaskList></TaskList>
        <Divider />
        <Todos></Todos>
        <Divider />
        <Posts></Posts>
        <Divider />
        <Comments></Comments>
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>ReactCourse 140102</Footer>
  </Layout>
);
