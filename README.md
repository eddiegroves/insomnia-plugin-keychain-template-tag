# insomnia-plugin-keychain-template-tag

This is a plugin for [Insomnia](https://insomnia.rest) that provides a template
tag for finding passwords stored in Keychain.

The plugin will call the `security` command, matching on account and/or
service/server to return a generic or internet password. The `security` command
must be available in PATH of the defautl shell.
