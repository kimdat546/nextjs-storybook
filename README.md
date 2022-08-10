[build scalable architecture for nextjs](https://dev.to/alexeagleson/how-to-build-scalable-architecture-for-your-nextjs-project-2pb7)

<details>
<summary>set up ESLint and Prettier</summary>

[set up Next.js - VSCode, ESLint and Prettier](https://dev.to/achmand/getting-started-with-next-js-vscode-eslint-and-prettier-3pap)

## Setting up ESLint:

```
yarn add eslint --dev
yarn run eslint --init
```

-   How would you like to use ESLint? To check syntax, find problems, and enforce code style
-   What types of modules does your project use? Javascript modules (import/export)
-   Which framework does your project use? React
-   Does your project use TypeScript? No
    Where does your code run? Browser
-   How would you like to define a style for your project? Use a popular style guide
-   Which style guide do you want to follow? Airbnb (In this guide we use this style as it is our personal preference)
-   What format do you want your config file to be in? JSON
-   When prompted to install dependencies select ‘yes’.

create .estlintignore file

```
.next
dist
node_modules/
```

## Formatting using Prettier

```
yarn add --dev --exact prettier
```

create .prettierrc.json file and paste

```
{
    "singleQuote": true, # Use single quotes instead of double quotes
    "tabWidth": 2,       # Number of spaces per indentation level
    "semi": true         # Print semicolons
}
```

ignore conflict rules

```
yarn add --dev eslint-config-prettier
```

</details>

<details>
<summary>install tailwind</summary>

[documentation](https://tailwindcss.com/docs/guides/nextjs)

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

config file tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        extend: {}
    },
    plugins: []
};
```

config file global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

</details>

<details>
<summary>setup husky</summary>

run command

```bash
yarn add -D husky
npx husky install
```

how to create new hook in husky

```bash
npx husky add .husky/pre-commit "yarn lint"
npx husky add .husky/pre-push "yarn build"
```

enable commitlint with husky

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
# Sometimes above command doesn't work in some command interpreters
# You can try other commands below to write npx --no -- commitlint --edit $1
# in the commit-msg file.
npx husky add .husky/commit-msg \"npx --no -- commitlint --edit '$1'\"
# or
npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
```

</details>

<details>
<summary>setup commitlint</summary>

run command

```bash
yarn add -D @commitlint/config-conventional @commitlint/cli
```

</details>

<details>
<summary>setup cross-env</summary>

run command

```bash
yarn add -D cross-env
```

</details>

<details>
<summary>install tailwind</summary>

</details>
