import { registerPlugin, getPluginTypes } from 'release-please'
import { CustomPlugin } from './plugin'

export function init(...args: unknown[]) {
  console.log('@ipfs-shipyard/release-please-ipfs-plugin init called with args: ', args)

  registerPlugin('@ipfs-shipyard/release-please-ipfs-plugin', (options: any) => new CustomPlugin(options.github, options.targetBranch, options.repositoryConfig))
  console.log('registered @ipfs-shipyard/release-please-ipfs-plugin')
  console.log('currently registered plugins: ', getPluginTypes())
}

init()
