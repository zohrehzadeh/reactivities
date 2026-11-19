
import { CssBaseline, Container, Box, Typography } from '@mui/material'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { useState } from 'react'
import { useActivities } from '../../lib/hooks/useActivities'


function App() {

  const [editMode, setEditMode] = useState(false)
  const [selectedId, setSelectedId] = useState<string | undefined>(undefined)
  const { activities, isPending } = useActivities()
  const selectedActivity = activities?.find(act => act.id === selectedId)
  const handleSelectActivity = (id: string) => {
    setSelectedId(id)
  }
  const handleCancelSelectActivity = () => {
    setSelectedId(undefined)
  }
  const handleOpenForm = (id?: string) => {
    if(id) handleSelectActivity(id)
    else handleCancelSelectActivity()
    setEditMode(true)
  }
  const handleCloseForm = () => {
    // if (activity) setSelectedId(activity.id)
    setEditMode(false)
  }

  const handleDeleteActivity = (id: string) => {
    // setActivities(activities!.filter(act => act.id !== id))
    console.log(id);
  }
  return (
    <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm}/>
      <Container maxWidth='xl' sx={{ mt: 3 }}>
        {!activities || isPending ? (<Typography>Loading...</Typography>) : 
       (<ActivityDashboard 
       activities ={activities}
       selectedActivity={selectedActivity}
       SelectActivity={handleSelectActivity}
       CancelSelectActivity={handleCancelSelectActivity}
       editMode={editMode}
       openForm={() => handleOpenForm(selectedActivity?.id)}
       deleteActivity={handleDeleteActivity}
       closeForm={handleCloseForm}/>
)}
     </Container>
    </Box>
  )
}

export default App
