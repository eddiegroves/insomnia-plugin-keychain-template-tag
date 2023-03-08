# insomnia-plugin-keychain-template-tag

This is a plugin for [Insomnia](https://insomnia.rest) that provides a template
tag for finding passwords stored in **MacOS Keychain**.

The plugin will call the `security` command, matching on account and/or
service/server to return a generic or internet password. The `security` command
must be available in PATH of the defautl shell.

## Install

Insomnia Preferences > Plugins:

`insomnia-plugin-keychain-template-tag`

## MacOS only

_MacOS only: The plugin has no other native dependencies or cross-platform
credential libraries used._

## Alternative plugins

- [insomnia-plugin-keychain-reader
  ](https://www.npmjs.com/package/insomnia-plugin-keychain-reader)
- [insomnia-plugin-keychain](https://www.npmjs.com/package/insomnia-plugin-keychain)
