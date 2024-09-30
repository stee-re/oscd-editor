This repository hold the XML editing engine inspired by the [OpenSCD core](https://github.com/openscd/open-scd-core) and is following the newest agreed [OpenSCD Core API](https://github.com/OpenEnergyTools/open-scd-core/blob/main/API.md)


## Usage

You can either load and use the `handleEdit` function through npm or other content delivery networks. This function does manipulate a XMLDocument as per user intent through the edit as its input:

```ts
const removeNode: Remove = {node: toBeRemovedNode}
handleEdit(removeNode)
```


You can also use the exported `Editor` class that inherits form `LitElement` that listens on the edit as specified in [OpenSCD Core API](https://github.com/OpenEnergyTools/open-scd-core/blob/main/API.md). 


## Linting and formatting

To scan the project for linting and formatting errors, run

>npm run lint

To automatically fix linting and formatting errors, run

>npm run format

We use ESLint and Prettier for linting and formatting. Plugins for automatic formatting and linting during editing are available for vim, emacs, VSCode, and all popular IDEs.

## Testing with Web Test Runner

To execute a single test run:

>npm test

To run the tests in interactive watch mode run:

>npm run test:watch


# License

This project is licensed under the Apache License 2.0.

© 2024 Jakob Vogelsang