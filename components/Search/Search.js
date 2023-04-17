import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";
import withCatalogItems from "containers/catalog/withCatalogItems";
import React, { useState } from "react";
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
}));

const Search = ({ modalFlag, setModalFlag,catalogItems }) => {
  console.log(catalogItems,"catatttttttttttttttttt")
    const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
  };
  const classes = useStyles();
  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={searchTerm} onChange={handleSearchChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {catalogItems.map((product) => (
          <li key={product.id}>
            {product.title}
            </li>
        ))}
      </ul>
    </>
    // <Modal open={modalFlag} onClose={() => setModalFlag(false)}>
    //   <div className={classes.paper}>
    //     <div
    //       style={{
    //         backgroundColor: "#fff",
    //         borderRadius: "18px",
    //         height: "65px",
    //         display: "flex",
    //         alignItems: "center",
    //         padding: "0 10px",
    //       }}
    //     >
    //       <img
    //         style={{ marginTop: "17px", marginLeft: "15px" }}
    //         src="/images/searchIconDark.svg"
    //         className="headerlogo"
    //       />

    //       <CloseIcon className={classes.icon} onClick={() => setModalFlag(false)} />
    //       <div
    //         style={{
    //           backgroundColor: "#fff",
    //           borderRadius: "18px",
    //           height: "65px",
    //           display: "flex",
    //           alignItems: "center",
    //           padding: "0 10px",
    //         }}
    //       >
    //         <img
    //           style={{ marginTop: "17px", marginLeft: "15px" }}
    //           src="/images/searchIconDark.svg"
    //           className="headerlogo"
    //         />

    //         <CloseIcon className={classes.icon} onClick={() => setModalFlag(false)} />
    //         <input />
    //       </div>
    //     </div>
    //     <div style={{ backgroundColor: "#fff", borderRadius: "18px", marginTop: "10px" }}>
    //       <div style={{ display: "flex" }}>
    //         <div style={{ marginTop: "40px" }}>
    //           <img style={{ marginLeft: "16px" }} src="/search/1.svg" />
    //         </div>
    //         <div
    //           style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             marginTop: "40px",
    //             color: "#333333",
    //             fontFamily: "Lato",
    //             marginLeft: "16px",
    //           }}
    //         >
    //           <div style={{ fontSize: "24px", fontWeight: "400", fontFamily: "Lato" }}>Floral Shirt for sale</div>
    //           <div style={{ fontFamily: "Lato", fontSize: "24px", fontWeight: "400" }}>
    //             <span style={{ fontWeight: "700" }}>Store</span>Mariam67
    //           </div>
    //           <div style={{ fontWeight: "700", fontSize: "20px" }}>
    //             <strike style={{ color: "#FDC114" }}>RS 1200</strike>
    //             <span> RS 600</span>
    //           </div>
    //         </div>
    //       </div>
    //       <hr style={{ width: "85%", color: "#000000", opacity: "0.1", marginTop: "20px", marginBottom: "20px" }} />
    //       <div style={{ display: "flex" }}>
    //         <div>
    //           <img style={{ marginLeft: "16px" }} src="/search/1.svg" />
    //         </div>
    //         <div
    //           style={{
    //             display: "flex",
    //             flexDirection: "column",
    //             // marginTop: "40px",
    //             color: "#333333",
    //             fontFamily: "Lato",
    //             marginLeft: "16px",
    //           }}
    //         >
    //           <div style={{ fontSize: "24px", fontWeight: "400", fontFamily: "Lato" }}>Floral Shirt for sale</div>
    //           <div style={{ fontFamily: "Lato", fontSize: "24px", fontWeight: "400" }}>
    //             <span style={{ fontWeight: "700" }}>Store</span>Mariam67
    //           </div>
    //           <div style={{ fontWeight: "700", fontSize: "20px" }}>
    //             <strike style={{ color: "#FDC114" }}>RS 1200</strike>
    //             <span> RS 600</span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Modal>
  );
};

export default withCatalogItems(Search)
