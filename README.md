# keralarebuild.in
Website to keep info related to how we can rebuild Kerala after devastating floods

## Getting Started
- git clone repo
- cd repofolder
- npm install -g @angular/cli
- npm install
- follow below steps

### Development
- `ng serve --open --configuration=ml` - `Malayalam version`
- `ng serve --open` - `English version `

### Build
- `ng build --output-path=en --prod --base-href /keralarebuild.in/en/`
- `ng build --output-path=ml --prod --base-href /keralarebuild.in/ml/ --i18n-file src/locale/messages.ml.xlf --i18n-format xlf --i18n-locale ml`
- `Push to git`
- `https://{{forkdomain}}.github.io/keralarebuild.in/ml/#/`
- `https://{{forkdomain}}.github.io/keralarebuild.in/en/#/`

## Angular References
- https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358
