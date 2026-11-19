import { Box } from "@mui/material"
import ActivityCard from "./ActivityCard"
import type { Activity } from "../../../lib/types"

type Props = {
    activities: Activity[]
    SelectActivity: (id: string) => void;
    selectedActivity?: Activity;
}
export default function ActivityList({activities, SelectActivity}: Props) {
  return (
    <Box sx={{display:"flex", flexDirection:"column", gap:3}}>
        {activities.map((activity) => (
         
                <ActivityCard key={activity.id} activity={activity} selectActivity={SelectActivity} />
        ))}
    </Box>
  )
}