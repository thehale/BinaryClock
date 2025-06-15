const ReactCompilerConfig = {}

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['babel-plugin-react-compiler', ReactCompilerConfig], // must run first!
  ]
};
