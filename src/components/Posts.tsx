import { Table, Pagination } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useFetchData } from "../hooks/useFetchData";

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

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
//custom hook
export const Posts = () => {
  //refactoring
  // بهینه کردن ساختار کد بدون تغییر در رفتار کرد

  const { loading, data, page, setPage, setPageSize, total } =
    useFetchData<Post>("posts");

  return (
    <>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey="id"
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
