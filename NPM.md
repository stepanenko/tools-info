
# NPM - Node Package Manager

## Commands:

- `npm adduser` / `npm login` - create or verify a user and save the credentials to the `.npmrc` file

Example:
```terminal
$ npm adduser
npm notice Log in on https://registry.npmjs.org/
Username: stepanenko
Password: <password>
Email: (this IS public) serhiy.step@example.com
Enter one-time password from your authenticator app: <password from your email>
Logged in as stepanenko on https://registry.npmjs.org/.

$ npm whoami 
stepanenko
```
More: https://docs.npmjs.com/cli/v6/commands/npm-adduser

- `-S` is the same as `--save`, and `-D` is the same as `--save-dev`
- `npm list -g --depth=0` - show globally installed packages
- `npm outdated -g --depth=0` - show outdated global packages
- `npm update -g <package> <package> <package>...` - update global packages individually
- `npm -g uninstall <name>` - uninstall global package
- `npm install -g npm@latest` - update npm
- `npm run` - list available scripts to run
- `npm list` - show locallly installed packages
