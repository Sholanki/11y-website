const fastglob = require("fast-glob");
const fs = require("fs");

module.exports = async () => {
  // Create a "glob" of all cat json files
  const dogFiles = await fastglob("./src/pets/dogs/*.json", {
    caseSensitiveMatch: false,
  });

  // Loop through those files and add their content to our `dogs` Set
  let dogs = new Set();
  for (let dog of dogFiles) {
    const dogData = JSON.parse(fs.readFileSync(dog));
    dogs.add(dogData);
  }

  // Return the dogs Set of objects within an array
  return [...dogs];
};