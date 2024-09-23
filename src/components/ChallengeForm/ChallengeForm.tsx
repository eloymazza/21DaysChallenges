import { FC } from 'react'
import FormControl from '../UI/FormControl'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea'
import LabeledCheckbox from '../UI/LabeledCheckbox'
import Label from '../UI/Label'
import Button from '../UI/Button'
import { useChallengesStore } from '../../store/ChallengesStore'
import { modelize } from './Model'
import { Challenge } from '../../types/common'

type ChallengeFormProps = {
  challenge?: Challenge
}

const ChallengeForm: FC<ChallengeFormProps> = () => {
  const { addChallenge } = useChallengesStore()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())
    const challenge = modelize(data)
    addChallenge(challenge)
  }

  return (
    <div className="z-10 w-96 cursor-default rounded-md bg-secondary px-5 py-3">
      <h2 className="section-title font-light uppercase">Create Challenge</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 pb-1 pt-2">
          <FormControl>
            <Label>Title</Label>
            <Input placeholder="Type Title here" name="title" />
          </FormControl>
          <FormControl>
            <Label>Description</Label>
            <TextArea placeholder="Type description here" name="description" />
          </FormControl>
          <FormControl>
            <Label>Duration (days)</Label>
            <Input type="number" placeholder="Type Duration here" name="duration" />
          </FormControl>
          <FormControl>
            <LabeledCheckbox label="Start Challenge now" name="started" labelClassName="text-sm" />
          </FormControl>
          <div className="flex w-full">
            <Button variant="primary" customClassNames="w-full mt-2" size="sm" type="submit">
              CREATE
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ChallengeForm
