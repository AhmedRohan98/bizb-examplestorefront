import * as React from 'react'
import {
    Box,
    Divider,
    Typography,
    Button,
    Modal,
    FormControl,
    TextField,
    CircularProgress,
    Avatar,

} from "@material-ui/core"
import useViewer from '../../hooks/viewer/useViewer'
import { withApollo } from 'lib/apollo/withApollo'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
import useGetAllSeller from "../../hooks/sellers/useGetAllSeller";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";


const StorePage = () => {
    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        square: {
            width: "275px", // Reduced by 1px to create space for the border
            height: "200px",
            marginTop: "1px",
            borderRadius: "10px",
            marginRight: "2px",
            marginLeft: "1px",
            objectFit: "cover",
            cursor: "pointer",
            [theme.breakpoints.up("lg")]: {
                width: "275px", // Reduced by 1px to create space for the border

            },
            [theme.breakpoints.down("lg")]: {
                width: "calc(15rem - 0.5vw)", // Reduced by 1px to create space for the border

            },
            [theme.breakpoints.down("sm")]: {
                width: "150px", // Reduced by 1px to create space for the border
                height: "200px",
            },
            color: 'white',
            fontSize: "54px",
            backgroundColor: '#FDC114',
        },

        styleofdiv: {

            justifyContent: "center",
            width: "100%"

        },
        profilebaner: {
            width: "100%",
        },
        profilebaner2: {
            width: "99px",
            height: "120px", paddingBottom: "3%"
        },
        main: {
            width: "100%",
            padding: "75px",

            [theme.breakpoints.down("xs")]: {
                padding: "0",
            },
        },
        gridroot: {
            maxWidth: "100%",
            justifyContent: "space-between",
        },
        boxcontairproduct: {
            maxHeight: "700px",
            width: "315px",
            borderRadius: "5px",

            // border: "1px solid #9C9C9C",
            gridRowEnd: "span 1",
            flexBasis: "calc(33.33% - 10px)", // Adjust the percentage based on your desired layout
            marginBottom: "20px",
            [theme.breakpoints.down("sm")]: {
                width: "90%",
                marginBottom: "10px",
            },
        },
        image: {
            width: "275px", // Reduced by 1px to create space for the border
            maxHeight: "600px",
            marginTop: "1px",
            borderRadius: "10px",
            marginRight: "2px",
            marginLeft: "1px",
            objectFit: "cover",
            cursor: "pointer",
            [theme.breakpoints.up("lg")]: {
                width: "275px", // Reduced by 1px to create space for the border

            },
            [theme.breakpoints.down("lg")]: {
                width: "calc(15rem - 0.5vw)", // Reduced by 1px to create space for the border

            },
            [theme.breakpoints.down("sm")]: {
                width: "150px", // Reduced by 1px to create space for the border
                height: "200px",
            },
        },
        cartcontent: {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            paddingBottom: "10px",
            overflow: "hidden",


            [theme.breakpoints.down("sm")]: {
                flexDirection: "column",
                paddingBottom: "5px",

            },
        },
        cartcontenttext: {
            display: "flex",
            flexDirection: "column",
            marginRight: "30px"

        },
        carttitle: {
            display: "flex",
            marginLeft: theme.spacing(1),
            justifyContent: "flex-start",
            alignItems: "flex-start",
        },

    }))

    const classes = useStyles();
    const [sellers, loading, refetch] = useGetAllSeller()

    React.useEffect(() => {
        console.log("sellerssellers", sellers)
    }, [sellers])


    return (
        <div className={classes.main}>
            <img src="/profile/profilebanner.webp" className={classes.profilebaner} />

            <div className="sellerProfile">
                <Grid container className="publicProfile__profileInfoWrapper">
                    <Grid xs={12} item className="publicProfile__profileInfoSection">
                        <div
                            className="sellerProfile__img"
                            style={{
                                backgroundImage: "/icons/tickIcon.png",
                            }}
                        >
                            <img src="/favicons/Logo2.svg" className={classes.profilebaner2} />
                        </div>
                        <div className="publicProfile__infoContainer">
                            <div className="sellerProfile__infoRow publicProfile__infoRow">
                                <Typography className="publicProfile__name" variant="h1">
                                    <span>All Stores</span>
                                    {<img src="/icons/tickIcon.png" />}
                                </Typography>
                            </div>


                        </div>
                    </Grid>

                </Grid>
            </div>

            <div className={classes.gridroot}>
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 2, 900: 2, 1050: 3, 1280: 4, 1400: 5, 1750: 6, 1920: 6 }}
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                >
                    <Masonry columnsCount={4} style={{ display: "flex", justifyContent: "flex-start" }}>
                        {sellers?.map((item, key) => {

                            // console.log(optionTitle, "fil");
                            return (
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <div className={classes.boxcontairproduct}>


                                        {/* {console.log("Images", item?.node)} */}
                                        {item?.picture ?
                                            <Link
                                                href={"/en/profile/[slugOrId]"}
                                                as={`/en/profile/${item?._id}`}
                                            >
                                                <img
                                                    src={
                                                        item?.picture

                                                    }
                                                    className={classes.image}
                                                    key={item?._id}
                                                    alt={item?.storeName}
                                                /> </Link> :
                                            <Link
                                                href={"/en/profile/[slugOrId]"}
                                                as={`/en/profile/${item?._id}`}
                                            >
                                                <Avatar
                                                    variant="square" className={classes.square}>
                                                    {item?.storeName?.charAt(0).toUpperCase()}</Avatar></Link>
                                        }

                                        <div className={classes.cartcontent}>
                                            <div className={classes.cartcontenttext}>
                                                <Typography
                                                    style={{
                                                        fontWeight: "600",
                                                        fontSize: "1rem",
                                                        fontFamily: "lato",
                                                        // marginTop: "10px",
                                                        textTransform: "capitalize",
                                                        marginLeft: "5px",
                                                    }}
                                                    variant="h4"
                                                    component="h2"
                                                    className={classes.carttitle}
                                                >
                                                    {item?.storeName}
                                                </Typography>
                                                <Typography className="sellerProfile__infoMetaTitle" variant="h5">
                                                    {" "}
                                                    {item?.name}

                                                </Typography>


                                            </div>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>

        </div>
    )
}
export default withApollo()(StorePage)
