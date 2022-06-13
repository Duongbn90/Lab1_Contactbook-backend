const app = require("./app");
const config = require("./config");
const MongoDB = require("./utils/mongodb.util");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Ket noi thanh cong MongoDB!");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

    } catch (error) {
        console.log("Khong the ket noi den MongoDB!", error);
        process.exit();
    }
}

startServer();