import { Table, Pagination } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useFetchData } from "../hooks/useFetchData";

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

function genColumn(name: string) {
  return {
    title: name,
    dataIndex: name,
    key: name,
  };
}
const columns: ColumnsType<Comment> = [
  {
    ...genColumn("id"),
    title: "شناسه",
  },
  {
    ...genColumn("name"),
  },
  {
    ...genColumn("email"),
  },
  {
    ...genColumn("body"),
  },
];
export const Comments = () => {
  const { loading, data, page, setPage, setPageSize, total } =
    useFetchData<Comment>("comments");

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
