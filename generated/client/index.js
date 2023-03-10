
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.9.0
 * Query Engine version: ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5
 */
Prisma.prismaVersion = {
  client: "4.9.0",
  engine: "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "generated/client",
    "client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BookScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  year: 'year',
  author: 'author',
  pageCount: 'pageCount'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});


exports.Prisma.ModelName = makeEnum({
  Book: 'Book'
});

const compressedDMMF = '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'
const decompressedDMMF = decompressFromBase64(compressedDMMF)
// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(decompressedDMMF)
exports.Prisma.dmmf = JSON.parse(decompressedDMMF)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/malo/Kamal/belajar-deno/app/bookSelftApp-Deno-Express-Backend/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "4.9.0",
  "engineVersion": "ceb5c99003b99c9ee2c1d2e618e359c14aef2ea5",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "dataProxy": true
}
config.document = dmmf
config.dirname = dirname

config.inlineSchema = 'Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJkZW5vIl0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAibW9uZ29kYiIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKbW9kZWwgQm9vayB7CiAgaWQgICAgICAgIFN0cmluZyBAaWQgQGRlZmF1bHQoYXV0bygpKSBAbWFwKCJfaWQiKSBAZGIuT2JqZWN0SWQKICBuYW1lICAgICAgU3RyaW5nCiAgeWVhciAgICAgIFN0cmluZwogIGF1dGhvciAgICBTdHJpbmcKICBwYWdlQ291bnQgSW50Cn0K'
config.inlineSchemaHash = '6d4db6eee8a35ea4f3b60b2d1fea607c071ee34df296d32e4397a04365a6aecf'

config.inlineDatasources = {
  "db": {
    "url": {
      "fromEnvVar": "DATABASE_URL",
      "value": null
    }
  }
}


const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

