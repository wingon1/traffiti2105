import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Layout from "@components/layouts/Layout";
import Map from "@components/Map";
import Card from "@components/Card";
import Masonry from "@components/Masonry";
import {CardRep} from "repository/CardRep";
import GlobalStyle from "@components/layouts/GlobalStyle";
import CommonStyleTheme from "@components/layouts/CommonStyleTheme";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    TabsIndicator : {
        backgroundColor : `${CommonStyleTheme.palette.CYAN[7]}`
    },
    TabsRoot : {
        position : "fixed",
        top : 0,
        right : 0,
        zIndex : 2,
        width : 145,
        minHeight : 35,
    },
    TabRoot : {
        minHeight : 35,
        maxWidth : 50,
        '@media(min-width: 600px)' : {
            minWidth : 73,
        }
    }
}));
const repository = CardRep;

const CardListStyles = {
    CardBox : { margin : 5,}
}


export default function FullWidthTabs() {
    const brakePoints = [500];
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <Layout>
            <div className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        classes={{
                            root : classes.TabsRoot,
                            indicator : classes.TabsIndicator
                        }}
                    >
                        <Tab classes={{
                            root : classes.TabRoot,
                        }} label="지도" {...a11yProps(0)} />
                        <Tab classes={{
                            root : classes.TabRoot,
                        }} label="카드" {...a11yProps(1)} />
                    </Tabs>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} >
                        <Map />
                    </TabPanel>
                    <TabPanel value={value} index={1} >
                        <Masonry brakePoints={brakePoints}>
                            {repository.map((item)=>(
                                <div style={CardListStyles.CardBox}>
                                    <Card
                                        image={item.image}
                                        title={item.text}
                                        text={item.text}
                                        date={item.date}
                                        like={item.like}
                                        key={item.id}
                                    />
                                </div>
                            )) }
                        </Masonry>
                    </TabPanel>
                </SwipeableViews>
            </div>
        </Layout>
    );
}
