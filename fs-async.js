const { readFile, writeFile, rmSync } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile("./content/second.txt", "utf8", (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;
        writeFile(
            "./content/result-async.txt",
            `Here Is The Result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log("Done With This Task");
            }
        );
    });
});

console.log("starting next task");
