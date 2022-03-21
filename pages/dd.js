import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_CODY_LIST, GET_MUSIC_ARRAY } from "../graphQL/schema";

const dd = () => {
  const [codyid, getCodyId] = useState([]);
  const [music, getMusic] = useState([]);
  const [codyarray, getcodyarray] = useState([]);
  const { data } = useQuery(GET_CODY_LIST);
  const { data: musicarray } = useQuery(GET_MUSIC_ARRAY);

  useEffect(() => {
    if (data) {
      getCodyId(data.codylist);
    }
    if (musicarray) {
      getMusic(musicarray.musicarray);
    }
  }, [data, musicarray]);

  useEffect(() => {
    codyid.map((i) => {
      getcodyarray((prev) => [...prev, i.id]);
    });
  }, [codyid]);

  return (
    <div>
      <div>g</div>
    </div>
  );
};

export default dd;
