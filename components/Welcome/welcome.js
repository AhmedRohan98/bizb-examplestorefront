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
} from "@material-ui/core"
import useViewer from '../../hooks/viewer/useViewer'
import { withApollo } from 'lib/apollo/withApollo'
import { makeStyles } from "@material-ui/core/styles";
import ReactGA from "react-ga4";


const Welcome = () => {
    const useStyles = makeStyles((theme) => ({

        styleofdiv: {

            justifyContent: "center",
            width: "100%"

        },
        maindivqrcodeapp: {
            display: "flex",
            width: "100%",
            paddingTop: theme.spacing(2),
            height: "400px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            [theme.breakpoints.down("sm")]: {
                flexDirection: "column",

            },
        },
        maindivapp: {
            display: "flex",

            flexDirection: "column",
        },
        maindivqrcode: {
            display: "flex",
        },
        imageqrcode: {
            marginTop: theme.spacing(1),
            height: "150px",
            width: "126px",
        },
        image: {
            height: "100px",
            width: "250px",
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(2),


            [theme.breakpoints.up(700)]: {
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
                height: "80px",
                width: "200px",
                marginTop: theme.spacing(1),
                marginRight: theme.spacing(0),
            },
        },
        image2: {
            height: "100px",
            width: "250px",
            border: "1px black",
            borderRadius: "100%",
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(2),


            [theme.breakpoints.up(700)]: {
                marginTop: theme.spacing(4),
                marginBottom: theme.spacing(2),
            },
            [theme.breakpoints.down("sm")]: {
                height: "80px",
                width: "200px",
                marginTop: theme.spacing(1),
                marginRight: theme.spacing(0),
            },
        },
        socialmediafo: {
            width: "100%",
            height: "48px",
            marginTop: theme.spacing(3),
            [theme.breakpoints.down("sm")]: {
                marginTop: theme.spacing(5),
                marginBottom: theme.spacing(5),

            },
            display: "flex",
            justifyContent: "center",
        },
        imges: {
            width: "51px",
            height: "51px",
            marginRight: theme.spacing(2),

            "& .hover": {
                transform: "scale(1.2)",
            },
        },
    }))

    const classes = useStyles();
    useEffect(() => {
        // Track "Page View" event with Google Analytics 4 for Welcome Page
        ReactGA.send({
            hitType: 'pageview',
            page: '/welcome',
            title: 'Welcome Page',
        });
    }, []);


    return (
        <div className={classes.styleofdiv}>
            <div className={classes.maindivqrcodeapp}>

                <a
                    onClick={() => {
                        ReactGA.send({
                            hitType: 'event',
                            eventCategory: 'App',
                            eventAction: 'install_android',
                        });
                    }}
                    href="https://play.google.com/store/apps/details?id=com.bizb_store&hl=en&gl=US&pli=1"
                    target="_blank"
                >
                    <img src="/favicons/Group157.svg" className={classes.image} />
                </a>
                <a
                    href="https://bizb.store/en?"
                    target="_blank"
                >
                    <img src="/favicons/Logo2.svg" className={classes.image} />
                </a>
                <a onClick={() => {
                    ReactGA.send({
                        hitType: 'event',
                        eventCategory: 'App',
                        eventAction: 'install_ios',
                    });
                }} href="https://apps.apple.com/pk/app/bizb/id1571110423" target="_blank">
                    <img src="/favicons/Group159.svg" className={classes.image} />
                </a>

            </div>
            <div className={classes.socialmediafo}>
                <a
                    onClick={() => {
                        ReactGA.send({
                            hitType: 'event',
                            eventCategory: 'Social',
                            eventAction: 'share',
                            eventLabel: "Facebook", // You can replace this with the specific social media platform
                        });
                    }}
                    target="_blank"
                    href="https://www.facebook.com/bizb.store/?_ga=2.46482023.1960989760.1689242030-358638331.1683619134"
                >
                    <img src="/cart/facebooksvg.svg" className={classes.imges} alt="facebook"></img></a>
                <a
                    onClick={() => {
                        ReactGA.send({
                            hitType: 'event',
                            eventCategory: 'Social',
                            eventAction: 'share',
                            eventLabel: "Instagram", // You can replace this with the specific social media platform
                        });
                    }}
                    target="_blank"
                    href="https://www.instagram.com/bizb.store/?_ga=2.46482023.1960989760.1689242030-358638331.1683619134"
                >
                    <img src="/cart/instagramlogo.jpg" className={classes.imges} alt="instagram"></img></a>
                <a
                    onClick={() => {
                        ReactGA.send({
                            hitType: 'event',
                            eventCategory: 'Social',
                            eventAction: 'share',
                            eventLabel: "LinkedIn", // You can replace this with the specific social media platform
                        });
                    }}
                    target="_blank"
                    href="https://www.linkedin.com/company/bizbstore/"
                >
                    <img src="/cart/LinkedInsvg.png" className={classes.imges} alt="linkedin"></img></a>
            </div>
        </div>
    )
}
export default withApollo()(Welcome)
