import { writeFileSync, WriteFileOptions } from 'fs'

function createFile(filePath: string, data: any, options?: WriteFileOptions) {
  writeFileSync(filePath, data, options)
}

export { createFile }
