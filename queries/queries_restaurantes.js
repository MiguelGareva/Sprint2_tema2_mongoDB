/*1*/Sprint2.restaurantes.find({});
/*2*/Sprint2.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1});
/*3*/Sprint2.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id:0});
/*4*/Sprint2.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, "adress.zipcode": 1, _id:0});
/**/Sprint2.restaurantes.find({borough: "Bronx"});
/**/Sprint2.restaurantes.find({borough: "Bronx"}).limit(5);
/**/Sprint2.restaurantes.find({borough: "Bronx"}).skip(5).limit(5);
/**/Sprint2.restaurantes.find({"grades.score":{$gt:90}});
/**/Sprint2.restaurantes.find({"grades.score": {$gt:80, $lt:100}});
/**/Sprint2.restaurantes.find({"address.coord.0": { $lt: -95.754168}});
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.
/**/Sprint2.restaurantes.