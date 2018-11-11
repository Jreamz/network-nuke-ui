#### Deployment

Run the following script on the host you are deploying network nuke to: https://gist.github.com/Jreamz/f6b73635394b25ae389754c0d9dc7f0d

#### Development

Frontend: Clone the UI package and use `npm start` to start Webpack Dev Server.

Backend: You will encounter CORs errors trying to make API calls from the frontend when using
webpack dev server. For now, just work on the API on an actual server or sync your code between
your local environment and the server/
