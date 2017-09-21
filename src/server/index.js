import express from 'express';
import bodyParser from 'body-parser';
import router from './routes';

const app = express();

app
  .use(bodyParser.json())
  .use(express.static('public'))
  .use(router);


app.listen(process.env.PORT || 3000);
