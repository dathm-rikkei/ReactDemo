var express = require("express")
var cors = require('cors')
var expenseStore = require("./expensedb.js")
var app = express()
app.use(cors());
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var HTTP_PORT = 8000
const multer = require('multer');
app.listen(HTTP_PORT, () => {
   console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});
app.get("/", (req, res, next) => {
   res.json({ "message": "Ok" })
});
app.get("/api/expenses", (req, res, next) => {
   console.log('testApi')
   expenseStore.find({}, function (err, docs) {
      res.json(docs);
   });
});
app.get("/api/expense/:id", (req, res, next) => {
   var id = req.params.id;
   expenseStore.find({ id: id }, function (err, docs) {
      res.json(docs);
   })
});
app.post("/api/expense/", (req, res, next) => {
   var errors = []
   if (!req.body.item) {
      errors.push("No item specified");
   }
   var data = {
      name: req.body.name,
      amount: req.body.amount,
      category: req.body.category,
      spendDate: req.body.spendDate,
   }
   expenseStore.insert(data, function (err, docs) {
      return res.json(docs);
   });
})
app.put("/api/expense/:id", (req, res, next) => {
   var id = req.params.id;
   var errors = []
   if (!req.body.item) {
      errors.push("No item specified");
   }
   var data = {
      id: id,
      name: req.body.name,
      amount: req.body.amount,
      category: req.body.category,
      spendDate: req.body.spendDate,
   }
   expenseStore.update( { id: id }, data, function (err, docs) {
      return res.json(data);
   });
})
app.delete("/api/expense/:id", (req, res, next) => {
   var id = req.params.id;
   expenseStore.remove({ id: id }, function (err, numDeleted) {
      res.json({ "message": "deleted" })
   });
})


//Upload Image
var fileSave ="";
var storage = multer.diskStorage({
   destination: function (req, file, cb) {
     cb(null, './images'); // Replace './uploads' with the path to your desired upload folder
   },
   filename: function (req, file, cb) {
      fileSave = Date.now() + '-' + file.originalname;
     cb(null, fileSave);
   },
 });
 var upload = multer({ storage: storage });
app.post('/upload', upload?.single('image'), (req, res) => {
   // Access the uploaded file using req.file
   fileSave = fileSave;
   res.json({fileSave});
 });

// Serve images from the 'images' folder
app.use('/images', express.static('images'));








 // code end
 app.use(function (req, res) {
   res.status(404);
});