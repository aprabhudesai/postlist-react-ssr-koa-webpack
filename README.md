# A Sample App that displays a list of posts
## Technologies Used
- Typescript
- React
- Webpack
- Babel
- Koa
- FBT (facebook translations)

## HTML Streaming Support
The app does server side streaming using:
- Multistream
- String to Stream
- renderToNodeStream (React)

## Translations for
- English
- French
- Japanese

## Running the App
**Note:** Required minimum node version is `12`
1. Clone the repository by running
```git clone git@github.com:aprabhudesai/postlist-react-ssr-koa-webpack.git```
2. Run ```cd postlist-react-ssr-koa-webpack/```
3. Install dependencies ```npm install```
4. Generate translations (FBT) ```npm run build:fbt```
5. Open 2 terminal tabs.
   - In one tab run the build in watch mode ```npm run build```
   - In second tab start the server ```npm run watch-server```. Make sure you are running node version `12` or above
6. You can access the application at ```http://localhost:8088```. To specify locale add the URL param ```locale```. For e.g.
   - ```http://localhost:8088/?locale=en_US```
   - ```http://localhost:8088/?locale=fr_FR```
   - ```http://localhost:8088/?locale=ja_JP```

## Load testing the App
### Using `curl` command (preferred)
1. Open 3 terminals and run the following:
   - ```./test/loadtest-fbt.sh en_US 100```
   - ```./test/loadtest-fbt.sh fr_FR 100```
   - ```./test/loadtest-fbt.sh ja_JP 100```
   
   If you get file permissions error please run ```chmod +x loadtest-fbt.sh```

### Using ```loadtest``` package
1. Open a new terminal
2. Run the command ```npm run loadtest:fbt```

## Current Issue with FBT
In the terminal that you execute the load test commands, you should see the html being returned from server. You have to observe two things:
   - ```<html lang"">``` - which is the locale we specified
   - the translated text sent back

For e.g. In one of the runs I saw this:
```html lang=ja_JP``` but text is in ```french```
