'use strict';
exports.__esModule = true;
exports.db = void 0;
var client_1 = require('@prisma/client');
var globalForPrisma = global;
exports.db =
  globalForPrisma.prisma ||
  new client_1.PrismaClient({
    log: ['query'],
  });
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = exports.db;
