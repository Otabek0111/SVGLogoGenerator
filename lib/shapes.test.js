const {Circle, Triangle , Square } = require("./shapes");

test("Test Triangle Area", () => {

    const triangle = new Circle(5,10)

    expect(triangle.getArea().toBe(25))

});

test("Test Triangle Area", () => {

    const triangle = new Triangle(5,10)
    
    expect(triangle.getArea().toBe(25))

});

test("Test Triangle Area", () => {

    const triangle = new Square(5,10)
    
    expect(triangle.getArea().toBe(25))

});