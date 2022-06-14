import { Table, Pagination, Button, Badge } from "antd";
import type { ColumnsType } from "antd/lib/table";
import { useDispatch, useSelector } from "react-redux";
import { useFetchData } from "hooks/useFetchData";
import { Header } from "components/Header";
import {
  reset,
  incrementByAmount,
  counterSelector,
} from "components/Counter/couter.slice";

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
  const dispatch = useDispatch();
  const count = useSelector(counterSelector);

  //refactoring
  // بهینه کردن ساختار کد بدون تغییر در رفتار کرد

  const { loading, data, page, setPage, setPageSize, total } =
    useFetchData<Post>("posts");

  return (
    <>
      <Header title="پست"></Header>

      <Button onClick={() => dispatch(incrementByAmount(10))}>Add 10</Button>
      <Badge count={count}>
        <Button onClick={() => dispatch(reset())}>Rest</Button>
      </Badge>
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
