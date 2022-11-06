const fs = require("fs")
const util = require("util")
const asyncRead = util.promisify(fs.readFile)
const asyncWrite = util.promisify(fs.writeFile)

class Database {
    write(data){
        result = asyncWrite("db/db.json", JSON.stringify(data))
        return result
    }

    read(){
        return asyncRead("db/db.json")
    }

    getNotes(){
        return this.read().then((notes) => {
            notesArr = [].concat(JSON.parse(notes))
            return notesArr
        })
    }
}

module.exports = new Database()