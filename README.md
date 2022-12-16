# Odin Microfrontends

- This is a repository about microfrontens using [Single-SPA](https://single-spa.js.org/)

## Quick Start

- creating the root-config and your first single-spa application.
- create a rootDir where init your app.
  `~/path/ mkdir "dir-name"`

### Create a root config

1. Invoke in terminal:
   `~/path/rootDir/ npx create-single-spa`
2. After package installation:
   `? Directory for new project (.)` Select (.) to currently Directory or put a new Dir.
   `? Select type to generate` Select `single-spa root config` of these:

- single-spa application / parcel
- in-browser utility module (styleguide, api cache, etc)
- single-spa root config

3. `? Which package manager do you want to use?`

- yarn
- npm
- pnpm

4. `? will this project use Typescript? (y/N)` Select y or N
5. `? would you like to use single-spa layout engine (Y/n)` Select Y or n
6. `? Organization name`
7. After creation app open with your editor.
