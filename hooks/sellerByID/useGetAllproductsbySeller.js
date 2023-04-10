import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import getAllSellerByid from "./getAllproductsbySeller.Id.gql";

/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useGetAllSeller() {


  const { loading, data, refetch } = useQuery(getAllSellerByid);

  const sellers = data;
  useEffect(() => {
    refetch();
  },);

  return [sellers, loading, refetch];
}
