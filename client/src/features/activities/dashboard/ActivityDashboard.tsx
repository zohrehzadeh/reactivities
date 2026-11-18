
import { Grid } from "@mui/material"
import type { Activity } from "../../../lib/types"
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type props = {
    activities: Activity[];
    selectedActivity?: Activity;
    SelectActivity: (id: string) => void;
    CancelSelectActivity: () => void;
    openForm: (id?: string) => void;
    closeForm: () => void;
    editMode: boolean;
    submitForm: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityDashboard({ activities, selectedActivity, SelectActivity, CancelSelectActivity, openForm, closeForm, editMode, submitForm, deleteActivity }: props) {
    return (
        <Grid container spacing={3}>
            <Grid size={7}>
                <ActivityList activities={activities} deleteActivity = {deleteActivity} selectedActivity = {selectedActivity} SelectActivity = {SelectActivity}/>
            </Grid>
            <Grid size={5}>
                { selectedActivity && !editMode && <ActivityDetail 
                activity={selectedActivity} 
                CancelSelectActivity = {CancelSelectActivity}
                openForm = {openForm}
                /> }
                { editMode && <ActivityForm activity={selectedActivity} closeForm={closeForm} submitForm={submitForm}   />}
            </Grid>
        </Grid>

    )
}
