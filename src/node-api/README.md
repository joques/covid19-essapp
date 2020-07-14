# COVID ADMIN PORTAL API

Integrate our high availability, auto-scaling API, including built-in redundancies, failovers and enterprise ready SLAs.
Template API uses Node.js, Expressjs, Mongodb and Mongoose.

## Setup

**Backend**: Nodejs + Express

**Database**: MongoDB

**Database ODM**: Mongoose

### Development

### Config Paths

#### App Configs

Contains database urls, password and other app related configs.

```bash
api.config.js
```

#### Routes Configs

Contains the configuration for the routes

```bash
routes.config.js
```

## Getting Started

```bash
pm2 start pm2.config.json
```