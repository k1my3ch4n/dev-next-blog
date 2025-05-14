// packages/ui/postcss.config.js
import postcssModules from "postcss-modules";
import path from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs"; // 또는 fs/promises 를 사용하는 경우 await 필요

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  plugins: [
    postcssModules({
      getJSON: function (cssFileName, json) {
        const outPath = path.resolve(
          __dirname,
          "dist",
          path.basename(cssFileName, ".module.scss") + ".module.js"
        );
        const jsContent = `export default ${JSON.stringify(json)};`;
        writeFileSync(outPath, jsContent); // 동기적으로 파일 쓰기
        // 또는 (fs/promises 사용 시) await fs.writeFile(outPath, jsContent);
      },
      generateScopedName: "[local]_[hash:base64:5]",
    }),
  ],
};

export default config;
