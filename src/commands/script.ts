import { Command, flags } from '@oclif/command'
import { prompt } from 'inquirer'
// eslint-disable-next-line node/no-missing-import
import { getScriptDir } from '../utils/dir'
// eslint-disable-next-line node/no-missing-import
import { checkScriptExists } from '../utils/script'
// eslint-disable-next-line node/no-missing-import
import { createFile } from '../utils/common'

export default class Script extends Command {
  static description = 'create, edit or delete script'

  static flags = {
    help: flags.help({
      char: 'h',
    }),
    // flag with a value (-c, --create=VALUE)
    create: flags.boolean({
      char: 'c',
      description: 'create script',
      exclusive: ['edit', 'delete'],
    }),
    // flag with a value (-e, --edit=VALUE)
    edit: flags.boolean({
      char: 'e',
      description: 'edit script',
      exclusive: ['create', 'delete'],
    }),
    // flag with a value (-d, --delete=VALUE)
    delete: flags.boolean({
      char: 'd',
      description: 'delete script',
      exclusive: ['create', 'edit'],
    }),
  }

  static args = [{ name: 'fileName' }]

  async run() {
    const {
      args: { fileName },
      flags,
    } = this.parse(Script)
    if (!fileName) {
      this.error('No FileName provided', { exit: 1 })
    }
    if (flags.create) {
      this.create(fileName)
    }
  }

  async create(fileName: string) {
    if (checkScriptExists(fileName)) {
      this.error('Script already exists')
    }
    const response: any = await prompt([
      {
        name: 'scriptType',
        message: 'select script type',
        type: 'list',
        choices: [
          {
            name: 'shell',
          },
          {
            name: 'node',
          },
        ],
      },
    ])
    let scriptData = ''
    if (response.scriptType === 'shell') {
      scriptData = `#!/bin/zsh\n`
    } else if (response.scriptType === 'node') {
      scriptData = `#!/usr/bin/env node\n`
    }
    createFile(`${getScriptDir()}/${fileName}`, scriptData, {
      mode: '0755',
    })
  }
}
