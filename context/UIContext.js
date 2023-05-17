import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { PAGE_SIZES, inPageSizes } from "lib/utils/pageSizes";

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [endCursor, _setEndCursor] = useState("");
  const [language, setLanguage] = useState("en");
  const [locales, setLocales] = useState({});
  const [orderStatusQuery, setOrderStatusQuery] = useState([]);
  const [orderQueryLimit, setOrderQueryLimit] = useState(5); // eslint-disable-line no-unused-vars
  const [pageSize, _setPageSize] = useState(PAGE_SIZES._20);
  const [pdpSelectedOptionId, setPdpSelectedOptionId] = useState(null);
  const [pdpSelectedVariantId, setPdpSelectedVariantId] = useState(null);
  const [sortBy, setSortBy] = useState("updatedAt-desc");
  const [searchItems, setSearchItems] = useState("");
    const [sellerId, setsellerId] = useState([]);
  const [sortByCurrencyCode, setSortByCurrencyCode] = useState("USD"); // eslint-disable-line no-unused-vars
  const [openCartTimeout, setOpenCartTimeout] = useState();
  const [filters, setFilters] = useState([]);
const [filterPrice, setFilterPrice] = useState([
  { name: "minPrice", value: 0},
  { name: "maxPrice", value: 10000 },
]);
  const [entryModal, setEntryModal] = useState(null);

  const setPDPSelectedVariantId = (variantId, optionId) => {
    setPdpSelectedVariantId(variantId);
    setPdpSelectedOptionId(optionId);
  };

  const clearOpenCartTimeout = () => {
    openCartTimeout && clearTimeout(openCartTimeout);
  };

  const openCart = () => {
    setIsCartOpen(true);
    clearOpenCartTimeout();
  };

  const closeCart = (delay = 500) => {
    const newTimeout = setTimeout(() => {
      setIsCartOpen(false);
      clearOpenCartTimeout();
    }, delay);
    setOpenCartTimeout(newTimeout);
  };

  const openCartWithTimeout = (delay = 3000) => {
    openCart();

    const newTimeout = setTimeout(() => {
      setIsCartOpen(false);
      clearOpenCartTimeout();
    }, delay);

    setOpenCartTimeout(newTimeout);
  };

  const toggleCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeMenuDrawer = () => {
    setIsMenuDrawerOpen(false);
  };

  const toggleMenuDrawerOpen = () => {
    setIsMenuDrawerOpen(!isMenuDrawerOpen);
  };

  const setOrderStatusSelectValue = (orderStatus) => {
    setOrderStatusQuery(orderStatus);
  };

  const setPageSize = (size) => {
    // Validate page size
    console.log("set page si",size)
    _setPageSize(inPageSizes(size) ? size : PAGE_SIZES._20);
  };

  const setEndCursor = (value) => {
    _setEndCursor(value);
  };

  useEffect(() => {
    console.log("updating end cursor...", endCursor);
  }, [endCursor]);
  return (
    <UIContext.Provider
      value={{
        isCartOpen,
        isMenuDrawerOpen,
        language,
        locales,
        orderStatusQuery,
        orderQueryLimit,
        pageSize,
        pdpSelectedOptionId,
        pdpSelectedVariantId,
        sortBy,
        searchItems,
        setSearchItems,
        sellerId,
        setsellerId,
        sortByCurrencyCode,
        filters,
        filterPrice,
        setFilterPrice,
        setFilters,
        entryModal,
        setLocales,
        endCursor,
        setEndCursor,
        setPDPSelectedVariantId,
        setLanguage,
        openCart,
        closeCart,
        openCartWithTimeout,
        toggleCartOpen,
        closeMenuDrawer,
        toggleMenuDrawerOpen,
        setOrderStatusSelectValue,
        setPageSize,
        setSortBy,
        setEntryModal,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.node,
};
