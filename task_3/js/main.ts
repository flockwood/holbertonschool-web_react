/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from '../interface.js';
import * as CRUD from './crud.js';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement and update row with age field
const updatedRow: RowElement = { 
  firstName: 'Guillaume', 
  lastName: 'Salva', 
  age: 23 
};

// Call updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
