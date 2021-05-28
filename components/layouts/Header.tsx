import React from "react";
import { Router, withRouter } from "next/router";
import CommonStyleTheme from "@components/layouts/CommonStyleTheme";


const style ={
    header :{  height: 35, padding: 0,margin: 0,display: 'flex',justifyContent:'left',alignItems :'center', position: 'fixed', zIndex:1, top:0, background: '#fff', width: '100%'},
    titleWrapper :{ width : '60px', paddingLeft: '20px', fontSize: '1rem', color: `${CommonStyleTheme.palette.GRAY[8]}` },
    subTitleWrapper : { color: `${CommonStyleTheme.palette.CYAN[7]}` },
    navWrapper : {  display: 'flex',background: '#333' },
    normalItem : { margin : '3px 10px', color : '#eee' },
    activeItem :{  margin : '3px 10px', color :'red'  }
};

type props ={ router : Router}

const Header = ({}:props) => {
    return(
        <header style={style.header}>
            <p style={style.titleWrapper}>Tra<span style={style.subTitleWrapper}>vi</span>ti</p>
        </header>
    )
}
export default withRouter(Header);

