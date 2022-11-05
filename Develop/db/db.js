const fs = require("fs")
const util = require("util")
const asyncRead = util.promisify(fs.readFile)
const asyncWrite = util.promisify(fs.writeFile)

class Database {
    write(){
        return asyncWrite()
    }
}