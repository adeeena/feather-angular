# feather-angular

<p align="center">
  <a href="https://angular.dev/">
    <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular">
  </a>
  <a href="https://feathericons.com/">
    <img src="https://img.shields.io/badge/Feather-Icons-black?style=for-the-badge&logo=feather&logoColor=white" alt="Feather Icons">
  </a>
</p>

Integrating [Feather icon set](https://feathericons.com/) under [Angular](https://angular.dev/) 20 framework.

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

## Love it?

Thank you! ❤️

[You can back me for a nice cup of coffee.](https://ko-fi.com/adeeena)
