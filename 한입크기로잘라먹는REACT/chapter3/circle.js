const PI = 3.141592;

const getArea = (radius) => {
    return PI * radius * radius;
}

const getCircumference = (radius) => {
    return 2 * PI * radius;
}

// export { PI, getArea, getCircumference };
export default {
    PI,
    getArea,
    getCircumference,
};