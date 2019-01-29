const fs = require("fs");
const eliapi = require("eliapi");

module.exports.run = async (bot, message, args, origin, shop) => { // Runs when command is called
  if (args.length != 2) return "Invalid command usage";
  if (args[0] == "finish") return "You cannot name a product \"finish\"";
  if (parseInt(args[1]) < 0) return "Cost must be positive";
  if (Number.isInteger(parseInt(args[0]))) return "Cost must be a whole number";
  let shop = require("./shop.json");
  shop[args[0]] = parseInt(args[1]);
  fs.writeFileSync(file, JSON.stringify(p, null, 2), "utf8", {
    if (err) {
      return eliapi.log(2, err);
    }
  });
  return 0; // nonzero value is returned in reply
}

module.exports.config = { // Command info
  name: 'additem',
  usage: '$additem [itemname] [cost]'
}