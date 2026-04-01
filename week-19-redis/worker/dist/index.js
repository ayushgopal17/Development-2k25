"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const client = (0, redis_1.createClient)();
async function main() {
    await client.connect();
    while (1) {
        const response = await client.brPop("submissions", 0);
        console.log(response);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("process user submisiion");
    }
}
main();
//# sourceMappingURL=index.js.map