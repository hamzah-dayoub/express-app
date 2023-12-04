// @desc Get Goals
// @route Get /api/goals
// access Private

const getGoals = (req, res) => {
    res.status(200).json({ mesaage: "Get goals" })
}

// @desc Set Goal
// @route Post /api/goals
// access Private


const setGoal = (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
    }
    res.status(200).json({ mesaage: "Set goals" })
}

// @desc update Goal
// @route put /api/goals/:id
// access Private

const updateGoal = (req, res) => {
    res.status(200).json({ mesaage: `Update goal ${req.params.id}` })
}



// @desc delete Goals
// @route delete /api/goals/:id
// access Private

const deleteGoal = (req, res) => {
    res.status(200).json({ mesaage: `Delete goal ${req.params.id} ` })
}


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}