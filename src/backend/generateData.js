var db = require('./db.js').db;
//console.log(db);

for(var i = 0; i < 1000; i++) {
	var data = [];
	for(var j = 0; j < 1000; j++)
		data.push((Math.random()*10000).toFixed(2));
	var doc = {
		"_id": "DATA-1-"+i,
		"data": data
	};
	
	putDoc(doc);
}

function putDoc(doc) {
	db.get(doc._id, function(e1,r1,h1) {
		db.destroy(doc._id, r1._rev, function(e2,r2,h2) {
			if(e2) console.log(e2);
			db.insert(doc, function(e3,r3,h3) {
				console.log(r3);
			});
		});
	});
}
