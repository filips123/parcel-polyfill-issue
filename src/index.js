import { satisfies as semverSatisfies } from 'semver'

const version = '1.2.3'
const range = '^1.2.0'
console.log(semverSatisfies(version, range))
