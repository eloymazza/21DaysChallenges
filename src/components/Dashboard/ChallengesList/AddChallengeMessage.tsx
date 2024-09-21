import PlusIcon from '../../../assets/icons/plus.svg'
import Button from '../../UI/Button'

const AddChallengeMessage = () => {
  return (
    <div className="px-2py-2 mt-10 flex h-48 w-2/3 max-w-[600px] flex-col items-center justify-center gap-4 border border-dashed border-contrastText px-2 sm:w-1/3">
      <PlusIcon className="h-10 w-10" />
      <p className="text-md">NO CHALLENGES ADDED YET</p>
      <Button variant="primary" size="sm">
        CREATE NEW CHALLENGE
      </Button>
    </div>
  )
}

export default AddChallengeMessage
