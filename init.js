const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
   .then(() => {
    console.log("connection successful");
   })
   .catch((err) => console.log(err));

   async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
   }

let allChats = [
    {
        from : "neha",
        to :  "preeti",
        msg: "send question paper",
        created_at : new Date(),
    },
    {
        from: "rishabh",
        to: "pranju",
        msg: "teach me js callback",
        created_at: new Date(),
    },
    {
        from: "rishu",
        to: "pranju",
        msg: "apple",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
