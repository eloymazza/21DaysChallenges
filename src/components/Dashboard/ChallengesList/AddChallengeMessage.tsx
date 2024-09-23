import { useState } from 'react'
import PlusIcon from '../../../assets/icons/plus.svg'
import Button from '../../UI/Button'
import ChallengeForm from '../../ChallengeForm/ChallengeForm'
import Modal from '../../UI/Modal'
import Icon from '../../UI/Icon'

const AddChallengeMessage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCreateChallenge = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="px-2py-2 mt-20 flex h-48 w-2/3 max-w-[600px] flex-col items-center justify-center gap-4 border border-dashed border-contrastText px-2 sm:w-1/3">
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <ChallengeForm />
      </Modal>
      <Icon size="lg">
        <PlusIcon />
      </Icon>
      <p className="text-md">NO CHALLENGES ADDED YET</p>
      <Button variant="primary" size="sm" onClick={handleCreateChallenge}>
        CREATE NEW CHALLENGE
      </Button>
    </div>
  )
}

export default AddChallengeMessage
