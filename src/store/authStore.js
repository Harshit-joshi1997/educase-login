import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      users: [],
      currentUser: null,
      
      register: (userData) => set((state) => {
        // Prevent duplicate emails
        if (state.users.some(u => u.email === userData.email)) {
          return state; // In reality, throw an error, but simple set for now
        }
        return {
          users: [...state.users, userData],
        };
      }),
      
      login: (email, password) => set((state) => {
        const user = state.users.find(u => u.email === email && u.password === password);
        if (user) {
          return { currentUser: user };
        }
        return state; // Handle invalid login in the UI
      }),
      
      logout: () => set({ currentUser: null }),
    }),
    {
      name: 'auth-storage', // name of item in the storage (must be unique)
    }
  )
);
