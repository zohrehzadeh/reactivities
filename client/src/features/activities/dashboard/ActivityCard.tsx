import { CardContent, Typography, Card,  Chip, Button, Box, CardHeader, Avatar, Divider } from "@mui/material"
import AccessTime from "@mui/icons-material/AccessTime";
import Place from "@mui/icons-material/Place";
import type { Activity } from "../../../lib/types"
import { Link } from "react-router";
import { formatDate } from "../../../lib/uti/util";

type Props = {
    activity: Activity,

}
export default function ActivityCard({ activity }: Props) {
    const isHost = false;
    const isGoing = false;
    const label = isHost ? "Host" : isGoing ? "Going" : "Not Going";
    const isCancelled = false;
    const color = isHost ? "secondary" : isGoing ? "warning" : "default";
    return (
        activity && <Card elevation={3} sx={{ borderRadius: 3 }}>
            <Box>
                <CardHeader
                    avatar={<Avatar sx={{ height: 80, width: 80 }} />}
                    title={activity.title}
                    slotProps={{ title: { sx: { fontWeight: 'bold', fontSize: 20 } } }}
                    subheader={<>Hosted by {' '} <Link to={`/profiles/bob`}>Bob</Link></>}
                />
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mr: 2 }}>
                    {(isHost || isGoing) && (
                        <Chip label={label} color={color} sx={{ borderRadius: 2 }} />
                    )}
                    {isCancelled && (
                        <Chip label="Cancelled" color="error" sx={{ borderRadius: 2 }} />
                    )}
                </Box>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, px: 2 }}>
                    <Box sx={{ display: 'flex', flexGrow: 0, alignItems: 'center' }}>
                        <AccessTime sx={{ mr: 1 }} />
                        <Typography variant="body2" noWrap>{formatDate(activity.date)}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Place sx={{ ml: 3, mr: 1 }} />
                        <Typography variant="body2" noWrap>{activity.venue}</Typography>
                    </Box>
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', gap: 2, backgroundColor: 'grey.200', py: 3, pl: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2, backgroundColor: 'grey.200', py: 3, pl: 3 }}>
                        Attendees go here
                    </Box>
                </Box>
            </CardContent>
            <CardContent sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', pb: 2 }}>
                <Typography variant="body2">
                    {activity.description}
                </Typography>
                <Box>
                    <Button
                        component={Link}
                        to={`/activities/${activity.id}`}
                        size="medium"
                        variant="contained"
                        sx={{ borderRadius: 3}}
                    >
                        View
                    </Button>
                </Box>
            </CardContent>

        </Card>
    )
}
