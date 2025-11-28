/**
 * مولّد index.html من قوالب:
 * templates/html_top.txt
 * templates/css.txt
 * templates/js_core_part1.txt
 * templates/js_core_part2.txt
 * templates/html_bottom.txt
 *
 * الاستخدام:
 *   node generate_index.js
 */

const fs   = require("fs");
const path = require("path");

const TEMPLATES_DIR = path.join(__dirname, "templates");
const OUTPUT_FILE   = path.join(__dirname, "index.html");

const PARTS = [
  "html_top.txt",
  "css.txt",           // هذا أنت تضيفه بنفسك في GitHub
  "js_core_part1.txt",
  "js_core_part2.txt",
  "html_bottom.txt"
];

function readPart(name) {
  const full = path.join(TEMPLATES_DIR, name);
  if (!fs.existsSync(full)) {
    throw new Error(`الملف غير موجود: ${full}`);
  }
  return fs.readFileSync(full, "utf8");
}

try {
  console.log("🔧 تجميع index.html من القوالب...");

  let output = "";
  for (const p of PARTS) {
    console.log("➕ إضافة:", p);
    output += readPart(p) + "\n";
  }

  fs.writeFileSync(OUTPUT_FILE, output, "utf8");
  console.log("✅ تم إنشاء index.html بنجاح في نفس المجلد.");
} catch (err) {
  console.error("❌ خطأ أثناء التجميع:", err.message);
}
