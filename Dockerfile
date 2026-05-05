# Build stage
FROM node:22-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install --prefer-offline --no-audit

# Copy application files
COPY tsconfig*.json ./
COPY vite.config.ts ./
COPY public ./public
COPY src ./src
COPY index.html ./
COPY env.d.ts ./

# Build the application
RUN npm run build
