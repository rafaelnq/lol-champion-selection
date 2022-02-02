import {useEffect, useState} from 'react'
import {IoMdSearch} from 'react-icons/io'
import SVG from 'react-inlinesvg'

import {useChampions} from '../hooks/use-champions.js'

import topImg from '../assets/top.svg'
import jungleImg from '../assets/jungle.svg'
import midImg from '../assets/mid.svg'
import botImg from '../assets/bot.svg'
import supportImg from '../assets/support.svg'

import './champion-selection.css'

/* HEADER  */
function Header() {
  return (
    <header className="champion-selection__header">
      <Positions />
      <SearchBar />
    </header>
  )
}

/* POSITIONS */
const positions = [
  {name: 'top', img: topImg},
  {name: 'jungler', img: jungleImg},
  {name: 'mid', img: midImg},
  {name: 'bot', img: botImg},
  {name: 'support', img: supportImg},
]

function Positions() {
  const [selectedPosition, setSelectedPosition] = useState(null)
  const {onSelectPosition} = useChampions()

  useEffect(() => {
    onSelectPosition(selectedPosition)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPosition])

  const toggleSelection = position => {
    setSelectedPosition(selectedPosition === position ? null : position)
  }

  return (
    <div className="champion-selection__positions">
      {positions.map(position => (
        <SVG
          key={position.name}
          onClick={() => toggleSelection(position.name)}
          className={selectedPosition === position.name ? 'active' : ''}
          src={position.img}
        />
      ))}
    </div>
  )
}

/* SEARCH */
function SearchBar() {
  const [term, setTerm] = useState('')
  const {onSearch} = useChampions()

  useEffect(() => {
    onSearch(term)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term])

  return (
    <div className="champion-selection__search">
      {term.length === 0 && <IoMdSearch />}
      <input
        type="text"
        placeholder="Buscar"
        value={term}
        onChange={e => setTerm(e.target.value)}
      />
    </div>
  )
}

/* CHAMPION */
function ChampionSquare({img, name}) {
  return (
    <div className="champion-square">
      <div className="champion-square__outter">
        <div className="champion-square__inner">
          <img src={img} alt="" />
        </div>
      </div>
      <p className="champion-square__name">{name}</p>
    </div>
  )
}

/* CHAMPION SELECTION */
export function ChampionSelection() {
  const {champions} = useChampions()

  return (
    <>
      <div className="champion-selection">
        <Header />
        <div className="divider divider--top" />
        <div className="champion-selection__champions">
          {champions.map(champion => {
            return (
              <ChampionSquare
                key={champion.id}
                img={champion.img}
                name={champion.name}
              />
            )
          })}
        </div>
        <div className="divider divider--bottom" />
      </div>
    </>
  )
}
