// @desc register new user
// @route Post /api/users
// access Public

const registerUser = (req, res) => {
    res.json({
        message: "Register User"
    })
}

// @desc Authenticate a user
// @route Post /api/users/login
// access Public

const loginUser = (req, res) => {
    res.json({
        message: "login User"
    })
}

// @desc Get user data
// @route Get /api/users/me
// access Public

const getMe = (req, res) => {
    res.json({
        message: "User Data Display"
    })
}


module.exports = { registerUser, loginUser, getMe }