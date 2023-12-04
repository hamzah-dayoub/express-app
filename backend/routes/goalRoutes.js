const express = require("express")
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require("../controllers/goalControllers")



router.get('/', getGoals)
router.post('/', setGoal)

router.route('/:id').put(updateGoal).delete(deleteGoal)



module.exports = router

