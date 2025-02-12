# @talensjr/proposal-temporal

This is a fork of the [Temporal proposal](https://github.com/tc39/proposal-temporal) for ECMAScript, which is currently at Stage 3 in TC39.

## Motivation

As stated in the original repository, this is not intended to run in production, so they recommend two alternative libraries, but none of those are up to date with the latest changes in the proposal as per the time of writing this.

So, I decided to fork the proposal and make it available as a package for those who want to try it out.

## Installation

- Using npm:

```bash
npm install @talensjr/proposal-temporal
```

- Using yarn:

```bash
yarn add @talensjr/proposal-temporal
```

- Using pnpm:

```bash
pnpm add @talensjr/proposal-temporal
```

## Usage

```js
import '@talensjr/proposal-temporal';
```

> The library provides a global `Temporal` object, which is the entry point for the Temporal API.

## Caveats

This is a big package (220+ KB) and not optimized for production, use it as your own risk.

## Mantainance

I'll try to keep this package up to date with the latest changes in the original proposal, but I can't guarantee it.
