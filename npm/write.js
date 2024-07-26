import fs from "fs";

export const WriteToFile = (file, content) => {
    fs.writeFileSync(file, content);
}