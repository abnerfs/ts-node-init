# TypeScript + NodeJS

# URL
[Medium Article](https://medium.com/@oieduardorabelo/node-js-e-typescript-o-como-e-com-testes-7affce2c02a8)

# TypeScript

```
yarn add typescript nodemon ts-node @types/node
```
OR
```
npm i typescript nodemon ts-node @types/node
```

```
./node_modules/.bin/tsc --init
```

# tsconfig.json
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

# package.json
``` JSON
"scripts": {
    "prod": "tsc",
    "dev": "nodemon --watch \"src//\" --exec \"ts-node src/entry.ts\" -e ts"
  }
```

# folder structure

![image](https://user-images.githubusercontent.com/14078661/67684075-44a81e80-f971-11e9-9740-7963fcd3ca59.png)


# Express

```
yarn add express body-parser morgan dotenv @types/express @types/body-parser @types/dotenv @types/morgan
```
OR
```
npm i express body-parser morgan dotenv @types/express @types/body-parser @types/dotenv @types/morgan 
```

# Run
```
yarn dev
OR
npm run dev
```

# Deploy
```
yarn prod
OR
npm run prod
```
