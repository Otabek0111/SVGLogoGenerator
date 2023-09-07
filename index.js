const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./lib/shapes");
const { log } = require("console");

const userInput = inquirer.prompt([
  // Define prompts for color, shape, and text
  {
    name: "text",
    type: "input",
    message: "Enter the logo text (no longer the 3 characters): ",
    validate: (input) => input.length <= 3,
  },
  {
    name: "shape",
    type: "list",
    message: "Select a shape:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    name: "shapeColor",
    type: "input",
    message: "Enter shape color: ",
  },
  {
    name: "textColor",
    type: "input",
    message: "Enter text color: ",
  },
]);

// Example writeFile function (as provided in the previous answer)
function writeFile(fileName, data) {
  FileSystem.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(`Error writing to ${fileName}: ${err}`);
    } else {
      console.log(`Successfully wrote to ${fileName}`);
    }
  });
}

async function generateLogo() {
  const userResponse = await inquirer.prompt(userInput);

  const userText = userInput.text;
  // console.log(userText);
  const userTextColor = userInput.userTextColor;
  // console.log(userTextColor);
  const userShapeColor = userInput.userShapeColor;
  // console.log(userShapeColor);
  const userShapeType = userInput.shape;

  let createdShape;
  if (userShapeType === "Square") {
    createdShape = new Square();
    console.log("Square selected ");

  } else if (userShapeType === "Triangle") {
    createdShape = new Triangle();
    console.log("Triangle selected ");

  } else if (userShapeType === "Circle") {
    createdShape = new Circle();
    console.log("Circle selected ");

  } else {
    console.log("Error selecting shape!");
  }
  

  
  // Generate the logo data based on userInput (replace this with your actual logo generation logic)
  const logoData = generateLogoData(userInput);

  // Define the file name for the logo
  const logoFile = "logo.svg";

  // Write the logo data to the file
  writeFile(logoFile, logoData);
}

generateLogo();
