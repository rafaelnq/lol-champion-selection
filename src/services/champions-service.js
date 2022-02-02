// import {capitalize} from '../helpers/capitalize'
// const baseUrl = 'http://ddragon.leagueoflegends.com/cdn/12.2.1/data/en_US'

// export async function getAll() {
//   const response = await fetch(baseUrl + '/champion.json')
//   const {data: championsObj} = await response.json()

//   const championsArray = Object.keys(championsObj).map(
//     champion => championsObj[champion],
//   )

//   return championsArray
// }

// export async function getOne(championName) {
//   const capitalizedName = capitalize(championName)
//   const response = await fetch(`${baseUrl}/champion/${capitalizedName}.json`)
//   const champion = await response.json()

//   return champion
// }

// export const API_KEY = 'RGAPI-d95ae10e-9e1c-47cb-9c28-25ec6b287247'
