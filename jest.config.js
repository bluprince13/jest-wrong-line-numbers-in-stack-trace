module.exports = {
  moduleDirectories: [
    "<rootDir>/src",
    "<rootDir>/tst",
    "<rootDir>/node_modules"
  ],
  testMatch: ["**/tst/**/(*)Test.js?(x)", "**/?(*.)(spec|test).js?(x)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  }
};
