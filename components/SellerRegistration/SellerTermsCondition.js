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
import useSellerRegistration from '../../hooks/SellerRegistration/useSellerRegistration'
import hashPassword from '../../lib/utils/hashPassword'
import { ToastContainer, toast } from "react-toastify";
import CloseIcon from "@material-ui/icons/Close";

const SellerTermsCondition = () => {
    const useStyles = makeStyles((theme) => ({

        styleofdiv: {
            display: "flex",
            justifyContent: "center",
            width: "100%"

        },
        styleofdiv2: {
            display: "flex",
            width: "100%",
            marginLeft: "2%"

        },


    }))
    const styleBox = {
        display: "flex",
        justifyContent: "center",
        width: "100%"



    }
    const text1 = {
        fontWeight: '700',
        fontSize: '22px',
        margin: 33,
        textAlign: "start"

    }
    const text2 = {
        fontWeight: '500',
        fontSize: '21px',
        margin: 33,
        textAlign: "start"


    }
    const classes = useStyles();


    return (
        <div >
            <div className={classes.styleofdiv}>

                <Typography
                    variant='body2'
                    style={{
                        fontWeight: '700',
                        fontSize: '27px',
                        margin: 9
                    }}
                >
                    Seller Term & Condition
                </Typography>
            </div>
            <div className={classes.styleofdiv}>


                <Typography
                    variant='body2'
                    style={{
                        fontWeight: '500',
                        fontSize: '21px',
                        margin: 9
                    }}
                >
                    Welcome to Bizb!

                </Typography>
            </div>
            <div className={classes.styleofdiv}>

                <Typography
                    variant='body2'
                    style={{
                        fontWeight: '500',
                        fontSize: '21px',
                        margin: 33,
                        textAlign: "center",

                    }}
                >
                    These terms and conditions outline the rules and regulations for the use of Bizb, located at bizb.store, by accessing this website we assume you accept these terms and conditions. Do not continue to use Bizb if you do not agree to take all of the terms and conditions stated on this page.



                </Typography>
            </div>
            <div className={classes.styleofdiv2}>
                <Typography
                    variant='body2'
                    style={text1}
                >
                    Return policy:
                </Typography>
                <Typography
                    variant='body2'
                    style={text2}
                >
                    Only items with any quality defects can be returned within 3 days of reception of order.
                </Typography>
            </div>
            <div className={classes.styleofdiv2}>
                <Typography
                    variant='body2'
                    style={text1}
                >
                    Shipping policy:
                </Typography>
                <Typography
                    variant='body2'
                    style={text2}
                >
                    Your order will be shipped within 3-5 days of placement of order.

                </Typography>
            </div>
            <div className={classes.styleofdiv2}>
                <Typography
                    variant='body2'
                    style={text1}
                >
                    Refund:
                </Typography>
                <Typography
                    variant='body2'
                    style={text2}
                >
                    Refund will be processed within 3 days of return.

                </Typography>
            </div>
            <div className={classes.styleofdiv2}>
                <Typography
                    variant='body2'
                    style={text1}
                >
                    Payment to the seller:
                </Typography>
                <Typography
                    variant='body2'
                    style={text2}
                >
                    Payment will be transferred to the seller once it has been delivered to the buyer and the payment has been received by them. The payment will be processed within 2 days of the delivery.

                </Typography>
            </div>
        </div >
    )
}
export default withApollo()(SellerTermsCondition)
