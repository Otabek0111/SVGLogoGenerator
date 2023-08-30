const fs = require("fs");
const inquirer = require("inquirer");
import inquirer from 'inquirer';

const { Triangle, Circle, Square } = require("./lib/shapes");
const { type } = require("os");

async function generateLogo() {
  const userInput = await inquirer.prompt([
    // Define prompts for color, shape, and text

    {
      name: "shape",
      type: "list",
      message: "Select a color:",
      choices: ["Triangle", "Circle", "Square"],
    },

    {
      name: "text",
      type: "input",
      message: "Enter the logo text (no longer then 3 characters): ",
    },

    {
      name: "fillColor",
      type: "input",
      message: "Enter logo background color: ",
    },

    {
      name: "textColor",
      type: "input",
      message: "Enter text color: ",
    },
  ]);

  let selectedShape;
  if (userInput.shape === "Triangle") {
    selectedShape = new Triangle();
  } else if (userInput.shape === "Circle") {
    selectedShape = new Circle();
  } else if (userInput.shape === "Square") {
    selectedShape = new Square();
  }

  selectedShape.setColor(userInput.fillColor);
  selectedShape.setText(userInput.text);

  const svg = selectedShape.generateSVG();

  fs.writeFileSync("generatedLogo.svg", svg);
}

generateLogo();
