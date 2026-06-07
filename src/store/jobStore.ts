'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Job, SavedJobsState } from '@/types';

interface JobStore extends SavedJobsState {}

export const useJobStore = create<JobStore>(
  persist(
    (set, get) => ({
      savedJobs: [],
      
      addJob: (job: Job) => {
        const current = get().savedJobs;
        if (!current.find(j => j.id === job.id)) {
          set({ savedJobs: [...current, job] });
        }
      },
      
      removeJob: (jobId: string) => {
        const current = get().savedJobs;
        set({ savedJobs: current.filter(j => j.id !== jobId) });
      },
      
      isSaved: (jobId: string) => {
        return get().savedJobs.some(j => j.id === jobId);
      },
    }),
    {
      name: 'job-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
