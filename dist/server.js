"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
//* Importing Routes
const eventsRoutes_1 = __importDefault(require("./routes/eventsRoutes"));
class Server {
    constructor() {
        this.PORT = process.env.PORT;
        this.MONGO_URI = process.env.MONGO_URI;
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        //* Middlewares
        this.app.use(morgan_1.default('dev'));
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        mongoose_1.default.set('useFindAndModify', false);
    }
    routes() {
        this.app.use('/api/events', eventsRoutes_1.default);
    }
    start() {
        mongoose_1.default
            .connect(this.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true
        })
            .then(() => {
            console.log('Connected to DB');
            this.app.listen(this.PORT, () => console.log('Server started on port ' + this.PORT));
        })
            .catch((err) => console.error(err));
    }
}
const server = new Server();
server.start();
