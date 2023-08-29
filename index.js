const fs = require("fs");
const inquirer = require("inquirer");
const shapes = require ("./lib/shapes");

const shape = new shapes();

shape.run();