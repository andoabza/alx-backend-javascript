/// <reference path="./crud.d.ts" />
import {RowID, rowElement} from './interface';
import * as CRUD from './crud';


const row: rowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
const newRowID: RowID = insertRow(row);

row.age = 23;

const updatedRow: rowElement = row;

updateRow(newRowID, updatedRow);
deleteRow(newRowID);

const obj = {firstName: "Guillaume", lastName: "Salva"};
CRUD.insertRow(obj)




