import {expect, test} from '@oclif/test'

describe('mac-gatekeeper', () => {
  test
  .stdout()
  .command(['mac-gatekeeper'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['mac-gatekeeper', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
