import React from "react";
import Link from "next/link";
import { Router, withRouter } from "next/router";
import { MenuRep } from "repository/menuRep";
import CommonStyle from "@components/layouts/CommonStyle";


const style ={
    header :{  height: 60, padding: 0,margin: 0,background: `${CommonStyle.palette.RED[5]}`,display: 'flex',justifyContent:'left',alignItems :'center'},
    logoWrapper :{  color :'#eee',  width : '60px', paddingRight: '30px' },
    navWrapper : {  display: 'flex',background: '#333' },
    normalItem : { margin : '3px 10px', color : '#eee' },
    activeItem :{  margin : '3px 10px', color :'red'  }
};

type props ={ router : Router}
const repository = MenuRep;

const Header = ({router}:props) => {
    const path = router.pathname;
    return(
        <header style={style.header}>
            <div style={style.logoWrapper}>
                <svg>
                    <path d="M10,65 C35,125 80,0 130,95" fill="none" stroke="#fff" stroke-width="3" />
                </svg>
            </div>
            <nav style={style.navWrapper}>
                {repository.map((item) => (
                    <div style={
                        (path === item.path )
                            ? style.activeItem
                            : style.normalItem
                    } key={item.id}>
                        <Link href={item.path} as={item.as}><a>{item.name}</a></Link>
                    </div>
                ))}
            </nav>
        </header>
    )
}
export default withRouter(Header);

