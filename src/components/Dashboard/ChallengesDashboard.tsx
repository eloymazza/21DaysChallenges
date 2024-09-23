import PageTitle from '../UI/PageTitle'
import ChallengesPanel from './ChallengesList/ChallengesPanel'

export const ChallengesDashboard = () => {
  return (
    <div className="mx-auto flex h-full max-w-screen-lg flex-col px-3 py-2">
      <div className="py-2">
        <PageTitle>CHALLENGES BOARD</PageTitle>
      </div>
      <div className="flex grow">
        <ChallengesPanel />
      </div>
    </div>
  )
}
