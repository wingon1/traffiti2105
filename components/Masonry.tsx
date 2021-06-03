import React from "react";

const Style = {
    Masonry : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'stretch',
        width: '97%',
        margin: 'auto',
    },
    Column : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'stretch',
        flexGrow: 1,
        width: '50%'
    }
}

class Masonry extends React.Component{
    constructor(props){
        console.log('props: ',props)
        super(props);
        this.state = {columns: props.children.length};
        this.onResize = this.onResize.bind(this);
    }
    componentDidMount(){
        this.onResize();
        window.addEventListener('resize', this.onResize)
        console.log('componentDidMount : ')
    }

    getColumns(w){
        console.log('getColumns w: ',w)
        return this.props.brakePoints.reduceRight( (p, c, i) => {
            return c < w ? p : i;
        }, this.props.brakePoints.length) + 1;
    }

    onResize(){
        console.log('onResize : '+this.refs.Masonry.offsetWidth)
        const columns = this.getColumns(this.refs.Masonry.offsetWidth);
        if(columns !== this.state.columns){
            this.setState({columns: columns});
        }

    }

    mapChildren(){
        let col = [];
        const numC = 2;
        for(let i = 0; i < numC; i++){
            col.push([]);
        }
        console.log('mapChildren numC: ',numC)
        return this.props.children.reduce((p,c,i) => {
            p[i%numC].push(c);
            return p;
        }, col);
    }

    render(){
        return (
            <div className="masonry" style={Style.Masonry} ref="Masonry">
                {this.mapChildren().map((col, ci) => {
                    return (
                        <div className="column" style={Style.Column} key={ci} >
                            {col.map((child: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined, i: React.Key | null | undefined) => {
                                return <div key={i} >{child}</div>
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Masonry;