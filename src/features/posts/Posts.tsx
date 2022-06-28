import { Table, Pagination, Button, Badge } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useSelector } from "react-redux";
import { Header } from "components/Header";
import {
  reset,
  incrementByAmount,
  counterSelector,
} from "components/Counter/couter.slice";
import { Post } from "./Post";
import { fetchPosts, postSelector } from "./posts.slice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/redux";

function genColumn(name: string) {
  return {
    title: name,
    dataIndex: name,
    key: name,
  };
}
const columns: ColumnsType<Post> = [
  {
    ...genColumn("id"),
    title: "شناسه",
  },
  {
    ...genColumn("userId"),
    title: "User Id",
  },
  {
    ...genColumn("title"),
  },
  {
    ...genColumn("body"),
  },
];
export const Posts = () => {
  const dispatch = useAppDispatch();
  const count = useSelector(counterSelector);
  const posts = useAppSelector(postSelector);

  useEffect(() => {
    dispatch(fetchPosts({ page: 1, pageSize: 10 }));
  }, [dispatch]);

  return (
    <>
      <Header title="POSTS TEST"></Header>

      <Button onClick={() => dispatch(incrementByAmount(10))}>Add 10</Button>
      <Badge count={count}>
        <Button onClick={() => dispatch(reset())}>Rest</Button>
      </Badge>
      <Table
        loading={posts.loading}
        columns={columns}
        dataSource={posts.data}
        pagination={false}
        rowKey="id"
      />
      <Pagination
        defaultCurrent={posts.page}
        onChange={(page, pageSize) => {
          dispatch(fetchPosts({ page, pageSize }));
          // dispatch(setPage(page));
          // dispatch(setPageSize(pageSize));
        }}
        total={posts.total}
      ></Pagination>
    </>
  );
};
