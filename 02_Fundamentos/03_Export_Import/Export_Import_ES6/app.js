import { myLogger, Alligator } from 'app.js';

import myLogger as Logger from 'app.js'; // Com Alias

import * as Utils from 'app.js'; // Importar tudo
Utils.myLogger(); // Permite acessar membros exportados


import Logger, { Alligator, myNumbers } from 'app.js'; // Default na sempre na frente
