const esbuild = require("esbuild");
const postCssPlugin = require("esbuild-plugin-postcss").default;
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

esbuild
  .build({
    entryPoints: ["app/javascript/*.*"],
    bundle: true,
    outdir: "app/assets/builds",
    minify: true,
    sourcemap: true,
    // target: ["es2015"], // Target ECMAScript version, adjust as needed
    platform: "browser",
    format: "esm",
    publicPath: "/assets",
    plugins: [
      postCssPlugin({
        plugins: [tailwindcss(), autoprefixer()],
      }),
    ],
    loader: {
      ".ts": "ts",
      ".css": "css",
    },
  })
  .catch(() => process.exit(1));
