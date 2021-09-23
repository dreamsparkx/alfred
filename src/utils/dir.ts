import {homedir} from 'os'

function getHomeDir(): string {
  return homedir()
}

function getBinDir(): string {
  return `${getHomeDir()}/bin`
}

function getScriptDir(): string {
  return `${getBinDir()}/scripts`
}

export {
  getHomeDir,
  getBinDir,
  getScriptDir,
}
