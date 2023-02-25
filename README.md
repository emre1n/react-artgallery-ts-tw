# Art Gallery App

## React Project with TypeScript and TailwindCSS

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Steps

### 1- Starting the project with Create React App

#### Adding [TypeScript](https://create-react-app.dev/docs/adding-typescript)

```bash
npx create-react-app my-app --template typescript
```

### 2- Install Tailwind CSS with Create React App

#### Setting up [Tailwind CSS](https://tailwindcss.com/docs/guides/create-react-app) in a Create React App project

- Create `/styles` directory inside `/src` .
- Create `global.css` file inside `/styles` directory.
- Set box-sizing to border-box

```css
* {
  box-sizing: border-box;
}
```

- Install Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file

```json
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your ./src/styles/global.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3- Creating pages and setting up `React-Router`

- Create `/pages` directory under `/src` directory.

- Create page directories and index.tsx inside of them, add React Functional Component with export snippets.

- Install react router dom

```bash
npm install react-router-dom
```

- Create `/libs` directory and inside `/libs` create `/constants` directory
- Create `routes.ts` file and inside the file define the routes.

### 4- Creating `Navbar` component

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

[TypeScript Documentation](https://www.typescriptlang.org/docs/).

[React Router](https://reactrouter.com/en/main/start/tutorial).

### 5- Implementing `React Lazy Load Image Component`

```bash
$ npm i --save react-lazy-load-image-component
npm i --save-dev @types/react-lazy-load-image-component
```

[React Lazy Load Image Component](https://www.npmjs.com/package/react-lazy-load-image-component).
