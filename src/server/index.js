import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();
const env = process.env.ENV != 'PROD' ? 'dev' : 'dist';

app
  .use(bodyParser.json())
  .use(express.static(`${env}/client/public`))
  .use(router);


app.listen(3000);
