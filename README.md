# feather-angular
Integrating Feather icon set under Angular framework.

## Commands to make it compile

`npm install -g @angular/cli@latest`
`npm i feather-icons`
`npm i @types/feather-icons --save-dev`

Then, in `angular.json`, add this section under `projects / architect / build / options`:

```"scripts": [
    "node_modules/feather-icons/dist/feather.min.js"
]```

