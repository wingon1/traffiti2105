import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CommonStyleTheme from "@components/layouts/CommonStyleTheme";
import Skeleton from '@material-ui/lab/Skeleton';
import {Chip} from "@material-ui/core";
import {LeakAdd} from "@material-ui/icons";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border : '1px solid '+`${CommonStyleTheme.palette.GRAY[3]}`
    },
});

export default function ImgMediaCard(props : any) {
    const classes = useStyles();
    const { loading = false } = props;
    return (
        <Card className={classes.root} variant="outlined" square>
            <CardActionArea>
                {
                    props.image != ''
                        ?
                        loading ? (
                                <Skeleton animation="wave" variant="rect" width={40} height={40}/>
                            ) : (
                                <CardMedia
                                    component="img"
                                    image={props.image}
                                    title={props.text}
                                />
                            )

                        :''
                }
                <CardContent>
                    <Typography variant="body2" color="textPrimary" component="p">
                        {props.text}
                    </Typography>

                    <Typography variant="caption" color="textSecondary" component="p">
                        {props.date}<Chip size="small" color="" label="내글"/> <Chip size="small" color="secondary" label="200m"/>
                    </Typography>

                </CardContent>
            </CardActionArea>
        </Card>
    );
}