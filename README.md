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
1. Clone the repository by running
```git@github.com:aprabhudesai/postlist-react-ssr-koa-webpack.git```
2. Install dependencies ```npm install```
3. Generate translations (FBT) ```npm run build:fbt```
4. Open 2 terminal tabs. In one tab run the build in watch mode ```npm run build```
5. In second tab start the server ```npm run watch-server```
6. You can access the application at ```http://localhost:8088```

## Load testing the App
1. Open a new terminal
2. Run the command ```npm run loadtest:fbt```
