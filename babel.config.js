module.exports = {
    presets: [
      ['@babel/preset-env', {targets: {node: 'current'}}],
      ["@babel/preset-react", {runtime:"automatic"}], //configured to use toBeInTheDocument
    ],
  };