/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable unicorn/prefer-module */
const child_process = require("node:child_process");

/**
 * Template tag that returns a password from MacOS security
 * find-generic-password command.
 */
module.exports.templateTags = [
  {
    name: "keychainFindPassword",
    displayName: "Keychain password",
    description: "find a generic password stored in Keychain",
    liveDisplayName: function (args) {
      return `security find-${args[2].value}-password ${
        args[0].value ? "-a " + args[0].value : ""
      } ${args[1].value ? "-s " + args[1].value : ""} -w`;
    },
    args: [
      {
        displayName: "Account",
        description: "Match account string.",
        type: "string",
      },
      {
        displayName: "Service/server",
        description: "Match service or server string.",
        type: "string",
      },
      {
        displayName: "Password type",
        description: "Generic or internet password.",
        defaultValue: "generic",
        type: "enum",
        options: [
          { displayName: "Generic", value: "generic" },
          { displayName: "Internet", value: "internet" },
        ],
      },
    ],
    async run(_context, account, service, passwordType) {
      // find-generic-password [-h] [-a account] [-s service] [-options...] [-g] [-keychain...] Find a generic password item.
      //
      //  -a account      Match account string
      //  -c creator      Match creator (four-character code)
      //  -C type         Match type (four-character code)
      //  -D kind         Match kind string
      //  -G value        Match value string (generic attribute)
      //  -j comment      Match comment string
      //  -l label        Match label string
      //  -s service      Match service string
      //  -g              Display the password for the item found
      //  -w              Display the password(only) for the item found
      //
      // find-internet-password [-h] [-a account] [-s server] [options...] [-g] [keychain...] Find an internet password item.
      // -a account      Match account string
      // -c creator      Match creator (four-character code)
      // -C type         Match type (four-character code)
      // -d securityDomain
      //                 Match securityDomain string
      // -D kind         Match kind string
      // -j comment      Match comment string
      // -l label        Match label string
      // -p path         Match path string
      // -P port         Match port number
      // -r protocol     Match protocol (four-character code)
      // -s server       Match server string
      // -t authenticationType
      //                 Match authenticationType (four-character code)
      // -g              Display the password for the item found
      // -w              Display the password(only) for the item found

      const args = [];
      if (account && account.length > 0) {
        args.push("-a", `"${account}"`);
      }

      if (service && service.length > 0) {
        args.push("-s", `"${service}"`);
      }

      if (args.length === 0) {
        throw new Error("Please set account and/or service.");
      }

      args.push("-w");

      try {
        child_process.execSync("which security", {
          encoding: "utf8",
        });
      } catch {
        throw new Error(
          "Could not find security command, is Keychain available?"
        );
      }

      const token = child_process.execSync(
        `security find-${passwordType}-password ${args.join(" ")}`,
        { encoding: "utf8" }
      );

      return token.trimEnd();
    },
  },
];
