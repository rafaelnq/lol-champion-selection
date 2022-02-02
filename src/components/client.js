import {ChampionsProvider} from '../contexts/champions-context'
import {ChampionSelection} from './champion-selection'
import './client.css'

export function Client() {
  return (
    <div className="client">
      <ChampionsProvider>
        <ChampionSelection />
      </ChampionsProvider>
    </div>
  )
}
