# feather-angular

Integrating Feather icon set under Angular 20 framework.

## Live demo

[Live demo](http://feather-angular.vercel.app/)

## Commands to make it compile

`npm install -g @angular/cli@latest`
`npm i feather-icons`
`npm i @types/feather-icons --save-dev`

Then, in `angular.json`, add this section under `projects / architect / build / options`:

```json
"scripts": [
  "node_modules/feather-icons/dist/feather.min.js"
]
```

## To use feather icons in your component

To do so, import the `FeatherIconDirective` to your `@Component` section.

```ts
@Component({
  selector: 'app-home',
  imports: [FeatherIconDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
```

Then, you can use feather icons in your template:

`<i [data-feather]="'sunset'"></i>`
