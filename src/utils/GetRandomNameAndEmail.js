import * as RANDOM_NAMES from '../constants/randomNames'

function GetRandomNameAndEmail() {
  let randomNames = RANDOM_NAMES.NAMES
  let randomName = randomNames[Math.floor(Math.random() * randomNames.length)]

  let randomEmail = randomName
  randomEmail = randomEmail.toLowerCase().replace(/\s/g, '')
  randomEmail += '@hotmale.com'

  return { randomName: randomName, randomEmail: randomEmail }
}

export default GetRandomNameAndEmail
