
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model CompanyTag
 * 
 */
export type CompanyTag = $Result.DefaultSelection<Prisma.$CompanyTagPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model TestCasesResult
 * 
 */
export type TestCasesResult = $Result.DefaultSelection<Prisma.$TestCasesResultPayload>
/**
 * Model problemSolved
 * 
 */
export type problemSolved = $Result.DefaultSelection<Prisma.$problemSolvedPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const Difficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD'
};

export type Difficulty = (typeof Difficulty)[keyof typeof Difficulty]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type Difficulty = $Enums.Difficulty

export const Difficulty: typeof $Enums.Difficulty

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyTag`: Exposes CRUD operations for the **CompanyTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyTags
    * const companyTags = await prisma.companyTag.findMany()
    * ```
    */
  get companyTag(): Prisma.CompanyTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testCasesResult`: Exposes CRUD operations for the **TestCasesResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TestCasesResults
    * const testCasesResults = await prisma.testCasesResult.findMany()
    * ```
    */
  get testCasesResult(): Prisma.TestCasesResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problemSolved`: Exposes CRUD operations for the **problemSolved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProblemSolveds
    * const problemSolveds = await prisma.problemSolved.findMany()
    * ```
    */
  get problemSolved(): Prisma.problemSolvedDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Problem: 'Problem',
    Tag: 'Tag',
    CompanyTag: 'CompanyTag',
    Submission: 'Submission',
    TestCasesResult: 'TestCasesResult',
    problemSolved: 'problemSolved'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "problem" | "tag" | "companyTag" | "submission" | "testCasesResult" | "problemSolved"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      CompanyTag: {
        payload: Prisma.$CompanyTagPayload<ExtArgs>
        fields: Prisma.CompanyTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          findFirst: {
            args: Prisma.CompanyTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          findMany: {
            args: Prisma.CompanyTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>[]
          }
          create: {
            args: Prisma.CompanyTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          createMany: {
            args: Prisma.CompanyTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>[]
          }
          delete: {
            args: Prisma.CompanyTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          update: {
            args: Prisma.CompanyTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          deleteMany: {
            args: Prisma.CompanyTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>[]
          }
          upsert: {
            args: Prisma.CompanyTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyTagPayload>
          }
          aggregate: {
            args: Prisma.CompanyTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyTag>
          }
          groupBy: {
            args: Prisma.CompanyTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyTagCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyTagCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      TestCasesResult: {
        payload: Prisma.$TestCasesResultPayload<ExtArgs>
        fields: Prisma.TestCasesResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestCasesResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestCasesResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>
          }
          findFirst: {
            args: Prisma.TestCasesResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestCasesResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>
          }
          findMany: {
            args: Prisma.TestCasesResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>[]
          }
          create: {
            args: Prisma.TestCasesResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>
          }
          createMany: {
            args: Prisma.TestCasesResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCasesResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>[]
          }
          delete: {
            args: Prisma.TestCasesResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>
          }
          update: {
            args: Prisma.TestCasesResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>
          }
          deleteMany: {
            args: Prisma.TestCasesResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestCasesResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestCasesResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>[]
          }
          upsert: {
            args: Prisma.TestCasesResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestCasesResultPayload>
          }
          aggregate: {
            args: Prisma.TestCasesResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestCasesResult>
          }
          groupBy: {
            args: Prisma.TestCasesResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestCasesResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCasesResultCountArgs<ExtArgs>
            result: $Utils.Optional<TestCasesResultCountAggregateOutputType> | number
          }
        }
      }
      problemSolved: {
        payload: Prisma.$problemSolvedPayload<ExtArgs>
        fields: Prisma.problemSolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.problemSolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.problemSolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findFirst: {
            args: Prisma.problemSolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.problemSolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          findMany: {
            args: Prisma.problemSolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          create: {
            args: Prisma.problemSolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          createMany: {
            args: Prisma.problemSolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.problemSolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          delete: {
            args: Prisma.problemSolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          update: {
            args: Prisma.problemSolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          deleteMany: {
            args: Prisma.problemSolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.problemSolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.problemSolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>[]
          }
          upsert: {
            args: Prisma.problemSolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$problemSolvedPayload>
          }
          aggregate: {
            args: Prisma.ProblemSolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblemSolved>
          }
          groupBy: {
            args: Prisma.problemSolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.problemSolvedCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemSolvedCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    problem?: ProblemOmit
    tag?: TagOmit
    companyTag?: CompanyTagOmit
    submission?: SubmissionOmit
    testCasesResult?: TestCasesResultOmit
    problemSolved?: problemSolvedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problems: number
    submissions: number
    solvedProblems: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    solvedProblems?: boolean | UserCountOutputTypeCountSolvedProblemsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    tags: number
    companies: number
    submissions: number
    problemSolvedBy: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | ProblemCountOutputTypeCountTagsArgs
    companies?: boolean | ProblemCountOutputTypeCountCompaniesArgs
    submissions?: boolean | ProblemCountOutputTypeCountSubmissionsArgs
    problemSolvedBy?: boolean | ProblemCountOutputTypeCountProblemSolvedByArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyTagWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblemSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    problems: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | TagCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }


  /**
   * Count Type CompanyTagCountOutputType
   */

  export type CompanyTagCountOutputType = {
    problems: number
  }

  export type CompanyTagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | CompanyTagCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * CompanyTagCountOutputType without action
   */
  export type CompanyTagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTagCountOutputType
     */
    select?: CompanyTagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyTagCountOutputType without action
   */
  export type CompanyTagCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    testCases: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    testCases?: boolean | SubmissionCountOutputTypeCountTestCasesArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTestCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCasesResultWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    password: string | null
    refreshToken: string | null
    isVerified: boolean | null
    isDeActivated: boolean | null
    deletionRequestedAt: Date | null
    unverifiedEmail: string | null
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    forgotPasswordToken: string | null
    googleId: string | null
    githubId: string | null
    appleId: string | null
    forgotPasswordTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    avatar: string | null
    role: $Enums.UserRole | null
    password: string | null
    refreshToken: string | null
    isVerified: boolean | null
    isDeActivated: boolean | null
    deletionRequestedAt: Date | null
    unverifiedEmail: string | null
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    forgotPasswordToken: string | null
    googleId: string | null
    githubId: string | null
    appleId: string | null
    forgotPasswordTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    avatar: number
    role: number
    password: number
    refreshToken: number
    isVerified: number
    isDeActivated: number
    deletionRequestedAt: number
    unverifiedEmail: number
    emailVerificationToken: number
    emailVerificationTokenExpiry: number
    forgotPasswordToken: number
    googleId: number
    githubId: number
    appleId: number
    forgotPasswordTokenExpiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    refreshToken?: true
    isVerified?: true
    isDeActivated?: true
    deletionRequestedAt?: true
    unverifiedEmail?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    forgotPasswordToken?: true
    googleId?: true
    githubId?: true
    appleId?: true
    forgotPasswordTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    refreshToken?: true
    isVerified?: true
    isDeActivated?: true
    deletionRequestedAt?: true
    unverifiedEmail?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    forgotPasswordToken?: true
    googleId?: true
    githubId?: true
    appleId?: true
    forgotPasswordTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    role?: true
    password?: true
    refreshToken?: true
    isVerified?: true
    isDeActivated?: true
    deletionRequestedAt?: true
    unverifiedEmail?: true
    emailVerificationToken?: true
    emailVerificationTokenExpiry?: true
    forgotPasswordToken?: true
    googleId?: true
    githubId?: true
    appleId?: true
    forgotPasswordTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    avatar: string | null
    role: $Enums.UserRole
    password: string | null
    refreshToken: string | null
    isVerified: boolean | null
    isDeActivated: boolean | null
    deletionRequestedAt: Date | null
    unverifiedEmail: string | null
    emailVerificationToken: string | null
    emailVerificationTokenExpiry: Date | null
    forgotPasswordToken: string | null
    googleId: string | null
    githubId: string | null
    appleId: string | null
    forgotPasswordTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    isVerified?: boolean
    isDeActivated?: boolean
    deletionRequestedAt?: boolean
    unverifiedEmail?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    googleId?: boolean
    githubId?: boolean
    appleId?: boolean
    forgotPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    isVerified?: boolean
    isDeActivated?: boolean
    deletionRequestedAt?: boolean
    unverifiedEmail?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    googleId?: boolean
    githubId?: boolean
    appleId?: boolean
    forgotPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    isVerified?: boolean
    isDeActivated?: boolean
    deletionRequestedAt?: boolean
    unverifiedEmail?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    googleId?: boolean
    githubId?: boolean
    appleId?: boolean
    forgotPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    role?: boolean
    password?: boolean
    refreshToken?: boolean
    isVerified?: boolean
    isDeActivated?: boolean
    deletionRequestedAt?: boolean
    unverifiedEmail?: boolean
    emailVerificationToken?: boolean
    emailVerificationTokenExpiry?: boolean
    forgotPasswordToken?: boolean
    googleId?: boolean
    githubId?: boolean
    appleId?: boolean
    forgotPasswordTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "avatar" | "role" | "password" | "refreshToken" | "isVerified" | "isDeActivated" | "deletionRequestedAt" | "unverifiedEmail" | "emailVerificationToken" | "emailVerificationTokenExpiry" | "forgotPasswordToken" | "googleId" | "githubId" | "appleId" | "forgotPasswordTokenExpiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solvedProblems?: boolean | User$solvedProblemsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      solvedProblems: Prisma.$problemSolvedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      avatar: string | null
      role: $Enums.UserRole
      password: string | null
      refreshToken: string | null
      isVerified: boolean | null
      isDeActivated: boolean | null
      deletionRequestedAt: Date | null
      unverifiedEmail: string | null
      emailVerificationToken: string | null
      emailVerificationTokenExpiry: Date | null
      forgotPasswordToken: string | null
      googleId: string | null
      githubId: string | null
      appleId: string | null
      forgotPasswordTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solvedProblems<T extends User$solvedProblemsArgs<ExtArgs> = {}>(args?: Subset<T, User$solvedProblemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly password: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isDeActivated: FieldRef<"User", 'Boolean'>
    readonly deletionRequestedAt: FieldRef<"User", 'DateTime'>
    readonly unverifiedEmail: FieldRef<"User", 'String'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly forgotPasswordToken: FieldRef<"User", 'String'>
    readonly googleId: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly appleId: FieldRef<"User", 'String'>
    readonly forgotPasswordTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.solvedProblems
   */
  export type User$solvedProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.Difficulty | null
    userId: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    isDeleted: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    userId: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    testcases: number
    codesnippets: number
    referencesolution: number
    isDeleted: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    constraints?: true
    hints?: true
    editorial?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    userId?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    testcases?: true
    codesnippets?: true
    referencesolution?: true
    isDeleted?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.Difficulty
    userId: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorial: string | null
    testcases: JsonValue
    codesnippets: JsonValue
    referencesolution: JsonValue
    isDeleted: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codesnippets?: boolean
    referencesolution?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean | Problem$tagsArgs<ExtArgs>
    companies?: boolean | Problem$companiesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    problemSolvedBy?: boolean | Problem$problemSolvedByArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codesnippets?: boolean
    referencesolution?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codesnippets?: boolean
    referencesolution?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    userId?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    testcases?: boolean
    codesnippets?: boolean
    referencesolution?: boolean
    isDeleted?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "userId" | "examples" | "constraints" | "hints" | "editorial" | "testcases" | "codesnippets" | "referencesolution" | "isDeleted" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Problem$tagsArgs<ExtArgs>
    companies?: boolean | Problem$companiesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    problemSolvedBy?: boolean | Problem$problemSolvedByArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      tags: Prisma.$TagPayload<ExtArgs>[]
      companies: Prisma.$CompanyTagPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      problemSolvedBy: Prisma.$problemSolvedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.Difficulty
      userId: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorial: string | null
      testcases: Prisma.JsonValue
      codesnippets: Prisma.JsonValue
      referencesolution: Prisma.JsonValue
      isDeleted: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends Problem$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    companies<T extends Problem$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Problem$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Problem$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problemSolvedBy<T extends Problem$problemSolvedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problemSolvedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'Difficulty'>
    readonly userId: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'String'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly testcases: FieldRef<"Problem", 'Json'>
    readonly codesnippets: FieldRef<"Problem", 'Json'>
    readonly referencesolution: FieldRef<"Problem", 'Json'>
    readonly isDeleted: FieldRef<"Problem", 'Boolean'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.tags
   */
  export type Problem$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Problem.companies
   */
  export type Problem$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    where?: CompanyTagWhereInput
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    cursor?: CompanyTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * Problem.submissions
   */
  export type Problem$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.problemSolvedBy
   */
  export type Problem$problemSolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    cursor?: problemSolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | Tag$problemsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | Tag$problemsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends Tag$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.problems
   */
  export type Tag$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model CompanyTag
   */

  export type AggregateCompanyTag = {
    _count: CompanyTagCountAggregateOutputType | null
    _avg: CompanyTagAvgAggregateOutputType | null
    _sum: CompanyTagSumAggregateOutputType | null
    _min: CompanyTagMinAggregateOutputType | null
    _max: CompanyTagMaxAggregateOutputType | null
  }

  export type CompanyTagAvgAggregateOutputType = {
    count: number | null
  }

  export type CompanyTagSumAggregateOutputType = {
    count: number | null
  }

  export type CompanyTagMinAggregateOutputType = {
    id: string | null
    name: string | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyTagMaxAggregateOutputType = {
    id: string | null
    name: string | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyTagCountAggregateOutputType = {
    id: number
    name: number
    count: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyTagAvgAggregateInputType = {
    count?: true
  }

  export type CompanyTagSumAggregateInputType = {
    count?: true
  }

  export type CompanyTagMinAggregateInputType = {
    id?: true
    name?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyTagMaxAggregateInputType = {
    id?: true
    name?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyTagCountAggregateInputType = {
    id?: true
    name?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyTag to aggregate.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyTags
    **/
    _count?: true | CompanyTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyTagMaxAggregateInputType
  }

  export type GetCompanyTagAggregateType<T extends CompanyTagAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyTag[P]>
      : GetScalarType<T[P], AggregateCompanyTag[P]>
  }




  export type CompanyTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyTagWhereInput
    orderBy?: CompanyTagOrderByWithAggregationInput | CompanyTagOrderByWithAggregationInput[]
    by: CompanyTagScalarFieldEnum[] | CompanyTagScalarFieldEnum
    having?: CompanyTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyTagCountAggregateInputType | true
    _avg?: CompanyTagAvgAggregateInputType
    _sum?: CompanyTagSumAggregateInputType
    _min?: CompanyTagMinAggregateInputType
    _max?: CompanyTagMaxAggregateInputType
  }

  export type CompanyTagGroupByOutputType = {
    id: string
    name: string
    count: number
    createdAt: Date
    updatedAt: Date
    _count: CompanyTagCountAggregateOutputType | null
    _avg: CompanyTagAvgAggregateOutputType | null
    _sum: CompanyTagSumAggregateOutputType | null
    _min: CompanyTagMinAggregateOutputType | null
    _max: CompanyTagMaxAggregateOutputType | null
  }

  type GetCompanyTagGroupByPayload<T extends CompanyTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyTagGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyTagGroupByOutputType[P]>
        }
      >
    >


  export type CompanyTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | CompanyTag$problemsArgs<ExtArgs>
    _count?: boolean | CompanyTagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyTag"]>

  export type CompanyTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyTag"]>

  export type CompanyTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["companyTag"]>

  export type CompanyTagSelectScalar = {
    id?: boolean
    name?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "count" | "createdAt" | "updatedAt", ExtArgs["result"]["companyTag"]>
  export type CompanyTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | CompanyTag$problemsArgs<ExtArgs>
    _count?: boolean | CompanyTagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyTag"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      count: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["companyTag"]>
    composites: {}
  }

  type CompanyTagGetPayload<S extends boolean | null | undefined | CompanyTagDefaultArgs> = $Result.GetResult<Prisma.$CompanyTagPayload, S>

  type CompanyTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyTagCountAggregateInputType | true
    }

  export interface CompanyTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyTag'], meta: { name: 'CompanyTag' } }
    /**
     * Find zero or one CompanyTag that matches the filter.
     * @param {CompanyTagFindUniqueArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyTagFindUniqueArgs>(args: SelectSubset<T, CompanyTagFindUniqueArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyTagFindUniqueOrThrowArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyTagFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagFindFirstArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyTagFindFirstArgs>(args?: SelectSubset<T, CompanyTagFindFirstArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagFindFirstOrThrowArgs} args - Arguments to find a CompanyTag
     * @example
     * // Get one CompanyTag
     * const companyTag = await prisma.companyTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyTagFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyTags
     * const companyTags = await prisma.companyTag.findMany()
     * 
     * // Get first 10 CompanyTags
     * const companyTags = await prisma.companyTag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyTagWithIdOnly = await prisma.companyTag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyTagFindManyArgs>(args?: SelectSubset<T, CompanyTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyTag.
     * @param {CompanyTagCreateArgs} args - Arguments to create a CompanyTag.
     * @example
     * // Create one CompanyTag
     * const CompanyTag = await prisma.companyTag.create({
     *   data: {
     *     // ... data to create a CompanyTag
     *   }
     * })
     * 
     */
    create<T extends CompanyTagCreateArgs>(args: SelectSubset<T, CompanyTagCreateArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyTags.
     * @param {CompanyTagCreateManyArgs} args - Arguments to create many CompanyTags.
     * @example
     * // Create many CompanyTags
     * const companyTag = await prisma.companyTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyTagCreateManyArgs>(args?: SelectSubset<T, CompanyTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyTags and returns the data saved in the database.
     * @param {CompanyTagCreateManyAndReturnArgs} args - Arguments to create many CompanyTags.
     * @example
     * // Create many CompanyTags
     * const companyTag = await prisma.companyTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyTags and only return the `id`
     * const companyTagWithIdOnly = await prisma.companyTag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyTagCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyTag.
     * @param {CompanyTagDeleteArgs} args - Arguments to delete one CompanyTag.
     * @example
     * // Delete one CompanyTag
     * const CompanyTag = await prisma.companyTag.delete({
     *   where: {
     *     // ... filter to delete one CompanyTag
     *   }
     * })
     * 
     */
    delete<T extends CompanyTagDeleteArgs>(args: SelectSubset<T, CompanyTagDeleteArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyTag.
     * @param {CompanyTagUpdateArgs} args - Arguments to update one CompanyTag.
     * @example
     * // Update one CompanyTag
     * const companyTag = await prisma.companyTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyTagUpdateArgs>(args: SelectSubset<T, CompanyTagUpdateArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyTags.
     * @param {CompanyTagDeleteManyArgs} args - Arguments to filter CompanyTags to delete.
     * @example
     * // Delete a few CompanyTags
     * const { count } = await prisma.companyTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyTagDeleteManyArgs>(args?: SelectSubset<T, CompanyTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyTags
     * const companyTag = await prisma.companyTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyTagUpdateManyArgs>(args: SelectSubset<T, CompanyTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyTags and returns the data updated in the database.
     * @param {CompanyTagUpdateManyAndReturnArgs} args - Arguments to update many CompanyTags.
     * @example
     * // Update many CompanyTags
     * const companyTag = await prisma.companyTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyTags and only return the `id`
     * const companyTagWithIdOnly = await prisma.companyTag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyTagUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyTag.
     * @param {CompanyTagUpsertArgs} args - Arguments to update or create a CompanyTag.
     * @example
     * // Update or create a CompanyTag
     * const companyTag = await prisma.companyTag.upsert({
     *   create: {
     *     // ... data to create a CompanyTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyTag we want to update
     *   }
     * })
     */
    upsert<T extends CompanyTagUpsertArgs>(args: SelectSubset<T, CompanyTagUpsertArgs<ExtArgs>>): Prisma__CompanyTagClient<$Result.GetResult<Prisma.$CompanyTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagCountArgs} args - Arguments to filter CompanyTags to count.
     * @example
     * // Count the number of CompanyTags
     * const count = await prisma.companyTag.count({
     *   where: {
     *     // ... the filter for the CompanyTags we want to count
     *   }
     * })
    **/
    count<T extends CompanyTagCountArgs>(
      args?: Subset<T, CompanyTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyTagAggregateArgs>(args: Subset<T, CompanyTagAggregateArgs>): Prisma.PrismaPromise<GetCompanyTagAggregateType<T>>

    /**
     * Group by CompanyTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyTagGroupByArgs['orderBy'] }
        : { orderBy?: CompanyTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyTag model
   */
  readonly fields: CompanyTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    problems<T extends CompanyTag$problemsArgs<ExtArgs> = {}>(args?: Subset<T, CompanyTag$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyTag model
   */
  interface CompanyTagFieldRefs {
    readonly id: FieldRef<"CompanyTag", 'String'>
    readonly name: FieldRef<"CompanyTag", 'String'>
    readonly count: FieldRef<"CompanyTag", 'Int'>
    readonly createdAt: FieldRef<"CompanyTag", 'DateTime'>
    readonly updatedAt: FieldRef<"CompanyTag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyTag findUnique
   */
  export type CompanyTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag findUniqueOrThrow
   */
  export type CompanyTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag findFirst
   */
  export type CompanyTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyTags.
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyTags.
     */
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * CompanyTag findFirstOrThrow
   */
  export type CompanyTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTag to fetch.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyTags.
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyTags.
     */
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * CompanyTag findMany
   */
  export type CompanyTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter, which CompanyTags to fetch.
     */
    where?: CompanyTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyTags to fetch.
     */
    orderBy?: CompanyTagOrderByWithRelationInput | CompanyTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyTags.
     */
    cursor?: CompanyTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyTags.
     */
    skip?: number
    distinct?: CompanyTagScalarFieldEnum | CompanyTagScalarFieldEnum[]
  }

  /**
   * CompanyTag create
   */
  export type CompanyTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyTag.
     */
    data: XOR<CompanyTagCreateInput, CompanyTagUncheckedCreateInput>
  }

  /**
   * CompanyTag createMany
   */
  export type CompanyTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyTags.
     */
    data: CompanyTagCreateManyInput | CompanyTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyTag createManyAndReturn
   */
  export type CompanyTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyTags.
     */
    data: CompanyTagCreateManyInput | CompanyTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyTag update
   */
  export type CompanyTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyTag.
     */
    data: XOR<CompanyTagUpdateInput, CompanyTagUncheckedUpdateInput>
    /**
     * Choose, which CompanyTag to update.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag updateMany
   */
  export type CompanyTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyTags.
     */
    data: XOR<CompanyTagUpdateManyMutationInput, CompanyTagUncheckedUpdateManyInput>
    /**
     * Filter which CompanyTags to update
     */
    where?: CompanyTagWhereInput
    /**
     * Limit how many CompanyTags to update.
     */
    limit?: number
  }

  /**
   * CompanyTag updateManyAndReturn
   */
  export type CompanyTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * The data used to update CompanyTags.
     */
    data: XOR<CompanyTagUpdateManyMutationInput, CompanyTagUncheckedUpdateManyInput>
    /**
     * Filter which CompanyTags to update
     */
    where?: CompanyTagWhereInput
    /**
     * Limit how many CompanyTags to update.
     */
    limit?: number
  }

  /**
   * CompanyTag upsert
   */
  export type CompanyTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyTag to update in case it exists.
     */
    where: CompanyTagWhereUniqueInput
    /**
     * In case the CompanyTag found by the `where` argument doesn't exist, create a new CompanyTag with this data.
     */
    create: XOR<CompanyTagCreateInput, CompanyTagUncheckedCreateInput>
    /**
     * In case the CompanyTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyTagUpdateInput, CompanyTagUncheckedUpdateInput>
  }

  /**
   * CompanyTag delete
   */
  export type CompanyTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
    /**
     * Filter which CompanyTag to delete.
     */
    where: CompanyTagWhereUniqueInput
  }

  /**
   * CompanyTag deleteMany
   */
  export type CompanyTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyTags to delete
     */
    where?: CompanyTagWhereInput
    /**
     * Limit how many CompanyTags to delete.
     */
    limit?: number
  }

  /**
   * CompanyTag.problems
   */
  export type CompanyTag$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * CompanyTag without action
   */
  export type CompanyTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyTag
     */
    select?: CompanyTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyTag
     */
    omit?: CompanyTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyTagInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    language: string | null
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    sourceCode: number
    language: number
    stdin: number
    stdout: number
    stderr: number
    compileOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    sourceCode?: true
    language?: true
    stdin?: true
    stdout?: true
    stderr?: true
    compileOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    sourceCode: JsonValue
    language: string
    stdin: string | null
    stdout: string | null
    stderr: string | null
    compileOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    sourceCode?: boolean
    language?: boolean
    stdin?: boolean
    stdout?: boolean
    stderr?: boolean
    compileOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "sourceCode" | "language" | "stdin" | "stdout" | "stderr" | "compileOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    testCases?: boolean | Submission$testCasesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
      testCases: Prisma.$TestCasesResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      sourceCode: Prisma.JsonValue
      language: string
      stdin: string | null
      stdout: string | null
      stderr: string | null
      compileOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    testCases<T extends Submission$testCasesArgs<ExtArgs> = {}>(args?: Subset<T, Submission$testCasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly problemId: FieldRef<"Submission", 'String'>
    readonly sourceCode: FieldRef<"Submission", 'Json'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly stdin: FieldRef<"Submission", 'String'>
    readonly stdout: FieldRef<"Submission", 'String'>
    readonly stderr: FieldRef<"Submission", 'String'>
    readonly compileOutput: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.testCases
   */
  export type Submission$testCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    where?: TestCasesResultWhereInput
    orderBy?: TestCasesResultOrderByWithRelationInput | TestCasesResultOrderByWithRelationInput[]
    cursor?: TestCasesResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TestCasesResultScalarFieldEnum | TestCasesResultScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model TestCasesResult
   */

  export type AggregateTestCasesResult = {
    _count: TestCasesResultCountAggregateOutputType | null
    _avg: TestCasesResultAvgAggregateOutputType | null
    _sum: TestCasesResultSumAggregateOutputType | null
    _min: TestCasesResultMinAggregateOutputType | null
    _max: TestCasesResultMaxAggregateOutputType | null
  }

  export type TestCasesResultAvgAggregateOutputType = {
    testCase: number | null
  }

  export type TestCasesResultSumAggregateOutputType = {
    testCase: number | null
  }

  export type TestCasesResultMinAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compiledOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCasesResultMaxAggregateOutputType = {
    id: string | null
    submissionId: string | null
    testCase: number | null
    passed: boolean | null
    stdout: string | null
    expected: string | null
    stderr: string | null
    compiledOutput: string | null
    status: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCasesResultCountAggregateOutputType = {
    id: number
    submissionId: number
    testCase: number
    passed: number
    stdout: number
    expected: number
    stderr: number
    compiledOutput: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestCasesResultAvgAggregateInputType = {
    testCase?: true
  }

  export type TestCasesResultSumAggregateInputType = {
    testCase?: true
  }

  export type TestCasesResultMinAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compiledOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCasesResultMaxAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compiledOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCasesResultCountAggregateInputType = {
    id?: true
    submissionId?: true
    testCase?: true
    passed?: true
    stdout?: true
    expected?: true
    stderr?: true
    compiledOutput?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestCasesResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCasesResult to aggregate.
     */
    where?: TestCasesResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCasesResults to fetch.
     */
    orderBy?: TestCasesResultOrderByWithRelationInput | TestCasesResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestCasesResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCasesResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCasesResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TestCasesResults
    **/
    _count?: true | TestCasesResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestCasesResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestCasesResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestCasesResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestCasesResultMaxAggregateInputType
  }

  export type GetTestCasesResultAggregateType<T extends TestCasesResultAggregateArgs> = {
        [P in keyof T & keyof AggregateTestCasesResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestCasesResult[P]>
      : GetScalarType<T[P], AggregateTestCasesResult[P]>
  }




  export type TestCasesResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestCasesResultWhereInput
    orderBy?: TestCasesResultOrderByWithAggregationInput | TestCasesResultOrderByWithAggregationInput[]
    by: TestCasesResultScalarFieldEnum[] | TestCasesResultScalarFieldEnum
    having?: TestCasesResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCasesResultCountAggregateInputType | true
    _avg?: TestCasesResultAvgAggregateInputType
    _sum?: TestCasesResultSumAggregateInputType
    _min?: TestCasesResultMinAggregateInputType
    _max?: TestCasesResultMaxAggregateInputType
  }

  export type TestCasesResultGroupByOutputType = {
    id: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout: string
    expected: string
    stderr: string | null
    compiledOutput: string | null
    status: string
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: TestCasesResultCountAggregateOutputType | null
    _avg: TestCasesResultAvgAggregateOutputType | null
    _sum: TestCasesResultSumAggregateOutputType | null
    _min: TestCasesResultMinAggregateOutputType | null
    _max: TestCasesResultMaxAggregateOutputType | null
  }

  type GetTestCasesResultGroupByPayload<T extends TestCasesResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestCasesResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestCasesResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestCasesResultGroupByOutputType[P]>
            : GetScalarType<T[P], TestCasesResultGroupByOutputType[P]>
        }
      >
    >


  export type TestCasesResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCasesResult"]>

  export type TestCasesResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCasesResult"]>

  export type TestCasesResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["testCasesResult"]>

  export type TestCasesResultSelectScalar = {
    id?: boolean
    submissionId?: boolean
    testCase?: boolean
    passed?: boolean
    stdout?: boolean
    expected?: boolean
    stderr?: boolean
    compiledOutput?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestCasesResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submissionId" | "testCase" | "passed" | "stdout" | "expected" | "stderr" | "compiledOutput" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["testCasesResult"]>
  export type TestCasesResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCasesResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type TestCasesResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $TestCasesResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TestCasesResult"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submissionId: string
      testCase: number
      passed: boolean
      stdout: string
      expected: string
      stderr: string | null
      compiledOutput: string | null
      status: string
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["testCasesResult"]>
    composites: {}
  }

  type TestCasesResultGetPayload<S extends boolean | null | undefined | TestCasesResultDefaultArgs> = $Result.GetResult<Prisma.$TestCasesResultPayload, S>

  type TestCasesResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestCasesResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCasesResultCountAggregateInputType | true
    }

  export interface TestCasesResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TestCasesResult'], meta: { name: 'TestCasesResult' } }
    /**
     * Find zero or one TestCasesResult that matches the filter.
     * @param {TestCasesResultFindUniqueArgs} args - Arguments to find a TestCasesResult
     * @example
     * // Get one TestCasesResult
     * const testCasesResult = await prisma.testCasesResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestCasesResultFindUniqueArgs>(args: SelectSubset<T, TestCasesResultFindUniqueArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TestCasesResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestCasesResultFindUniqueOrThrowArgs} args - Arguments to find a TestCasesResult
     * @example
     * // Get one TestCasesResult
     * const testCasesResult = await prisma.testCasesResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestCasesResultFindUniqueOrThrowArgs>(args: SelectSubset<T, TestCasesResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCasesResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesResultFindFirstArgs} args - Arguments to find a TestCasesResult
     * @example
     * // Get one TestCasesResult
     * const testCasesResult = await prisma.testCasesResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestCasesResultFindFirstArgs>(args?: SelectSubset<T, TestCasesResultFindFirstArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TestCasesResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesResultFindFirstOrThrowArgs} args - Arguments to find a TestCasesResult
     * @example
     * // Get one TestCasesResult
     * const testCasesResult = await prisma.testCasesResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestCasesResultFindFirstOrThrowArgs>(args?: SelectSubset<T, TestCasesResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TestCasesResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TestCasesResults
     * const testCasesResults = await prisma.testCasesResult.findMany()
     * 
     * // Get first 10 TestCasesResults
     * const testCasesResults = await prisma.testCasesResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testCasesResultWithIdOnly = await prisma.testCasesResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestCasesResultFindManyArgs>(args?: SelectSubset<T, TestCasesResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TestCasesResult.
     * @param {TestCasesResultCreateArgs} args - Arguments to create a TestCasesResult.
     * @example
     * // Create one TestCasesResult
     * const TestCasesResult = await prisma.testCasesResult.create({
     *   data: {
     *     // ... data to create a TestCasesResult
     *   }
     * })
     * 
     */
    create<T extends TestCasesResultCreateArgs>(args: SelectSubset<T, TestCasesResultCreateArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TestCasesResults.
     * @param {TestCasesResultCreateManyArgs} args - Arguments to create many TestCasesResults.
     * @example
     * // Create many TestCasesResults
     * const testCasesResult = await prisma.testCasesResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCasesResultCreateManyArgs>(args?: SelectSubset<T, TestCasesResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TestCasesResults and returns the data saved in the database.
     * @param {TestCasesResultCreateManyAndReturnArgs} args - Arguments to create many TestCasesResults.
     * @example
     * // Create many TestCasesResults
     * const testCasesResult = await prisma.testCasesResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TestCasesResults and only return the `id`
     * const testCasesResultWithIdOnly = await prisma.testCasesResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCasesResultCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCasesResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TestCasesResult.
     * @param {TestCasesResultDeleteArgs} args - Arguments to delete one TestCasesResult.
     * @example
     * // Delete one TestCasesResult
     * const TestCasesResult = await prisma.testCasesResult.delete({
     *   where: {
     *     // ... filter to delete one TestCasesResult
     *   }
     * })
     * 
     */
    delete<T extends TestCasesResultDeleteArgs>(args: SelectSubset<T, TestCasesResultDeleteArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TestCasesResult.
     * @param {TestCasesResultUpdateArgs} args - Arguments to update one TestCasesResult.
     * @example
     * // Update one TestCasesResult
     * const testCasesResult = await prisma.testCasesResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestCasesResultUpdateArgs>(args: SelectSubset<T, TestCasesResultUpdateArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TestCasesResults.
     * @param {TestCasesResultDeleteManyArgs} args - Arguments to filter TestCasesResults to delete.
     * @example
     * // Delete a few TestCasesResults
     * const { count } = await prisma.testCasesResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestCasesResultDeleteManyArgs>(args?: SelectSubset<T, TestCasesResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCasesResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TestCasesResults
     * const testCasesResult = await prisma.testCasesResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestCasesResultUpdateManyArgs>(args: SelectSubset<T, TestCasesResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TestCasesResults and returns the data updated in the database.
     * @param {TestCasesResultUpdateManyAndReturnArgs} args - Arguments to update many TestCasesResults.
     * @example
     * // Update many TestCasesResults
     * const testCasesResult = await prisma.testCasesResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TestCasesResults and only return the `id`
     * const testCasesResultWithIdOnly = await prisma.testCasesResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TestCasesResultUpdateManyAndReturnArgs>(args: SelectSubset<T, TestCasesResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TestCasesResult.
     * @param {TestCasesResultUpsertArgs} args - Arguments to update or create a TestCasesResult.
     * @example
     * // Update or create a TestCasesResult
     * const testCasesResult = await prisma.testCasesResult.upsert({
     *   create: {
     *     // ... data to create a TestCasesResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TestCasesResult we want to update
     *   }
     * })
     */
    upsert<T extends TestCasesResultUpsertArgs>(args: SelectSubset<T, TestCasesResultUpsertArgs<ExtArgs>>): Prisma__TestCasesResultClient<$Result.GetResult<Prisma.$TestCasesResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TestCasesResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesResultCountArgs} args - Arguments to filter TestCasesResults to count.
     * @example
     * // Count the number of TestCasesResults
     * const count = await prisma.testCasesResult.count({
     *   where: {
     *     // ... the filter for the TestCasesResults we want to count
     *   }
     * })
    **/
    count<T extends TestCasesResultCountArgs>(
      args?: Subset<T, TestCasesResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCasesResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TestCasesResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestCasesResultAggregateArgs>(args: Subset<T, TestCasesResultAggregateArgs>): Prisma.PrismaPromise<GetTestCasesResultAggregateType<T>>

    /**
     * Group by TestCasesResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCasesResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestCasesResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestCasesResultGroupByArgs['orderBy'] }
        : { orderBy?: TestCasesResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestCasesResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestCasesResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TestCasesResult model
   */
  readonly fields: TestCasesResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TestCasesResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestCasesResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TestCasesResult model
   */
  interface TestCasesResultFieldRefs {
    readonly id: FieldRef<"TestCasesResult", 'String'>
    readonly submissionId: FieldRef<"TestCasesResult", 'String'>
    readonly testCase: FieldRef<"TestCasesResult", 'Int'>
    readonly passed: FieldRef<"TestCasesResult", 'Boolean'>
    readonly stdout: FieldRef<"TestCasesResult", 'String'>
    readonly expected: FieldRef<"TestCasesResult", 'String'>
    readonly stderr: FieldRef<"TestCasesResult", 'String'>
    readonly compiledOutput: FieldRef<"TestCasesResult", 'String'>
    readonly status: FieldRef<"TestCasesResult", 'String'>
    readonly memory: FieldRef<"TestCasesResult", 'String'>
    readonly time: FieldRef<"TestCasesResult", 'String'>
    readonly createdAt: FieldRef<"TestCasesResult", 'DateTime'>
    readonly updatedAt: FieldRef<"TestCasesResult", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TestCasesResult findUnique
   */
  export type TestCasesResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCasesResult to fetch.
     */
    where: TestCasesResultWhereUniqueInput
  }

  /**
   * TestCasesResult findUniqueOrThrow
   */
  export type TestCasesResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCasesResult to fetch.
     */
    where: TestCasesResultWhereUniqueInput
  }

  /**
   * TestCasesResult findFirst
   */
  export type TestCasesResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCasesResult to fetch.
     */
    where?: TestCasesResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCasesResults to fetch.
     */
    orderBy?: TestCasesResultOrderByWithRelationInput | TestCasesResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCasesResults.
     */
    cursor?: TestCasesResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCasesResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCasesResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCasesResults.
     */
    distinct?: TestCasesResultScalarFieldEnum | TestCasesResultScalarFieldEnum[]
  }

  /**
   * TestCasesResult findFirstOrThrow
   */
  export type TestCasesResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCasesResult to fetch.
     */
    where?: TestCasesResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCasesResults to fetch.
     */
    orderBy?: TestCasesResultOrderByWithRelationInput | TestCasesResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TestCasesResults.
     */
    cursor?: TestCasesResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCasesResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCasesResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TestCasesResults.
     */
    distinct?: TestCasesResultScalarFieldEnum | TestCasesResultScalarFieldEnum[]
  }

  /**
   * TestCasesResult findMany
   */
  export type TestCasesResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * Filter, which TestCasesResults to fetch.
     */
    where?: TestCasesResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TestCasesResults to fetch.
     */
    orderBy?: TestCasesResultOrderByWithRelationInput | TestCasesResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TestCasesResults.
     */
    cursor?: TestCasesResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TestCasesResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TestCasesResults.
     */
    skip?: number
    distinct?: TestCasesResultScalarFieldEnum | TestCasesResultScalarFieldEnum[]
  }

  /**
   * TestCasesResult create
   */
  export type TestCasesResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * The data needed to create a TestCasesResult.
     */
    data: XOR<TestCasesResultCreateInput, TestCasesResultUncheckedCreateInput>
  }

  /**
   * TestCasesResult createMany
   */
  export type TestCasesResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TestCasesResults.
     */
    data: TestCasesResultCreateManyInput | TestCasesResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TestCasesResult createManyAndReturn
   */
  export type TestCasesResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * The data used to create many TestCasesResults.
     */
    data: TestCasesResultCreateManyInput | TestCasesResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCasesResult update
   */
  export type TestCasesResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * The data needed to update a TestCasesResult.
     */
    data: XOR<TestCasesResultUpdateInput, TestCasesResultUncheckedUpdateInput>
    /**
     * Choose, which TestCasesResult to update.
     */
    where: TestCasesResultWhereUniqueInput
  }

  /**
   * TestCasesResult updateMany
   */
  export type TestCasesResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TestCasesResults.
     */
    data: XOR<TestCasesResultUpdateManyMutationInput, TestCasesResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCasesResults to update
     */
    where?: TestCasesResultWhereInput
    /**
     * Limit how many TestCasesResults to update.
     */
    limit?: number
  }

  /**
   * TestCasesResult updateManyAndReturn
   */
  export type TestCasesResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * The data used to update TestCasesResults.
     */
    data: XOR<TestCasesResultUpdateManyMutationInput, TestCasesResultUncheckedUpdateManyInput>
    /**
     * Filter which TestCasesResults to update
     */
    where?: TestCasesResultWhereInput
    /**
     * Limit how many TestCasesResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TestCasesResult upsert
   */
  export type TestCasesResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * The filter to search for the TestCasesResult to update in case it exists.
     */
    where: TestCasesResultWhereUniqueInput
    /**
     * In case the TestCasesResult found by the `where` argument doesn't exist, create a new TestCasesResult with this data.
     */
    create: XOR<TestCasesResultCreateInput, TestCasesResultUncheckedCreateInput>
    /**
     * In case the TestCasesResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestCasesResultUpdateInput, TestCasesResultUncheckedUpdateInput>
  }

  /**
   * TestCasesResult delete
   */
  export type TestCasesResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
    /**
     * Filter which TestCasesResult to delete.
     */
    where: TestCasesResultWhereUniqueInput
  }

  /**
   * TestCasesResult deleteMany
   */
  export type TestCasesResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TestCasesResults to delete
     */
    where?: TestCasesResultWhereInput
    /**
     * Limit how many TestCasesResults to delete.
     */
    limit?: number
  }

  /**
   * TestCasesResult without action
   */
  export type TestCasesResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCasesResult
     */
    select?: TestCasesResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TestCasesResult
     */
    omit?: TestCasesResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestCasesResultInclude<ExtArgs> | null
  }


  /**
   * Model problemSolved
   */

  export type AggregateProblemSolved = {
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  export type ProblemSolvedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    problemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemSolvedCountAggregateOutputType = {
    id: number
    userId: number
    problemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemSolvedMinAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedMaxAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemSolvedCountAggregateInputType = {
    id?: true
    userId?: true
    problemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemSolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolved to aggregate.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned problemSolveds
    **/
    _count?: true | ProblemSolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemSolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type GetProblemSolvedAggregateType<T extends ProblemSolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateProblemSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblemSolved[P]>
      : GetScalarType<T[P], AggregateProblemSolved[P]>
  }




  export type problemSolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: problemSolvedWhereInput
    orderBy?: problemSolvedOrderByWithAggregationInput | problemSolvedOrderByWithAggregationInput[]
    by: ProblemSolvedScalarFieldEnum[] | ProblemSolvedScalarFieldEnum
    having?: problemSolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemSolvedCountAggregateInputType | true
    _min?: ProblemSolvedMinAggregateInputType
    _max?: ProblemSolvedMaxAggregateInputType
  }

  export type ProblemSolvedGroupByOutputType = {
    id: string
    userId: string
    problemId: string
    createdAt: Date
    updatedAt: Date
    _count: ProblemSolvedCountAggregateOutputType | null
    _min: ProblemSolvedMinAggregateOutputType | null
    _max: ProblemSolvedMaxAggregateOutputType | null
  }

  type GetProblemSolvedGroupByPayload<T extends problemSolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemSolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemSolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemSolvedGroupByOutputType[P]>
        }
      >
    >


  export type problemSolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problemSolved"]>

  export type problemSolvedSelectScalar = {
    id?: boolean
    userId?: boolean
    problemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type problemSolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "problemId" | "createdAt" | "updatedAt", ExtArgs["result"]["problemSolved"]>
  export type problemSolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type problemSolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $problemSolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "problemSolved"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      problemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problemSolved"]>
    composites: {}
  }

  type problemSolvedGetPayload<S extends boolean | null | undefined | problemSolvedDefaultArgs> = $Result.GetResult<Prisma.$problemSolvedPayload, S>

  type problemSolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<problemSolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemSolvedCountAggregateInputType | true
    }

  export interface problemSolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['problemSolved'], meta: { name: 'problemSolved' } }
    /**
     * Find zero or one ProblemSolved that matches the filter.
     * @param {problemSolvedFindUniqueArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends problemSolvedFindUniqueArgs>(args: SelectSubset<T, problemSolvedFindUniqueArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProblemSolved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {problemSolvedFindUniqueOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends problemSolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, problemSolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends problemSolvedFindFirstArgs>(args?: SelectSubset<T, problemSolvedFindFirstArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProblemSolved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindFirstOrThrowArgs} args - Arguments to find a ProblemSolved
     * @example
     * // Get one ProblemSolved
     * const problemSolved = await prisma.problemSolved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends problemSolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, problemSolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProblemSolveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany()
     * 
     * // Get first 10 ProblemSolveds
     * const problemSolveds = await prisma.problemSolved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends problemSolvedFindManyArgs>(args?: SelectSubset<T, problemSolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProblemSolved.
     * @param {problemSolvedCreateArgs} args - Arguments to create a ProblemSolved.
     * @example
     * // Create one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.create({
     *   data: {
     *     // ... data to create a ProblemSolved
     *   }
     * })
     * 
     */
    create<T extends problemSolvedCreateArgs>(args: SelectSubset<T, problemSolvedCreateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProblemSolveds.
     * @param {problemSolvedCreateManyArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends problemSolvedCreateManyArgs>(args?: SelectSubset<T, problemSolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProblemSolveds and returns the data saved in the database.
     * @param {problemSolvedCreateManyAndReturnArgs} args - Arguments to create many ProblemSolveds.
     * @example
     * // Create many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends problemSolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, problemSolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProblemSolved.
     * @param {problemSolvedDeleteArgs} args - Arguments to delete one ProblemSolved.
     * @example
     * // Delete one ProblemSolved
     * const ProblemSolved = await prisma.problemSolved.delete({
     *   where: {
     *     // ... filter to delete one ProblemSolved
     *   }
     * })
     * 
     */
    delete<T extends problemSolvedDeleteArgs>(args: SelectSubset<T, problemSolvedDeleteArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProblemSolved.
     * @param {problemSolvedUpdateArgs} args - Arguments to update one ProblemSolved.
     * @example
     * // Update one ProblemSolved
     * const problemSolved = await prisma.problemSolved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends problemSolvedUpdateArgs>(args: SelectSubset<T, problemSolvedUpdateArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProblemSolveds.
     * @param {problemSolvedDeleteManyArgs} args - Arguments to filter ProblemSolveds to delete.
     * @example
     * // Delete a few ProblemSolveds
     * const { count } = await prisma.problemSolved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends problemSolvedDeleteManyArgs>(args?: SelectSubset<T, problemSolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends problemSolvedUpdateManyArgs>(args: SelectSubset<T, problemSolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProblemSolveds and returns the data updated in the database.
     * @param {problemSolvedUpdateManyAndReturnArgs} args - Arguments to update many ProblemSolveds.
     * @example
     * // Update many ProblemSolveds
     * const problemSolved = await prisma.problemSolved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProblemSolveds and only return the `id`
     * const problemSolvedWithIdOnly = await prisma.problemSolved.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends problemSolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, problemSolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProblemSolved.
     * @param {problemSolvedUpsertArgs} args - Arguments to update or create a ProblemSolved.
     * @example
     * // Update or create a ProblemSolved
     * const problemSolved = await prisma.problemSolved.upsert({
     *   create: {
     *     // ... data to create a ProblemSolved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProblemSolved we want to update
     *   }
     * })
     */
    upsert<T extends problemSolvedUpsertArgs>(args: SelectSubset<T, problemSolvedUpsertArgs<ExtArgs>>): Prisma__problemSolvedClient<$Result.GetResult<Prisma.$problemSolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProblemSolveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedCountArgs} args - Arguments to filter ProblemSolveds to count.
     * @example
     * // Count the number of ProblemSolveds
     * const count = await prisma.problemSolved.count({
     *   where: {
     *     // ... the filter for the ProblemSolveds we want to count
     *   }
     * })
    **/
    count<T extends problemSolvedCountArgs>(
      args?: Subset<T, problemSolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemSolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemSolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemSolvedAggregateArgs>(args: Subset<T, ProblemSolvedAggregateArgs>): Prisma.PrismaPromise<GetProblemSolvedAggregateType<T>>

    /**
     * Group by ProblemSolved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {problemSolvedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends problemSolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: problemSolvedGroupByArgs['orderBy'] }
        : { orderBy?: problemSolvedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, problemSolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the problemSolved model
   */
  readonly fields: problemSolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for problemSolved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__problemSolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the problemSolved model
   */
  interface problemSolvedFieldRefs {
    readonly id: FieldRef<"problemSolved", 'String'>
    readonly userId: FieldRef<"problemSolved", 'String'>
    readonly problemId: FieldRef<"problemSolved", 'String'>
    readonly createdAt: FieldRef<"problemSolved", 'DateTime'>
    readonly updatedAt: FieldRef<"problemSolved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * problemSolved findUnique
   */
  export type problemSolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findUniqueOrThrow
   */
  export type problemSolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved findFirst
   */
  export type problemSolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findFirstOrThrow
   */
  export type problemSolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolved to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of problemSolveds.
     */
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved findMany
   */
  export type problemSolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter, which problemSolveds to fetch.
     */
    where?: problemSolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of problemSolveds to fetch.
     */
    orderBy?: problemSolvedOrderByWithRelationInput | problemSolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing problemSolveds.
     */
    cursor?: problemSolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` problemSolveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` problemSolveds.
     */
    skip?: number
    distinct?: ProblemSolvedScalarFieldEnum | ProblemSolvedScalarFieldEnum[]
  }

  /**
   * problemSolved create
   */
  export type problemSolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a problemSolved.
     */
    data: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
  }

  /**
   * problemSolved createMany
   */
  export type problemSolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * problemSolved createManyAndReturn
   */
  export type problemSolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to create many problemSolveds.
     */
    data: problemSolvedCreateManyInput | problemSolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved update
   */
  export type problemSolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a problemSolved.
     */
    data: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
    /**
     * Choose, which problemSolved to update.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved updateMany
   */
  export type problemSolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
  }

  /**
   * problemSolved updateManyAndReturn
   */
  export type problemSolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * The data used to update problemSolveds.
     */
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyInput>
    /**
     * Filter which problemSolveds to update
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * problemSolved upsert
   */
  export type problemSolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the problemSolved to update in case it exists.
     */
    where: problemSolvedWhereUniqueInput
    /**
     * In case the problemSolved found by the `where` argument doesn't exist, create a new problemSolved with this data.
     */
    create: XOR<problemSolvedCreateInput, problemSolvedUncheckedCreateInput>
    /**
     * In case the problemSolved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<problemSolvedUpdateInput, problemSolvedUncheckedUpdateInput>
  }

  /**
   * problemSolved delete
   */
  export type problemSolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
    /**
     * Filter which problemSolved to delete.
     */
    where: problemSolvedWhereUniqueInput
  }

  /**
   * problemSolved deleteMany
   */
  export type problemSolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which problemSolveds to delete
     */
    where?: problemSolvedWhereInput
    /**
     * Limit how many problemSolveds to delete.
     */
    limit?: number
  }

  /**
   * problemSolved without action
   */
  export type problemSolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the problemSolved
     */
    select?: problemSolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the problemSolved
     */
    omit?: problemSolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: problemSolvedInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    avatar: 'avatar',
    role: 'role',
    password: 'password',
    refreshToken: 'refreshToken',
    isVerified: 'isVerified',
    isDeActivated: 'isDeActivated',
    deletionRequestedAt: 'deletionRequestedAt',
    unverifiedEmail: 'unverifiedEmail',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationTokenExpiry: 'emailVerificationTokenExpiry',
    forgotPasswordToken: 'forgotPasswordToken',
    googleId: 'googleId',
    githubId: 'githubId',
    appleId: 'appleId',
    forgotPasswordTokenExpiry: 'forgotPasswordTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    userId: 'userId',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    testcases: 'testcases',
    codesnippets: 'codesnippets',
    referencesolution: 'referencesolution',
    isDeleted: 'isDeleted',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const CompanyTagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    count: 'count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyTagScalarFieldEnum = (typeof CompanyTagScalarFieldEnum)[keyof typeof CompanyTagScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    sourceCode: 'sourceCode',
    language: 'language',
    stdin: 'stdin',
    stdout: 'stdout',
    stderr: 'stderr',
    compileOutput: 'compileOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const TestCasesResultScalarFieldEnum: {
    id: 'id',
    submissionId: 'submissionId',
    testCase: 'testCase',
    passed: 'passed',
    stdout: 'stdout',
    expected: 'expected',
    stderr: 'stderr',
    compiledOutput: 'compiledOutput',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestCasesResultScalarFieldEnum = (typeof TestCasesResultScalarFieldEnum)[keyof typeof TestCasesResultScalarFieldEnum]


  export const ProblemSolvedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    problemId: 'problemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemSolvedScalarFieldEnum = (typeof ProblemSolvedScalarFieldEnum)[keyof typeof ProblemSolvedScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Difficulty'
   */
  export type EnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty'>
    


  /**
   * Reference to a field of type 'Difficulty[]'
   */
  export type ListEnumDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Difficulty[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    isDeActivated?: BoolNullableFilter<"User"> | boolean | null
    deletionRequestedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    unverifiedEmail?: StringNullableFilter<"User"> | string | null
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    googleId?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
    appleId?: StringNullableFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solvedProblems?: ProblemSolvedListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    isDeActivated?: SortOrderInput | SortOrder
    deletionRequestedAt?: SortOrderInput | SortOrder
    unverifiedEmail?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    appleId?: SortOrderInput | SortOrder
    forgotPasswordTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    solvedProblems?: problemSolvedOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    githubId?: string
    appleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolNullableFilter<"User"> | boolean | null
    isDeActivated?: BoolNullableFilter<"User"> | boolean | null
    deletionRequestedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    unverifiedEmail?: StringNullableFilter<"User"> | string | null
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solvedProblems?: ProblemSolvedListRelationFilter
  }, "id" | "email" | "googleId" | "githubId" | "appleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    isVerified?: SortOrderInput | SortOrder
    isDeActivated?: SortOrderInput | SortOrder
    deletionRequestedAt?: SortOrderInput | SortOrder
    unverifiedEmail?: SortOrderInput | SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationTokenExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    googleId?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    appleId?: SortOrderInput | SortOrder
    forgotPasswordTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    isDeActivated?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    deletionRequestedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    unverifiedEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    appleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codesnippets?: JsonFilter<"Problem">
    referencesolution?: JsonFilter<"Problem">
    isDeleted?: BoolFilter<"Problem"> | boolean
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    tags?: TagListRelationFilter
    companies?: CompanyTagListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    problemSolvedBy?: ProblemSolvedListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codesnippets?: SortOrder
    referencesolution?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags?: TagOrderByRelationAggregateInput
    companies?: CompanyTagOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
    problemSolvedBy?: problemSolvedOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codesnippets?: JsonFilter<"Problem">
    referencesolution?: JsonFilter<"Problem">
    isDeleted?: BoolFilter<"Problem"> | boolean
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    tags?: TagListRelationFilter
    companies?: CompanyTagListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    problemSolvedBy?: ProblemSolvedListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    testcases?: SortOrder
    codesnippets?: SortOrder
    referencesolution?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumDifficultyWithAggregatesFilter<"Problem"> | $Enums.Difficulty
    userId?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    testcases?: JsonWithAggregatesFilter<"Problem">
    codesnippets?: JsonWithAggregatesFilter<"Problem">
    referencesolution?: JsonWithAggregatesFilter<"Problem">
    isDeleted?: BoolWithAggregatesFilter<"Problem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    problems?: ProblemListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    problems?: ProblemListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type CompanyTagWhereInput = {
    AND?: CompanyTagWhereInput | CompanyTagWhereInput[]
    OR?: CompanyTagWhereInput[]
    NOT?: CompanyTagWhereInput | CompanyTagWhereInput[]
    id?: StringFilter<"CompanyTag"> | string
    name?: StringFilter<"CompanyTag"> | string
    count?: IntFilter<"CompanyTag"> | number
    createdAt?: DateTimeFilter<"CompanyTag"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyTag"> | Date | string
    problems?: ProblemListRelationFilter
  }

  export type CompanyTagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
  }

  export type CompanyTagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CompanyTagWhereInput | CompanyTagWhereInput[]
    OR?: CompanyTagWhereInput[]
    NOT?: CompanyTagWhereInput | CompanyTagWhereInput[]
    count?: IntFilter<"CompanyTag"> | number
    createdAt?: DateTimeFilter<"CompanyTag"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyTag"> | Date | string
    problems?: ProblemListRelationFilter
  }, "id" | "name">

  export type CompanyTagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyTagCountOrderByAggregateInput
    _avg?: CompanyTagAvgOrderByAggregateInput
    _max?: CompanyTagMaxOrderByAggregateInput
    _min?: CompanyTagMinOrderByAggregateInput
    _sum?: CompanyTagSumOrderByAggregateInput
  }

  export type CompanyTagScalarWhereWithAggregatesInput = {
    AND?: CompanyTagScalarWhereWithAggregatesInput | CompanyTagScalarWhereWithAggregatesInput[]
    OR?: CompanyTagScalarWhereWithAggregatesInput[]
    NOT?: CompanyTagScalarWhereWithAggregatesInput | CompanyTagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyTag"> | string
    name?: StringWithAggregatesFilter<"CompanyTag"> | string
    count?: IntWithAggregatesFilter<"CompanyTag"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CompanyTag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompanyTag"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testCases?: TestCasesResultListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    testCases?: TestCasesResultOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    testCases?: TestCasesResultListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrderInput | SortOrder
    stdout?: SortOrderInput | SortOrder
    stderr?: SortOrderInput | SortOrder
    compileOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    problemId?: StringWithAggregatesFilter<"Submission"> | string
    sourceCode?: JsonWithAggregatesFilter<"Submission">
    language?: StringWithAggregatesFilter<"Submission"> | string
    stdin?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stdout?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    stderr?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compileOutput?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: StringWithAggregatesFilter<"Submission"> | string
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type TestCasesResultWhereInput = {
    AND?: TestCasesResultWhereInput | TestCasesResultWhereInput[]
    OR?: TestCasesResultWhereInput[]
    NOT?: TestCasesResultWhereInput | TestCasesResultWhereInput[]
    id?: StringFilter<"TestCasesResult"> | string
    submissionId?: StringFilter<"TestCasesResult"> | string
    testCase?: IntFilter<"TestCasesResult"> | number
    passed?: BoolFilter<"TestCasesResult"> | boolean
    stdout?: StringFilter<"TestCasesResult"> | string
    expected?: StringFilter<"TestCasesResult"> | string
    stderr?: StringNullableFilter<"TestCasesResult"> | string | null
    compiledOutput?: StringNullableFilter<"TestCasesResult"> | string | null
    status?: StringFilter<"TestCasesResult"> | string
    memory?: StringNullableFilter<"TestCasesResult"> | string | null
    time?: StringNullableFilter<"TestCasesResult"> | string | null
    createdAt?: DateTimeFilter<"TestCasesResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCasesResult"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type TestCasesResultOrderByWithRelationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compiledOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type TestCasesResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TestCasesResultWhereInput | TestCasesResultWhereInput[]
    OR?: TestCasesResultWhereInput[]
    NOT?: TestCasesResultWhereInput | TestCasesResultWhereInput[]
    submissionId?: StringFilter<"TestCasesResult"> | string
    testCase?: IntFilter<"TestCasesResult"> | number
    passed?: BoolFilter<"TestCasesResult"> | boolean
    stdout?: StringFilter<"TestCasesResult"> | string
    expected?: StringFilter<"TestCasesResult"> | string
    stderr?: StringNullableFilter<"TestCasesResult"> | string | null
    compiledOutput?: StringNullableFilter<"TestCasesResult"> | string | null
    status?: StringFilter<"TestCasesResult"> | string
    memory?: StringNullableFilter<"TestCasesResult"> | string | null
    time?: StringNullableFilter<"TestCasesResult"> | string | null
    createdAt?: DateTimeFilter<"TestCasesResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCasesResult"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type TestCasesResultOrderByWithAggregationInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrderInput | SortOrder
    compiledOutput?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCasesResultCountOrderByAggregateInput
    _avg?: TestCasesResultAvgOrderByAggregateInput
    _max?: TestCasesResultMaxOrderByAggregateInput
    _min?: TestCasesResultMinOrderByAggregateInput
    _sum?: TestCasesResultSumOrderByAggregateInput
  }

  export type TestCasesResultScalarWhereWithAggregatesInput = {
    AND?: TestCasesResultScalarWhereWithAggregatesInput | TestCasesResultScalarWhereWithAggregatesInput[]
    OR?: TestCasesResultScalarWhereWithAggregatesInput[]
    NOT?: TestCasesResultScalarWhereWithAggregatesInput | TestCasesResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TestCasesResult"> | string
    submissionId?: StringWithAggregatesFilter<"TestCasesResult"> | string
    testCase?: IntWithAggregatesFilter<"TestCasesResult"> | number
    passed?: BoolWithAggregatesFilter<"TestCasesResult"> | boolean
    stdout?: StringWithAggregatesFilter<"TestCasesResult"> | string
    expected?: StringWithAggregatesFilter<"TestCasesResult"> | string
    stderr?: StringNullableWithAggregatesFilter<"TestCasesResult"> | string | null
    compiledOutput?: StringNullableWithAggregatesFilter<"TestCasesResult"> | string | null
    status?: StringWithAggregatesFilter<"TestCasesResult"> | string
    memory?: StringNullableWithAggregatesFilter<"TestCasesResult"> | string | null
    time?: StringNullableWithAggregatesFilter<"TestCasesResult"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TestCasesResult"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TestCasesResult"> | Date | string
  }

  export type problemSolvedWhereInput = {
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type problemSolvedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type problemSolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_problemId?: problemSolvedUserIdProblemIdCompoundUniqueInput
    AND?: problemSolvedWhereInput | problemSolvedWhereInput[]
    OR?: problemSolvedWhereInput[]
    NOT?: problemSolvedWhereInput | problemSolvedWhereInput[]
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "userId_problemId">

  export type problemSolvedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: problemSolvedCountOrderByAggregateInput
    _max?: problemSolvedMaxOrderByAggregateInput
    _min?: problemSolvedMinOrderByAggregateInput
  }

  export type problemSolvedScalarWhereWithAggregatesInput = {
    AND?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    OR?: problemSolvedScalarWhereWithAggregatesInput[]
    NOT?: problemSolvedScalarWhereWithAggregatesInput | problemSolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"problemSolved"> | string
    userId?: StringWithAggregatesFilter<"problemSolved"> | string
    problemId?: StringWithAggregatesFilter<"problemSolved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"problemSolved"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: problemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: problemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagCreateNestedManyWithoutProblemsInput
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagUncheckedCreateNestedManyWithoutProblemsInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUpdateManyWithoutProblemsNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUncheckedUpdateManyWithoutProblemsNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagCreateInput = {
    id?: string
    name: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyTagUncheckedCreateInput = {
    id?: string
    name: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutCompaniesInput
  }

  export type CompanyTagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyTagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutCompaniesNestedInput
  }

  export type CompanyTagCreateManyInput = {
    id?: string
    name: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyTagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
    testCases?: TestCasesResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCasesResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
    testCases?: TestCasesResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCasesResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesResultCreateInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout: string
    expected: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutTestCasesInput
  }

  export type TestCasesResultUncheckedCreateInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout: string
    expected: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: StringFieldUpdateOperationsInput | string
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutTestCasesNestedInput
  }

  export type TestCasesResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: StringFieldUpdateOperationsInput | string
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesResultCreateManyInput = {
    id?: string
    submissionId: string
    testCase: number
    passed: boolean
    stdout: string
    expected: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: StringFieldUpdateOperationsInput | string
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submissionId?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: StringFieldUpdateOperationsInput | string
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedProblemsInput
    problem: ProblemCreateNestedOneWithoutProblemSolvedByInput
  }

  export type problemSolvedUncheckedCreateInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedByNestedInput
  }

  export type problemSolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedCreateManyInput = {
    id?: string
    userId: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type ProblemSolvedListRelationFilter = {
    every?: problemSolvedWhereInput
    some?: problemSolvedWhereInput
    none?: problemSolvedWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type problemSolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    isVerified?: SortOrder
    isDeActivated?: SortOrder
    deletionRequestedAt?: SortOrder
    unverifiedEmail?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
    appleId?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    isVerified?: SortOrder
    isDeActivated?: SortOrder
    deletionRequestedAt?: SortOrder
    unverifiedEmail?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
    appleId?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    password?: SortOrder
    refreshToken?: SortOrder
    isVerified?: SortOrder
    isDeActivated?: SortOrder
    deletionRequestedAt?: SortOrder
    unverifiedEmail?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationTokenExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    googleId?: SortOrder
    githubId?: SortOrder
    appleId?: SortOrder
    forgotPasswordTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type CompanyTagListRelationFilter = {
    every?: CompanyTagWhereInput
    some?: CompanyTagWhereInput
    none?: CompanyTagWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    testcases?: SortOrder
    codesnippets?: SortOrder
    referencesolution?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    userId?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    isDeleted?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CompanyTagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyTagAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type CompanyTagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyTagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyTagSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type TestCasesResultListRelationFilter = {
    every?: TestCasesResultWhereInput
    some?: TestCasesResultWhereInput
    none?: TestCasesResultWhereInput
  }

  export type TestCasesResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    sourceCode?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    language?: SortOrder
    stdin?: SortOrder
    stdout?: SortOrder
    stderr?: SortOrder
    compileOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type TestCasesResultCountOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compiledOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCasesResultAvgOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type TestCasesResultMaxOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compiledOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCasesResultMinOrderByAggregateInput = {
    id?: SortOrder
    submissionId?: SortOrder
    testCase?: SortOrder
    passed?: SortOrder
    stdout?: SortOrder
    expected?: SortOrder
    stderr?: SortOrder
    compiledOutput?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestCasesResultSumOrderByAggregateInput = {
    testCase?: SortOrder
  }

  export type problemSolvedUserIdProblemIdCompoundUniqueInput = {
    userId: string
    problemId: string
  }

  export type problemSolvedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemSolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type problemSolvedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    problemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput> | problemSolvedCreateWithoutUserInput[] | problemSolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutUserInput | problemSolvedCreateOrConnectWithoutUserInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutUserInput | problemSolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: problemSolvedCreateManyUserInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutUserInput | problemSolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutUserInput | problemSolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type TagCreateNestedManyWithoutProblemsInput = {
    create?: XOR<TagCreateWithoutProblemsInput, TagUncheckedCreateWithoutProblemsInput> | TagCreateWithoutProblemsInput[] | TagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProblemsInput | TagCreateOrConnectWithoutProblemsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CompanyTagCreateNestedManyWithoutProblemsInput = {
    create?: XOR<CompanyTagCreateWithoutProblemsInput, CompanyTagUncheckedCreateWithoutProblemsInput> | CompanyTagCreateWithoutProblemsInput[] | CompanyTagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutProblemsInput | CompanyTagCreateOrConnectWithoutProblemsInput[]
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutProblemsInput = {
    create?: XOR<TagCreateWithoutProblemsInput, TagUncheckedCreateWithoutProblemsInput> | TagCreateWithoutProblemsInput[] | TagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProblemsInput | TagCreateOrConnectWithoutProblemsInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type CompanyTagUncheckedCreateNestedManyWithoutProblemsInput = {
    create?: XOR<CompanyTagCreateWithoutProblemsInput, CompanyTagUncheckedCreateWithoutProblemsInput> | CompanyTagCreateWithoutProblemsInput[] | CompanyTagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutProblemsInput | CompanyTagCreateOrConnectWithoutProblemsInput[]
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type problemSolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
  }

  export type EnumDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.Difficulty
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TagUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<TagCreateWithoutProblemsInput, TagUncheckedCreateWithoutProblemsInput> | TagCreateWithoutProblemsInput[] | TagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProblemsInput | TagCreateOrConnectWithoutProblemsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProblemsInput | TagUpsertWithWhereUniqueWithoutProblemsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProblemsInput | TagUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProblemsInput | TagUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CompanyTagUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<CompanyTagCreateWithoutProblemsInput, CompanyTagUncheckedCreateWithoutProblemsInput> | CompanyTagCreateWithoutProblemsInput[] | CompanyTagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutProblemsInput | CompanyTagCreateOrConnectWithoutProblemsInput[]
    upsert?: CompanyTagUpsertWithWhereUniqueWithoutProblemsInput | CompanyTagUpsertWithWhereUniqueWithoutProblemsInput[]
    set?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    disconnect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    delete?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    update?: CompanyTagUpdateWithWhereUniqueWithoutProblemsInput | CompanyTagUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: CompanyTagUpdateManyWithWhereWithoutProblemsInput | CompanyTagUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<TagCreateWithoutProblemsInput, TagUncheckedCreateWithoutProblemsInput> | TagCreateWithoutProblemsInput[] | TagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: TagCreateOrConnectWithoutProblemsInput | TagCreateOrConnectWithoutProblemsInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutProblemsInput | TagUpsertWithWhereUniqueWithoutProblemsInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutProblemsInput | TagUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: TagUpdateManyWithWhereWithoutProblemsInput | TagUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type CompanyTagUncheckedUpdateManyWithoutProblemsNestedInput = {
    create?: XOR<CompanyTagCreateWithoutProblemsInput, CompanyTagUncheckedCreateWithoutProblemsInput> | CompanyTagCreateWithoutProblemsInput[] | CompanyTagUncheckedCreateWithoutProblemsInput[]
    connectOrCreate?: CompanyTagCreateOrConnectWithoutProblemsInput | CompanyTagCreateOrConnectWithoutProblemsInput[]
    upsert?: CompanyTagUpsertWithWhereUniqueWithoutProblemsInput | CompanyTagUpsertWithWhereUniqueWithoutProblemsInput[]
    set?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    disconnect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    delete?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    connect?: CompanyTagWhereUniqueInput | CompanyTagWhereUniqueInput[]
    update?: CompanyTagUpdateWithWhereUniqueWithoutProblemsInput | CompanyTagUpdateWithWhereUniqueWithoutProblemsInput[]
    updateMany?: CompanyTagUpdateManyWithWhereWithoutProblemsInput | CompanyTagUpdateManyWithWhereWithoutProblemsInput[]
    deleteMany?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput> | problemSolvedCreateWithoutProblemInput[] | problemSolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: problemSolvedCreateOrConnectWithoutProblemInput | problemSolvedCreateOrConnectWithoutProblemInput[]
    upsert?: problemSolvedUpsertWithWhereUniqueWithoutProblemInput | problemSolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: problemSolvedCreateManyProblemInputEnvelope
    set?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    disconnect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    delete?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    connect?: problemSolvedWhereUniqueInput | problemSolvedWhereUniqueInput[]
    update?: problemSolvedUpdateWithWhereUniqueWithoutProblemInput | problemSolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: problemSolvedUpdateManyWithWhereWithoutProblemInput | problemSolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
  }

  export type ProblemCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProblemCreateWithoutTagsInput, ProblemUncheckedCreateWithoutTagsInput> | ProblemCreateWithoutTagsInput[] | ProblemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTagsInput | ProblemCreateOrConnectWithoutTagsInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<ProblemCreateWithoutTagsInput, ProblemUncheckedCreateWithoutTagsInput> | ProblemCreateWithoutTagsInput[] | ProblemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTagsInput | ProblemCreateOrConnectWithoutTagsInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProblemCreateWithoutTagsInput, ProblemUncheckedCreateWithoutTagsInput> | ProblemCreateWithoutTagsInput[] | ProblemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTagsInput | ProblemCreateOrConnectWithoutTagsInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutTagsInput | ProblemUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutTagsInput | ProblemUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutTagsInput | ProblemUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<ProblemCreateWithoutTagsInput, ProblemUncheckedCreateWithoutTagsInput> | ProblemCreateWithoutTagsInput[] | ProblemUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutTagsInput | ProblemCreateOrConnectWithoutTagsInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutTagsInput | ProblemUpsertWithWhereUniqueWithoutTagsInput[]
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutTagsInput | ProblemUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutTagsInput | ProblemUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<ProblemCreateWithoutCompaniesInput, ProblemUncheckedCreateWithoutCompaniesInput> | ProblemCreateWithoutCompaniesInput[] | ProblemUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCompaniesInput | ProblemCreateOrConnectWithoutCompaniesInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutCompaniesInput = {
    create?: XOR<ProblemCreateWithoutCompaniesInput, ProblemUncheckedCreateWithoutCompaniesInput> | ProblemCreateWithoutCompaniesInput[] | ProblemUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCompaniesInput | ProblemCreateOrConnectWithoutCompaniesInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProblemUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<ProblemCreateWithoutCompaniesInput, ProblemUncheckedCreateWithoutCompaniesInput> | ProblemCreateWithoutCompaniesInput[] | ProblemUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCompaniesInput | ProblemCreateOrConnectWithoutCompaniesInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutCompaniesInput | ProblemUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutCompaniesInput | ProblemUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutCompaniesInput | ProblemUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutCompaniesNestedInput = {
    create?: XOR<ProblemCreateWithoutCompaniesInput, ProblemUncheckedCreateWithoutCompaniesInput> | ProblemCreateWithoutCompaniesInput[] | ProblemUncheckedCreateWithoutCompaniesInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCompaniesInput | ProblemCreateOrConnectWithoutCompaniesInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutCompaniesInput | ProblemUpsertWithWhereUniqueWithoutCompaniesInput[]
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutCompaniesInput | ProblemUpdateWithWhereUniqueWithoutCompaniesInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutCompaniesInput | ProblemUpdateManyWithWhereWithoutCompaniesInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    connect?: ProblemWhereUniqueInput
  }

  export type TestCasesResultCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCasesResultCreateWithoutSubmissionInput, TestCasesResultUncheckedCreateWithoutSubmissionInput> | TestCasesResultCreateWithoutSubmissionInput[] | TestCasesResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCasesResultCreateOrConnectWithoutSubmissionInput | TestCasesResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCasesResultCreateManySubmissionInputEnvelope
    connect?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
  }

  export type TestCasesResultUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<TestCasesResultCreateWithoutSubmissionInput, TestCasesResultUncheckedCreateWithoutSubmissionInput> | TestCasesResultCreateWithoutSubmissionInput[] | TestCasesResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCasesResultCreateOrConnectWithoutSubmissionInput | TestCasesResultCreateOrConnectWithoutSubmissionInput[]
    createMany?: TestCasesResultCreateManySubmissionInputEnvelope
    connect?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    upsert?: ProblemUpsertWithoutSubmissionsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionsInput, ProblemUpdateWithoutSubmissionsInput>, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TestCasesResultUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCasesResultCreateWithoutSubmissionInput, TestCasesResultUncheckedCreateWithoutSubmissionInput> | TestCasesResultCreateWithoutSubmissionInput[] | TestCasesResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCasesResultCreateOrConnectWithoutSubmissionInput | TestCasesResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCasesResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCasesResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCasesResultCreateManySubmissionInputEnvelope
    set?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    disconnect?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    delete?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    connect?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    update?: TestCasesResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCasesResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCasesResultUpdateManyWithWhereWithoutSubmissionInput | TestCasesResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCasesResultScalarWhereInput | TestCasesResultScalarWhereInput[]
  }

  export type TestCasesResultUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<TestCasesResultCreateWithoutSubmissionInput, TestCasesResultUncheckedCreateWithoutSubmissionInput> | TestCasesResultCreateWithoutSubmissionInput[] | TestCasesResultUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: TestCasesResultCreateOrConnectWithoutSubmissionInput | TestCasesResultCreateOrConnectWithoutSubmissionInput[]
    upsert?: TestCasesResultUpsertWithWhereUniqueWithoutSubmissionInput | TestCasesResultUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: TestCasesResultCreateManySubmissionInputEnvelope
    set?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    disconnect?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    delete?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    connect?: TestCasesResultWhereUniqueInput | TestCasesResultWhereUniqueInput[]
    update?: TestCasesResultUpdateWithWhereUniqueWithoutSubmissionInput | TestCasesResultUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: TestCasesResultUpdateManyWithWhereWithoutSubmissionInput | TestCasesResultUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: TestCasesResultScalarWhereInput | TestCasesResultScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutTestCasesInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    connect?: SubmissionWhereUniqueInput
  }

  export type SubmissionUpdateOneRequiredWithoutTestCasesNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestCasesInput
    upsert?: SubmissionUpsertWithoutTestCasesInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutTestCasesInput, SubmissionUpdateWithoutTestCasesInput>, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type UserCreateNestedOneWithoutSolvedProblemsInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblemSolvedByInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedByInput, ProblemUncheckedCreateWithoutProblemSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedByInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSolvedProblemsNestedInput = {
    create?: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedProblemsInput
    upsert?: UserUpsertWithoutSolvedProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolvedProblemsInput, UserUpdateWithoutSolvedProblemsInput>, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblemSolvedByNestedInput = {
    create?: XOR<ProblemCreateWithoutProblemSolvedByInput, ProblemUncheckedCreateWithoutProblemSolvedByInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblemSolvedByInput
    upsert?: ProblemUpsertWithoutProblemSolvedByInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblemSolvedByInput, ProblemUpdateWithoutProblemSolvedByInput>, ProblemUncheckedUpdateWithoutProblemSolvedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumDifficultyFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyFilter<$PrismaModel> | $Enums.Difficulty
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDifficultyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Difficulty | EnumDifficultyFieldRefInput<$PrismaModel>
    in?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    notIn?: $Enums.Difficulty[] | ListEnumDifficultyFieldRefInput<$PrismaModel>
    not?: NestedEnumDifficultyWithAggregatesFilter<$PrismaModel> | $Enums.Difficulty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDifficultyFilter<$PrismaModel>
    _max?: NestedEnumDifficultyFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagCreateNestedManyWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagUncheckedCreateNestedManyWithoutProblemsInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
    testCases?: TestCasesResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCasesResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblemSolvedByInput
  }

  export type problemSolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateOrConnectWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedCreateManyUserInputEnvelope = {
    data: problemSolvedCreateManyUserInput | problemSolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumDifficultyFilter<"Problem"> | $Enums.Difficulty
    userId?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    testcases?: JsonFilter<"Problem">
    codesnippets?: JsonFilter<"Problem">
    referencesolution?: JsonFilter<"Problem">
    isDeleted?: BoolFilter<"Problem"> | boolean
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    problemId?: StringFilter<"Submission"> | string
    sourceCode?: JsonFilter<"Submission">
    language?: StringFilter<"Submission"> | string
    stdin?: StringNullableFilter<"Submission"> | string | null
    stdout?: StringNullableFilter<"Submission"> | string | null
    stderr?: StringNullableFilter<"Submission"> | string | null
    compileOutput?: StringNullableFilter<"Submission"> | string | null
    status?: StringFilter<"Submission"> | string
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
    create: XOR<problemSolvedCreateWithoutUserInput, problemSolvedUncheckedCreateWithoutUserInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutUserInput, problemSolvedUncheckedUpdateWithoutUserInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutUserInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type problemSolvedScalarWhereInput = {
    AND?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    OR?: problemSolvedScalarWhereInput[]
    NOT?: problemSolvedScalarWhereInput | problemSolvedScalarWhereInput[]
    id?: StringFilter<"problemSolved"> | string
    userId?: StringFilter<"problemSolved"> | string
    problemId?: StringFilter<"problemSolved"> | string
    createdAt?: DateTimeFilter<"problemSolved"> | Date | string
    updatedAt?: DateTimeFilter<"problemSolved"> | Date | string
  }

  export type TagCreateWithoutProblemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagCreateOrConnectWithoutProblemsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutProblemsInput, TagUncheckedCreateWithoutProblemsInput>
  }

  export type CompanyTagCreateWithoutProblemsInput = {
    id?: string
    name: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyTagUncheckedCreateWithoutProblemsInput = {
    id?: string
    name: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyTagCreateOrConnectWithoutProblemsInput = {
    where: CompanyTagWhereUniqueInput
    create: XOR<CompanyTagCreateWithoutProblemsInput, CompanyTagUncheckedCreateWithoutProblemsInput>
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solvedProblems?: problemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    testCases?: TestCasesResultCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    testCases?: TestCasesResultUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type problemSolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedProblemsInput
  }

  export type problemSolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateOrConnectWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedCreateManyProblemInputEnvelope = {
    data: problemSolvedCreateManyProblemInput | problemSolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type TagUpsertWithWhereUniqueWithoutProblemsInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutProblemsInput, TagUncheckedUpdateWithoutProblemsInput>
    create: XOR<TagCreateWithoutProblemsInput, TagUncheckedCreateWithoutProblemsInput>
  }

  export type TagUpdateWithWhereUniqueWithoutProblemsInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutProblemsInput, TagUncheckedUpdateWithoutProblemsInput>
  }

  export type TagUpdateManyWithWhereWithoutProblemsInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutProblemsInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
  }

  export type CompanyTagUpsertWithWhereUniqueWithoutProblemsInput = {
    where: CompanyTagWhereUniqueInput
    update: XOR<CompanyTagUpdateWithoutProblemsInput, CompanyTagUncheckedUpdateWithoutProblemsInput>
    create: XOR<CompanyTagCreateWithoutProblemsInput, CompanyTagUncheckedCreateWithoutProblemsInput>
  }

  export type CompanyTagUpdateWithWhereUniqueWithoutProblemsInput = {
    where: CompanyTagWhereUniqueInput
    data: XOR<CompanyTagUpdateWithoutProblemsInput, CompanyTagUncheckedUpdateWithoutProblemsInput>
  }

  export type CompanyTagUpdateManyWithWhereWithoutProblemsInput = {
    where: CompanyTagScalarWhereInput
    data: XOR<CompanyTagUpdateManyMutationInput, CompanyTagUncheckedUpdateManyWithoutProblemsInput>
  }

  export type CompanyTagScalarWhereInput = {
    AND?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
    OR?: CompanyTagScalarWhereInput[]
    NOT?: CompanyTagScalarWhereInput | CompanyTagScalarWhereInput[]
    id?: StringFilter<"CompanyTag"> | string
    name?: StringFilter<"CompanyTag"> | string
    count?: IntFilter<"CompanyTag"> | number
    createdAt?: DateTimeFilter<"CompanyTag"> | Date | string
    updatedAt?: DateTimeFilter<"CompanyTag"> | Date | string
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solvedProblems?: problemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type problemSolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    update: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<problemSolvedCreateWithoutProblemInput, problemSolvedUncheckedCreateWithoutProblemInput>
  }

  export type problemSolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: problemSolvedWhereUniqueInput
    data: XOR<problemSolvedUpdateWithoutProblemInput, problemSolvedUncheckedUpdateWithoutProblemInput>
  }

  export type problemSolvedUpdateManyWithWhereWithoutProblemInput = {
    where: problemSolvedScalarWhereInput
    data: XOR<problemSolvedUpdateManyMutationInput, problemSolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type ProblemCreateWithoutTagsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyTagCreateNestedManyWithoutProblemsInput
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyTagUncheckedCreateNestedManyWithoutProblemsInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutTagsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutTagsInput, ProblemUncheckedCreateWithoutTagsInput>
  }

  export type ProblemUpsertWithWhereUniqueWithoutTagsInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutTagsInput, ProblemUncheckedUpdateWithoutTagsInput>
    create: XOR<ProblemCreateWithoutTagsInput, ProblemUncheckedCreateWithoutTagsInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutTagsInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutTagsInput, ProblemUncheckedUpdateWithoutTagsInput>
  }

  export type ProblemUpdateManyWithWhereWithoutTagsInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutTagsInput>
  }

  export type ProblemCreateWithoutCompaniesInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutProblemsInput
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutCompaniesInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProblemsInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problemSolvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutCompaniesInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutCompaniesInput, ProblemUncheckedCreateWithoutCompaniesInput>
  }

  export type ProblemUpsertWithWhereUniqueWithoutCompaniesInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutCompaniesInput, ProblemUncheckedUpdateWithoutCompaniesInput>
    create: XOR<ProblemCreateWithoutCompaniesInput, ProblemUncheckedCreateWithoutCompaniesInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutCompaniesInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutCompaniesInput, ProblemUncheckedUpdateWithoutCompaniesInput>
  }

  export type ProblemUpdateManyWithWhereWithoutCompaniesInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutCompaniesInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    solvedProblems?: problemSolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    solvedProblems?: problemSolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ProblemCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagCreateNestedManyWithoutProblemsInput
    user: UserCreateNestedOneWithoutProblemsInput
    problemSolvedBy?: problemSolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagUncheckedCreateNestedManyWithoutProblemsInput
    problemSolvedBy?: problemSolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
  }

  export type TestCasesResultCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout: string
    expected: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesResultUncheckedCreateWithoutSubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout: string
    expected: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesResultCreateOrConnectWithoutSubmissionInput = {
    where: TestCasesResultWhereUniqueInput
    create: XOR<TestCasesResultCreateWithoutSubmissionInput, TestCasesResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCasesResultCreateManySubmissionInputEnvelope = {
    data: TestCasesResultCreateManySubmissionInput | TestCasesResultCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    solvedProblems?: problemSolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    solvedProblems?: problemSolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionsInput = {
    update: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUpdateManyWithoutProblemsNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    problemSolvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUncheckedUpdateManyWithoutProblemsNestedInput
    problemSolvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type TestCasesResultUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: TestCasesResultWhereUniqueInput
    update: XOR<TestCasesResultUpdateWithoutSubmissionInput, TestCasesResultUncheckedUpdateWithoutSubmissionInput>
    create: XOR<TestCasesResultCreateWithoutSubmissionInput, TestCasesResultUncheckedCreateWithoutSubmissionInput>
  }

  export type TestCasesResultUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: TestCasesResultWhereUniqueInput
    data: XOR<TestCasesResultUpdateWithoutSubmissionInput, TestCasesResultUncheckedUpdateWithoutSubmissionInput>
  }

  export type TestCasesResultUpdateManyWithWhereWithoutSubmissionInput = {
    where: TestCasesResultScalarWhereInput
    data: XOR<TestCasesResultUpdateManyMutationInput, TestCasesResultUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type TestCasesResultScalarWhereInput = {
    AND?: TestCasesResultScalarWhereInput | TestCasesResultScalarWhereInput[]
    OR?: TestCasesResultScalarWhereInput[]
    NOT?: TestCasesResultScalarWhereInput | TestCasesResultScalarWhereInput[]
    id?: StringFilter<"TestCasesResult"> | string
    submissionId?: StringFilter<"TestCasesResult"> | string
    testCase?: IntFilter<"TestCasesResult"> | number
    passed?: BoolFilter<"TestCasesResult"> | boolean
    stdout?: StringFilter<"TestCasesResult"> | string
    expected?: StringFilter<"TestCasesResult"> | string
    stderr?: StringNullableFilter<"TestCasesResult"> | string | null
    compiledOutput?: StringNullableFilter<"TestCasesResult"> | string | null
    status?: StringFilter<"TestCasesResult"> | string
    memory?: StringNullableFilter<"TestCasesResult"> | string | null
    time?: StringNullableFilter<"TestCasesResult"> | string | null
    createdAt?: DateTimeFilter<"TestCasesResult"> | Date | string
    updatedAt?: DateTimeFilter<"TestCasesResult"> | Date | string
  }

  export type SubmissionCreateWithoutTestCasesInput = {
    id?: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutTestCasesInput = {
    id?: string
    userId: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutTestCasesInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
  }

  export type SubmissionUpsertWithoutTestCasesInput = {
    update: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
    create: XOR<SubmissionCreateWithoutTestCasesInput, SubmissionUncheckedCreateWithoutTestCasesInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutTestCasesInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutTestCasesInput, SubmissionUncheckedUpdateWithoutTestCasesInput>
  }

  export type SubmissionUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTestCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSolvedProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolvedProblemsInput = {
    id?: string
    name?: string | null
    email: string
    avatar?: string | null
    role?: $Enums.UserRole
    password?: string | null
    refreshToken?: string | null
    isVerified?: boolean | null
    isDeActivated?: boolean | null
    deletionRequestedAt?: Date | string | null
    unverifiedEmail?: string | null
    emailVerificationToken?: string | null
    emailVerificationTokenExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    googleId?: string | null
    githubId?: string | null
    appleId?: string | null
    forgotPasswordTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolvedProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
  }

  export type ProblemCreateWithoutProblemSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagCreateNestedManyWithoutProblemsInput
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblemSolvedByInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    userId: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: TagUncheckedCreateNestedManyWithoutProblemsInput
    companies?: CompanyTagUncheckedCreateNestedManyWithoutProblemsInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblemSolvedByInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblemSolvedByInput, ProblemUncheckedCreateWithoutProblemSolvedByInput>
  }

  export type UserUpsertWithoutSolvedProblemsInput = {
    update: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
    create: XOR<UserCreateWithoutSolvedProblemsInput, UserUncheckedCreateWithoutSolvedProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolvedProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolvedProblemsInput, UserUncheckedUpdateWithoutSolvedProblemsInput>
  }

  export type UserUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolvedProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    isDeActivated?: NullableBoolFieldUpdateOperationsInput | boolean | null
    deletionRequestedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    unverifiedEmail?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    appleId?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutProblemSolvedByInput = {
    update: XOR<ProblemUpdateWithoutProblemSolvedByInput, ProblemUncheckedUpdateWithoutProblemSolvedByInput>
    create: XOR<ProblemCreateWithoutProblemSolvedByInput, ProblemUncheckedCreateWithoutProblemSolvedByInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblemSolvedByInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblemSolvedByInput, ProblemUncheckedUpdateWithoutProblemSolvedByInput>
  }

  export type ProblemUpdateWithoutProblemSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUpdateManyWithoutProblemsNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblemSolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUncheckedUpdateManyWithoutProblemsNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty?: $Enums.Difficulty
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    testcases: JsonNullValueInput | InputJsonValue
    codesnippets: JsonNullValueInput | InputJsonValue
    referencesolution: JsonNullValueInput | InputJsonValue
    isDeleted?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    problemId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateManyUserInput = {
    id?: string
    problemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUpdateManyWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProblemsNestedInput
    companies?: CompanyTagUncheckedUpdateManyWithoutProblemsNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
    testCases?: TestCasesResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCasesResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblemSolvedByNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    userId: string
    sourceCode: JsonNullValueInput | InputJsonValue
    language: string
    stdin?: string | null
    stdout?: string | null
    stderr?: string | null
    compileOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type problemSolvedCreateManyProblemInput = {
    id?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TagUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyTagUncheckedUpdateManyWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    testCases?: TestCasesResultUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    testCases?: TestCasesResultUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    sourceCode?: JsonNullValueInput | InputJsonValue
    language?: StringFieldUpdateOperationsInput | string
    stdin?: NullableStringFieldUpdateOperationsInput | string | null
    stdout?: NullableStringFieldUpdateOperationsInput | string | null
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compileOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedProblemsNestedInput
  }

  export type problemSolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type problemSolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyTagUpdateManyWithoutProblemsNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyTagUncheckedUpdateManyWithoutProblemsNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUpdateManyWithoutProblemsNestedInput
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: TagUncheckedUpdateManyWithoutProblemsNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problemSolvedBy?: problemSolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumDifficultyFieldUpdateOperationsInput | $Enums.Difficulty
    userId?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    testcases?: JsonNullValueInput | InputJsonValue
    codesnippets?: JsonNullValueInput | InputJsonValue
    referencesolution?: JsonNullValueInput | InputJsonValue
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesResultCreateManySubmissionInput = {
    id?: string
    testCase: number
    passed: boolean
    stdout: string
    expected: string
    stderr?: string | null
    compiledOutput?: string | null
    status: string
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestCasesResultUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: StringFieldUpdateOperationsInput | string
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesResultUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: StringFieldUpdateOperationsInput | string
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCasesResultUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    testCase?: IntFieldUpdateOperationsInput | number
    passed?: BoolFieldUpdateOperationsInput | boolean
    stdout?: StringFieldUpdateOperationsInput | string
    expected?: StringFieldUpdateOperationsInput | string
    stderr?: NullableStringFieldUpdateOperationsInput | string | null
    compiledOutput?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}