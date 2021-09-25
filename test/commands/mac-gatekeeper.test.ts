import {expect, test} from '@oclif/test'

describe('mac-gatekeeper', () => {
  test
  .stdout()
  .command(['mac-gatekeeper']).exit()
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain("--help")
  })
})
