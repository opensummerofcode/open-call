# Open Call site

## Get started

This project uses the [Yarn](https://yarnpkg.com/) package manager.

Install the dependencies...

```bash
cd open-call
yarn
```

...then start [Rollup](https://rollupjs.org):

```bash
yarn run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built site with `yarn start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in our package.json's `dependencies` so that the site will work when you deploying to platforms like [Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing us to deploy the site anywhere.
