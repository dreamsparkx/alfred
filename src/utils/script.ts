import {exec} from 'shelljs'

function checkScriptExists(scriptName: string): boolean {
  const result = exec(`which ${scriptName}`, {
    async: false,
    silent: true,
  }).stdout
  if (result) {
    return true
  }
  return false
}

export {checkScriptExists}
