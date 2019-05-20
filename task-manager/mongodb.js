const { ObjectID, MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017' 
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser : true}, (error, client)=>{
	if (error){
		return console.log('Unable to connect to database!', '\nAs tu fais "C:\\Users\\Yuval\\mongodb\\bin\\mongod.exe --dbpath=/Users/Yuval/mongodb-data" pour lancer la connection? ');	
	}

	const db = client.db(databaseName)
	
	// db.collection('users').updateOne(
	// 	{
	// 		_id : new ObjectID("5cdd2c706f2759218402aabf")
	// 	}, 
	// 	{
	// 		$inc: {
	// 			age: 1
	// 		}
	// }).then((result)=> console.log(result))
	// 	.catch((error)=> console.log(error))

		db.collection('tasks').updateMany(
			{
				completed : false
			},
			{
				$set: {
					completed: true
				}
		}).then((result)=> console.log(result))
			.catch((error)=> console.log(error))
})