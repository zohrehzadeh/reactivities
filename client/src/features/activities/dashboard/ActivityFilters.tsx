import { FilterList, Event} from "@mui/icons-material"
import { Box, MenuList, MenuItem, Paper, Typography, ListItemText } from "@mui/material"
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
const ActivityFilters = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap:3, borderRadius: 3}}>
        <Paper sx={{p:3,borderRadius: 3}}>
            <Box sx={{width: '100%'}}>
                <Typography variant="h6" sx={{display: 'flex', alignItems: 'center', color: 'primary.main', mb: 1}}>
                    <FilterList sx={{mr: 1}} />
                    Filters
                </Typography>
                <MenuList>
                    <MenuItem><ListItemText primary = 'All events'/></MenuItem>
                    <MenuItem><ListItemText primary = " I'm hosting"/></MenuItem>
                    <MenuItem><ListItemText primary = "I'm going"/></MenuItem>
                </MenuList>

            </Box>
        </Paper>
        <Box component ={Paper} sx={{width: '100%', p:3,borderRadius: 3}}>
            <Typography variant="h6" sx={{display: 'flex', alignItems: 'center',color: 'primary.main', mb: 1}}>
                <Event sx={{mr: 1}} />
                Select date
            </Typography>
            <Calendar />
        </Box>
    </Box>
  )
}

export default ActivityFilters