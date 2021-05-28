import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavList } from "repository/BottomNavList";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import CommonStyleTheme from "@components/layouts/CommonStyleTheme";


const useStyles = makeStyles({
    root: {
        width: "100%",
        position : "fixed",
        bottom : 0,
    },
    actionItem:{
        minWidth : "60px",
        paddingTop : "6px",
        color: `${CommonStyleTheme.palette.GRAY[4]}`,
        "&$selected": {
            color: `${CommonStyleTheme.palette.CYAN[7]}`,
        }
    },
    iconOnly : {
        paddingTop : "6px",
    },
    selected: {},
    label: {
        display : "none",
        fontSize : "0.65rem",
        "&$selected": {
            display : "none",
            fontSize : "0.70rem",
        }
    }
});

type props ={ parentCallback? : any }
const repository = BottomNavList;

const ButtonNav = ({ parentCallback }: props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                console.log("event:",event);
                setValue(newValue);
                parentCallback(newValue);
            }}
            className={classes.root}
        >
            {repository.map((item)=>(
                <BottomNavigationAction classes={{
                    root: classes.actionItem,
                    selected: classes.selected,
                    iconOnly : classes.iconOnly,
                }} icon={React.createElement(item.icon)} key={item.id}
                />
            )) }
        </BottomNavigation>
    );
}

export default ButtonNav;
