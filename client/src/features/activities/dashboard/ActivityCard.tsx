import { CardContent, Typography, Card, CardActions, Chip, Button, Box } from "@mui/material"
import type { Activity } from "../../../lib/types"
import { useActivities } from "../../../lib/hooks/useActivities";
import { Link } from "react-router";

type Props = {
    activity: Activity,

}
export default function ActivityCard({ activity}: Props) {
    const { deleteActivity } = useActivities();

    return (
        activity&&<Card sx={{ borderRadius: 3 }}>
            <CardContent>
                <Typography variant='h5'>{activity.title}</Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1 }}>{activity.date}</Typography>
                <Typography variant='body2'>{activity.description}</Typography>
                <Typography variant='subtitle1'>{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <Chip label={activity.category} variant="outlined" />
                <Box sx={{display:"flex", gap:3}}>
                <Button size="medium" variant="contained" component = {Link} to={`/activities/${activity.id}`} onClick={() => console.log("View")}>View</Button>
                <Button size="medium" variant="contained" color="error" loading={deleteActivity.isPending} onClick={() => deleteActivity.mutate(activity)}>Delete</Button>
                </Box>
            </CardActions>
        </Card>
    )
}
