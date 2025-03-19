const roles = mongoose.model('Role', RoleSchema);
const user = mongoose.model('User', UserSchema);
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const roles= require('./models/Role');

app.post('/register', async (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = await Role.findOne({ name: role });
    const user = new User({ username, password: hashedPassword, role: userRole._id });
    await user.save();
    res.status(201).send('User registered');
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username }).populate('role');
    if (!user) return res.status(400).send('Invalid username or password');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid username or password');

    const token = jwt.sign({ userId: user._id, role: user.role.name }, 'secretKey');
    res.header('auth-token', token).send(token);
});

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, 'secretKey');
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid token');
    }
};

const authorize = (roles) => (req, res, next) => {
    if (!roles.includes(req.user.role)) return res.status(403).send('Access denied');
    next();
};

app.get('/admin', verifyToken, authorize(['admin']), (req, res) => {
    res.send('Admin access');
});

app.get('/user', verifyToken, authorize(['admin', 'user']), (req, res) => {
    res.send('User access');
});
