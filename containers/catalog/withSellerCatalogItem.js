import React from "react";
import PropTypes from "prop-types";
import inject from "hocs/inject";
import { Query } from "@apollo/react-components";
import hoistNonReactStatic from "hoist-non-react-statics";
import { pagination, paginationVariablesFromUrlParams } from "lib/utils/pagination";
import sellercatalogItemsQuery from "./sellerCatalogItems.gql";

/**
 * withCatalogItems higher order query component for fetching primaryShopId and catalog data
 * @name SellersCatalogItems
 * @param {React.Component} Component to decorate and apply
 * @returns {React.Component} - component decorated with primaryShopId and catalog as props
 */
export default function SellersCatalogItems(Component) {
 
  class SellersCatalogItems  extends React.Component {
    static propTypes = {
      sellerIds: PropTypes.array,
    };

    render() {
      const { primaryShopId, routingStore, uiStore, tag } = this.props;
      console.log("calledssssssssssssssssssss");

      const variables = {
        sellerIds: ["64131387e7794d243b804f3e"],
        //   ...paginationVariablesFromUrlParams(routingStore.query, { defaultPageLimit: uiStore.pageSize }),
        //   tagIds: tagId,
        //   sortBy,
        //   sortByPriceCurrencyCode: uiStore.sortByCurrencyCode,
        //   sortOrder,
        //   searchQuery: uiStore?.searchItems,
        //   simpleFilters: uiStore?.filters,
        //   priceRange: uiStore?.filterPrice,
      };

      return (
        <Query errorPolicy="all" query={sellercatalogItemsQuery} variables={variables}>
          {({ data }) => {
            const { sellerCatalogItems } = data || {};
            console.log(data, "ccaerere");
            return <Component catalogItems={(sellerCatalogItems && sellerCatalogItems.edges) || []} />;
          }}
        </Query>
      );
    }
  }
  

  hoistNonReactStatic(SellersCatalogItems, Component);
 console.log("calledsssssssssssssssssssssssssssssssss");
  return inject("primaryShopId", "routingStore", "uiStore")(SellersCatalogItems);
}
