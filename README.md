# insomnia-plugin-keychain-template-tag

This is a plugin for [Insomnia](https://insomnia.rest) that provides a template
tag for finding passwords stored in **MacOS Keychain**.

**This avoids putting secrets into Insomnia in plain text.**

The plugin will call the `security` command, matching on account and/or
service/server to return a generic or internet password. The `security` command
must be available in PATH of the defautl shell.

Available on NPM registry:
[insomnia-plugin-keychain-template-tag](https://www.npmjs.com/package/insomnia-plugin-keychain-template-tag)

## Installation using Insomnia

To add an Insomnia plugin, go to Preferences in Insomnia. Then click the Plugins
tab. Enter the name `insomnia-plugin-keychain-template-tag` then click Install
Plugin.

## Installation using Git

Nvigate to the following location on your machine and `git clone` the repository:

- MacOS: `~/Library/Application Support/Insomnia/plugins/`

```sh
git clone https://github.com/eddiegroves/insomnia-plugin-keychain-template-tag.git
```

## Uninstallation

To remove an Insomnia Plugin permanently, navigate to the following location on your machine and delete the plugin folder manually:

- MacOS: `~/Library/Application Support/Insomnia/plugins/`

## MacOS only

_MacOS only: The plugin has no other native dependencies or cross-platform
credential libraries used._

## Alternative plugins

- [insomnia-plugin-keychain-reader
  ](https://www.npmjs.com/package/insomnia-plugin-keychain-reader)
- [insomnia-plugin-keychain](https://www.npmjs.com/package/insomnia-plugin-keychain)
