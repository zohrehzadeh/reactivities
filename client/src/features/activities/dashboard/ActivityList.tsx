import { Box } from "@mui/material"
import ActivityCard from "./ActivityCard"
import { useActivities } from "../../../lib/hooks/useActivities"
import { Typography } from "@mui/material"


export default function ActivityList() {
        const { activities, isPending } = useActivities()
  return (!activities || isPending)? <Typography>Loading...</Typography> : (
    <Box sx={{display:"flex", flexDirection:"column", gap:3}}>
        {activities.map((activity) => (
         
                <ActivityCard key={activity.id} activity={activity}  />
        ))}
    </Box>
  )
}