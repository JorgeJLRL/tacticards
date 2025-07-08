import { create } from 'zustand'

export const useUserStore = create((set) => ({
  userToken: '',
  userId: '',
  setUserToken: (token) => set((state) => ({ userToken: token })),
  setUserId: (id) => set((state) => ({ userId: id }))
}))
