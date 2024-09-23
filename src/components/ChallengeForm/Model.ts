import { Challenge } from '../../types/common'

type FormEntries = {
  [k: string]: FormDataEntryValue
}

export const modelize = (data: FormEntries): Challenge => {
  return {
    id: data.id ? (data.id as string) : crypto.randomUUID(),
    title: data.title as string,
    description: data.description as string,
    daysDuration: Number(data.duration),
    started: data.started === 'true' || data.started === 'on' || data.started === '1',
  }
}
