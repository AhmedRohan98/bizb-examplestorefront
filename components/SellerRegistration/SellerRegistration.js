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

const SellerRegistration = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    let phoneNumreg = /^(?:\+92\d{10}|03\d{9})$/
    const [viewer, , refetch] = useViewer()

    const [loginDisable, setLoginDisable] = React.useState(false);


    const style = {
        height: '48px',
        width: "890px",
        backgroundColor: '#F7F7F9',
        borderRadius: '8px',
        marginBottom: 7,
        justifyContent: "center",
    }

    const style2 = {
        disableUnderline: true,
        style: {
            margin: 5,
            padding: 5,
            fontWeight: 500,
            fontSize: '14px',
            color: '#969696',
            fontFamily: 'Lato',
        },
    }
    const styleBox = {
        boxShadow: " 0 3px 5px 0 #000",
        borderRadius: '18px',
        padding: 2,
        backgroundColor: '#FFFFFF',
        width: "90%",


    }

    const style3 = {
        fontWeight: 500,
        fontSize: '18px',
        fontStyle: "italic",
        marginRight: 3

    }
    const style4 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        borderRadius: '18px',
        boxShadow: 24,
        p: 4,
    }

    const useStyles = makeStyles((theme) => ({

        styleofdiv: {
            marginLeft: "20%",
            marginTop: "2%",
            marginBottom: "3%"
        },
        style6: {

            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            marginLeft: "50px",


        },
        style11: {

            display: 'flex',
            alignItems: 'start',
            margin: 0,
            width: "20%"


        },
        style7: {

            display: 'flex',
            alignItems: 'center',
            margin: 10


        },
        style8: {

            display: 'flex',
            justifyContent: 'center',

        },
        style9: {
            color: 'red',
            fontSize: '12px',
            marginLeft: "18%",
            margin: 0,
            fontWeight: "500",

        },
        style10: {
            color: 'red',
            fontSize: '22px',
            margin: 0,
            fontWeight: "500",


        },
        register: {
            width: "214px",
            height: "48px",
            borderRadius: "40px",
            border: "none",
            display: "flex",

            marginBottom: "2%",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "70%",
            background: theme.palette.secondary.selected,
            "&:hover": {
                transform: "scale(1.08)",
                transition: "left 0.2s linear",
                background: "#FDC114",
            },
        },
    }))

    const classes = useStyles();


    const [userName, setuserName] = React.useState({
        value: '',
        isTouched: false,
    })
    const [storeName, setstoreName] = React.useState({
        value: '',
        isTouched: false,
    })
    const [useremail, setuseremail] = React.useState({
        value: '',
        isTouched: false,
    })
    const [address1, setaddress1] = React.useState({
        value: '',
        isTouched: false,
    })
    const [address2, setaddress2] = React.useState({
        value: '',
        isTouched: false,
    })
    const [country, setcountry] = React.useState({
        value: '',
        isTouched: false,
    })
    const [city, setcity] = React.useState({
        value: '',
        isTouched: false,
    })
    const [state, setstate] = React.useState({
        value: '',
        isTouched: false,
    })
    const [zipcode, setzipcode] = React.useState({
        value: '',
        isTouched: false,
    })
    const [contactnumber, setcontactnumber] = React.useState({
        value: '',
        isTouched: false,
    })
    const [refferalcode, setrefferalcode] = React.useState({
        value: '',
        isTouched: false,
    })
    const [password, setPassword] = React.useState({
        value: '',
        isTouched: false,
    })
    const [password2, setPassword2] = React.useState({
        value: '',
        isTouched: false,
    })

    const [userError, setuserError] = React.useState('')

    const [errors, seterros] = React.useState({
        valid: false,
        value: '',
    })
    const [getcondition, setcondition] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const handleClose = () => setOpen(false)

    const handleSubmit = () => {
        setLoginDisable(true)
        if (
            userName.value !== '' &&
            reg.test(useremail.value) === true &&
            phoneNumreg.test(contactnumber.value) === true &&
            contactnumber.value !== '' &&
            password.value.length >= 8 &&
            password.value === password2.value &&
            storeName.value !== '' &&
            address1.value !== '' &&
            country.value !== '' &&
            zipcode.value !== ''

        ) {
            setLoginDisable(false)
            seterros({ ...errors, value: 'Done', valid: false })
            clearForm()
        } else {
            setLoginDisable(false)

            seterros({ ...errors, value: 'Not Completed', valid: true })
        }
    }
    const clearForm = () => {
        setuserName({ value: '', isTouched: false })
        setcontactnumber({ value: '', isTouched: false })
        setPassword({ value: '', isTouched: false })
        setPassword2({ value: '', isTouched: false })
        setuseremail({ value: '', isTouched: false })
        seterros({ value: '', valid: false })
        setuserError('')
    }
    const PasswordErrorMessage = () => {
        return <p className={classes.style9}>Password should have at least 8 characters</p>
    }
    const MissmatchPasswordErrorMessage = () => {
        return <p className={classes.style9}>Password do not match</p>
    }
    const EmailErrorMessage = () => {
        return <p className={classes.style9}>Email not valid</p>
    }
    const PhoneErrorMessage = () => {
        return <p className={classes.style9}>Phone number not valid</p>
    }
    const UserErrorMessage = () => {
        return <p className={classes.style9}>Name Field is required</p>
    }
    const StoreErrorMessage = () => {
        return <p className={classes.style9}>Store Name Field is required</p>
    }
    const AddressErrorMessage = () => {
        return <p className={classes.style9}>Address Field is required</p>
    }
    const CountryErrorMessage = () => {
        return <p className={classes.style9}>Country Field is required</p>
    }
    const PostalErrorMessage = () => {
        return <p className={classes.style9}>Postal Code Field is required</p>
    }

    React.useEffect(() => { }, [viewer])

    return (
        <div className={classes.styleofdiv}>
            <Box style={styleBox}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                >
                    <Box style={style4}>
                        <Typography
                            variant='body2'
                            style={{
                                fontWeight: '700',
                                fontSize: '22px',
                                textAlign: 'center',
                                marginTop: 3,
                            }}
                        >
                            Information was successfully saved
                        </Typography>
                        <div className={classes.style8}>
                            <Button
                                color='#FDC114'
                                height='35px'
                                width='117px'
                                text='Close'
                                radius='40px'
                                style={{
                                    margin: 15,
                                }}
                                onClick={() => {
                                    setOpen(false)
                                }}
                            />
                        </div>
                    </Box>
                </Modal>
                <div>
                    <Typography
                        variant='body2'
                        style={{
                            fontWeight: '700',
                            fontSize: '27px',
                            textAlign: 'start',
                            marginTop: 44,
                            marginLeft: "50px",
                            marginBottom: 33

                        }}
                    >
                        Registration
                    </Typography>
                </div>
                <div className={classes.style6}>
                    <FormControl>
                        <div className={classes.style7}>
                            <div className={classes.style11}>

                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Email
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>
                            <TextField
                                type='email'
                                size='small'
                                variant='standard'
                                placeholder='Enter your Email'
                                value={useremail.value}
                                onChange={(e) => setuseremail({ ...useremail, value: e.target.value })}
                                onBlur={() => setuseremail({ ...useremail, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {useremail.isTouched && reg.test(useremail.value) !== true ? <EmailErrorMessage /> : null}

                        <div className={classes.style7}>
                            <div className={classes.style11}>

                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Store Name
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>

                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your Store name'
                                value={storeName.value}
                                onChange={(e) => setstoreName({ ...storeName, value: e.target.value })}
                                onFocus={() => setstoreName({ ...storeName, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {storeName.isTouched && storeName.value === '' ? <StoreErrorMessage /> : null}

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Address 1
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>


                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your Address'
                                value={address1.value}
                                onChange={(e) => setaddress1({ ...address1, value: e.target.value })}
                                onFocus={() => setaddress1({ ...address1, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />
                        </div>
                        {address1.isTouched && address1.value === '' ? <AddressErrorMessage /> : null}


                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Address 2
                                </Typography>

                            </div>


                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your Store name'
                                value={address2.value}
                                onChange={(e) => setaddress2({ ...address2, value: e.target.value })}
                                onFocus={() => setaddress2({ ...address2, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />
                        </div>

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Country
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>


                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your Store name'
                                value={country.value}
                                onChange={(e) => setcountry({ ...country, value: e.target.value })}
                                onFocus={() => setcountry({ ...country, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {country.isTouched && country.value === '' ? <CountryErrorMessage /> : null}

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    City/Town
                                </Typography>
                            </div>

                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your City name'
                                value={city.value}
                                onChange={(e) => setcity({ ...city, value: e.target.value })}
                                onFocus={() => setcity({ ...country, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />
                            {city.isTouched && city.value === '' ? <UserErrorMessage /> : null}

                        </div>

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    State/County
                                </Typography>
                            </div>

                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your State name'
                                value={state.value}
                                onChange={(e) => setstate({ ...state, value: e.target.value })}
                                onFocus={() => setstate({ ...state, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Postcode/Zip
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>


                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter Postcode'
                                value={zipcode.value}
                                onChange={(e) => setzipcode({ ...zipcode, value: e.target.value })}
                                onFocus={() => setzipcode({ ...zipcode, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {zipcode.isTouched && zipcode.value === '' ? <PostalErrorMessage /> : null}

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Contact Number
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>


                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your Contact Number'
                                value={contactnumber.value}
                                onChange={(e) => setcontactnumber({ ...contactnumber, value: e.target.value })}
                                onFocus={() => setcontactnumber({ ...contactnumber, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {contactnumber.isTouched && phoneNumreg.test(contactnumber.value) !== true ? <PhoneErrorMessage /> : null}

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Full Name
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>


                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter your Full Name'
                                value={userName.value}
                                onChange={(e) => setuserName({ ...userName, value: e.target.value })}
                                onFocus={() => setuserName({ ...userName, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {userName.isTouched && userName.value === '' ? <UserErrorMessage /> : null}
                        {userError ? <p className={classes.style9}>{userError}</p> : null}



                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Referral Code
                                </Typography>
                            </div>

                            <TextField
                                type='text'
                                size='small'
                                variant='standard'
                                placeholder='Enter Referral Code'
                                value={refferalcode.value}
                                onChange={(e) => setrefferalcode({ ...refferalcode, value: e.target.value })}
                                onFocus={() => setrefferalcode({ ...refferalcode, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>

                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Password
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>


                            <TextField
                                type='password'
                                size='small'
                                variant='standard'
                                placeholder='Enter Password'
                                value={password.value}
                                onChange={(e) => setPassword({ ...password, value: e.target.value })}
                                onFocus={() => setPassword({ ...password, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {password.isTouched && password.value.length < 8 ? <PasswordErrorMessage /> : null}
                        <div className={classes.style7}>
                            <div className={classes.style11}>
                                <Typography variant='body2' style={style3} textAlign='left'>
                                    Confirm Password
                                </Typography>
                                <p id='nameError' className={classes.style10}>
                                    *
                                </p>
                            </div>


                            <TextField
                                type='password'
                                size='small'
                                variant='standard'
                                placeholder='Re-enter Password'
                                value={password2.value}
                                onChange={(e) => setPassword2({ ...password2, value: e.target.value })}
                                onFocus={() => setPassword2({ ...password2, isTouched: true })}
                                InputProps={style2}
                                style={style}
                            />

                        </div>
                        {password2.isTouched && password.value !== password2.value ? (
                            <MissmatchPasswordErrorMessage />
                        ) : null}

                        <p id='nameError' className={classes.style9}>
                            {errors.valid ? errors.value : ''}
                        </p>
                        <Button
                            className={classes.register}
                            style={{ fontFamily: "Ostrich Sans Black", fontSize: "20px" }}
                            InputProps={{ disableUnderline: true }}
                            variant="h5"
                            role="button"
                            disabled={loginDisable}
                            type="submit"
                            onClick={handleSubmit}
                        >
                            {loginDisable ? <CircularProgress disableShrink size={24} style={{ color: "black" }} /> : "Register"}
                        </Button>

                    </FormControl>
                </div>
            </Box>

        </div >
    )
}
export default withApollo()(SellerRegistration)
