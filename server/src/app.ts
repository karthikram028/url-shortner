import express from "express";
import config from 'config'
import routes from "./routes";
import bodyParser from "body-parser";
import db from './db'
import cors from "cors"
import { devNull } from "os";


const app = express();

app.use(cors({origin: config.get("corsOrigin"),}));
  


// parse application/json
app.use(bodyParser.json());

// use cors for incoming requests
app.use(cors());

app.listen(4000, () => {
    console.log(`Application listening at http://localhost:${port}`);
    db();
    routes(app)
});