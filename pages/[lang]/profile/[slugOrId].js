import React, { useState, useEffect } from "react";
import Layout from "../../../components/Layout";
import { withApollo } from "lib/apollo/withApollo";
import { Grid, Typography } from "@material-ui/core";
import inject from "hocs/inject";
import SellersCatalogItems from "containers/catalog/withSellerCatalogItem";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";

import fetchTranslations from "staticUtils/translations/fetchTranslations";
import { locales } from "translations/config";
import useGetAllSeller from "../../../staticUtils/sellers/fetchSellers.js";

function SellerPublicProfile(props) {
  console.log(props.catalogItems, "propsccccccccccccccccccccccccc");
  return <Layout>heeeeeeeeeeeeeeee</Layout>;
}
export async function getStaticProps({ params: { slugOrId, lang } }) {
  console.log("slug or id in");
  const primaryShop = await fetchPrimaryShop(lang);
  const translations = await fetchTranslations(lang, ["common"]);
  // const profile = await fetchProfileInfo(slugOrId && slugOrId[0]);

  if (!primaryShop?.shop) {
    return {
      props: {
        shop: null,
        ...translations,
      },
      // eslint-disable-next-line camelcase
      unstable_revalidate: 1, // Revalidate immediately
    };
  }

  return {
    props: {
      ...primaryShop,
      ...translations,
      userName: slugOrId && slugOrId[0],
    },
    // eslint-disable-next-line camelcase
    unstable_revalidate: 120, // Revalidate each two minutes
  };
}

/**
 *  Static paths for the main layout
 *
 * @returns {Object} the paths
 */
export async function getStaticPaths() {
  const sellers = await useGetAllSeller();
  let paths = [];

  if (sellers && sellers.length > 0) {
    paths = sellers.map((seller) => ({
      params: {
        lang: "en",
        slugOrId: seller?._id,
      },
    }));
  }
console.log(paths,"paths")
  return {
    paths,
    fallback: false,
  };
}
export default withApollo()(SellersCatalogItems((SellerPublicProfile)));
