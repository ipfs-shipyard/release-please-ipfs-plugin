import { DefaultUpdater } from 'release-please/build/src/updaters/default'
import { logger as defaultLogger, type Logger } from 'release-please/build/src/util/logger'

export class UpdateVersionsInReadme extends DefaultUpdater {
  getRegex (oldVersion: string): RegExp {
    return new RegExp(`((?:ipfs-desktop|IPFS-Desktop-Setup|ipfs-desktop-setup|ipfs-desktop/releases/tag|ipfs-desktop/releases/download)[-/]v?)${oldVersion}`, 'gm')
  }

  updateContent (content: string, logger: Logger = defaultLogger): string {
    const newVersion = this.version.toString()
    /**
     * look for a string "like ipfs-desktop-0.31.0-mac.dmg" and get the version(e.g. 0.31.0) from it
     * TODO: We need a better way to get the old version
     * TODO: We need a way to accept a custom regex from the user.
     */
    const match = content.match(/ipfs\/ipfs-desktop\/releases\/tag\/v(?<version>[^)]+)/)
    const oldVersion = match?.groups?.version
    if (oldVersion == null) {
      throw new Error('could not find old version in provided README.md content')
    }

    const result = content.replace(this.getRegex(oldVersion), `$1${newVersion}`)
    // logger.info(`updating from ${parsed.version} to ${this.version}`);
    // parsed.version = this.version.toString();
    // return jsonStringify(parsed, content);
    return result
  }
}
