import { registerPlugin, getPluginTypes } from 'release-please'
import { logger } from 'release-please/build/src/util/logger'
import { CustomPlugin } from './plugin'

export function init (...args: unknown[]): void {
  logger.info('@ipfs-shipyard/release-please-ipfs-plugin init called with args: ', args)

  registerPlugin('@ipfs-shipyard/release-please-ipfs-plugin', (options: any) => new CustomPlugin(options.github, options.targetBranch, options.repositoryConfig))
  logger.info('registered @ipfs-shipyard/release-please-ipfs-plugin')
  logger.info('currently registered plugins: ', getPluginTypes())
}

init()
