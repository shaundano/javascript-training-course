export const PI = 3.14159;

function getCircumference(radius) {
  return 2 * PI * radius;
}

function getArea(radius) {
  return PI * radius * radius;
}

function getVolume(radius) {
  return 4 * PI * radius;
}

export { getCircumference, getArea, getVolume };

// this ensures we can access from index.js

// cool. this is now a module?
