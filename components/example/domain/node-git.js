const nodeGit = require('nodegit');
const path = require("path");

(async function getHistory() {
    const repo = await nodeGit.Repository.open(path.resolve(__dirname, "../../../.git"));
    const commit = await repo.getCommit("c2dc2184dcf5d234dd48bfecae7107ba546c1c30");
    debugger;
    console.log("commit:", commit.sha());
    console.log("Author:", commit.author().name());
    console.log("Date:", commit.date());
    console.log("\n    ", commit.message());

    const difference = await commit.getDiff(async function(diffList) {
        for (const diff of diffList) {
            const patches = await diff.patches();
            for (const patch of patches) {
                const hunks = await patch.hunks();
                for (const hunk of hunks) {
                    const lines = await hunks.lines();
                    for (const line of lines) console.log(String.fromCharCode(line.origin()) +
                        line.content().trim());
                }
            }
        }
    });
    console.log('difference', difference);
    // return repo.getCommit("c2dc2184dcf5d234dd48bfecae7107ba546c1c30");
})();

