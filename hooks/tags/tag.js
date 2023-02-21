import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import tagsQuery from "./tag.gql";
const useTags = () => {
    let [tags,setTags] = React.useState([]);
  const { loading, data } = useQuery(tagsQuery, {
    variables: { shopId:'cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==' },
  });
  
  useEffect(() => {
    if(data) {
        setTags(data?.tags?.nodes)
    }
  }, [data]);
  return [tags, loading];
};

export default useTags