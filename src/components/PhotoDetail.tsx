import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../utils/api";
import { Photo } from "./Photo";
import { Card } from "antd";
const { Meta } = Card;

export const PhotoDetail = () => {
  const params = useParams();
  const [photo, setPhoto] = useState<Photo>();

  useEffect(() => {
    (async () => {
      const resp = await api.get<Photo[]>(`photos?id=` + params.id);      
      setPhoto(resp.data[0]);
    })();
  }, [params]);

  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        title={photo?.title}
        cover={
          <img
            alt="example"
            src={photo?.url}
          />
        }
      >
        <Meta title={photo?.title} description="www.instagram.com" />
      </Card>
    </>
  );
};
