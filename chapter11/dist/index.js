"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const data = __importStar(require("./data/data.json")); // it's imported as Object (like JSON.parse)
{
    // let myCompanies: Company[] = [];
    console.log(data);
}
{
    for (const company of Object.getOwnPropertyNames(data)) {
        // Solo necesitaríamos un pequeño cambio para evitar la impresión de la clave default
        if (company != 'default') {
            console.log(data[company]);
        }
    }
}
{
    for (const company of Object.getOwnPropertyNames(data)) {
        if (company != 'default') {
            // Antes de operar con la propiedad comrobar que exista...
            if (data[company].name && data[company].name == 'Developodo') {
                let developodo = Object.assign({ id: 1 }, data[company]);
                console.log(developodo);
            }
        }
    }
}
{
    for (const company of Object.getOwnPropertyNames(data)) {
        if (company != 'default') {
            // Antes de operar con la propiedad comrobar que exista...
            if (data[company].name && data[company].name == 'Developodo') {
                let developodo = Object.assign({ id: 1 }, data[company]);
                if (Array.isArray(developodo.people)) {
                    developodo.people.forEach((employee) => {
                        console.log(employee.fullname);
                    });
                }
            }
        }
    }
}
