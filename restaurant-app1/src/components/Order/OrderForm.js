import { Grid, InputAdornment, makeStyles} from '@material-ui/core'
import React,{useState} from 'react'
import Form from "../../layouts/Form"

import { Input,Select,Button } from '../../controls'

const pMethods=[
    {id:'none',title:'Select'},
    {id:'Cash',title:'Cash'},
    {id:'Card',title:'Card'},
]

const useStyles=makeStyles(theme=>({
    adornmentText:{
        '& .MuiTypography-root':{
            color:'#f3b33d',
            fontWeight:'bolder',
            fontSize:'1.5em'
        }
    }
}))

export default function OrderForm(props) {

    const{values,errors,handleInputChange}=props;
    const classes=useStyles();

    return (
        <Form >
            <Grid container>
                <Grid item xs={6}>
                    <Input disabled label="Order Number" 
                        name="orderNumber" value={values.orderNumber} 
                        InputProps={{
                            startAdornment:<InputAdornment className={classes.adornmentText} position="start">#</InputAdornment>
                        }}/>
                    <Select label="Customer" onChange={handleInputChange} name="customerId" value={values.customerId} options={[
                        {id:0,title:"Select"},
                        {id:1,title:"Customer 1"},
                        {id:2,title:"Customer 2"},
                        {id:3,title:"Customer 3"},
                        {id:4,title:"Customer 4"},
                    ]}/> 
                </Grid>
                <Grid item xs={6}>
                    <Select label="Payment Method" onChange={handleInputChange} name="pMethod" value={values.pMethod} options={pMethods}/>
                    <Input disabled label="Grand Total" value={values.gTotal} name="gTotal"
                        InputProps={{
                            startAdornment:<InputAdornment className={classes.adornmentText} position="start">$</InputAdornment>
                        }}/>
                </Grid>
            </Grid>
        </Form>
    )
}
