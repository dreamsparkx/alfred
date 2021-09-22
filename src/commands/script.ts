import {Command, flags} from '@oclif/command'
import {getHomeDir} from '../utils/dir'

export default class Script extends Command {
  static description = 'create, edit or delete script'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-c, --create=VALUE)
    create: flags.boolean({char: 'c', description: 'create script', exclusive: ['edit', 'delete']}),
    // flag with a value (-e, --edit=VALUE)
    edit: flags.boolean({char: 'e', description: 'edit script', exclusive: ['create', 'delete']}),
    // flag with a value (-d, --delete=VALUE)
    delete: flags.boolean({char: 'd', description: 'delete script', exclusive: ['create', 'edit']}),
  }

  static args = [{name: 'fileName', required: true}]

  async run() {
    const {args: {fileName}, flags} = this.parse(Script)
    if (flags.create) {
      const homedir = getHomeDir()
      console.log(homedir)
    }
    // if (flags.edit) {

    // }
    // const name = flags.name ?? 'world'
    // this.log(`hello ${name} from /Users/dreamsparkx/Projects/alfred/src/commands/script.ts`)
    // if (args.file && flags.force) {
    //   this.log(`you input --force and --file: ${args.file}`)
    // }
  }
}
