import axios from "axios";
import { useEffect, useState } from "react";

//CUSTOM HOOK
export const useFetchData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const resp = await axios.get<T[]>(
        `https://jsonplaceholder.typicode.com/${endpoint}?_limit=${pageSize}&_page=${page}`
      );
      setData(resp.data);
      setTotal(+resp.headers["x-total-count"]);
      setLoading(false);
    })();
  }, [page, pageSize, endpoint]);

  return {loading, data, page, setPage, setPageSize, total};
}