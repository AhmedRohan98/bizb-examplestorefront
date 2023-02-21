import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import   catalogItems from "./catagories.gql";
const useTags = () => {
    let [tags,setTags] = React.useState([]);
  const { loading, data } = useQuery(  catalogItems, {
    variables: { shopId:'cmVhY3Rpb24vc2hvcDp4TW1NRmFOR2I0TGhDY3dNeg==',
    tagIds: "cmVhY3Rpb24vdGFnOnBldGQydko2NmV3RWdjeWZ0"
 },
  });
  
  useEffect(() => {
    if(data) {
        setTags(data?.catalogItems?.nodes)
    }
  }, [data]);
  return [catalogItems, loading];
};

export default useTags