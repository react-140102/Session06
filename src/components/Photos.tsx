import { Table, Pagination, Image } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom";
import { useFetchData } from "../hooks/useFetchData";

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  img: string; //base64
}

function genColumn(name: string) {
  return {
    title: name,
    dataIndex: name,
    key: name,
  };
}
const columns: ColumnsType<Photo> = [
  {
    ...genColumn("id"),
    title: "شناسه",
  },
  {
    ...genColumn("title"),
    render: (title: string, record) => (
      <Link to={"/photos/" + record.id}>{title}</Link>
    ),
  },
  {
    ...genColumn("thumbnailUrl"),
    render: (thumbnailUrl: string) => <Image src={thumbnailUrl}></Image>,
  },
];
export const Photos = () => {
  const { loading, data, page, setPage, setPageSize, total } =
    useFetchData<Photo>("photos");

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
