# Getting Started with Frontegg Hosted Login-Box and Angular

This sample is a Frontegg Hosted Login-Box sample crafted with Angular

## Running the sample

After cloning the project, install it using

### `npm install`

#### Initial configuration

Open `app.module.ts` and update your environment details
```
contextOptions: {
  baseUrl: 'https://[YOUR-SUB-DOMAIN].frontegg.com',
  clientId: '[YOUR-CLIENT-ID]'
},
```


In order to run the project, run
### `npm start`

The application will be opened on [http://localhost:3000](http://localhost:3000) in development mode
In order to trigger the login, click on the Login button in order to redirect to your login box.
