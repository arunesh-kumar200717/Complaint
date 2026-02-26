const validateEmail = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    next();
};

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    
    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }
    next();
};

const validateComplaint = (req, res, next) => {
    const { title, description } = req.body;
    
    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }
    next();
};

module.exports = { validateEmail, validatePassword, validateComplaint };