
# NPM - Node Package Manager

## Commands:

`npm adduser` / `npm login` - create or verify a user and save the credentials to the `.npmrc` file

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
