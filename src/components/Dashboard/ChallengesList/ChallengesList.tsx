import { useState } from 'react'
import { Challenge } from '../../../types/common'
import AddChallengeMessage from './AddChallengeMessage'

const ChallengesList = () => {
  const mockChallenges: Challenge[] = [
    // { id: 1, title: 'Challenge 1', description: 'No beer challenge', daysDuration: 30, started: false },
    // { id: 2, title: 'Challenge 2', description: 'No sugar challenge', daysDuration: 30, started: false },
    // { id: 3, title: 'Challenge 3', description: 'No coffee challenge', daysDuration: 30, started: false },
  ]

  const [challenges, setChallenges] = useState<Challenge[]>(mockChallenges)

  return (
    <section className="flex h-full w-full justify-center p-2">
      {!challenges.length ? <AddChallengeMessage /> : <div> challenges</div>}
    </section>
  )
}

export default ChallengesList
