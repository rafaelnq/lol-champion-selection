import {createContext, useState} from 'react'
import {champions} from './mock/champions-mock'

const ChampionsContext = createContext()

function ChampionsProvider({children}) {
  const [state, setState] = useState({
    champions,
    selectedPosition: null,
    searchQuery: '',
  })

  const handlePositionSelect = selectedPosition => {
    setState(prev => ({...prev, selectedPosition}))
  }

  const handleSearchChange = searchQuery => {
    setState(prev => ({...prev, searchQuery}))
  }

  const getData = () => {
    let {champions, selectedPosition, searchQuery} = state

    let filtered

    if (selectedPosition) {
      filtered = champions.filter(c => c.position === selectedPosition)
    } else {
      filtered = champions
    }

    if (searchQuery) {
      filtered = filtered.filter(c =>
        c.name.toLowerCase().includes(searchQuery),
      )
    }

    return filtered
  }

  return (
    <ChampionsContext.Provider
      value={{
        champions: getData(),
        onSearch: handleSearchChange,
        onSelectPosition: handlePositionSelect,
      }}
    >
      {children}
    </ChampionsContext.Provider>
  )
}

export {ChampionsContext, ChampionsProvider}
