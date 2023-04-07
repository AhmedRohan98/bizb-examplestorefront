import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import getAllSeller from "./getAllSeller.gql";

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useGetAllSeller() {
  const authToken = typeof window !== "undefined" ? window.localStorage.getItem("accounts:accessToken") : undefined;

  const { loading, data, refetch } = useQuery(getAllSeller);

  const sellers = data?.getAllSeller;
  useEffect(() => {
    refetch();
  }, [authToken]);

  return [sellers, loading, refetch];
}
