const db = require("../models");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { isAbsolute } = require("path");
const expressions = [
  {
    regex: RegExp(/^(1Z)[0-9A-Z]{16}$/i),
    carrier: "UPS",
  },
  {
    regex: RegExp(/^(T)+[0-9A-Z]{10}$/i),
    carrier: "UPS",
  },
  {
    regex: RegExp(/^[0-9]{9}$/i),
    carrier: "UPS",
  },
  {
    regex: RegExp(/^[0-9]{26}$/i),
    carrier: "UPS",
  },
  {
    regex: RegExp(/^(94|93|92|94|95)[0-9]{20}$/),
    carrier: "USPS",
  },
  {
    regex: RegExp(/^(94|93|92|94|95)[0-9]{22}$/),
    carrier: "USPS",
  },
  {
    regex: RegExp(/^(70|14|23|03)[0-9]{14}$/),
    carrier: "USPS",
  },
  {
    regex: RegExp(/^(M0|82)[0-9]{8}$/),
    carrier: "USPS",
  },
  {
    regex: RegExp(/^([A-Z]{2})[0-9]{9}([A-Z]{2})$/i),
    carrier: "USPS",
  },
  {
    regex: RegExp(/^[0-9]{20}$/),
    carrier: "FedEx",
  },
  {
    regex: RegExp(/^[0-9]{15}$/),
    carrier: "FedEx",
  },
  {
    regex: RegExp(/^[0-9]{12}$/),
    carrier: "FedEx",
  },
  {
    regex: RegExp(/^[0-9]{22}$/),
    carrier: "FedEx",
  },
];
//array of regex expressions
//inside a forloop, if expressions[i].test(trackNum) return carrier

//function determining the carrier to be called within the makeUrl function
function detCarrier(trackNum) {
  for (let i = 0; i < expressions.length; i++) {
    if (expressions[i].regex.test(trackNum) === true) {
      return expressions[i].carrier;
    }
  }
}

function makeUrl(trackNum) {
  const carrier = detCarrier(trackNum);
  // console.log(carrier);
  let url;
  switch (carrier) {
    case "UPS":
      url =
        "http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" +
        trackNum;
      break;
    case "USPS":
      url =
        "https://tools.usps.com/go/TrackConfirmAction.action?tLabels=" +
        trackNum;
      break;
    case "FedEx":
      url = "https://www.fedex.com/fedextrack/?tracknumbers=" + trackNum;
      break;

    default:
      break;
  }
  return url;
}

router.get("/api/shipmaster/:id", function (req, res) {
  console.log("bacon")
  console.log(req.params)
  db.Package.findAll({
    where: {
      UserId: req.params.id,
    },
  }).then(function (data) {
    console.log(data);
    const packages = data.map(Package => ({
      url: Package.dataValues.url,
      description: Package.dataValues.description,
      id: Package.dataValues.id
    }))
    console.log(packages)
    res.json(packages)
  });
});

router.post("/api/new", function (req, res) {
  console.log(req.body);
  db.Package.create({
    url: makeUrl(req.body.trackNum),
    description: req.body.description,
    UserId: req.body.user,
  }).then(function (data) {
    console.log(data);
    res.json({
      id: data.dataValues.id,
      description: data.dataValues.description,
      url: data.dataValues.url,
    });
  });
});

router.delete("/api/delete/:id", function (req, res) {
  console.log(req.params)
  db.Package.destroy({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    res.json(data)
  });
});

router.post("/api/login", function (req, res) {
  db.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(function (data) {
    if (data === null) {
      return res.json(
        "Hey, idiot, put in the right email. What are you, stupid? I swear bro..."
      );
    }
    bcrypt.compare(req.body.pwd, data.pwd, function (err, result) {
      if (err) throw err;
      if (result === false) {
        return res.json(
          "Hey, idiot, put in the right password. What are you, stupid? I swear bro..."
        );
      }
      // result == true
      const currentUser = {
        id: data.id,
        name: data.f_name,
      };
      res.json(currentUser);
    });
  });
});

router.post("/api/signup", function (req, res) {
  db.User.findOne({
    where: {
      email: req.body.email,
    },
  }).then(function (data) {
    console.log(data);
    if (data !== null) {
      console.log("bacon");
      return res.json(
        "Hey, idiot, you already have an account. What are you, stupid? I swear bro..."
      );
    }
    bcrypt.hash(req.body.pwd, 10, function (err, hash) {
      if (err) throw err;
      db.User.create({
        f_name: req.body.f_name,
        l_name: req.body.l_name,
        email: req.body.email,
        phone: req.body.phone,
        pwd: hash,
      });
    });
  });
});

module.exports = router;
