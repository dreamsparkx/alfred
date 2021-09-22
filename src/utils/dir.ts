import {homedir} from 'os'

function getHomeDir(): string {
  return homedir()
}

export {
  getHomeDir,
}
