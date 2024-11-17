import React from 'react'
import {Box} from "@mui/material"
import Header from '../../components/Header'
import BreakdownChart from "../../components/BreakdownChart"
const BreakDown = () => {
  return (
    <Box m="1.5rem 2.5rem">
        <Header title="BreakDown" subtitle="Breakdown of Sales by Category..." />
        <Box mt="40px"  height="75vh" >
            <BreakdownChart />
            </Box>
    </Box>
  )
}

export default BreakDown