import { PluginOption, transformWithEsbuild } from "vite";

export const jsAsJSX: PluginOption = {
  name: "js-as-jsx",
  async transform(code, id) {
    if (id.match(/.*\.js$/)) {
      return transformWithEsbuild(code, id, {
        loader: "jsx",
        jsx: "automatic",
      });
    }
  },
};
