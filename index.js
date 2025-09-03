import express from 'express';
import dotenv from 'dotenv';
import * as path from 'path';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { getHikes } from './api_controller/index.js'
import { getIndexView, getContactView } from './controller/index.js';
    
const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();

app.use('/', express.static('public'));
app.use(express.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/api/matkad', getHikes);

app.get('/', getIndexView);
app.get('/kontakt', getContactView);

const PORT = process.env.PORT || 3300;

app.listen(PORT, ()=>{console.log('Listening on port ' + PORT)});


 