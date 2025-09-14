# holbertonschool-web_react

# TypeScript Projects

This repository contains a series of TypeScript exercises demonstrating various TypeScript features and concepts.

## Project Structure

The repository is organized into 6 tasks, each focusing on different TypeScript concepts:

```
.
├── task_0/   # Basic interfaces and DOM manipulation
├── task_1/   # Teacher interface and class implementation
├── task_2/   # Advanced types and interfaces
├── task_3/   # Ambient namespaces and external libraries
├── task_4/   # Namespaces and declaration merging
└── task_5/   # Branded types and nominal typing
```

## Tasks Overview

### Task 0: Basic Interface and DOM Manipulation
- **Location**: `task_0/js/main.ts`
- **Concepts**:
  - Student interface definition
  - Type annotations
  - DOM manipulation with TypeScript
  - Array of typed objects
  - HTML table generation

### Task 1: Teacher Interface
- **Location**: `task_1/js/main.ts`
- **Concepts**:
  - Interface with optional properties
  - Index signatures for dynamic properties
  - Interface extension
  - Function types
  - Class implementation with interfaces

### Task 2: Advanced Types
- **Location**: `task_2/js/main.ts`
- **Concepts**:
  - Type aliases
  - String literal types
  - Type guards
  - Advanced interface patterns

### Task 3: Ambient Modules and CRUD
- **Location**: `task_3/js/main.ts`
- **Concepts**:
  - Ambient type declarations (`.d.ts` files)
  - Module imports/exports
  - Type definitions for external JavaScript libraries
  - CRUD operations with typed interfaces
  - Triple-slash directives

### Task 4: Namespaces and Subjects
- **Location**: `task_4/js/subjects/`
- **Concepts**:
  - TypeScript namespaces
  - Declaration merging
  - Module organization
  - Teacher interface across multiple subject classes

### Task 5: Branded Types
- **Location**: `task_5/js/main.ts`
- **Concepts**:
  - Nominal typing with branded types
  - Type branding pattern
  - MajorCredits and MinorCredits interfaces
  - Type-safe credit calculations
  - Preventing type confusion at compile time

## Setup and Installation

Each task directory contains its own TypeScript configuration:

1. Navigate to a specific task directory:
   ```bash
   cd task_X
   ```

2. Install dependencies (if package.json exists):
   ```bash
   npm install
   ```

3. Compile TypeScript files:
   ```bash
   npx tsc
   ```

4. For tasks with webpack configuration:
   ```bash
   npm run build
   ```

## Configuration Files

Each task may include:
- `tsconfig.json` - TypeScript compiler configuration
- `package.json` - Node.js dependencies and scripts
- `webpack.config.js` - Webpack bundler configuration (where applicable)

## Technologies Used

- **TypeScript**: Static type checking and advanced type features
- **Webpack**: Module bundling (in select tasks)
- **Node.js**: JavaScript runtime
- **npm**: Package management

## Learning Objectives

Through these tasks, you will learn:
- TypeScript basic and advanced types
- Interface definitions and extensions
- Type guards and type assertions
- Namespaces and modules
- Ambient declarations
- Branded types for nominal typing
- Integration with JavaScript libraries
- DOM manipulation with type safety

## Requirements

- Node.js (v14 or higher recommended)
- npm or yarn package manager
- TypeScript compiler