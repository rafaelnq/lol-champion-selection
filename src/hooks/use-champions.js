import {useContext} from 'react'
import {ChampionsContext} from '../contexts/champions-context'

export function useChampions() {
  const context = useContext(ChampionsContext)

  if (context === undefined) {
    throw new Error('useChampions must be used inside a ChampionsProvider')
  }

  return context
}
