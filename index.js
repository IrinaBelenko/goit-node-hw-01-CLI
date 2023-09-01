//const argv = require("yargs").argv;
const contacts = require("./db/contacts.js");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    // break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      return console.log(oneContact);
    //break;

    case "add":
      // ... name email phone
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);
    // break;

    case "remove":
      const deleteContact = await books.removeContact(id);
      return console.log(deleteContact);
    //break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

//invokeAction(argv);
invokeAction({ action: "list" });
