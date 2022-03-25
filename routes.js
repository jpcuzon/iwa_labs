const   express = require("express"),
        router = express.Router(),
        itemCtrl = require("./item-controller"),
        userCtrl = require("./user-controller");

router.get("/:foo/:bar", itemCtrl.helloworld)
router.post("/users", userCtrl.createUser)
router.get("/users", userCtrl.getUsers)

module.exports = router