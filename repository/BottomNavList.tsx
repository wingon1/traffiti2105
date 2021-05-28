import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Flag from '@material-ui/icons/Flag';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import BorderColor from '@material-ui/icons/BorderColor';

interface Nav {
    id:number
    path: string
    as : string
    name : string
    icon : any
}

export  const BottomNavList: Nav[] = [
    {id:1, path:'/', as:'/', name:'Home', icon : StorefrontOutlinedIcon},
    {id:2, path:'/about', as:'/about', name:'Location', icon:LocationOnOutlinedIcon},
    {id:3, path:'/mymap', as:'/mymap', name:'MyMap', icon:Flag},
    {id:4, path:'/mypage', as:'/mypage', name:'MyPage', icon:AccountCircleOutlinedIcon},
    {id:5, path:'/upload', as:'/upload', name:'Upload', icon:BorderColor},
]