import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import agent from "./api/agent";
import type { Activity } from "../types";

export const useActivities = () => {


    const { data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => (await agent.get<Activity[]>('/activities')).data
    });
    const queryClient = useQueryClient();
    const updateActivity  = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.put(`/activities`, activity)
        },
        onSuccess: async() => {
            // TODO: Invalidate and refetch activities query
            await queryClient.invalidateQueries({queryKey:['activities']})
        }
    });
    const createActivity  = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.post(`/activities`, activity)
        },
        onSuccess: async() => {
            // TODO: Invalidate and refetch activities query
            await queryClient.invalidateQueries({queryKey:['activities']})
        }
    });
    const deleteActivity  = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.delete(`/activities/${activity.id}`)
        },
        onSuccess: async() => {
            // TODO: Invalidate and refetch activities query
            await queryClient.invalidateQueries({queryKey:['activities']})
        }
    });

    return { activities, isPending, updateActivity, createActivity, deleteActivity };
}

