
import { CssBaseline, Container, Box } from '@mui/material'
import NavBar from './NavBar'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { useState, useEffect } from 'react'
import type { Activity } from '../../lib/types'
import axios from 'axios'

function App() {

  const [activities, setActivities] = useState<Activity[]>([])
  const [editMode, setEditMode] = useState(false)
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined)
  const baseUrl = 'https://localhost:5001/api/'
  useEffect(() => {
    axios.get<Activity[]>(`${baseUrl}activities`).then(res => setActivities(res.data))
  }, [])
  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.find(act=> act.id === id))
  }
  const handleCancelSelectActivity = () => {
    setSelectedActivity(undefined)
  }
  const handleOpenForm = (id?: string) => {
    if(id) handleSelectActivity(id)
    else handleCancelSelectActivity()
    setEditMode(true)
  }
  const handleCloseForm = () => {
    setEditMode(false)
  }
  const handleSubmitForm = (activity: Activity) => {
    if(activity.id) {
      // Update existing activity
      setActivities(activities.map(act => act.id === activity.id ? activity : act))
      setSelectedActivity(activity)
    } else {
      // Add new activity
      const newActivity = {...activity, id: Date.now().toString()}
      setActivities([...activities, newActivity])
      setSelectedActivity(newActivity)
    }
    setEditMode(false)
  }
  const handleDeleteActivity = (id: string) => {
    setActivities(activities.filter(act => act.id !== id))
  }
  return (
    <Box sx={{bgcolor: '#eeeeee'}}>
      <CssBaseline />
      <NavBar openForm={handleOpenForm}/>
      <Container maxWidth='xl' sx={{ mt: 3 }}>
       <ActivityDashboard 
       activities ={activities}
       selectedActivity={selectedActivity}
       SelectActivity={handleSelectActivity}
       CancelSelectActivity={handleCancelSelectActivity}
       editMode={editMode}
       openForm={() => handleOpenForm(selectedActivity?.id)}
       deleteActivity={handleDeleteActivity}
       submitForm={handleSubmitForm}
       closeForm={handleCloseForm}/>
     </Container>
    </Box>
  )
}

export default App
