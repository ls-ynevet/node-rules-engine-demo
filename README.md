

# Rules Engine PoC

## Description

This project serves as a proof of concept (PoC) for implementing rules engines in Node.js. It utilizes two different rules engines: `@gorules/zen-engine` and `json-rules-engine`.

## Installation

Before running the project, make sure you have Node.js and npm installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.

## Usage

### Building the Project

To build the project, you can use the following command:

```bash
npm run build
```

This command will compile TypeScript files to JavaScript files using `tsc` with the `--watch` flag to continuously watch for changes.

### Running the Engine Demos

This project includes two demo scripts for each rules engine:

- `zen-demo.js` for the `@gorules/zen-engine`
- `jre-demo.js` for the `json-rules-engine`

You can start each demo using the following commands:

```bash
npm run start:zen-engine
npm run start:json-rules-engine
```

## Project Structure

- `src/`: Contains TypeScript source files.
- `dist/`: Output directory for compiled JavaScript files.
- `src/index2.js`: Main entry point of the application.

## Dependencies

This project relies on the following dependencies:

### Development Dependencies

- `typescript`: TypeScript compiler for compiling TypeScript code.
- `@types/node`: TypeScript type definitions for Node.js.

### Production Dependencies

- `@gorules/zen-engine`: Zen engine for implementing business rules.
- `json-rules-engine`: JSON Rules Engine for defining and executing rules.

## License

This project is licensed under the ISC License.

## Author

Yair Nevet

---

Feel free to customize this README with more detailed information or instructions specific to your project!