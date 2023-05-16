const fs = require("fs")
const path = require("path");
const matter = require("gray-matter");

const POSTS_FOLDER = path.join(__dirname, "_posts");
const OUT_FOLDER = path.join(__dirname, "out");
try {
  const posts = fs.readdirSync(POSTS_FOLDER);
  for(let i=0; i<posts.length; i++) {
    const post = posts[i]
    const date = post.substring(0,10);
    const fileName = post.substring(11).replace(".md", "");
    const fileContent = fs.readFileSync(path.join(POSTS_FOLDER, post), 'utf8')

    const parsed = matter.stringify(fileContent)

    fs.writeFileSync(path.join(OUT_FOLDER, `${fileName}.mdx`), parsed)
  }
} catch (e) {
  console.error(e)
}