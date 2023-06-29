// FS MODULE (sync)

// FS MODULE (async)
const { readFile, writeFile } = require("fs");

console.log("Start!");

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
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("Done with this task!");
            }
        );
    });
});

console.log("Starting next one!");

// const { readFileSync, writeFileSync } = require("fs");

// console.log("start");

// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");

// // console.log(first, second);

// writeFileSync(
//     "./content/result-sync.txt",
//     `Here is the result : ${first}, ${second}`,
//     {
//         flag: "a", // a - append
//     }
// );

// console.log("done");
// console.log("starting the next one");
