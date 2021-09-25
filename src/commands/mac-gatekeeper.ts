import { Command, flags } from '@oclif/command'
import { exec } from 'shelljs'

export default class MacGatekeeper extends Command {
  static description = 'enable/disable gatekeeper of mac'

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with a value (-d, --disable=VALUE)
    disable: flags.boolean({
      char: 'd',
      description: 'disable mac gatekeeper',
      exclusive: ['enable', 'bypass'],
    }),
    // flag with a value (-e, --enable=VALUE)
    enable: flags.boolean({
      char: 'e',
      description: 'enable mac gatekeeper',
      exclusive: ['disable', 'bypass'],
    }),
    // flag with a value (-b, --bypass=VALUE)
    bypass: flags.string({
      char: 'b',
      description:
        'allow single app to bypass gatekeeper. Drag and Drop the app in terminal',
      exclusive: ['disable', 'enable'],
    }),
  }

  async run() {
    const { flags } = this.parse(MacGatekeeper)
    if (flags.disable) {
      exec(`sudo spctl --master-disable`, {
        async: false,
      })
    } else if (flags.enable) {
      exec(`sudo spctl --master-enable`, {
        async: false,
      })
    } else if (flags.bypass) {
      exec(`sudo xattr -rd com.apple.quarantine "${flags.bypass}"`, {
        async: false,
      })
    } else {
      this._help()
    }
  }
}
