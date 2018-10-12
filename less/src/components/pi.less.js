module.exports = {
  install(less, pluginManager, functions) {
    functions.add("pi", () => new tree.Dimension(Math.PI));
  },
};
