import React, {useRef} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Dialog, Grid, styled, TextField} from "@material-ui/core";
import useStyle from './addHoldersStyle'

export const CancelButton = styled(Button)({
    borderRadius: 8,
    height: '44px',
    backgroundColor: '#F3F7FB',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: 1,
    color: '#4B76D1',
    textTransform: 'none',
    border: '0px solid #9A9A9A',
    width: '150px',
    '&&:hover': {
        backgroundColor: '#F3F7FB',
    },
});

const sty = {
    borderRadius: 12,
    height: '44px',
    background: '#4B76D1',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 16,
    letterSpacing: 1,
    color: '#F3F7FB',
    textTransform: 'none',
    width: '150px',
    '&&:hover': {
        background: '#4B76D1',
    },
    '&&:disabled': {
        background: '#82a3e8',
        color: '#F3F7FB',
    },
};

const SaveButton = styled(Button)(sty);


function AddHolders({setShowButton}) {
    const classes = useStyle()
    const open = true;


    // State
    const [holder,setHolder] = React.useState();

    // Function

    const nameHandler = (event)=>{
        setHolder(event.target.value)
        console.log(holder)
    }


    return (
        <div>
            <Dialog
                fullWidth
                open={open}
                // onClose={handleClose}
                disableBackdropClick
                scroll="body"
                PaperProps={{
                    classes: {
                        root: classes.dialogPaper,
                    },
                }}
            >
                <form>
                    <Box style={{ padding: '8%', paddingTop: '6%' }}>
                        <h2 className={classes.titleHeader}>Add Holders</h2>
                        <TextField
                            fullWidth
                            variant="filled"
                            label="Holder Name"
                            required
                            type="text"
                            style={{
                                marginTop: '13px',
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    underline: classes.underline,
                                    root: classes.root,
                                },
                            }}
                            value={holder}
                            onChange={nameHandler}
                        />

                        <TextField
                            fullWidth
                            variant="filled"
                            label="Amount"
                            required
                            type="text"
                            style={{
                                marginTop: '13px',
                            }}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                },
                            }}
                            InputProps={{
                                classes: {
                                    underline: classes.underline,
                                    root: classes.root,
                                },
                            }}
                            value={holder}
                            onChange={nameHandler}
                        />

                        <Grid item style={{ paddingTop: 0, paddingBottom: 0 }}>
                            <CancelButton id="addButton" variant="contained" disableElevation onClick={()=>setShowButton(false)}>
                                Cancel
                            </CancelButton>
                        </Grid>
                        <Grid item style={{ paddingTop: 0, paddingBottom: 0 }}>
                            <SaveButton id="saveButton" variant="contained" disableElevation >
                                Save
                            </SaveButton>
                        </Grid>
                    </Box>
                </form>
            </Dialog>
        </div>
    );
}

export default AddHolders;
