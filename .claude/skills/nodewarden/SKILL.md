```markdown
# nodewarden Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches you the core development patterns, coding conventions, and workflows used in the `nodewarden` TypeScript codebase. You'll learn how to structure files, write imports and exports, follow commit conventions, and run or write tests in alignment with the project's established practices.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `userService.ts`, `authController.ts`

### Import Style
- Use **alias imports** for modules.
  - Example:
    ```typescript
    import { getUser } from '@services/userService';
    ```

### Export Style
- Use **named exports**.
  - Example:
    ```typescript
    // In userService.ts
    export function getUser(id: string) { ... }
    ```

### Commit Patterns
- Commits are **mixed** in type, but often use the `fix` prefix for bug fixes.
- Commit messages are concise, averaging 42 characters.
  - Example:
    ```
    fix: correct password hashing logic
    ```

## Workflows

### Code Commit Workflow
**Trigger:** When you have made changes and are ready to commit  
**Command:** `/commit-fix`

1. Stage your changes:  
   ```
   git add .
   ```
2. Write a commit message, using the `fix` prefix for bug fixes:  
   ```
   git commit -m "fix: describe your fix here"
   ```
3. Push your changes:  
   ```
   git push
   ```

### Importing and Exporting Modules
**Trigger:** When creating or updating modules  
**Command:** `/module-import-export`

1. Use camelCase for your file names.
2. Use alias imports in your TypeScript files:
   ```typescript
   import { someFunction } from '@utils/someUtility';
   ```
3. Export functions or constants using named exports:
   ```typescript
   export function someFunction() { ... }
   ```

## Testing Patterns

- Test files follow the pattern: `*.test.*`
  - Example: `userService.test.ts`
- The specific testing framework is not detected, but tests are likely written in TypeScript.
- Place tests alongside or near the code they test, using the `.test.ts` suffix.

  Example test file structure:
  ```typescript
  // userService.test.ts
  import { getUser } from '@services/userService';

  describe('getUser', () => {
    it('should return user data for valid ID', () => {
      // test implementation
    });
  });
  ```

## Commands
| Command              | Purpose                                         |
|----------------------|-------------------------------------------------|
| /commit-fix          | Commit changes with a `fix` prefix              |
| /module-import-export| Guide for importing and exporting modules        |
```
