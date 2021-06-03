import React from 'react';
import { Router, withRouter } from "next/router";
import CommonStyleTheme from "@components/layouts/CommonStyleTheme";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Flag from '@material-ui/icons/Flag';
import Fab from '@material-ui/core/Fab';
import BorderColor from '@material-ui/icons/BorderColor';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Write from "@components/Write";
import {Fade, Modal} from "@material-ui/core";
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles(() =>
    createStyles({
        fabButton: {
            position: 'fixed',
            zIndex: 1700,
            bottom: 10,
            right: 10,
            color : '#fff',
            background : `${CommonStyleTheme.palette.CYAN[7]}`,
            "&:hover": {
                //you want this to be the same as the backgroundColor above
                backgroundColor: `${CommonStyleTheme.palette.CYAN[7]}`
            }
        },
        NavRootButtonGroup : {
            position: 'fixed',
            bottom: 10,
            left : -2,
            zIndex: 1,
            background : '#fff',
            borderTopRightRadius : 20,
            borderBottomRightRadius : 20,
            boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)',
        },
        NavRootButton : {
            color :`${CommonStyleTheme.palette.GRAY[5]}`,
            border: 'none',
            "&:hover": {
                //you want this to be the same as the backgroundColor above
                color: `${CommonStyleTheme.palette.CYAN[6]}`
            }
        },
        ActiveNavRootButton : {
            color :`${CommonStyleTheme.palette.CYAN[7]}`,
            border: 'none',
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: '#fff',
            width : '100vw',
            height : '100vh',
        },
    }),
);

type props ={ router : Router}


const ButtonNav = ({router} : props) => {
    const classes = useStyles();
    const path = router.pathname;

    // 파일 업로드
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <FormControlLabel
                control={<Fab color="default" onClick={open ? handleClose:handleOpen} size="small" className={classes.fabButton} >
                <BorderColor />
            </Fab>}
                label=""
            />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Slide in={open} direction="up">
                    <div className={classes.paper}>
                        <Write/>
                    </div>
                </Slide>
            </Modal>
            <ButtonGroup color="default" aria-label="contained button group" className={classes.NavRootButtonGroup}>
                <Button href="/" className={
                    (path === '/')
                    ? classes.ActiveNavRootButton
                    : classes.NavRootButton
                }><LocationOnOutlinedIcon /></Button>
                <Button href="/mypage" className={
                    (path == '/mypage')
                        ? classes.ActiveNavRootButton
                        : classes.NavRootButton
                }><Flag /></Button>
            </ButtonGroup>
        </div>

    );
}

export default withRouter(ButtonNav);
