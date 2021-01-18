const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes.js");

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  console.log("Title : "+ yargs.title )
});

console.log(process.argv);
