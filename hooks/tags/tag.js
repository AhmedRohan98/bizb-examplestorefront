import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import tagsQuery from "./tag.gql";
export default useTags = (input) => {
  const { loading, data, refetch } = useQuery(tagsQuery, {
    variables: { input },
  });
  const tags = data?.tags;
  useEffect(() => {
    refetch();
  }, [input]);
  return [tags, loading, refetch];
};