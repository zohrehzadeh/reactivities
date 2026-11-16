import './App.css'
import { useState, useEffect } from 'react'
import type { Activity } from './lib/types'
import { List, ListItem, Typography } from '@mui/material'
import axios from 'axios'

function App() {

const title = 'Reactivities'
const [activities, setActivities] = useState<Activity[]>([])
const baseUrl = 'https://localhost:5001/api/'
useEffect (() =>{
  axios.get<Activity[]>(`${baseUrl}activities`).then(res => setActivities(res.data))
},[])
  return (
    <>
     <Typography variant='h3'>{title}</Typography>
     <List>
      {activities.map((activity) => (
        <ListItem key={activity.id}>{activity.title}</ListItem>
      ))}
     </List>
    </>
  )
}

export default App
