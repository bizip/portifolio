module.exports = {
    coverageDirectory: 'coverage',
    verbose: true,
    roots: [
      './src/test',
    ],
    transform: {
      '^.+\\.js?$': 'babel-jest',
    },
    setupFiles: [
      './src/setupTests',
    ],
    moduleNameMapper: {
      '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    },
  };