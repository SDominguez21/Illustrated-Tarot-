const express = require("express");
const router = express.Router();
const Card = require("../models/Card");
const ensureLogin = require("connect-ensure-login");
const Spread = require("../models/Spread");
const User = require("../models/User");

// home page route
router.get("/", (req, res, next) => {
  res.render("home");
});

//single card route
router.get(
  //browser url
  "/spreads/onecard",

  //login check
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    // Get a random entry
    // var random = Math.floor(Math.random() * 78); full deck
    var random = Math.floor(Math.random() * 22); //major arcana deck

    //get random card
    Card.findOne()
      .skip(random)
      .then(onecard => {
        //create new spread to save to database
        const newSpread = new Spread({
          type: "One Card",
          cards: [onecard._id],
          user: req.user._id
        });

        //add spread to database
        newSpread.save().then(savedSpread => {
          //pick hbs file to render and object to send object
          res.render("../views/spreads/singlecard", {
            theCard: onecard,
            savedSpread: savedSpread
          });
        });
      })
      .catch(err => {
        next(err);
        console.log(err);
      });
  }
);

//four card route
router.get(
  //browser url
  "/spreads/fourcard",

  //login check
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    //get 4 random cards
    Card.aggregate([{ $sample: { size: 4 } }])
      .then(fourcards => {
        //create variables for easy formatting
        let firstCard = {};
        let clarification = [];

        //create new spread to save to database
        const newSpread = new Spread({
          type: "Clarification",
          cards: [],
          user: req.user._id
        });

        //assign correct card to appropriate row
        fourcards.forEach((eachCard, index) => {
          if (index === 0) {
            firstCard = eachCard;
          } else {
            clarification.push(eachCard);
          }

          //add each card to object to save
          newSpread.cards.push(eachCard._id);
        });

        //add spread to database
        newSpread.save().then(theSavedSpread => {
          //pick hbs file to render and object to send object
          res.render("../views/spreads/fourcard", {
            firstCard: firstCard,
            clarification: clarification,
            savedSpread: theSavedSpread
          });
        });
      })
      .catch(err => {
        next(err);
        console.log(err);
      });
  }
);

//five card route
router.get(
  //browser url
  "/spreads/fivecard",

  //login check
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    //get 5 random cards
    Card.aggregate([{ $sample: { size: 5 } }])
      .then(fivecards => {
        //variables for formatting
        let firstrow = {};
        let secondrow = [];
        let thirdrow = [];

        //create new spread to save to database
        const newSpread = new Spread({
          type: "Mirror",
          cards: [],
          user: req.user._id
        });

        //assign correct card to appropriate row
        fivecards.forEach((eachCard, index) => {
          if (index === 0) {
            firstrow = eachCard;
          } else if (index < 3) {
            secondrow.push(eachCard);
          } else {
            thirdrow.push(eachCard);
          }

          //add each card to object to save
          newSpread.cards.push(eachCard._id);
        });

        //add spread to database
        newSpread.save().then(theSavedSpread => {
          //pick hbs file to render and object to send object
          res.render("../views/spreads/fivecard", {
            firstrow: firstrow,
            secondrow: secondrow,
            thirdrow: thirdrow,
            savedSpread: theSavedSpread
          });
        });
      })
      .catch(err => {
        next(err);
        console.log(err);
      });
  }
);

//profile route
router.get(
  //browser url
  "/profile",

  //login check
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    //get all cards containing user id
    Spread.find({ user: req.user._id }).then(userSpreads => {
      //pick hbs file to render and object to send object
      res.render("user-views/profile", { pastSpread: userSpreads });
    });
  }
);

//spreads route
router.get(
  //browser url
  "/spreads",

  //login check
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    //pick hbs file to render and object to send object
    res.render("spreads/spreads");
  }
);

//past spread route
router.get(
  //browser url
  "/spreads/:id",
  //login check
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    console.log(typeof req.params.id);
    Spread.findById(req.params.id).then(theSpread => {
      if (theSpread.type === "One Card") {
        Card.findById(theSpread.cards[0]).then(theResult => {
          res.render("../views/spreads/singlecard", {
            theCard: theResult,
            savedSpread: theSpread
          });
        });
      } else if (theSpread.type === "Clarification") {
        //make the row variables
        let firstCard = {};
        let clarification = [];

        //query database for each card
        Card.find({
          _id: { $in: theSpread.cards }
        }).then(theCards => {
          //put the card in the appropriate row
          theCards.forEach((eachCard, index) => {
            if (index === 0) {
              firstCard = eachCard;
            } else {
              clarification.push(eachCard);
            }
          });
          //pass the variables into the appropriate view
          res.render("../views/spreads/fourcard", {
            firstCard: firstCard,
            clarification: clarification,
            savedSpread: theSpread
          });
        });
      } //clarification if statement
      else if (theSpread.type === "Mirror") {
        let firstrow = {};
        let secondrow = [];
        let thirdrow = [];

        Card.find({
          _id: { $in: theSpread.cards }
        }).then(theCards => {
          theCards.forEach((eachCard, index) => {
            if (index === 0) {
              firstrow = eachCard;
            } else if (index < 3) {
              secondrow.push(eachCard);
            } else if (index < 5) {
              thirdrow.push(eachCard);
            }
          });
          res.render("../views/spreads/fivecard", {
            firstrow: firstrow,
            secondrow: secondrow,
            thirdrow: thirdrow,
            savedSpread: theSpread
          });
        });
      }
    }); //end of spread find by id arrow function
  } //end of first arrow function
); //end of route

router.get(
  //browser url
  "/spreads/:id/delete",
  //login check
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    // console.log(typeof req.params.id);
    Spread.findByIdAndDelete(req.params.id).then((err, deletedThing) => {
      // console.log(deletedThing, " BYE");
      res.redirect("/profile");
    });
  } //end of first arrow function
); //end of route

router.post(
  "/spreads/comment/:id",
  ensureLogin.ensureLoggedIn("/login"),
  (req, res, next) => {
    // console.log(req.body.note);
    Spread.findById(req.params.id).then(theSpread => {
      const noteAndDate = {
        note: req.body.note,
        date: Date.now()
      };
      theSpread.comments.push(noteAndDate);
      // res.render("/spread");
      theSpread.save().then(updatedSpread => {
        res.redirect(`/spreads/${req.params.id}`);
      });
    });
  }

  // make text area in four and five card spread
  //all the routes that lead to the spread views--look for comments that have been made and display them
); //end of post route

module.exports = router;
