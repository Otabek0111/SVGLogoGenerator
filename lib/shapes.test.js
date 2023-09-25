const { Circle, Square, Triangle } = require("./shapes");

// Imports the Circle, Square, and Triangle shape classes from the 'shapes.js' module and defines a test suite for the shape class.
// The test case checks whether "Circle, Square, and Triangle" objects can be rendered correctly by calling the render method and comparing the result to an expected SVG string.

// Circle Shape
describe('Circle', () => {
  test('Circle renders correctly', () => {
    const shapeColor = 'green';
    const textColor = 'white';
    const text = 'SVG';

    const shape = new Circle();

    shape.setShapeColor(shapeColor);
    shape.setTextColor(textColor);
    shape.setText(text);

    // Use consistent formatting for the expected value
    const expectedSVG = `
    <svg 
      version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <circle cx="50%" cy="50%" r="100" fill="${shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`; // trim to remove leading/trailing white spaces

    expect(shape.render()).toEqual(expectedSVG);
  });
});

describe('Triangle', () => {
  test('Triangle renders correctly', () => {
    const shapeColor = 'green';
    const textColor = 'white';
    const text = 'SVG';

    const shape = new Triangle();

    shape.setShapeColor(shapeColor);
    shape.setTextColor(textColor);
    shape.setText(text);

    // Use consistent formatting for the expected value
    const expectedSVG = `
    <svg 
      version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <polygon points="0,200 300,200 150,0" fill="${shapeColor}" />
      <text x="150" y="135" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
  
    expect(shape.render()).toEqual(expectedSVG);
  });
});

describe('Square', () => {
  test('Square renders correctly', () => {
    const shapeColor = 'green';
    const textColor = 'white';
    const text = 'SVG';

    const shape = new Square();

    shape.setShapeColor(shapeColor);
    shape.setTextColor(textColor);
    shape.setText(text);

    // Use consistent formatting for the expected value
    const expectedSVG = `
    <svg 
      version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      <rect x="50" height="200" width="200" fill="${shapeColor}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
  
    expect(shape.render()).toEqual(expectedSVG);
  });
});
