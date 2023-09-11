import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import getAllSeller from "./getAllSeller.gql";
/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useGetAllSeller(first, offset, query) {
  const authToken = typeof window !== "undefined" ? window.localStorage.getItem("accounts:accessToken") : undefined;
  const { loading, data, refetch, fetchMore } = useQuery(getAllSeller, {
    variables: {
      first,
      offset,
      query,
    },
  });
  const sellers = data?.getAllNewSeller?.nodes;
  const totalCount = data?.getAllNewSeller?.totalCount;
  useEffect(() => {
    refetch();
  }, [authToken]);
  return [sellers, totalCount, loading, refetch];
}
