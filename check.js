const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://127.0.0.1";
const mongoClient = new MongoClient(url);

async function run() {
    try {
        await mongoClient.connect();
        const dataBase = mongoClient.db('socialNetwork');
        // const usersFriends = await dataBase.collection('usersFriends').aggregate([
        //     { $lookup:
        //             {
        //                 from: 'allUsers',
        //                 localField: 'userID',
        //                 foreignField: '_id',
        //                 as: 'friendsInformation'
        //             }
        //     }
        // ]).toArray();
        console.log(usersFriends.find({"friendsInformation._id": 2}));
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);