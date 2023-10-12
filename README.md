# @ipfs-shipyard/release-please-ipfs-plugin <!-- omit in toc -->

[![codecov](https://img.shields.io/codecov/c/github/ipfs-shipyard/release-please-ipfs-plugin.svg?style=flat-square)](https://codecov.io/gh/ipfs-shipyard/release-please-ipfs-plugin)
[![CI](https://img.shields.io/github/actions/workflow/status/ipfs-shipyard/release-please-ipfs-plugin/js-test-and-release.yml?branch=main\&style=flat-square)](https://github.com/ipfs-shipyard/release-please-ipfs-plugin/actions/workflows/js-test-and-release.yml?query=branch%3Amain)

> A release-please helper plugin for IPFS repos. Initially created for IPFS-desktop

## Table of contents <!-- omit in toc -->

- [Install](#install)
- [Introduction](#introduction)
  - [What it does](#what-it-does)
- [How to use](#how-to-use)
  - [Add to release-please config](#add-to-release-please-config)
  - [Ensure you call the release-please binary](#ensure-you-call-the-release-please-binary)
- [Gotchas](#gotchas)
- [License](#license)
- [Contribution](#contribution)

## Install

```console
$ npm i @ipfs-shipyard/release-please-ipfs-plugin
```

## Introduction

Created when release-please was added to the [IPFS Desktop](https://github.com/ipfs/ipfs-desktop) repo.

**NOTE:** Other examples of release-please plugins were not available when this was created, so it may not be the best example of how to write a release-please plugin. Please let us know if you find a better way!

### What it does

Modifies the changes in the PR created by release-please in the following ways:

- ipfs-desktop README.md updates - Update any text with the old-version tag to the new version, similar to <https://github.com/ipfs/ipfs-desktop/blob/56a82179bd601a0051aab84792a3ed31bc0ec557/scripts/release/updateReadme.ts>

## How to use

### Add to release-please config

```jsonc
{
  // ...
  "plugins": [/** ... */, "@ipfs-shipyard/release-please-ipfs-plugin"]
  // ...
}
```

### Ensure you call the release-please binary

**NOTE:** Simply adding to the release-please config *is not enough* to make it run. You must also call the release-please CLI with the plugin name.

```bash
release-please release-pr ... --plugin=@ipfs-shipyard/release-please-ipfs-plugin
```

This is the only way I found that [a release-please plugin can actually load itself](https://github.com/googleapis/release-please/blob/71dcc7b3b2df4bb3d3e0884b3f0bfb96700cb76a/src/bin/release-please.ts#L828-L843), so it can call [`registerPlugin`](https://github.com/googleapis/release-please/blob/71dcc7b3b2df4bb3d3e0884b3f0bfb96700cb76a/src/factories/plugin-factory.ts#L140-L142), so that the inner [`pluginFactories`](https://github.com/googleapis/release-please/blob/71dcc7b3b2df4bb3d3e0884b3f0bfb96700cb76a/src/factories/plugin-factory.ts#L54) can reference it when running.

## Gotchas

1. I have only tested this plugin with the `release-pr` command of `release-please` so far. It may not work with, or may break, other commands.
2. This plugin is currently focused on the needs of [IPFS Desktop](https://github.com/ipfs/ipfs-desktop) and may need to be updated to support other repos and use cases.

## License

Licensed under either of

- Apache 2.0, ([LICENSE-APACHE](LICENSE-APACHE) / <http://www.apache.org/licenses/LICENSE-2.0>)
- MIT ([LICENSE-MIT](LICENSE-MIT) / <http://opensource.org/licenses/MIT>)

## Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in the work by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions.
