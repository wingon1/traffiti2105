import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CommonStyleTheme from "@components/layouts/CommonStyleTheme";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border : '1px solid '+`${CommonStyleTheme.palette.GRAY[2]}`
    },
});

export default function ImgMediaCard(props : any) {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined" square>
            <CardActionArea>
                {
                    props.image != ''
                        ?
                        <CardMedia
                            component="img"
                            image={props.image}
                            title={props.text}
                        />
                        :''
                }
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p">
                        {props.date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}