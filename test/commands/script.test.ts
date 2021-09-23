import {test} from '@oclif/test'

describe('script', () => {
  test.stdout().command(['script', '-c']).exit(1).it('exits because no fileName provided')
})
