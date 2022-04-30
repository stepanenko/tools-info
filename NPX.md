
# NPX

## !!! Read carefully any script before executing it to avoid serious problems !!!

- `npx` runs any sort of Node.js based executable that you would normally install via npm 
- **npm** 5.2.0+ has `npx` pre-bundled, so it’s pretty much a standard nowadays
- `npx` helps us avoid versioning, dependency issues and installing unnecessary packages that we just want to try out
- `npx` provides a clear and easy way of executing packages, commands, modules and even GitHub gists and repositories

### Commands:

- `which npx` - to check if it is already installed
- `npm install -g npx` - install npx
- `npx <command/package>` - check whether <command> or <package> exists in `$PATH`, or in the local project binaries, and if so execute it

### Example of running code from Gist:

- `npx https://gist.github.com/stepanenko/0ad25252e427b40c5b07a4f31a740358`

Example code: https://gist.github.com/stepanenko/0ad25252e427b40c5b07a4f31a740358
  
