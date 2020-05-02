# TypeScript NPM Package

```
yarn add typescript ts-node ts-node-dev @types/node --dev
```
OR
```
npm i typescript ts-node ts-node-dev @types/node --save-dev
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
    "dev": "ts-node-dev --respawn --transpileOnly src/index.ts"
  }
```



