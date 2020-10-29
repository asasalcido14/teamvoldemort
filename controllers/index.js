const db = require("../models");
const express = require("express");
const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { isAbsolute } = require("path");

let carrier;

const expressions = [
  {
    regex: RegExp(/^(1Z)[0-9A-Z]{16}$/),
    carrier: "UPS",
  },
  {
    regex: RegExp(/^(T)+[0-9A-Z]{10}$/),
    carrier: "UPS",
  },
  {
    regex: RegExp(/^[0-9]{9}$/),
    carrier: "UPS",
  },
  {
    regex: RegExp(/^[0-9]{26}$/),
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
    regex: RegExp(/^([A-Z]{2})[0-9]{9}([A-Z]{2})$/),
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
  for (let i = 0; i < array.length; i++) {
    if (expressions[i].regex === true) {
      return expressions[i].carrier;
    }
  }
}

function makeUrl(trackNum) {
  const carrier = detCarrier(trackNum);
  let url;
  switch (carrier) {
    case "UPS":
      url = "http://wwwapps.ups.com/WebTracking/track?track=yes&trackNums=" + trackNum;
      break;
    case "USPS":
        url = "https://tools.usps.com/go/TrackConfirmAction.action?tLabels=" + trackNum
      break;
    case "FedEx":
        url = "https://www.fedex.com/fedextrack/?tracknumbers=" + trackNum
      break;

    default:
      break;
  }
  return url;
}

router.get("/home", function (req, res) {
  db.Package.findAll({
    where: {
      User: req.user.id,
    },
  }).then(function (Packages) {
    Packages.map((Package) => {
      return {
        url: Package.url,
        description: Package.description,
      };
    });
  });
});

router.post("/add", function (req, res) {
  db.Package.create({
    url: makeUrl(req.body.trackNum),
    description: req.body.description,
  });
});

module.exports = router;
