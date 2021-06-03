import React from "react";
import Header from "@components/layouts/Header";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CommonStyleTheme from "@components/layouts/CommonStyleTheme";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            '& > *': {
                width: '100%',
            },
        },
    }),
);
const LayoutStyle = {
    Main : {
        padding : 20,
    },
    header :{  height: 35, padding: 0,margin: 0,justifyContent:'left',alignItems :'center', width: '100%'},
    titleWrapper :{ width : '80px', paddingLeft: '20px', fontSize: '1rem', color: `${CommonStyleTheme.palette.GRAY[8]}` },
}
export default function Write(){
    const classes = useStyles();
    return (
        <div>
            <header style={LayoutStyle.header}>
                <p style={LayoutStyle.titleWrapper}>닫기</p>
                <p style={LayoutStyle.titleWrapper}>등록</p>
            </header>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-textarea"
                    label="이곳에서 남기고 싶은 말을 작성해보세요."
                    placeholder="너무 멋쪄..."
                    rowsMax={30}
                    multiline
                />
            </form>
        </div>
    )
};