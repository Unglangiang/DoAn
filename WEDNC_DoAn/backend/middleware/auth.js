const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

// Middleware xác thực người dùng (dành cho mọi user)
const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Chưa xác thực người dùng" });
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(401).json({ message: "Người dùng không tồn tại" });
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token không hợp lệ" });
    }
};

// Middleware kiểm tra quyền admin
const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Chỉ admin mới được truy cập" });
    }
    next();
};

// Middleware đơn giản kiểm tra token
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });

        req.user = user;
        next();
    });
};

module.exports = {
    verifyToken,
    authMiddleware,
    isAdmin
};
