/*1*/Sprint2.restaurantes.find({});
/*2*/Sprint2.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
/*3*/Sprint2.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id:0});
/*4*/Sprint2.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, "adress.zipcode": 1, _id:0});
/*5*/Sprint2.restaurantes.find({borough: "Bronx"});
/*6*/Sprint2.restaurantes.find({borough: "Bronx"}).limit(5);
/*7*/Sprint2.restaurantes.find({borough: "Bronx"}).skip(5).limit(5);
/*8*/Sprint2.restaurantes.find({"grades.score":{$gt:90}});
/*9*/Sprint2.restaurantes.find({"grades.score": {$gt:80, $lt:100}});
/*10*/Sprint2.restaurantes.find({"address.coord.0": { $lt: -95.754168}});
/*11*/Sprint2.restaurantes.find({cuisine: {$ne: "American"}, "grades.score": {$gt: 70}, "address.coord.1": {$lt: -65.754168}});
/*12*/Sprint2.restaurantes.find({cuisine: {$ne: "American"}, "grades.score": {$gt:70}, "address.coord.0": {$lt: -65.754168}});
/*13*/Sprint2.restaurantes.find({ $and: [{cuisine: {$ne: "American"}},{"grades.grade": "A"},{borough: {$ne: "Brooklyn"}}]}).sort({cuisine: -1});
/*14*/Sprint2.restaurantes.find({name: { $regex: /^Wil/, $options: "i"}},{restaurant_id:1, name: 1, borough: 1, cuisine:1, _id:0});
/*15*/Sprint2.restaurantes.find({name: {$regex: /ces$/, $options: "i"}}, {restaurant_id: 1, name: 1, borough:1, cuisine: 1, _id:0 });
/*16*/Sprint2.restaurantes.find({name: {$regex: /Reg/, $options: "i"}},{restaurant_id: 1, name: 1, cuisine: 1, _id:0});
/*17*/Sprint2.restaurantes.find({borough: "Bronx", cuisine: {$in: ["American", "Chinese"]}}, {restaurant_id: 1, name:1, borough: 1, cuisine:1, _id:0})
/*18*/Sprint2.restaurantes.find({borough: {$in: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id: 1, name: 1, borough:1, cuisine: 1, _id:0});
/*19*/Sprint2.restaurantes.find({borough: {$nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"]}},{restaurant_id:1, name: 1, borough: 1, cuisine: 1, _id: 0});
/*20*/Sprint2.restaurantes.find({"grades.score": {$lt:10}}, {restaurant_id:1, name:1, borough:1, cuisine: 1, _id:0});
/*21*/Sprint2.restaurantes.find({});
/*22*/Sprint2.restaurantes.
/*23*/Sprint2.restaurantes.
/*24*/Sprint2.restaurantes.
/*25*/Sprint2.restaurantes.
/*26*/Sprint2.restaurantes.
/*27*/Sprint2.restaurantes.
/*28*/Sprint2.restaurantes.
/*29*/Sprint2.restaurantes.
/*30*/Sprint2.restaurantes.
/*31*/Sprint2.restaurantes.
/*32*/Sprint2.restaurantes.