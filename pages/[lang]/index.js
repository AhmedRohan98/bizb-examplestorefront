import React, { Component } from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import Helmet from "react-helmet";
import withCatalogItems from "containers/catalog/withCatalogItems";
import ProductGrid from "components/ProductGrid";
import Layout from "components/Layout";
import dynamic from "next/dynamic";
const DynamicSlider = dynamic(() => import("../../components/Header/sliderdata"));
import { inPageSizes } from "lib/utils/pageSizes";
import { withApollo } from "lib/apollo/withApollo";

import { locales } from "translations/config";
import fetchPrimaryShop from "staticUtils/shop/fetchPrimaryShop";
import fetchTranslations from "staticUtils/translations/fetchTranslations";

class ProductGridPage extends Component {
  static propTypes = {
    catalogItems: PropTypes.array,
    catalogItemsPageInfo: PropTypes.object,
    isLoadingCatalogItems: PropTypes.bool,
    routingStore: PropTypes.object,
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired,
      }),
    }),
    headerType: PropTypes.bool,
    tag: PropTypes.object,
    uiStore: PropTypes.shape({
      pageSize: PropTypes.number.isRequired,
      setPageSize: PropTypes.func.isRequired,
      setSortBy: PropTypes.func.isRequired,
      sortBy: PropTypes.string.isRequired,
    }),
  };

  componentDidMount() {
    const { routingStore } = this.props;
    routingStore.setTagId(null);
  }

  setPageSize = (pageSize) => {
    this.props.routingStore.setSearch({ limit: pageSize });
    this.props.uiStore.setPageSize(pageSize);
  };

  setSortBy = (sortBy) => {
    this.props.routingStore.setSearch({ sortby: sortBy });
    this.props.uiStore.setSortBy(sortBy);
  };

  render() {
    const {
      catalogItems,
      catalogItemsPageInfo,
      isLoadingCatalogItems,
      routingStore: { query },
      shop,
      uiStore,
    } = this.props;
    const pageSize = query && inPageSizes(query.limit) ? parseInt(query.limit, 10) : uiStore.pageSize;
    const sortBy = query && query.sortby ? query.sortby : uiStore.sortBy;

    let pageTitle;
    if (shop) {
      pageTitle = shop.name;
      if (shop.description) pageTitle = `${pageTitle} | ${shop.description}`;
    } else {
      pageTitle = "Storefront";
    }

    return (
      typeof window !== undefined && (
        <Layout>
          <Helmet title={pageTitle} meta={[{ name: "descrition", content: shop && shop.description }]} />
          <DynamicSlider />
        </Layout>
      )
    );
  }
}

/**
 *  Static props for the main layout
 *
 * @param {String} lang - the shop's language
 * @returns {Object} the props
 */
export async function getStaticProps({ params: { lang } }) {
  const primaryShop = await fetchPrimaryShop(lang);
  const translations = await fetchTranslations(lang, ["common"]);
  console.log("shop.......");
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
  console.log("get staticpaths");
  return {
    paths: locales.map((locale) => ({ params: { lang: locale } })),
    fallback: false,
  };
}

export default withApollo()(withCatalogItems(inject("routingStore", "uiStore")(ProductGridPage)));
