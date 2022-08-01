import getDirSizes from "../getDirSizes";
import path from "path";

describe("getDirSizes", () => {
  it("should return an array of file sizes", () => {
    const result = getDirSizes(path.join(__dirname, "../../../fakeDir/"));
    expect(result).toEqual([
      { filename: "box1", size: 128 },
      { filename: "box2", size: 64 },
    ]);
  });
});
