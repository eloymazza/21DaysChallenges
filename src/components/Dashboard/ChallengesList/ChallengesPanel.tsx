import { useChallengesStore } from '../../../store/ChallengesStore'
import AddChallengeMessage from './AddChallengeMessage'

const ChallengesPanel = () => {
  const challenges = useChallengesStore(state => state.challenges)

  return (
    <section className="flex h-full w-full justify-center p-2">
      {!challenges.length ? <AddChallengeMessage /> : <div>Challenges Tab Panel</div>}
    </section>
  )
}

export default ChallengesPanel
