# Initiating a TypeScrip project

To initiate a ts project, you will run:

```tsc --init```

This will create a `tsconfig.json` file. There, we have options of the transpiling process.

Here are some interesting options for us to check:

```
"target": "es5",           // Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'.
"outDir": "./public",      // Redirect output structure to the directory.
"rootDir": "./src",        // Specify the root directory of input files. Use to control the output directory structure with --outDir.
```

Now, in order to `"rootDir"` option to work, you must add a property right next to `"compilerOptions"` property:

```
"compilerOptions": {
    // all the options here
},
// INCLUDE THIS, AIMING THE FOLDER MEANT TO BE "rootDir"
"include": ["src"]
```

after `"include": ["src"]` is included, nothing out of this folder will be transpiled :)

# Running the project

You can run the project by typing into your terminal:

```tsc -w```