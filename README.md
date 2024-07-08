# searchableTreeViewPage

# Getting Started

## Installation

We use [Node JS](https://nodejs.org/) version 20.15.0 but we advise you to use [nvm](https://github.com/nvm-sh/nvm) (only use nvm to set the correct version of _Node JS_). We use [Yarn](https://yarnpkg.com/) for packages management and install them with the

```
yarn
```

command.

To run the application, we do 

```
yarn start
```

and enter the url _http://localhost:3000/_.

## Technical decisions

We decided to use [React JS](https://react.dev/) with [Next JS](https://nextjs.org/) due to of _Next_'s power and familiarity. We also use [TypeScript](https://www.typescriptlang.org/) to add a layer of security to the application.

Regarding styling, we use [SASS](https://sass-lang.com/) and the [BEM](https://getbem.com/introduction/) standard (Blocks, Elements and Modifiers) because it makes developing and maintaining styles easier.

[Eslint](https://eslint.org/) and [Prettier](https://prettier.io/) were libraries that helped the standardization of components.

## Issues to be improved

- Unit tests - I would use [Jest](https://jestjs.io/pt-BR/) with [Testing Library](https://testing-library.com/) because it makes testing easy, efficient and effective;
- E2E tests - I would prefer to use [Cypress](https://www.cypress.io/) because it is a more JS friendly library;
- Security issue - the api calls are in the frontend and as they are open, they are exposed. To solve this problem, creating an api via BFF (Backend For Frontend) would be a better option.
- Performance - when working with a huge data as the apis return, loading the tree view is a very slow task. I suggest loading the tree view with virtualization, I found a lib [react-virtualized-tree](https://github.com/diogofcunha/react-virtualized-tree/) but I didn't test it because it virtualizes and also changes the Ui.

## Demonstration

![](docs/demonstration.gif) 