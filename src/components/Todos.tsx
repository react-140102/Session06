import { useEffect, useState } from "react";
import { Table, Pagination } from "antd";
import type { ColumnsType } from "antd/lib/table";
import axios from "axios";
import { useFetchData } from "../hooks/useFetchData";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

function genColumn(name: string) {
  return {
    title: name,
    dataIndex: name,
    key: name,
  };
}
const columns: ColumnsType<Todo> = [
  {
    ...genColumn("id"),
  },
  {
    ...genColumn("userId"),
    title: "User Id",
  },
  {
    ...genColumn("title"),
  },
  {
    ...genColumn("completed"),
  },
];
//custom hook
export const Todos = () => {
  //refactoring
  // بهینه کردن ساختار کد بدون تغییر در رفتار کرد

  const [first, setFirst] = useState(0);

  const { loading, data, page, setPage, setPageSize, total } =
    useFetchData<Todo>("todos");

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
