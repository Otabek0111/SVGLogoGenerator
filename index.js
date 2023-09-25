const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questionInputs = [
  // prompts to select colors, shape, and text
  {
    name: "shape",
    type: "list",
    message: "Select a shape:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Enter a color keyword (OR a hexadecimal number): ",
  },
  {
    name: "text",
    type: "input",
    message: "Enter the logo text (no longer the 3 characters): ",
    validate: (input) => input.length >= 1 && input.length <= 3
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter text color: ",
  },
];

// Example writeFile function (as provided in the previous answer)
function writeFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing to ${fileName}: ${err}`);
    } else {
      console.log(`Generated ${fileName}`);
    }
  });
}

// Define the file name for the logo
const logoFile = "logo.svg";

async function generateLogo() {
  const userInput = await inquirer.prompt(questionInputs);

  const userText = userInput.text;
  const userTextColor = userInput.textColor;
  const userShapeColor = userInput.shapeColor;
  const userShapeType = userInput.shape;

  let createdShape;
  if (userShapeType === "Square") {
    createdShape = new Square(userShapeColor, userTextColor, userText);
    console.log("Square selected ");
  } else if (userShapeType === "Triangle") {
    createdShape = new Triangle(userShapeColor, userTextColor, userText);
    console.log("Triangle selected ");
  } else if (userShapeType === "Circle") {
    createdShape = new Circle(userShapeColor, userTextColor, userText);
    console.log("Circle selected ");
  } else {
    console.log("Error selecting shape!");
  }
  console.log("Shape Color: " + userShapeColor);
  console.log("Text: " + userText);
  console.log("Text Color: " + userTextColor);

  createdShape.shapeColor = userShapeColor;
  createdShape.textColor = userTextColor;
  createdShape.text = userText;


  const svgString = createdShape.render();

  // Write the logo data to the file
  writeFile(logoFile, svgString);
}

generateLogo();
