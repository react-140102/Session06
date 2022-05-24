import { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import type { ColumnsType } from "antd/lib/table";
import axios from "axios";
import { useFetchData } from "../hooks/useFetchData";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const columns: ColumnsType<Post> = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "User Id",
    dataIndex: "userId",
    key: "userId",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Body",
    dataIndex: "body",
    key: "body",
  },
];
//custom hook
export const Posts = () => {
  //refactoring
  // بهینه کردن ساختار کد بدون تغییر در رفتار کرد

  const [first, setFirst] = useState(0);

  const { loading, data, page, setPage, setPageSize, total } =
    useFetchData<Post>("posts");

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Pagination
        defaultCurrent={page}
        onChange={(page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        }}
        total={total}
      ></Pagination>
    </>
  );
};
