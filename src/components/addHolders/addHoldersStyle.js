import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    userAvatar: {
        width: 48,
        height: 48,
        borderRadius: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderStyle: 'solid',
        marginTop: 5,
    },
    h2Styles: {
        fontSize: '22px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        color: '#2B292B',
        fontWeight: 600,
        marginBottom: 0,
        textAlign: 'left',
    },
    divider: {
        backgroundColor: '#4B76D1',
        width: 25,
        height: 1,
        border: '2px solid #4B76D1',
        marginLeft: 2,
        marginBottom: 67,
    },
    h4Styles: {
        fontWeight: 400,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 10,
        color: '#9A9A9A',
        lineHeight: 2,
        marginLeft: 0,
        textAlign: 'start',
        marginBottom: 22,
    },
    title: {
        fontFamily: 'Inter',
        fontWeight: 700,
        fontSize: '18px',
        lineHeight: '21.78px',
        marginBottom: '15px',
        display: 'inline-block',
    },
    subtitleBlue: {
        fontFamily: 'Poppins',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: '21px',
        color: '#4095FA',
        textAlign: 'start',
    },
    subtitle: {
        fontFamily: 'Poppins',
        fontWeight: 'normal',
        fontSize: '18px',
        color: '#2B292B',
        textAlign: 'start',
        marginBottom: 35,
    },
    addNewButton: {
        background: '#4095FA',
        borderRadius: '8px',
        boxShadow: 'none',
        color: 'white',
        textTransform: 'none',
        height: '42px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        width: 159,
    },
    image: {
        height: 130,
        borderRadius: 10,
        width: '100%',
        border: '3px solid #4095FA',
    },
    overLay: {
        position: 'absolute',
        top: 0,
        borderRadius: '8px',
        right: 2,
        height: 80,
        width: '100%',
        '&&:hover': {
            background: 'linear-gradient(242deg, #4095FA 0%, rgba(64, 149, 250, 0) 52.66%)',
        },
    },
    iconButton: {
        position: 'absolute',
        right: 0,
    },
    saveButton: {
        background: '#4B76D1',
        borderRadius: '8px',
        boxShadow: 'none',
        color: 'white',
        textTransform: 'none',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        width: '100%',
        marginTop: 40,
        zIndex: '100',
        '&:hover': {
            backgroundColor: '#4B76D1',
        },
    },
    deleteSaveButton: {
        background: '#f7685b',
        borderRadius: '8px',
        boxShadow: 'none',
        color: 'white',
        textTransform: 'none',
        height: '44px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: 500,
        textAlign: 'center',
        width: '130px',
        marginRight: '-40px',
        marginTop: '80px',
        position: 'absolute',
        zIndex: '100',
        right: '75px',
        top: '24px',
        '&:hover': {
            backgroundColor: '#f7685b',
        },
    },
    cancelDeleteSaveButton: {
        marginTop: 200,
        marginRight: 170,
        color: '#f7685b',
        borderColor: '#f7685b',
        right: '75px',
        top: '24px',
        width: '130px',
        position: 'absolute',
        textTransform: 'none',
        height: '44px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontSize: 16,
        fontWeight: 500,
        borderRadius: '8px',
    },
    card: {
        borderRadius: '16px',
        background: '#F3F7FB',
        padding: '35px',
    },
    root: {
        backgroundColor: '#FDFDFD !important',
        fontFamily: 'Poppins',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9EAFD',
        borderRadius: 8,
    },
    underline: {
        '&&&:before': {
            borderBottom: 'none',
        },
        '&&:after': {
            borderBottom: '2px solid #4095FA',
        },
    },
    fileInput: {
        width: '100%',
        height: '103px',
        borderRadius: '16px',
        background: '#BBD7FB',
        marginTop: '12px',
    },
    drpBoxActive: {
        position: 'relative',
        margin: '0 auto',
        padding: '10px 10px',
        width: '180px',
        justifyContent: 'center',
    },
    drpDownItemlist: {
        paddingLeft: '0',
        margin: 0,
    },
    drpDownItem: {
        listStyleType: 'none',
        display: 'flex',
        alignItems: 'center',
        margin: '15px',
    },
    menu: {
        display: 'none',
        '&.loaded': {
            display: 'flex',
            position: 'absolute',
            zIndex: '100',
            boxShadow: '0px 3px 20px 10px rgba(0,0,0,0.2)',
            right: '50px',
            top: '90px',
            borderRadius: '8px !important',
            backgroundColor: '#fff',
        },
    },
    addNew: {
        color: '#4B76D1',
        fontWeight: 700,
        cursor: 'pointer',
    },
    addNewBranch: {
        color: '#4B76D1',
        fontWeight: 700,
        cursor: 'pointer',
        marginTop: 20,
    },
    dialogPaper: {
        borderRadius: 8,
        marginBottom: 300,
    },
    labelRoot: {
        color: '#9A9A9A',
        fontFamily: 'Poppins',
        weight: 500,
        size: 16,
    },
    multilineRoot: {
        marginBottom: '16px',
        backgroundColor: '#FDFDFD !important',
        fontFamily: 'Poppins',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9EAFD',
        borderRadius: 8,
    },
    titleHeader: {
        marginBottom: 30,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 24,
        textAlign: 'center',
        color: '#2B292B',
    },
    errorText: {
        fontSize: '12px',
        color: '#F7685B',
        marginTop: -16,
        float: 'left',
        marginLeft: '4px',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
    },
    imageTitle: {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        fontSize: 16,
        color: '#9A9A9A',
        lineHeight: '20px',
        marginRight: 5,
    },
    imagePreviewRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        marginTop: 12,
        marginLeft: 15,
        height: 115,
    },
    img: {
        height: '80px',
        width: '100%',
    },
    imgContainer: {
        paddingLeft: 0,
        paddingRight: 0,
        position: 'relative',
        height: 80,
        width: 16,
    },
    gridList: {
        overflow: 'auto',
        maxWidth: 437,
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    rootBottom: {
        minHeight: '48px',
        paddingTop: '4px !important',
        paddingBottom: '4px !important',
        backgroundColor: '#FDFDFD !important',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#D9EAFD',
        borderRadius: 8,
    },
    optionTitle: {
        fontFamily: 'Inter',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '21px',
        maxHeight: 21,
        width: 220,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    tagsAvatar: {
        height: 38,
        width: 38,
        border: '2px solid #D9EAFD',
        fontSize: 16,
        fontWeight: 500,
        color: '#FAFCFF',
        lineHeight: '20px',
        background: '#4095FA',
    },
    optionCat: {
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 600,
        lineHeight: '18px',
        maxHeight: 18,
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        color: '#9A9A9A',
    },
    chip: {
        fontFamily: 'Inter',
        backgroundColor: '#BBD7FB !important',
        color: '#2B292B',
        fontSize: 14,
        fontWeight: 400,
        maxWidth: '200px',
        borderRadius: '8px',
    },
    deleteIcon: {
        color: '#fff',
        '&&:hover': {
            color: '#fff',
        },
    },
    option: {
        paddingBottom: 15,
    },
    resetPassword: {
        fontSize: '12px',
        color: '#000000',
        float: 'left',
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 500,
        left: 400,
        position: 'relative',
        cursor: 'pointer',
    },
}));

export default useStyles;