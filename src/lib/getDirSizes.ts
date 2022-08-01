import fs from "fs";
import childProcess from "child_process";

interface Output {
  filename: string;
  size: number;
}

const getDirSizes = (path: string): Output[] => {
  const files = fs.readdirSync(path);
  const sizes = files.map((file) => {
    const filePath = `${path}/${file}`;
    // use exec and du to get the size of the file
    const x = childProcess.execSync(`du -s ${filePath}`).toString();

    const size = parseInt(x.split("\t")[0], 10);

    console.log("size", filePath, size);
    return {
      filename: file,
      size,
    };
  });

  return sizes;
};

export default getDirSizes;
