import { create } from 'zustand'
import { Challenge } from '../types/common'

type State = {
  challenges: Challenge[]
}

export type Actions = {
  addChallenge: (challenge: Challenge) => void
  editChallenge: (challenge: Challenge, id: string) => void
  removeChallenge: (id: string) => void
}

export const useChallengesStore = create<State & Actions>(set => ({
  challenges: [],
  addChallenge: challenge => set(state => ({ challenges: [...state.challenges, challenge] })),
  editChallenge: (challenge, id) =>
    set(state => ({
      challenges: state.challenges.map(ch => (ch.id === id ? challenge : ch)),
    })),
  removeChallenge: id =>
    set(state => ({
      challenges: state.challenges.filter(ch => ch.id !== id),
    })),
}))
