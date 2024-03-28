# ESLint Rule: No Deprecated Tailwind Classnames

## Overview

This rule identifies and reports usage of deprecated TailwindCSS class names within string literals in your code. It's designed to help enforce consistent use of the design system's color tokens or other TailwindCSS conventions specified by your project's guidelines.

## Purpose

With the evolution of design systems and CSS frameworks like TailwindCSS, certain class names may become deprecated in favor of new naming conventions. This rule allows teams to define and enforce these updates, ensuring that all developers are using the latest class names in their projects.

## Configuration

### Options

This rule accepts an object option where keys are the deprecated class names and values are the messages suggesting the updated class names to use instead.

#### Schema

```json
{
  "type": "object",
  "additionalProperties": {
    "type": "string"
  }
}
```

### Example Configuration

To configure this rule in your ESLint setup, include it in your `.eslintrc` file with an options object specifying the deprecated class names and their replacement suggestions:

```json
{
  "rules": {
    "no-deprecated-tailwind-classnames": [
      "warn",
      {
        "bg-white": "Use 'bg-default' to align with the design system's color tokens.",
        "bg-surface-default": "Use 'bg-default' to align with the design system's color tokens.",
        "text-red-500": "Use 'text-error-default' to align with the design system's color tokens.",
        "text-critical": "Use 'text-error-default' to align with the design system's color tokens."
      }
    ]
  }
}
```

## Rule Details

This rule operates by listening for Literal nodes in the AST (Abstract Syntax Tree) and inspecting each for occurrences of specified deprecated class names. If a deprecated class name is found, it reports the usage and suggests the updated class name based on the provided configuration.

### Reporting

When a deprecated class name is detected, the rule reports it with a message formatted as follows:

```
'{className}' is a deprecated TailwindCSS class. {suggestionMessage}
```

Where `{className}` is the deprecated class name and `{suggestionMessage}` is the custom message provided in the rule's configuration.
