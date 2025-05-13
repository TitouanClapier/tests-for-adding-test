"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("./users"));
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use('/users', users_1.default);
if (require.main === module) {
    const PORT = 3001;
    exports.app.listen(PORT, () => {
        console.log(`🚀 Server listening on http://localhost:${PORT}`);
    });
}
