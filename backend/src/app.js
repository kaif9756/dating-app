import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import photoRoutes from './routes/photo.routes.js';
import kycRoutes from './routes/kyc.routes.js';
import admin from './routes/admin.routes.js';
import testRoutes from './routes/test.routes.js';
import blockRoutes from './routes/block.routes.js';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './config/swagger.js';
import swaggerSpec from './config/swagger.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/api/photo", photoRoutes);
app.use("/api/kyc", kycRoutes);
app.use("/api/admin", admin);
app.use("/api/test", testRoutes);
app.use("/api/block", blockRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;