import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { blue } from '@mui/material/colors';
import { Button } from '@mui/material';
import { dark, light } from '@mui/material/styles/createPalette';
import { red } from '@mui/material/colors';
import { purple } from '@mui/material/colors';


function Main() {

const[totalAmt,setTotalAMt] = useState('');
const[totalintrest,setTotalintrest] = useState('');
const[amount,setAmount] = useState('');
const[tenure,setTenure] = useState('');
const[intrest,setIntret] = useState('');
const[emi,setEmi]   = useState(''); 
const calculate = ()=>{
    let P = Number(amount);
    let R = Number(intrest) /100/12;
    let N = Number(tenure) * 12;
    let x = Math.pow(1+R,N)
    let total = P * R * x / (x-1);
    setEmi(Math.round(total));
    setTotalAMt(Math.round(total)*N);
    setTotalintrest(totalAmt - P);
}

  return (
        <Box sx={{ bgcolor: 'white',width:'100%', height: 'calc(100vh - 60px)' }} > 
            <Stack py={10} px={50}   direction="column" spacing={2}  bgcolor={dark[300]} color={light[50]} >
            <TextField value={amount} onChange={e=>setAmount(e.target.value)} sx={{bgcolor:purple[50]}} label="Loan Amount (&#8377;)" focused/>
            <TextField value={tenure} onChange={e=>setTenure(e.target.value)} sx={{bgcolor:purple[50]}} label="Tenure in Years" focused />
            <TextField value={intrest} onChange={e=>setIntret(e.target.value)} sx={{bgcolor:purple[50]}} label="Intrest Rate (%)" focused />
            <Button onClick={calculate}  sx={{width:120}} variant="contained">Calculate</Button>
            </Stack>
            <Box sx={{height:200}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'space-evenly'}>
                <h2><span style={{color : "purple"}}> <span style={{color : "red"}}>Total Amount :</span> {totalAmt} <span style={{color : "black"}}>₹</span></span></h2>
                <h1><span style={{color : "purple"}}> <span style={{color : "red"}}>EMI :</span>  {emi} <span style={{color : "black"}}>₹</span></span></h1>
            </Box>
        </Box>
  )
}

export default Main;