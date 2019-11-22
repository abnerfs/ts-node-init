# TypeScript NPM Package

```
yarn add typescript nodemon ts-node @types/node --dev
```
OR
```
npm i typescript nodemon ts-node @types/node --dev
```
**tsconfig.json**
``` JSON
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

**package.json**
``` JSON
"main" : "dist/index.js",
"types" : "dist/index.d.ts",
"scripts": {
    "build": "tsc --declaration",
    "dev": "nodemon --watch \"src//\" --exec \"ts-node src/index.ts\" -e ts"
  }
```



