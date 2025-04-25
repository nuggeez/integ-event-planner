# Vite (React-TS) with React Router + PocketBase

This template provides a minimal setup for Vite (React-TS) with React Router (Declarative) + PocketBase

## Installation

Simply clone this repository by typing `git clone https://github.com/dlord213/vite-pocketbase-template.git` in the command line and then `npm install` to install the dependencies.

## Features

- Vite with React (TypeScript) template
- Tailwind CSS v4.1 with TailwindCSS prettier plugin for quick sorting classes + daisyUI for commonly used components (especially forms & buttons)
- TanStack Query, Zustand ( + immer for easy data traversal) for queries/mutations state managements & global stores/hooks
- Axios for HTTP client & handling promises
- PocketBase for backend/database with minimal global store setup `(/hooks/usePocketBase.tsx)` + PocketBase TypeGen

## Running the dev server

To run the dev server, type `cd ./server` then `./pocketbase serve` (Linux) or `./pocketbase.exe server` (Windows) to start PocketBase & create another command line then type `npm run dev` to run the Vite dev server.

**Before you start coding**

- If you don't plan to use react-query, remove the query client logic in the main.tsx file.
- Change the title, description in the index.html.
- Change the name field in package.json.

## Quickstart for generating types on your PocketBase server

To generate types, type `npm generate-types` on the command line and you'll find the generated file at `/types/pocketbase-types.ts`.

## Themes customization & enabling dark mode (--prefers-dark)

**Enabling dark mode**<br>
To enable dark mode (media query), open `global.css` in the index directory & add `dark --prefersdark` on the `@plugin daisyui` configuration
.

**Theme customization**<br>
For customizations, feel free to visit [daisy UI documentations](https://daisyui.com/docs/config/)

## Scripts

- `npm run dev` - start a development server
- `npm run generate-types` - generate types from your pocketbase server
- `npm run preview` - locally preview the dev build
- `npm run build` - build for production
