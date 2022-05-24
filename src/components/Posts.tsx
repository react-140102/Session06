import { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import type { ColumnsType } from "antd/lib/table";
import axios from "axios";

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

export const Posts = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    // async / await
    // iife
    (async () => {
      const resp = await axios.get<Post[]>(
        `https://jsonplaceholder.typicode.com/posts?_limit=${pageSize}&_page=${page}`
      );
      setData(resp.data);
      setTotal(+resp.headers["x-total-count"]);
    })();
  }, [page, pageSize]);

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
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
