@dreamsparkx/alfred
===================

Ultimate bulter for your system

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@dreamsparkx/alfred.svg)](https://npmjs.org/package/@dreamsparkx/alfred)
[![CircleCI](https://circleci.com/gh/dreamsparkx/alfred/tree/master.svg?style=shield)](https://circleci.com/gh/dreamsparkx/alfred/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/@dreamsparkx/alfred.svg)](https://npmjs.org/package/@dreamsparkx/alfred)
[![License](https://img.shields.io/npm/l/@dreamsparkx/alfred.svg)](https://github.com/dreamsparkx/alfred/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @dreamsparkx/alfred
$ alfred COMMAND
running command...
$ alfred (-v|--version|version)
@dreamsparkx/alfred/0.0.0 darwin-x64 node-v14.17.4
$ alfred --help [COMMAND]
USAGE
  $ alfred COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`alfred help [COMMAND]`](#alfred-help-command)
* [`alfred mac-gatekeeper`](#alfred-mac-gatekeeper)
* [`alfred qq [FILE]`](#alfred-qq-file)
* [`alfred script [FILENAME]`](#alfred-script-filename)

## `alfred help [COMMAND]`

display help for alfred

```
USAGE
  $ alfred help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `alfred mac-gatekeeper`

describe the command here

```
USAGE
  $ alfred mac-gatekeeper

OPTIONS
  -b, --bypass=bypass  allow single app to bypass gatekeeper. Drag and Drop the app in terminal
  -d, --disable        disable mac gatekeeper
  -e, --enable         enable mac gatekeeper
  -h, --help           show CLI help
```

_See code: [src/commands/mac-gatekeeper.ts](https://github.com/dreamsparkx/alfred/blob/v0.0.0/src/commands/mac-gatekeeper.ts)_

## `alfred qq [FILE]`

describe the command here

```
USAGE
  $ alfred qq [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/qq.ts](https://github.com/dreamsparkx/alfred/blob/v0.0.0/src/commands/qq.ts)_

## `alfred script [FILENAME]`

create, edit or delete script

```
USAGE
  $ alfred script [FILENAME]

OPTIONS
  -c, --create  create script
  -d, --delete  delete script
  -e, --edit    edit script
  -h, --help    show CLI help
```

_See code: [src/commands/script.ts](https://github.com/dreamsparkx/alfred/blob/v0.0.0/src/commands/script.ts)_
<!-- commandsstop -->
