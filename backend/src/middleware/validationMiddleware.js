const validateComplaint = (req, res, next) => {
    const { title, description } = req.body;
    
    if (!title || title.length < 5) {
        return res.status(400).json({ error: 'Title is required and must be at least 5 characters' });
    }
    
    if (!description || description.length < 10) {
        return res.status(400).json({ error: 'Description is required and must be at least 10 characters' });
    }
    
    next();
};

const validateUser = (req, res, next) => {
    const { email, password } = req.body;
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        return res.status(400).json({ error: 'Valid email is required' });
    }
    
    if (!password || password.length < 6) {
        return res.status(400).json({ error: 'Password must be at least 6 characters' });
    }
    
    next();
};

module.exports = { validateComplaint, validateUser };