import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Select from "react-select";
import withCatalogItems from "containers/catalog/withCatalogItems";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    outline: "none",
    width: "92%",
    height: "",
    borderRadius: "18px",
    backgroundColor: "transparent",
    // transform: "translate(-50%, -50%)",
    top: "170px",
    left: "62px",
  },
  icon: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.08)",
      transition: "left 0.2s linear",
    },
  },
  image: {
    width: "254px",
    height: "188px",
    objectFit: "contain",
    borderRadius: "18px",
    cursor: "pointer",
  },
}));
const Search = ({ modalFlag, setModalFlag, catalogItems, searchQuery, uiStore }) => {
  const [searchLocal, setSearchLocal] = useState();
  // fetch products and update catalogItems

  const filteredItems = catalogItems?.filter((product) => {
    const title = product?.node?.product.title.trim().toLowerCase();
    return title.includes(searchLocal) || title.indexOf(searchLocal) !== -1;
  });

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    uiStore?.setSearchItems(searchLocal);
  };
  const handleSearchChange = (event) => {
    const searchQuery = event.target.value.trim().toLowerCase();
    setSearchLocal(searchQuery);
    handleSearchSubmit(event);
  };
  const classes = useStyles();
  return (
    <>
      <></>
      <Modal open={modalFlag} onClose={() => setModalFlag(false)}>
        <div>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "18px",
              height: "65px",
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <form onSubmit={handleSearchSubmit}>
              <input type="text" value={searchLocal} onChange={handleSearchChange} onKeyUp={handleSearchSubmit} />
              <button type="submit">Search</button>
            </form>

            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "18px",
                height: "65px",
                display: "flex",
                alignItems: "center",
                padding: "0 10px",
              }}
            >
              <img
                style={{ marginTop: "17px", marginLeft: "15px" }}
                src="/images/searchIconDark.svg"
                className="headerlogo"
              />

              <CloseIcon onClick={() => setModalFlag(false)} />
              <input />
            </div>
          </div>
          <div style={{ backgroundColor: "#fff", borderRadius: "18px", marginTop: "10px" }}>
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: "40px" }}>
                <ul>
                  {filteredItems?.slice(0,2)?.map((product) => {
                    console.log(filteredItems, "fil");
                    return (
                      <div key={product.node.product.id}>
                

                        <img src={product?.node?.product?.media[0]?.URLs?.large} className={classes.image}></img>
                        <h3>{product?.node?.product?.title}</h3>
                        <p>{product?.node?.product?.description}</p>
                      
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
           <h1>{filteredItems?.length}</h1>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default withCatalogItems(Search);
