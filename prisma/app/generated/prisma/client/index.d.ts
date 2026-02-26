
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model StudentApplication
 * 
 */
export type StudentApplication = $Result.DefaultSelection<Prisma.$StudentApplicationPayload>
/**
 * Model ExamReminderLog
 * 
 */
export type ExamReminderLog = $Result.DefaultSelection<Prisma.$ExamReminderLogPayload>
/**
 * Model BirthdayWishLog
 * 
 */
export type BirthdayWishLog = $Result.DefaultSelection<Prisma.$BirthdayWishLogPayload>
/**
 * Model ApplicationVehicleClass
 * 
 */
export type ApplicationVehicleClass = $Result.DefaultSelection<Prisma.$ApplicationVehicleClassPayload>
/**
 * Model VehicleClass
 * 
 */
export type VehicleClass = $Result.DefaultSelection<Prisma.$VehicleClassPayload>
/**
 * Model ExistingLicense
 * 
 */
export type ExistingLicense = $Result.DefaultSelection<Prisma.$ExistingLicensePayload>
/**
 * Model ExistingLicenseVehicleClass
 * 
 */
export type ExistingLicenseVehicleClass = $Result.DefaultSelection<Prisma.$ExistingLicenseVehicleClassPayload>
/**
 * Model PaymentInfo
 * 
 */
export type PaymentInfo = $Result.DefaultSelection<Prisma.$PaymentInfoPayload>
/**
 * Model User1
 * 
 */
export type User1 = $Result.DefaultSelection<Prisma.$User1Payload>
/**
 * Model WrittenExam
 * 
 */
export type WrittenExam = $Result.DefaultSelection<Prisma.$WrittenExamPayload>
/**
 * Model DrivingExamResult
 * 
 */
export type DrivingExamResult = $Result.DefaultSelection<Prisma.$DrivingExamResultPayload>
/**
 * Model PaymentRecord
 * 
 */
export type PaymentRecord = $Result.DefaultSelection<Prisma.$PaymentRecordPayload>
/**
 * Model ExamAttempt
 * 
 */
export type ExamAttempt = $Result.DefaultSelection<Prisma.$ExamAttemptPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPERADMIN: 'SUPERADMIN',
  ADMIN: 'ADMIN',
  RECEPTION: 'RECEPTION',
  INSTRUCTOR: 'INSTRUCTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PARTIAL: 'PARTIAL',
  PAID: 'PAID'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const ExamResult: {
  PASS: 'PASS',
  FAIL: 'FAIL',
  ABSENT: 'ABSENT'
};

export type ExamResult = (typeof ExamResult)[keyof typeof ExamResult]


export const DrivingExamResultStatus: {
  PASS: 'PASS',
  FAIL: 'FAIL',
  ABSENT: 'ABSENT'
};

export type DrivingExamResultStatus = (typeof DrivingExamResultStatus)[keyof typeof DrivingExamResultStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type ExamResult = $Enums.ExamResult

export const ExamResult: typeof $Enums.ExamResult

export type DrivingExamResultStatus = $Enums.DrivingExamResultStatus

export const DrivingExamResultStatus: typeof $Enums.DrivingExamResultStatus

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.studentApplication`: Exposes CRUD operations for the **StudentApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentApplications
    * const studentApplications = await prisma.studentApplication.findMany()
    * ```
    */
  get studentApplication(): Prisma.StudentApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examReminderLog`: Exposes CRUD operations for the **ExamReminderLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamReminderLogs
    * const examReminderLogs = await prisma.examReminderLog.findMany()
    * ```
    */
  get examReminderLog(): Prisma.ExamReminderLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.birthdayWishLog`: Exposes CRUD operations for the **BirthdayWishLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BirthdayWishLogs
    * const birthdayWishLogs = await prisma.birthdayWishLog.findMany()
    * ```
    */
  get birthdayWishLog(): Prisma.BirthdayWishLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.applicationVehicleClass`: Exposes CRUD operations for the **ApplicationVehicleClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApplicationVehicleClasses
    * const applicationVehicleClasses = await prisma.applicationVehicleClass.findMany()
    * ```
    */
  get applicationVehicleClass(): Prisma.ApplicationVehicleClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicleClass`: Exposes CRUD operations for the **VehicleClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleClasses
    * const vehicleClasses = await prisma.vehicleClass.findMany()
    * ```
    */
  get vehicleClass(): Prisma.VehicleClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.existingLicense`: Exposes CRUD operations for the **ExistingLicense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExistingLicenses
    * const existingLicenses = await prisma.existingLicense.findMany()
    * ```
    */
  get existingLicense(): Prisma.ExistingLicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.existingLicenseVehicleClass`: Exposes CRUD operations for the **ExistingLicenseVehicleClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExistingLicenseVehicleClasses
    * const existingLicenseVehicleClasses = await prisma.existingLicenseVehicleClass.findMany()
    * ```
    */
  get existingLicenseVehicleClass(): Prisma.ExistingLicenseVehicleClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentInfo`: Exposes CRUD operations for the **PaymentInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentInfos
    * const paymentInfos = await prisma.paymentInfo.findMany()
    * ```
    */
  get paymentInfo(): Prisma.PaymentInfoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user1`: Exposes CRUD operations for the **User1** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User1s
    * const user1s = await prisma.user1.findMany()
    * ```
    */
  get user1(): Prisma.User1Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.writtenExam`: Exposes CRUD operations for the **WrittenExam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WrittenExams
    * const writtenExams = await prisma.writtenExam.findMany()
    * ```
    */
  get writtenExam(): Prisma.WrittenExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.drivingExamResult`: Exposes CRUD operations for the **DrivingExamResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DrivingExamResults
    * const drivingExamResults = await prisma.drivingExamResult.findMany()
    * ```
    */
  get drivingExamResult(): Prisma.DrivingExamResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentRecord`: Exposes CRUD operations for the **PaymentRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentRecords
    * const paymentRecords = await prisma.paymentRecord.findMany()
    * ```
    */
  get paymentRecord(): Prisma.PaymentRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examAttempt`: Exposes CRUD operations for the **ExamAttempt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamAttempts
    * const examAttempts = await prisma.examAttempt.findMany()
    * ```
    */
  get examAttempt(): Prisma.ExamAttemptDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    StudentApplication: 'StudentApplication',
    ExamReminderLog: 'ExamReminderLog',
    BirthdayWishLog: 'BirthdayWishLog',
    ApplicationVehicleClass: 'ApplicationVehicleClass',
    VehicleClass: 'VehicleClass',
    ExistingLicense: 'ExistingLicense',
    ExistingLicenseVehicleClass: 'ExistingLicenseVehicleClass',
    PaymentInfo: 'PaymentInfo',
    User1: 'User1',
    WrittenExam: 'WrittenExam',
    DrivingExamResult: 'DrivingExamResult',
    PaymentRecord: 'PaymentRecord',
    ExamAttempt: 'ExamAttempt'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "studentApplication" | "examReminderLog" | "birthdayWishLog" | "applicationVehicleClass" | "vehicleClass" | "existingLicense" | "existingLicenseVehicleClass" | "paymentInfo" | "user1" | "writtenExam" | "drivingExamResult" | "paymentRecord" | "examAttempt"
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
      StudentApplication: {
        payload: Prisma.$StudentApplicationPayload<ExtArgs>
        fields: Prisma.StudentApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findFirst: {
            args: Prisma.StudentApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          findMany: {
            args: Prisma.StudentApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          create: {
            args: Prisma.StudentApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          createMany: {
            args: Prisma.StudentApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          delete: {
            args: Prisma.StudentApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          update: {
            args: Prisma.StudentApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          deleteMany: {
            args: Prisma.StudentApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>[]
          }
          upsert: {
            args: Prisma.StudentApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentApplicationPayload>
          }
          aggregate: {
            args: Prisma.StudentApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentApplication>
          }
          groupBy: {
            args: Prisma.StudentApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<StudentApplicationCountAggregateOutputType> | number
          }
        }
      }
      ExamReminderLog: {
        payload: Prisma.$ExamReminderLogPayload<ExtArgs>
        fields: Prisma.ExamReminderLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamReminderLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamReminderLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>
          }
          findFirst: {
            args: Prisma.ExamReminderLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamReminderLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>
          }
          findMany: {
            args: Prisma.ExamReminderLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>[]
          }
          create: {
            args: Prisma.ExamReminderLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>
          }
          createMany: {
            args: Prisma.ExamReminderLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamReminderLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>[]
          }
          delete: {
            args: Prisma.ExamReminderLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>
          }
          update: {
            args: Prisma.ExamReminderLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>
          }
          deleteMany: {
            args: Prisma.ExamReminderLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamReminderLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamReminderLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>[]
          }
          upsert: {
            args: Prisma.ExamReminderLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamReminderLogPayload>
          }
          aggregate: {
            args: Prisma.ExamReminderLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamReminderLog>
          }
          groupBy: {
            args: Prisma.ExamReminderLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamReminderLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamReminderLogCountArgs<ExtArgs>
            result: $Utils.Optional<ExamReminderLogCountAggregateOutputType> | number
          }
        }
      }
      BirthdayWishLog: {
        payload: Prisma.$BirthdayWishLogPayload<ExtArgs>
        fields: Prisma.BirthdayWishLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BirthdayWishLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BirthdayWishLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>
          }
          findFirst: {
            args: Prisma.BirthdayWishLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BirthdayWishLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>
          }
          findMany: {
            args: Prisma.BirthdayWishLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>[]
          }
          create: {
            args: Prisma.BirthdayWishLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>
          }
          createMany: {
            args: Prisma.BirthdayWishLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BirthdayWishLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>[]
          }
          delete: {
            args: Prisma.BirthdayWishLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>
          }
          update: {
            args: Prisma.BirthdayWishLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>
          }
          deleteMany: {
            args: Prisma.BirthdayWishLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BirthdayWishLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BirthdayWishLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>[]
          }
          upsert: {
            args: Prisma.BirthdayWishLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BirthdayWishLogPayload>
          }
          aggregate: {
            args: Prisma.BirthdayWishLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBirthdayWishLog>
          }
          groupBy: {
            args: Prisma.BirthdayWishLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BirthdayWishLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BirthdayWishLogCountArgs<ExtArgs>
            result: $Utils.Optional<BirthdayWishLogCountAggregateOutputType> | number
          }
        }
      }
      ApplicationVehicleClass: {
        payload: Prisma.$ApplicationVehicleClassPayload<ExtArgs>
        fields: Prisma.ApplicationVehicleClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationVehicleClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationVehicleClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>
          }
          findFirst: {
            args: Prisma.ApplicationVehicleClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationVehicleClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>
          }
          findMany: {
            args: Prisma.ApplicationVehicleClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>[]
          }
          create: {
            args: Prisma.ApplicationVehicleClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>
          }
          createMany: {
            args: Prisma.ApplicationVehicleClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationVehicleClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>[]
          }
          delete: {
            args: Prisma.ApplicationVehicleClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>
          }
          update: {
            args: Prisma.ApplicationVehicleClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationVehicleClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationVehicleClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationVehicleClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationVehicleClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationVehicleClassPayload>
          }
          aggregate: {
            args: Prisma.ApplicationVehicleClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplicationVehicleClass>
          }
          groupBy: {
            args: Prisma.ApplicationVehicleClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationVehicleClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationVehicleClassCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationVehicleClassCountAggregateOutputType> | number
          }
        }
      }
      VehicleClass: {
        payload: Prisma.$VehicleClassPayload<ExtArgs>
        fields: Prisma.VehicleClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>
          }
          findFirst: {
            args: Prisma.VehicleClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>
          }
          findMany: {
            args: Prisma.VehicleClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>[]
          }
          create: {
            args: Prisma.VehicleClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>
          }
          createMany: {
            args: Prisma.VehicleClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>[]
          }
          delete: {
            args: Prisma.VehicleClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>
          }
          update: {
            args: Prisma.VehicleClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>
          }
          deleteMany: {
            args: Prisma.VehicleClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>[]
          }
          upsert: {
            args: Prisma.VehicleClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehicleClassPayload>
          }
          aggregate: {
            args: Prisma.VehicleClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicleClass>
          }
          groupBy: {
            args: Prisma.VehicleClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleClassCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleClassCountAggregateOutputType> | number
          }
        }
      }
      ExistingLicense: {
        payload: Prisma.$ExistingLicensePayload<ExtArgs>
        fields: Prisma.ExistingLicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExistingLicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExistingLicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>
          }
          findFirst: {
            args: Prisma.ExistingLicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExistingLicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>
          }
          findMany: {
            args: Prisma.ExistingLicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>[]
          }
          create: {
            args: Prisma.ExistingLicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>
          }
          createMany: {
            args: Prisma.ExistingLicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExistingLicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>[]
          }
          delete: {
            args: Prisma.ExistingLicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>
          }
          update: {
            args: Prisma.ExistingLicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>
          }
          deleteMany: {
            args: Prisma.ExistingLicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExistingLicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExistingLicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>[]
          }
          upsert: {
            args: Prisma.ExistingLicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicensePayload>
          }
          aggregate: {
            args: Prisma.ExistingLicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExistingLicense>
          }
          groupBy: {
            args: Prisma.ExistingLicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExistingLicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExistingLicenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExistingLicenseCountAggregateOutputType> | number
          }
        }
      }
      ExistingLicenseVehicleClass: {
        payload: Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>
        fields: Prisma.ExistingLicenseVehicleClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExistingLicenseVehicleClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExistingLicenseVehicleClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>
          }
          findFirst: {
            args: Prisma.ExistingLicenseVehicleClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExistingLicenseVehicleClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>
          }
          findMany: {
            args: Prisma.ExistingLicenseVehicleClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>[]
          }
          create: {
            args: Prisma.ExistingLicenseVehicleClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>
          }
          createMany: {
            args: Prisma.ExistingLicenseVehicleClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExistingLicenseVehicleClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>[]
          }
          delete: {
            args: Prisma.ExistingLicenseVehicleClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>
          }
          update: {
            args: Prisma.ExistingLicenseVehicleClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>
          }
          deleteMany: {
            args: Prisma.ExistingLicenseVehicleClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExistingLicenseVehicleClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExistingLicenseVehicleClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>[]
          }
          upsert: {
            args: Prisma.ExistingLicenseVehicleClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExistingLicenseVehicleClassPayload>
          }
          aggregate: {
            args: Prisma.ExistingLicenseVehicleClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExistingLicenseVehicleClass>
          }
          groupBy: {
            args: Prisma.ExistingLicenseVehicleClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExistingLicenseVehicleClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExistingLicenseVehicleClassCountArgs<ExtArgs>
            result: $Utils.Optional<ExistingLicenseVehicleClassCountAggregateOutputType> | number
          }
        }
      }
      PaymentInfo: {
        payload: Prisma.$PaymentInfoPayload<ExtArgs>
        fields: Prisma.PaymentInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          findFirst: {
            args: Prisma.PaymentInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          findMany: {
            args: Prisma.PaymentInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>[]
          }
          create: {
            args: Prisma.PaymentInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          createMany: {
            args: Prisma.PaymentInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>[]
          }
          delete: {
            args: Prisma.PaymentInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          update: {
            args: Prisma.PaymentInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          deleteMany: {
            args: Prisma.PaymentInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>[]
          }
          upsert: {
            args: Prisma.PaymentInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentInfoPayload>
          }
          aggregate: {
            args: Prisma.PaymentInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentInfo>
          }
          groupBy: {
            args: Prisma.PaymentInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentInfoCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentInfoCountAggregateOutputType> | number
          }
        }
      }
      User1: {
        payload: Prisma.$User1Payload<ExtArgs>
        fields: Prisma.User1FieldRefs
        operations: {
          findUnique: {
            args: Prisma.User1FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.User1FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>
          }
          findFirst: {
            args: Prisma.User1FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.User1FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>
          }
          findMany: {
            args: Prisma.User1FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>[]
          }
          create: {
            args: Prisma.User1CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>
          }
          createMany: {
            args: Prisma.User1CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.User1CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>[]
          }
          delete: {
            args: Prisma.User1DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>
          }
          update: {
            args: Prisma.User1UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>
          }
          deleteMany: {
            args: Prisma.User1DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.User1UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.User1UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>[]
          }
          upsert: {
            args: Prisma.User1UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$User1Payload>
          }
          aggregate: {
            args: Prisma.User1AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser1>
          }
          groupBy: {
            args: Prisma.User1GroupByArgs<ExtArgs>
            result: $Utils.Optional<User1GroupByOutputType>[]
          }
          count: {
            args: Prisma.User1CountArgs<ExtArgs>
            result: $Utils.Optional<User1CountAggregateOutputType> | number
          }
        }
      }
      WrittenExam: {
        payload: Prisma.$WrittenExamPayload<ExtArgs>
        fields: Prisma.WrittenExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WrittenExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WrittenExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>
          }
          findFirst: {
            args: Prisma.WrittenExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WrittenExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>
          }
          findMany: {
            args: Prisma.WrittenExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>[]
          }
          create: {
            args: Prisma.WrittenExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>
          }
          createMany: {
            args: Prisma.WrittenExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WrittenExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>[]
          }
          delete: {
            args: Prisma.WrittenExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>
          }
          update: {
            args: Prisma.WrittenExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>
          }
          deleteMany: {
            args: Prisma.WrittenExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WrittenExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WrittenExamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>[]
          }
          upsert: {
            args: Prisma.WrittenExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WrittenExamPayload>
          }
          aggregate: {
            args: Prisma.WrittenExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWrittenExam>
          }
          groupBy: {
            args: Prisma.WrittenExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<WrittenExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.WrittenExamCountArgs<ExtArgs>
            result: $Utils.Optional<WrittenExamCountAggregateOutputType> | number
          }
        }
      }
      DrivingExamResult: {
        payload: Prisma.$DrivingExamResultPayload<ExtArgs>
        fields: Prisma.DrivingExamResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DrivingExamResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DrivingExamResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>
          }
          findFirst: {
            args: Prisma.DrivingExamResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DrivingExamResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>
          }
          findMany: {
            args: Prisma.DrivingExamResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>[]
          }
          create: {
            args: Prisma.DrivingExamResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>
          }
          createMany: {
            args: Prisma.DrivingExamResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DrivingExamResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>[]
          }
          delete: {
            args: Prisma.DrivingExamResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>
          }
          update: {
            args: Prisma.DrivingExamResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>
          }
          deleteMany: {
            args: Prisma.DrivingExamResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DrivingExamResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DrivingExamResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>[]
          }
          upsert: {
            args: Prisma.DrivingExamResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DrivingExamResultPayload>
          }
          aggregate: {
            args: Prisma.DrivingExamResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrivingExamResult>
          }
          groupBy: {
            args: Prisma.DrivingExamResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<DrivingExamResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.DrivingExamResultCountArgs<ExtArgs>
            result: $Utils.Optional<DrivingExamResultCountAggregateOutputType> | number
          }
        }
      }
      PaymentRecord: {
        payload: Prisma.$PaymentRecordPayload<ExtArgs>
        fields: Prisma.PaymentRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findFirst: {
            args: Prisma.PaymentRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          findMany: {
            args: Prisma.PaymentRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          create: {
            args: Prisma.PaymentRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          createMany: {
            args: Prisma.PaymentRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          delete: {
            args: Prisma.PaymentRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          update: {
            args: Prisma.PaymentRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          deleteMany: {
            args: Prisma.PaymentRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>[]
          }
          upsert: {
            args: Prisma.PaymentRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentRecordPayload>
          }
          aggregate: {
            args: Prisma.PaymentRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentRecord>
          }
          groupBy: {
            args: Prisma.PaymentRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentRecordCountAggregateOutputType> | number
          }
        }
      }
      ExamAttempt: {
        payload: Prisma.$ExamAttemptPayload<ExtArgs>
        fields: Prisma.ExamAttemptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamAttemptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamAttemptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          findFirst: {
            args: Prisma.ExamAttemptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamAttemptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          findMany: {
            args: Prisma.ExamAttemptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          create: {
            args: Prisma.ExamAttemptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          createMany: {
            args: Prisma.ExamAttemptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamAttemptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          delete: {
            args: Prisma.ExamAttemptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          update: {
            args: Prisma.ExamAttemptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          deleteMany: {
            args: Prisma.ExamAttemptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamAttemptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExamAttemptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>[]
          }
          upsert: {
            args: Prisma.ExamAttemptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAttemptPayload>
          }
          aggregate: {
            args: Prisma.ExamAttemptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamAttempt>
          }
          groupBy: {
            args: Prisma.ExamAttemptGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamAttemptGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamAttemptCountArgs<ExtArgs>
            result: $Utils.Optional<ExamAttemptCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    studentApplication?: StudentApplicationOmit
    examReminderLog?: ExamReminderLogOmit
    birthdayWishLog?: BirthdayWishLogOmit
    applicationVehicleClass?: ApplicationVehicleClassOmit
    vehicleClass?: VehicleClassOmit
    existingLicense?: ExistingLicenseOmit
    existingLicenseVehicleClass?: ExistingLicenseVehicleClassOmit
    paymentInfo?: PaymentInfoOmit
    user1?: User1Omit
    writtenExam?: WrittenExamOmit
    drivingExamResult?: DrivingExamResultOmit
    paymentRecord?: PaymentRecordOmit
    examAttempt?: ExamAttemptOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type StudentApplicationCountOutputType
   */

  export type StudentApplicationCountOutputType = {
    vehicleClasses: number
    writtenExams: number
    paymentRecords: number
    drivingExamResults: number
    examAttempts: number
    birthdayWishLogs: number
    examReminderLogs: number
  }

  export type StudentApplicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleClasses?: boolean | StudentApplicationCountOutputTypeCountVehicleClassesArgs
    writtenExams?: boolean | StudentApplicationCountOutputTypeCountWrittenExamsArgs
    paymentRecords?: boolean | StudentApplicationCountOutputTypeCountPaymentRecordsArgs
    drivingExamResults?: boolean | StudentApplicationCountOutputTypeCountDrivingExamResultsArgs
    examAttempts?: boolean | StudentApplicationCountOutputTypeCountExamAttemptsArgs
    birthdayWishLogs?: boolean | StudentApplicationCountOutputTypeCountBirthdayWishLogsArgs
    examReminderLogs?: boolean | StudentApplicationCountOutputTypeCountExamReminderLogsArgs
  }

  // Custom InputTypes
  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplicationCountOutputType
     */
    select?: StudentApplicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountVehicleClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationVehicleClassWhereInput
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountWrittenExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrittenExamWhereInput
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountPaymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountDrivingExamResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrivingExamResultWhereInput
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountExamAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountBirthdayWishLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirthdayWishLogWhereInput
  }

  /**
   * StudentApplicationCountOutputType without action
   */
  export type StudentApplicationCountOutputTypeCountExamReminderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamReminderLogWhereInput
  }


  /**
   * Count Type VehicleClassCountOutputType
   */

  export type VehicleClassCountOutputType = {
    applications: number
    existingLicenses: number
    drivingExamResults: number
    examAttempts: number
  }

  export type VehicleClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | VehicleClassCountOutputTypeCountApplicationsArgs
    existingLicenses?: boolean | VehicleClassCountOutputTypeCountExistingLicensesArgs
    drivingExamResults?: boolean | VehicleClassCountOutputTypeCountDrivingExamResultsArgs
    examAttempts?: boolean | VehicleClassCountOutputTypeCountExamAttemptsArgs
  }

  // Custom InputTypes
  /**
   * VehicleClassCountOutputType without action
   */
  export type VehicleClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClassCountOutputType
     */
    select?: VehicleClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleClassCountOutputType without action
   */
  export type VehicleClassCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationVehicleClassWhereInput
  }

  /**
   * VehicleClassCountOutputType without action
   */
  export type VehicleClassCountOutputTypeCountExistingLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExistingLicenseVehicleClassWhereInput
  }

  /**
   * VehicleClassCountOutputType without action
   */
  export type VehicleClassCountOutputTypeCountDrivingExamResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrivingExamResultWhereInput
  }

  /**
   * VehicleClassCountOutputType without action
   */
  export type VehicleClassCountOutputTypeCountExamAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
  }


  /**
   * Count Type ExistingLicenseCountOutputType
   */

  export type ExistingLicenseCountOutputType = {
    vehicleClasses: number
  }

  export type ExistingLicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleClasses?: boolean | ExistingLicenseCountOutputTypeCountVehicleClassesArgs
  }

  // Custom InputTypes
  /**
   * ExistingLicenseCountOutputType without action
   */
  export type ExistingLicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseCountOutputType
     */
    select?: ExistingLicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExistingLicenseCountOutputType without action
   */
  export type ExistingLicenseCountOutputTypeCountVehicleClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExistingLicenseVehicleClassWhereInput
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
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    username: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    password?: true
    role?: true
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
    name: string
    username: string
    password: string
    role: $Enums.Role
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
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "username" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      username: string
      password: string
      role: $Enums.Role
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
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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
  }


  /**
   * Model StudentApplication
   */

  export type AggregateStudentApplication = {
    _count: StudentApplicationCountAggregateOutputType | null
    _avg: StudentApplicationAvgAggregateOutputType | null
    _sum: StudentApplicationSumAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  export type StudentApplicationAvgAggregateOutputType = {
    age: number | null
  }

  export type StudentApplicationSumAggregateOutputType = {
    age: number | null
  }

  export type StudentApplicationMinAggregateOutputType = {
    id: string | null
    referenceNo: string | null
    fullName: string | null
    nic: string | null
    address: string | null
    email: string | null
    phone1: string | null
    phone2: string | null
    dob: Date | null
    age: number | null
    canDriveVehicles: boolean | null
    notes: string | null
    medicalDate: Date | null
    medicalTime: Date | null
    medicalStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentApplicationMaxAggregateOutputType = {
    id: string | null
    referenceNo: string | null
    fullName: string | null
    nic: string | null
    address: string | null
    email: string | null
    phone1: string | null
    phone2: string | null
    dob: Date | null
    age: number | null
    canDriveVehicles: boolean | null
    notes: string | null
    medicalDate: Date | null
    medicalTime: Date | null
    medicalStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentApplicationCountAggregateOutputType = {
    id: number
    referenceNo: number
    fullName: number
    nic: number
    address: number
    email: number
    phone1: number
    phone2: number
    dob: number
    age: number
    canDriveVehicles: number
    notes: number
    medicalDate: number
    medicalTime: number
    medicalStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentApplicationAvgAggregateInputType = {
    age?: true
  }

  export type StudentApplicationSumAggregateInputType = {
    age?: true
  }

  export type StudentApplicationMinAggregateInputType = {
    id?: true
    referenceNo?: true
    fullName?: true
    nic?: true
    address?: true
    email?: true
    phone1?: true
    phone2?: true
    dob?: true
    age?: true
    canDriveVehicles?: true
    notes?: true
    medicalDate?: true
    medicalTime?: true
    medicalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentApplicationMaxAggregateInputType = {
    id?: true
    referenceNo?: true
    fullName?: true
    nic?: true
    address?: true
    email?: true
    phone1?: true
    phone2?: true
    dob?: true
    age?: true
    canDriveVehicles?: true
    notes?: true
    medicalDate?: true
    medicalTime?: true
    medicalStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentApplicationCountAggregateInputType = {
    id?: true
    referenceNo?: true
    fullName?: true
    nic?: true
    address?: true
    email?: true
    phone1?: true
    phone2?: true
    dob?: true
    age?: true
    canDriveVehicles?: true
    notes?: true
    medicalDate?: true
    medicalTime?: true
    medicalStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplication to aggregate.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentApplications
    **/
    _count?: true | StudentApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type GetStudentApplicationAggregateType<T extends StudentApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentApplication[P]>
      : GetScalarType<T[P], AggregateStudentApplication[P]>
  }




  export type StudentApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentApplicationWhereInput
    orderBy?: StudentApplicationOrderByWithAggregationInput | StudentApplicationOrderByWithAggregationInput[]
    by: StudentApplicationScalarFieldEnum[] | StudentApplicationScalarFieldEnum
    having?: StudentApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentApplicationCountAggregateInputType | true
    _avg?: StudentApplicationAvgAggregateInputType
    _sum?: StudentApplicationSumAggregateInputType
    _min?: StudentApplicationMinAggregateInputType
    _max?: StudentApplicationMaxAggregateInputType
  }

  export type StudentApplicationGroupByOutputType = {
    id: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email: string | null
    phone1: string
    phone2: string | null
    dob: Date
    age: number
    canDriveVehicles: boolean
    notes: string | null
    medicalDate: Date | null
    medicalTime: Date | null
    medicalStatus: string
    createdAt: Date
    updatedAt: Date
    _count: StudentApplicationCountAggregateOutputType | null
    _avg: StudentApplicationAvgAggregateOutputType | null
    _sum: StudentApplicationSumAggregateOutputType | null
    _min: StudentApplicationMinAggregateOutputType | null
    _max: StudentApplicationMaxAggregateOutputType | null
  }

  type GetStudentApplicationGroupByPayload<T extends StudentApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], StudentApplicationGroupByOutputType[P]>
        }
      >
    >


  export type StudentApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    fullName?: boolean
    nic?: boolean
    address?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    dob?: boolean
    age?: boolean
    canDriveVehicles?: boolean
    notes?: boolean
    medicalDate?: boolean
    medicalTime?: boolean
    medicalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    vehicleClasses?: boolean | StudentApplication$vehicleClassesArgs<ExtArgs>
    existingLicense?: boolean | StudentApplication$existingLicenseArgs<ExtArgs>
    writtenExams?: boolean | StudentApplication$writtenExamsArgs<ExtArgs>
    paymentInfo?: boolean | StudentApplication$paymentInfoArgs<ExtArgs>
    paymentRecords?: boolean | StudentApplication$paymentRecordsArgs<ExtArgs>
    drivingExamResults?: boolean | StudentApplication$drivingExamResultsArgs<ExtArgs>
    examAttempts?: boolean | StudentApplication$examAttemptsArgs<ExtArgs>
    birthdayWishLogs?: boolean | StudentApplication$birthdayWishLogsArgs<ExtArgs>
    examReminderLogs?: boolean | StudentApplication$examReminderLogsArgs<ExtArgs>
    _count?: boolean | StudentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    fullName?: boolean
    nic?: boolean
    address?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    dob?: boolean
    age?: boolean
    canDriveVehicles?: boolean
    notes?: boolean
    medicalDate?: boolean
    medicalTime?: boolean
    medicalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referenceNo?: boolean
    fullName?: boolean
    nic?: boolean
    address?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    dob?: boolean
    age?: boolean
    canDriveVehicles?: boolean
    notes?: boolean
    medicalDate?: boolean
    medicalTime?: boolean
    medicalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentApplication"]>

  export type StudentApplicationSelectScalar = {
    id?: boolean
    referenceNo?: boolean
    fullName?: boolean
    nic?: boolean
    address?: boolean
    email?: boolean
    phone1?: boolean
    phone2?: boolean
    dob?: boolean
    age?: boolean
    canDriveVehicles?: boolean
    notes?: boolean
    medicalDate?: boolean
    medicalTime?: boolean
    medicalStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceNo" | "fullName" | "nic" | "address" | "email" | "phone1" | "phone2" | "dob" | "age" | "canDriveVehicles" | "notes" | "medicalDate" | "medicalTime" | "medicalStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["studentApplication"]>
  export type StudentApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleClasses?: boolean | StudentApplication$vehicleClassesArgs<ExtArgs>
    existingLicense?: boolean | StudentApplication$existingLicenseArgs<ExtArgs>
    writtenExams?: boolean | StudentApplication$writtenExamsArgs<ExtArgs>
    paymentInfo?: boolean | StudentApplication$paymentInfoArgs<ExtArgs>
    paymentRecords?: boolean | StudentApplication$paymentRecordsArgs<ExtArgs>
    drivingExamResults?: boolean | StudentApplication$drivingExamResultsArgs<ExtArgs>
    examAttempts?: boolean | StudentApplication$examAttemptsArgs<ExtArgs>
    birthdayWishLogs?: boolean | StudentApplication$birthdayWishLogsArgs<ExtArgs>
    examReminderLogs?: boolean | StudentApplication$examReminderLogsArgs<ExtArgs>
    _count?: boolean | StudentApplicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentApplication"
    objects: {
      vehicleClasses: Prisma.$ApplicationVehicleClassPayload<ExtArgs>[]
      existingLicense: Prisma.$ExistingLicensePayload<ExtArgs> | null
      writtenExams: Prisma.$WrittenExamPayload<ExtArgs>[]
      paymentInfo: Prisma.$PaymentInfoPayload<ExtArgs> | null
      paymentRecords: Prisma.$PaymentRecordPayload<ExtArgs>[]
      drivingExamResults: Prisma.$DrivingExamResultPayload<ExtArgs>[]
      examAttempts: Prisma.$ExamAttemptPayload<ExtArgs>[]
      birthdayWishLogs: Prisma.$BirthdayWishLogPayload<ExtArgs>[]
      examReminderLogs: Prisma.$ExamReminderLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceNo: string
      fullName: string
      nic: string
      address: string
      email: string | null
      phone1: string
      phone2: string | null
      dob: Date
      age: number
      canDriveVehicles: boolean
      notes: string | null
      medicalDate: Date | null
      medicalTime: Date | null
      medicalStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentApplication"]>
    composites: {}
  }

  type StudentApplicationGetPayload<S extends boolean | null | undefined | StudentApplicationDefaultArgs> = $Result.GetResult<Prisma.$StudentApplicationPayload, S>

  type StudentApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentApplicationCountAggregateInputType | true
    }

  export interface StudentApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentApplication'], meta: { name: 'StudentApplication' } }
    /**
     * Find zero or one StudentApplication that matches the filter.
     * @param {StudentApplicationFindUniqueArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentApplicationFindUniqueArgs>(args: SelectSubset<T, StudentApplicationFindUniqueArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentApplicationFindUniqueOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentApplicationFindFirstArgs>(args?: SelectSubset<T, StudentApplicationFindFirstArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindFirstOrThrowArgs} args - Arguments to find a StudentApplication
     * @example
     * // Get one StudentApplication
     * const studentApplication = await prisma.studentApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany()
     * 
     * // Get first 10 StudentApplications
     * const studentApplications = await prisma.studentApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentApplicationWithIdOnly = await prisma.studentApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentApplicationFindManyArgs>(args?: SelectSubset<T, StudentApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentApplication.
     * @param {StudentApplicationCreateArgs} args - Arguments to create a StudentApplication.
     * @example
     * // Create one StudentApplication
     * const StudentApplication = await prisma.studentApplication.create({
     *   data: {
     *     // ... data to create a StudentApplication
     *   }
     * })
     * 
     */
    create<T extends StudentApplicationCreateArgs>(args: SelectSubset<T, StudentApplicationCreateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentApplications.
     * @param {StudentApplicationCreateManyArgs} args - Arguments to create many StudentApplications.
     * @example
     * // Create many StudentApplications
     * const studentApplication = await prisma.studentApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentApplicationCreateManyArgs>(args?: SelectSubset<T, StudentApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentApplications and returns the data saved in the database.
     * @param {StudentApplicationCreateManyAndReturnArgs} args - Arguments to create many StudentApplications.
     * @example
     * // Create many StudentApplications
     * const studentApplication = await prisma.studentApplication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentApplications and only return the `id`
     * const studentApplicationWithIdOnly = await prisma.studentApplication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentApplication.
     * @param {StudentApplicationDeleteArgs} args - Arguments to delete one StudentApplication.
     * @example
     * // Delete one StudentApplication
     * const StudentApplication = await prisma.studentApplication.delete({
     *   where: {
     *     // ... filter to delete one StudentApplication
     *   }
     * })
     * 
     */
    delete<T extends StudentApplicationDeleteArgs>(args: SelectSubset<T, StudentApplicationDeleteArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentApplication.
     * @param {StudentApplicationUpdateArgs} args - Arguments to update one StudentApplication.
     * @example
     * // Update one StudentApplication
     * const studentApplication = await prisma.studentApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentApplicationUpdateArgs>(args: SelectSubset<T, StudentApplicationUpdateArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentApplications.
     * @param {StudentApplicationDeleteManyArgs} args - Arguments to filter StudentApplications to delete.
     * @example
     * // Delete a few StudentApplications
     * const { count } = await prisma.studentApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentApplicationDeleteManyArgs>(args?: SelectSubset<T, StudentApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentApplications
     * const studentApplication = await prisma.studentApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentApplicationUpdateManyArgs>(args: SelectSubset<T, StudentApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentApplications and returns the data updated in the database.
     * @param {StudentApplicationUpdateManyAndReturnArgs} args - Arguments to update many StudentApplications.
     * @example
     * // Update many StudentApplications
     * const studentApplication = await prisma.studentApplication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentApplications and only return the `id`
     * const studentApplicationWithIdOnly = await prisma.studentApplication.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentApplication.
     * @param {StudentApplicationUpsertArgs} args - Arguments to update or create a StudentApplication.
     * @example
     * // Update or create a StudentApplication
     * const studentApplication = await prisma.studentApplication.upsert({
     *   create: {
     *     // ... data to create a StudentApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentApplication we want to update
     *   }
     * })
     */
    upsert<T extends StudentApplicationUpsertArgs>(args: SelectSubset<T, StudentApplicationUpsertArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationCountArgs} args - Arguments to filter StudentApplications to count.
     * @example
     * // Count the number of StudentApplications
     * const count = await prisma.studentApplication.count({
     *   where: {
     *     // ... the filter for the StudentApplications we want to count
     *   }
     * })
    **/
    count<T extends StudentApplicationCountArgs>(
      args?: Subset<T, StudentApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentApplicationAggregateArgs>(args: Subset<T, StudentApplicationAggregateArgs>): Prisma.PrismaPromise<GetStudentApplicationAggregateType<T>>

    /**
     * Group by StudentApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentApplicationGroupByArgs} args - Group by arguments.
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
      T extends StudentApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentApplicationGroupByArgs['orderBy'] }
        : { orderBy?: StudentApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentApplication model
   */
  readonly fields: StudentApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicleClasses<T extends StudentApplication$vehicleClassesArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$vehicleClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    existingLicense<T extends StudentApplication$existingLicenseArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$existingLicenseArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    writtenExams<T extends StudentApplication$writtenExamsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$writtenExamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paymentInfo<T extends StudentApplication$paymentInfoArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$paymentInfoArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    paymentRecords<T extends StudentApplication$paymentRecordsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$paymentRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drivingExamResults<T extends StudentApplication$drivingExamResultsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$drivingExamResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examAttempts<T extends StudentApplication$examAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$examAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    birthdayWishLogs<T extends StudentApplication$birthdayWishLogsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$birthdayWishLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examReminderLogs<T extends StudentApplication$examReminderLogsArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplication$examReminderLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StudentApplication model
   */
  interface StudentApplicationFieldRefs {
    readonly id: FieldRef<"StudentApplication", 'String'>
    readonly referenceNo: FieldRef<"StudentApplication", 'String'>
    readonly fullName: FieldRef<"StudentApplication", 'String'>
    readonly nic: FieldRef<"StudentApplication", 'String'>
    readonly address: FieldRef<"StudentApplication", 'String'>
    readonly email: FieldRef<"StudentApplication", 'String'>
    readonly phone1: FieldRef<"StudentApplication", 'String'>
    readonly phone2: FieldRef<"StudentApplication", 'String'>
    readonly dob: FieldRef<"StudentApplication", 'DateTime'>
    readonly age: FieldRef<"StudentApplication", 'Int'>
    readonly canDriveVehicles: FieldRef<"StudentApplication", 'Boolean'>
    readonly notes: FieldRef<"StudentApplication", 'String'>
    readonly medicalDate: FieldRef<"StudentApplication", 'DateTime'>
    readonly medicalTime: FieldRef<"StudentApplication", 'DateTime'>
    readonly medicalStatus: FieldRef<"StudentApplication", 'String'>
    readonly createdAt: FieldRef<"StudentApplication", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentApplication findUnique
   */
  export type StudentApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findUniqueOrThrow
   */
  export type StudentApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication findFirst
   */
  export type StudentApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findFirstOrThrow
   */
  export type StudentApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplication to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentApplications.
     */
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication findMany
   */
  export type StudentApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter, which StudentApplications to fetch.
     */
    where?: StudentApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentApplications to fetch.
     */
    orderBy?: StudentApplicationOrderByWithRelationInput | StudentApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentApplications.
     */
    cursor?: StudentApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentApplications.
     */
    skip?: number
    distinct?: StudentApplicationScalarFieldEnum | StudentApplicationScalarFieldEnum[]
  }

  /**
   * StudentApplication create
   */
  export type StudentApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentApplication.
     */
    data: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
  }

  /**
   * StudentApplication createMany
   */
  export type StudentApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentApplications.
     */
    data: StudentApplicationCreateManyInput | StudentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplication createManyAndReturn
   */
  export type StudentApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many StudentApplications.
     */
    data: StudentApplicationCreateManyInput | StudentApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentApplication update
   */
  export type StudentApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentApplication.
     */
    data: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
    /**
     * Choose, which StudentApplication to update.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication updateMany
   */
  export type StudentApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentApplications.
     */
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyInput>
    /**
     * Filter which StudentApplications to update
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to update.
     */
    limit?: number
  }

  /**
   * StudentApplication updateManyAndReturn
   */
  export type StudentApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * The data used to update StudentApplications.
     */
    data: XOR<StudentApplicationUpdateManyMutationInput, StudentApplicationUncheckedUpdateManyInput>
    /**
     * Filter which StudentApplications to update
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to update.
     */
    limit?: number
  }

  /**
   * StudentApplication upsert
   */
  export type StudentApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentApplication to update in case it exists.
     */
    where: StudentApplicationWhereUniqueInput
    /**
     * In case the StudentApplication found by the `where` argument doesn't exist, create a new StudentApplication with this data.
     */
    create: XOR<StudentApplicationCreateInput, StudentApplicationUncheckedCreateInput>
    /**
     * In case the StudentApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentApplicationUpdateInput, StudentApplicationUncheckedUpdateInput>
  }

  /**
   * StudentApplication delete
   */
  export type StudentApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
    /**
     * Filter which StudentApplication to delete.
     */
    where: StudentApplicationWhereUniqueInput
  }

  /**
   * StudentApplication deleteMany
   */
  export type StudentApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentApplications to delete
     */
    where?: StudentApplicationWhereInput
    /**
     * Limit how many StudentApplications to delete.
     */
    limit?: number
  }

  /**
   * StudentApplication.vehicleClasses
   */
  export type StudentApplication$vehicleClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    where?: ApplicationVehicleClassWhereInput
    orderBy?: ApplicationVehicleClassOrderByWithRelationInput | ApplicationVehicleClassOrderByWithRelationInput[]
    cursor?: ApplicationVehicleClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationVehicleClassScalarFieldEnum | ApplicationVehicleClassScalarFieldEnum[]
  }

  /**
   * StudentApplication.existingLicense
   */
  export type StudentApplication$existingLicenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    where?: ExistingLicenseWhereInput
  }

  /**
   * StudentApplication.writtenExams
   */
  export type StudentApplication$writtenExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    where?: WrittenExamWhereInput
    orderBy?: WrittenExamOrderByWithRelationInput | WrittenExamOrderByWithRelationInput[]
    cursor?: WrittenExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WrittenExamScalarFieldEnum | WrittenExamScalarFieldEnum[]
  }

  /**
   * StudentApplication.paymentInfo
   */
  export type StudentApplication$paymentInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    where?: PaymentInfoWhereInput
  }

  /**
   * StudentApplication.paymentRecords
   */
  export type StudentApplication$paymentRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    cursor?: PaymentRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * StudentApplication.drivingExamResults
   */
  export type StudentApplication$drivingExamResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    where?: DrivingExamResultWhereInput
    orderBy?: DrivingExamResultOrderByWithRelationInput | DrivingExamResultOrderByWithRelationInput[]
    cursor?: DrivingExamResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrivingExamResultScalarFieldEnum | DrivingExamResultScalarFieldEnum[]
  }

  /**
   * StudentApplication.examAttempts
   */
  export type StudentApplication$examAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    cursor?: ExamAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * StudentApplication.birthdayWishLogs
   */
  export type StudentApplication$birthdayWishLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    where?: BirthdayWishLogWhereInput
    orderBy?: BirthdayWishLogOrderByWithRelationInput | BirthdayWishLogOrderByWithRelationInput[]
    cursor?: BirthdayWishLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BirthdayWishLogScalarFieldEnum | BirthdayWishLogScalarFieldEnum[]
  }

  /**
   * StudentApplication.examReminderLogs
   */
  export type StudentApplication$examReminderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    where?: ExamReminderLogWhereInput
    orderBy?: ExamReminderLogOrderByWithRelationInput | ExamReminderLogOrderByWithRelationInput[]
    cursor?: ExamReminderLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamReminderLogScalarFieldEnum | ExamReminderLogScalarFieldEnum[]
  }

  /**
   * StudentApplication without action
   */
  export type StudentApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentApplication
     */
    select?: StudentApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentApplication
     */
    omit?: StudentApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentApplicationInclude<ExtArgs> | null
  }


  /**
   * Model ExamReminderLog
   */

  export type AggregateExamReminderLog = {
    _count: ExamReminderLogCountAggregateOutputType | null
    _avg: ExamReminderLogAvgAggregateOutputType | null
    _sum: ExamReminderLogSumAggregateOutputType | null
    _min: ExamReminderLogMinAggregateOutputType | null
    _max: ExamReminderLogMaxAggregateOutputType | null
  }

  export type ExamReminderLogAvgAggregateOutputType = {
    id: number | null
    examRecordId: number | null
  }

  export type ExamReminderLogSumAggregateOutputType = {
    id: number | null
    examRecordId: number | null
  }

  export type ExamReminderLogMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    examType: string | null
    examRecordId: number | null
    sentAt: Date | null
  }

  export type ExamReminderLogMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    examType: string | null
    examRecordId: number | null
    sentAt: Date | null
  }

  export type ExamReminderLogCountAggregateOutputType = {
    id: number
    applicationId: number
    examType: number
    examRecordId: number
    sentAt: number
    _all: number
  }


  export type ExamReminderLogAvgAggregateInputType = {
    id?: true
    examRecordId?: true
  }

  export type ExamReminderLogSumAggregateInputType = {
    id?: true
    examRecordId?: true
  }

  export type ExamReminderLogMinAggregateInputType = {
    id?: true
    applicationId?: true
    examType?: true
    examRecordId?: true
    sentAt?: true
  }

  export type ExamReminderLogMaxAggregateInputType = {
    id?: true
    applicationId?: true
    examType?: true
    examRecordId?: true
    sentAt?: true
  }

  export type ExamReminderLogCountAggregateInputType = {
    id?: true
    applicationId?: true
    examType?: true
    examRecordId?: true
    sentAt?: true
    _all?: true
  }

  export type ExamReminderLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamReminderLog to aggregate.
     */
    where?: ExamReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamReminderLogs to fetch.
     */
    orderBy?: ExamReminderLogOrderByWithRelationInput | ExamReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamReminderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamReminderLogs
    **/
    _count?: true | ExamReminderLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamReminderLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamReminderLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamReminderLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamReminderLogMaxAggregateInputType
  }

  export type GetExamReminderLogAggregateType<T extends ExamReminderLogAggregateArgs> = {
        [P in keyof T & keyof AggregateExamReminderLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamReminderLog[P]>
      : GetScalarType<T[P], AggregateExamReminderLog[P]>
  }




  export type ExamReminderLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamReminderLogWhereInput
    orderBy?: ExamReminderLogOrderByWithAggregationInput | ExamReminderLogOrderByWithAggregationInput[]
    by: ExamReminderLogScalarFieldEnum[] | ExamReminderLogScalarFieldEnum
    having?: ExamReminderLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamReminderLogCountAggregateInputType | true
    _avg?: ExamReminderLogAvgAggregateInputType
    _sum?: ExamReminderLogSumAggregateInputType
    _min?: ExamReminderLogMinAggregateInputType
    _max?: ExamReminderLogMaxAggregateInputType
  }

  export type ExamReminderLogGroupByOutputType = {
    id: number
    applicationId: string
    examType: string
    examRecordId: number
    sentAt: Date
    _count: ExamReminderLogCountAggregateOutputType | null
    _avg: ExamReminderLogAvgAggregateOutputType | null
    _sum: ExamReminderLogSumAggregateOutputType | null
    _min: ExamReminderLogMinAggregateOutputType | null
    _max: ExamReminderLogMaxAggregateOutputType | null
  }

  type GetExamReminderLogGroupByPayload<T extends ExamReminderLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamReminderLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamReminderLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamReminderLogGroupByOutputType[P]>
            : GetScalarType<T[P], ExamReminderLogGroupByOutputType[P]>
        }
      >
    >


  export type ExamReminderLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    examRecordId?: boolean
    sentAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examReminderLog"]>

  export type ExamReminderLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    examRecordId?: boolean
    sentAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examReminderLog"]>

  export type ExamReminderLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    examRecordId?: boolean
    sentAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examReminderLog"]>

  export type ExamReminderLogSelectScalar = {
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    examRecordId?: boolean
    sentAt?: boolean
  }

  export type ExamReminderLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "examType" | "examRecordId" | "sentAt", ExtArgs["result"]["examReminderLog"]>
  export type ExamReminderLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type ExamReminderLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type ExamReminderLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }

  export type $ExamReminderLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamReminderLog"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      examType: string
      examRecordId: number
      sentAt: Date
    }, ExtArgs["result"]["examReminderLog"]>
    composites: {}
  }

  type ExamReminderLogGetPayload<S extends boolean | null | undefined | ExamReminderLogDefaultArgs> = $Result.GetResult<Prisma.$ExamReminderLogPayload, S>

  type ExamReminderLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamReminderLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamReminderLogCountAggregateInputType | true
    }

  export interface ExamReminderLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamReminderLog'], meta: { name: 'ExamReminderLog' } }
    /**
     * Find zero or one ExamReminderLog that matches the filter.
     * @param {ExamReminderLogFindUniqueArgs} args - Arguments to find a ExamReminderLog
     * @example
     * // Get one ExamReminderLog
     * const examReminderLog = await prisma.examReminderLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamReminderLogFindUniqueArgs>(args: SelectSubset<T, ExamReminderLogFindUniqueArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamReminderLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamReminderLogFindUniqueOrThrowArgs} args - Arguments to find a ExamReminderLog
     * @example
     * // Get one ExamReminderLog
     * const examReminderLog = await prisma.examReminderLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamReminderLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamReminderLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamReminderLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamReminderLogFindFirstArgs} args - Arguments to find a ExamReminderLog
     * @example
     * // Get one ExamReminderLog
     * const examReminderLog = await prisma.examReminderLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamReminderLogFindFirstArgs>(args?: SelectSubset<T, ExamReminderLogFindFirstArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamReminderLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamReminderLogFindFirstOrThrowArgs} args - Arguments to find a ExamReminderLog
     * @example
     * // Get one ExamReminderLog
     * const examReminderLog = await prisma.examReminderLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamReminderLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamReminderLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamReminderLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamReminderLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamReminderLogs
     * const examReminderLogs = await prisma.examReminderLog.findMany()
     * 
     * // Get first 10 ExamReminderLogs
     * const examReminderLogs = await prisma.examReminderLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examReminderLogWithIdOnly = await prisma.examReminderLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamReminderLogFindManyArgs>(args?: SelectSubset<T, ExamReminderLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamReminderLog.
     * @param {ExamReminderLogCreateArgs} args - Arguments to create a ExamReminderLog.
     * @example
     * // Create one ExamReminderLog
     * const ExamReminderLog = await prisma.examReminderLog.create({
     *   data: {
     *     // ... data to create a ExamReminderLog
     *   }
     * })
     * 
     */
    create<T extends ExamReminderLogCreateArgs>(args: SelectSubset<T, ExamReminderLogCreateArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamReminderLogs.
     * @param {ExamReminderLogCreateManyArgs} args - Arguments to create many ExamReminderLogs.
     * @example
     * // Create many ExamReminderLogs
     * const examReminderLog = await prisma.examReminderLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamReminderLogCreateManyArgs>(args?: SelectSubset<T, ExamReminderLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamReminderLogs and returns the data saved in the database.
     * @param {ExamReminderLogCreateManyAndReturnArgs} args - Arguments to create many ExamReminderLogs.
     * @example
     * // Create many ExamReminderLogs
     * const examReminderLog = await prisma.examReminderLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamReminderLogs and only return the `id`
     * const examReminderLogWithIdOnly = await prisma.examReminderLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamReminderLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamReminderLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamReminderLog.
     * @param {ExamReminderLogDeleteArgs} args - Arguments to delete one ExamReminderLog.
     * @example
     * // Delete one ExamReminderLog
     * const ExamReminderLog = await prisma.examReminderLog.delete({
     *   where: {
     *     // ... filter to delete one ExamReminderLog
     *   }
     * })
     * 
     */
    delete<T extends ExamReminderLogDeleteArgs>(args: SelectSubset<T, ExamReminderLogDeleteArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamReminderLog.
     * @param {ExamReminderLogUpdateArgs} args - Arguments to update one ExamReminderLog.
     * @example
     * // Update one ExamReminderLog
     * const examReminderLog = await prisma.examReminderLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamReminderLogUpdateArgs>(args: SelectSubset<T, ExamReminderLogUpdateArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamReminderLogs.
     * @param {ExamReminderLogDeleteManyArgs} args - Arguments to filter ExamReminderLogs to delete.
     * @example
     * // Delete a few ExamReminderLogs
     * const { count } = await prisma.examReminderLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamReminderLogDeleteManyArgs>(args?: SelectSubset<T, ExamReminderLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamReminderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamReminderLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamReminderLogs
     * const examReminderLog = await prisma.examReminderLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamReminderLogUpdateManyArgs>(args: SelectSubset<T, ExamReminderLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamReminderLogs and returns the data updated in the database.
     * @param {ExamReminderLogUpdateManyAndReturnArgs} args - Arguments to update many ExamReminderLogs.
     * @example
     * // Update many ExamReminderLogs
     * const examReminderLog = await prisma.examReminderLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamReminderLogs and only return the `id`
     * const examReminderLogWithIdOnly = await prisma.examReminderLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamReminderLogUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamReminderLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamReminderLog.
     * @param {ExamReminderLogUpsertArgs} args - Arguments to update or create a ExamReminderLog.
     * @example
     * // Update or create a ExamReminderLog
     * const examReminderLog = await prisma.examReminderLog.upsert({
     *   create: {
     *     // ... data to create a ExamReminderLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamReminderLog we want to update
     *   }
     * })
     */
    upsert<T extends ExamReminderLogUpsertArgs>(args: SelectSubset<T, ExamReminderLogUpsertArgs<ExtArgs>>): Prisma__ExamReminderLogClient<$Result.GetResult<Prisma.$ExamReminderLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamReminderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamReminderLogCountArgs} args - Arguments to filter ExamReminderLogs to count.
     * @example
     * // Count the number of ExamReminderLogs
     * const count = await prisma.examReminderLog.count({
     *   where: {
     *     // ... the filter for the ExamReminderLogs we want to count
     *   }
     * })
    **/
    count<T extends ExamReminderLogCountArgs>(
      args?: Subset<T, ExamReminderLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamReminderLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamReminderLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamReminderLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamReminderLogAggregateArgs>(args: Subset<T, ExamReminderLogAggregateArgs>): Prisma.PrismaPromise<GetExamReminderLogAggregateType<T>>

    /**
     * Group by ExamReminderLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamReminderLogGroupByArgs} args - Group by arguments.
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
      T extends ExamReminderLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamReminderLogGroupByArgs['orderBy'] }
        : { orderBy?: ExamReminderLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamReminderLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamReminderLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamReminderLog model
   */
  readonly fields: ExamReminderLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamReminderLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamReminderLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExamReminderLog model
   */
  interface ExamReminderLogFieldRefs {
    readonly id: FieldRef<"ExamReminderLog", 'Int'>
    readonly applicationId: FieldRef<"ExamReminderLog", 'String'>
    readonly examType: FieldRef<"ExamReminderLog", 'String'>
    readonly examRecordId: FieldRef<"ExamReminderLog", 'Int'>
    readonly sentAt: FieldRef<"ExamReminderLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamReminderLog findUnique
   */
  export type ExamReminderLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ExamReminderLog to fetch.
     */
    where: ExamReminderLogWhereUniqueInput
  }

  /**
   * ExamReminderLog findUniqueOrThrow
   */
  export type ExamReminderLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ExamReminderLog to fetch.
     */
    where: ExamReminderLogWhereUniqueInput
  }

  /**
   * ExamReminderLog findFirst
   */
  export type ExamReminderLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ExamReminderLog to fetch.
     */
    where?: ExamReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamReminderLogs to fetch.
     */
    orderBy?: ExamReminderLogOrderByWithRelationInput | ExamReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamReminderLogs.
     */
    cursor?: ExamReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamReminderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamReminderLogs.
     */
    distinct?: ExamReminderLogScalarFieldEnum | ExamReminderLogScalarFieldEnum[]
  }

  /**
   * ExamReminderLog findFirstOrThrow
   */
  export type ExamReminderLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ExamReminderLog to fetch.
     */
    where?: ExamReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamReminderLogs to fetch.
     */
    orderBy?: ExamReminderLogOrderByWithRelationInput | ExamReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamReminderLogs.
     */
    cursor?: ExamReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamReminderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamReminderLogs.
     */
    distinct?: ExamReminderLogScalarFieldEnum | ExamReminderLogScalarFieldEnum[]
  }

  /**
   * ExamReminderLog findMany
   */
  export type ExamReminderLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * Filter, which ExamReminderLogs to fetch.
     */
    where?: ExamReminderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamReminderLogs to fetch.
     */
    orderBy?: ExamReminderLogOrderByWithRelationInput | ExamReminderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamReminderLogs.
     */
    cursor?: ExamReminderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamReminderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamReminderLogs.
     */
    skip?: number
    distinct?: ExamReminderLogScalarFieldEnum | ExamReminderLogScalarFieldEnum[]
  }

  /**
   * ExamReminderLog create
   */
  export type ExamReminderLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamReminderLog.
     */
    data: XOR<ExamReminderLogCreateInput, ExamReminderLogUncheckedCreateInput>
  }

  /**
   * ExamReminderLog createMany
   */
  export type ExamReminderLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamReminderLogs.
     */
    data: ExamReminderLogCreateManyInput | ExamReminderLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamReminderLog createManyAndReturn
   */
  export type ExamReminderLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * The data used to create many ExamReminderLogs.
     */
    data: ExamReminderLogCreateManyInput | ExamReminderLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamReminderLog update
   */
  export type ExamReminderLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamReminderLog.
     */
    data: XOR<ExamReminderLogUpdateInput, ExamReminderLogUncheckedUpdateInput>
    /**
     * Choose, which ExamReminderLog to update.
     */
    where: ExamReminderLogWhereUniqueInput
  }

  /**
   * ExamReminderLog updateMany
   */
  export type ExamReminderLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamReminderLogs.
     */
    data: XOR<ExamReminderLogUpdateManyMutationInput, ExamReminderLogUncheckedUpdateManyInput>
    /**
     * Filter which ExamReminderLogs to update
     */
    where?: ExamReminderLogWhereInput
    /**
     * Limit how many ExamReminderLogs to update.
     */
    limit?: number
  }

  /**
   * ExamReminderLog updateManyAndReturn
   */
  export type ExamReminderLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * The data used to update ExamReminderLogs.
     */
    data: XOR<ExamReminderLogUpdateManyMutationInput, ExamReminderLogUncheckedUpdateManyInput>
    /**
     * Filter which ExamReminderLogs to update
     */
    where?: ExamReminderLogWhereInput
    /**
     * Limit how many ExamReminderLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamReminderLog upsert
   */
  export type ExamReminderLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamReminderLog to update in case it exists.
     */
    where: ExamReminderLogWhereUniqueInput
    /**
     * In case the ExamReminderLog found by the `where` argument doesn't exist, create a new ExamReminderLog with this data.
     */
    create: XOR<ExamReminderLogCreateInput, ExamReminderLogUncheckedCreateInput>
    /**
     * In case the ExamReminderLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamReminderLogUpdateInput, ExamReminderLogUncheckedUpdateInput>
  }

  /**
   * ExamReminderLog delete
   */
  export type ExamReminderLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
    /**
     * Filter which ExamReminderLog to delete.
     */
    where: ExamReminderLogWhereUniqueInput
  }

  /**
   * ExamReminderLog deleteMany
   */
  export type ExamReminderLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamReminderLogs to delete
     */
    where?: ExamReminderLogWhereInput
    /**
     * Limit how many ExamReminderLogs to delete.
     */
    limit?: number
  }

  /**
   * ExamReminderLog without action
   */
  export type ExamReminderLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamReminderLog
     */
    select?: ExamReminderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamReminderLog
     */
    omit?: ExamReminderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamReminderLogInclude<ExtArgs> | null
  }


  /**
   * Model BirthdayWishLog
   */

  export type AggregateBirthdayWishLog = {
    _count: BirthdayWishLogCountAggregateOutputType | null
    _avg: BirthdayWishLogAvgAggregateOutputType | null
    _sum: BirthdayWishLogSumAggregateOutputType | null
    _min: BirthdayWishLogMinAggregateOutputType | null
    _max: BirthdayWishLogMaxAggregateOutputType | null
  }

  export type BirthdayWishLogAvgAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type BirthdayWishLogSumAggregateOutputType = {
    id: number | null
    year: number | null
  }

  export type BirthdayWishLogMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    year: number | null
    sentAt: Date | null
  }

  export type BirthdayWishLogMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    year: number | null
    sentAt: Date | null
  }

  export type BirthdayWishLogCountAggregateOutputType = {
    id: number
    applicationId: number
    year: number
    sentAt: number
    _all: number
  }


  export type BirthdayWishLogAvgAggregateInputType = {
    id?: true
    year?: true
  }

  export type BirthdayWishLogSumAggregateInputType = {
    id?: true
    year?: true
  }

  export type BirthdayWishLogMinAggregateInputType = {
    id?: true
    applicationId?: true
    year?: true
    sentAt?: true
  }

  export type BirthdayWishLogMaxAggregateInputType = {
    id?: true
    applicationId?: true
    year?: true
    sentAt?: true
  }

  export type BirthdayWishLogCountAggregateInputType = {
    id?: true
    applicationId?: true
    year?: true
    sentAt?: true
    _all?: true
  }

  export type BirthdayWishLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BirthdayWishLog to aggregate.
     */
    where?: BirthdayWishLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirthdayWishLogs to fetch.
     */
    orderBy?: BirthdayWishLogOrderByWithRelationInput | BirthdayWishLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BirthdayWishLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirthdayWishLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirthdayWishLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BirthdayWishLogs
    **/
    _count?: true | BirthdayWishLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BirthdayWishLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BirthdayWishLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BirthdayWishLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BirthdayWishLogMaxAggregateInputType
  }

  export type GetBirthdayWishLogAggregateType<T extends BirthdayWishLogAggregateArgs> = {
        [P in keyof T & keyof AggregateBirthdayWishLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBirthdayWishLog[P]>
      : GetScalarType<T[P], AggregateBirthdayWishLog[P]>
  }




  export type BirthdayWishLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BirthdayWishLogWhereInput
    orderBy?: BirthdayWishLogOrderByWithAggregationInput | BirthdayWishLogOrderByWithAggregationInput[]
    by: BirthdayWishLogScalarFieldEnum[] | BirthdayWishLogScalarFieldEnum
    having?: BirthdayWishLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BirthdayWishLogCountAggregateInputType | true
    _avg?: BirthdayWishLogAvgAggregateInputType
    _sum?: BirthdayWishLogSumAggregateInputType
    _min?: BirthdayWishLogMinAggregateInputType
    _max?: BirthdayWishLogMaxAggregateInputType
  }

  export type BirthdayWishLogGroupByOutputType = {
    id: number
    applicationId: string
    year: number
    sentAt: Date
    _count: BirthdayWishLogCountAggregateOutputType | null
    _avg: BirthdayWishLogAvgAggregateOutputType | null
    _sum: BirthdayWishLogSumAggregateOutputType | null
    _min: BirthdayWishLogMinAggregateOutputType | null
    _max: BirthdayWishLogMaxAggregateOutputType | null
  }

  type GetBirthdayWishLogGroupByPayload<T extends BirthdayWishLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BirthdayWishLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BirthdayWishLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BirthdayWishLogGroupByOutputType[P]>
            : GetScalarType<T[P], BirthdayWishLogGroupByOutputType[P]>
        }
      >
    >


  export type BirthdayWishLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    year?: boolean
    sentAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["birthdayWishLog"]>

  export type BirthdayWishLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    year?: boolean
    sentAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["birthdayWishLog"]>

  export type BirthdayWishLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    year?: boolean
    sentAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["birthdayWishLog"]>

  export type BirthdayWishLogSelectScalar = {
    id?: boolean
    applicationId?: boolean
    year?: boolean
    sentAt?: boolean
  }

  export type BirthdayWishLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "year" | "sentAt", ExtArgs["result"]["birthdayWishLog"]>
  export type BirthdayWishLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type BirthdayWishLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type BirthdayWishLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }

  export type $BirthdayWishLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BirthdayWishLog"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      year: number
      sentAt: Date
    }, ExtArgs["result"]["birthdayWishLog"]>
    composites: {}
  }

  type BirthdayWishLogGetPayload<S extends boolean | null | undefined | BirthdayWishLogDefaultArgs> = $Result.GetResult<Prisma.$BirthdayWishLogPayload, S>

  type BirthdayWishLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BirthdayWishLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BirthdayWishLogCountAggregateInputType | true
    }

  export interface BirthdayWishLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BirthdayWishLog'], meta: { name: 'BirthdayWishLog' } }
    /**
     * Find zero or one BirthdayWishLog that matches the filter.
     * @param {BirthdayWishLogFindUniqueArgs} args - Arguments to find a BirthdayWishLog
     * @example
     * // Get one BirthdayWishLog
     * const birthdayWishLog = await prisma.birthdayWishLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BirthdayWishLogFindUniqueArgs>(args: SelectSubset<T, BirthdayWishLogFindUniqueArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BirthdayWishLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BirthdayWishLogFindUniqueOrThrowArgs} args - Arguments to find a BirthdayWishLog
     * @example
     * // Get one BirthdayWishLog
     * const birthdayWishLog = await prisma.birthdayWishLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BirthdayWishLogFindUniqueOrThrowArgs>(args: SelectSubset<T, BirthdayWishLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BirthdayWishLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayWishLogFindFirstArgs} args - Arguments to find a BirthdayWishLog
     * @example
     * // Get one BirthdayWishLog
     * const birthdayWishLog = await prisma.birthdayWishLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BirthdayWishLogFindFirstArgs>(args?: SelectSubset<T, BirthdayWishLogFindFirstArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BirthdayWishLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayWishLogFindFirstOrThrowArgs} args - Arguments to find a BirthdayWishLog
     * @example
     * // Get one BirthdayWishLog
     * const birthdayWishLog = await prisma.birthdayWishLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BirthdayWishLogFindFirstOrThrowArgs>(args?: SelectSubset<T, BirthdayWishLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BirthdayWishLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayWishLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BirthdayWishLogs
     * const birthdayWishLogs = await prisma.birthdayWishLog.findMany()
     * 
     * // Get first 10 BirthdayWishLogs
     * const birthdayWishLogs = await prisma.birthdayWishLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const birthdayWishLogWithIdOnly = await prisma.birthdayWishLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BirthdayWishLogFindManyArgs>(args?: SelectSubset<T, BirthdayWishLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BirthdayWishLog.
     * @param {BirthdayWishLogCreateArgs} args - Arguments to create a BirthdayWishLog.
     * @example
     * // Create one BirthdayWishLog
     * const BirthdayWishLog = await prisma.birthdayWishLog.create({
     *   data: {
     *     // ... data to create a BirthdayWishLog
     *   }
     * })
     * 
     */
    create<T extends BirthdayWishLogCreateArgs>(args: SelectSubset<T, BirthdayWishLogCreateArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BirthdayWishLogs.
     * @param {BirthdayWishLogCreateManyArgs} args - Arguments to create many BirthdayWishLogs.
     * @example
     * // Create many BirthdayWishLogs
     * const birthdayWishLog = await prisma.birthdayWishLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BirthdayWishLogCreateManyArgs>(args?: SelectSubset<T, BirthdayWishLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BirthdayWishLogs and returns the data saved in the database.
     * @param {BirthdayWishLogCreateManyAndReturnArgs} args - Arguments to create many BirthdayWishLogs.
     * @example
     * // Create many BirthdayWishLogs
     * const birthdayWishLog = await prisma.birthdayWishLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BirthdayWishLogs and only return the `id`
     * const birthdayWishLogWithIdOnly = await prisma.birthdayWishLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BirthdayWishLogCreateManyAndReturnArgs>(args?: SelectSubset<T, BirthdayWishLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BirthdayWishLog.
     * @param {BirthdayWishLogDeleteArgs} args - Arguments to delete one BirthdayWishLog.
     * @example
     * // Delete one BirthdayWishLog
     * const BirthdayWishLog = await prisma.birthdayWishLog.delete({
     *   where: {
     *     // ... filter to delete one BirthdayWishLog
     *   }
     * })
     * 
     */
    delete<T extends BirthdayWishLogDeleteArgs>(args: SelectSubset<T, BirthdayWishLogDeleteArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BirthdayWishLog.
     * @param {BirthdayWishLogUpdateArgs} args - Arguments to update one BirthdayWishLog.
     * @example
     * // Update one BirthdayWishLog
     * const birthdayWishLog = await prisma.birthdayWishLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BirthdayWishLogUpdateArgs>(args: SelectSubset<T, BirthdayWishLogUpdateArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BirthdayWishLogs.
     * @param {BirthdayWishLogDeleteManyArgs} args - Arguments to filter BirthdayWishLogs to delete.
     * @example
     * // Delete a few BirthdayWishLogs
     * const { count } = await prisma.birthdayWishLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BirthdayWishLogDeleteManyArgs>(args?: SelectSubset<T, BirthdayWishLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BirthdayWishLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayWishLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BirthdayWishLogs
     * const birthdayWishLog = await prisma.birthdayWishLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BirthdayWishLogUpdateManyArgs>(args: SelectSubset<T, BirthdayWishLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BirthdayWishLogs and returns the data updated in the database.
     * @param {BirthdayWishLogUpdateManyAndReturnArgs} args - Arguments to update many BirthdayWishLogs.
     * @example
     * // Update many BirthdayWishLogs
     * const birthdayWishLog = await prisma.birthdayWishLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BirthdayWishLogs and only return the `id`
     * const birthdayWishLogWithIdOnly = await prisma.birthdayWishLog.updateManyAndReturn({
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
    updateManyAndReturn<T extends BirthdayWishLogUpdateManyAndReturnArgs>(args: SelectSubset<T, BirthdayWishLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BirthdayWishLog.
     * @param {BirthdayWishLogUpsertArgs} args - Arguments to update or create a BirthdayWishLog.
     * @example
     * // Update or create a BirthdayWishLog
     * const birthdayWishLog = await prisma.birthdayWishLog.upsert({
     *   create: {
     *     // ... data to create a BirthdayWishLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BirthdayWishLog we want to update
     *   }
     * })
     */
    upsert<T extends BirthdayWishLogUpsertArgs>(args: SelectSubset<T, BirthdayWishLogUpsertArgs<ExtArgs>>): Prisma__BirthdayWishLogClient<$Result.GetResult<Prisma.$BirthdayWishLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BirthdayWishLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayWishLogCountArgs} args - Arguments to filter BirthdayWishLogs to count.
     * @example
     * // Count the number of BirthdayWishLogs
     * const count = await prisma.birthdayWishLog.count({
     *   where: {
     *     // ... the filter for the BirthdayWishLogs we want to count
     *   }
     * })
    **/
    count<T extends BirthdayWishLogCountArgs>(
      args?: Subset<T, BirthdayWishLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BirthdayWishLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BirthdayWishLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayWishLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BirthdayWishLogAggregateArgs>(args: Subset<T, BirthdayWishLogAggregateArgs>): Prisma.PrismaPromise<GetBirthdayWishLogAggregateType<T>>

    /**
     * Group by BirthdayWishLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BirthdayWishLogGroupByArgs} args - Group by arguments.
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
      T extends BirthdayWishLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BirthdayWishLogGroupByArgs['orderBy'] }
        : { orderBy?: BirthdayWishLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BirthdayWishLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBirthdayWishLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BirthdayWishLog model
   */
  readonly fields: BirthdayWishLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BirthdayWishLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BirthdayWishLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BirthdayWishLog model
   */
  interface BirthdayWishLogFieldRefs {
    readonly id: FieldRef<"BirthdayWishLog", 'Int'>
    readonly applicationId: FieldRef<"BirthdayWishLog", 'String'>
    readonly year: FieldRef<"BirthdayWishLog", 'Int'>
    readonly sentAt: FieldRef<"BirthdayWishLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BirthdayWishLog findUnique
   */
  export type BirthdayWishLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * Filter, which BirthdayWishLog to fetch.
     */
    where: BirthdayWishLogWhereUniqueInput
  }

  /**
   * BirthdayWishLog findUniqueOrThrow
   */
  export type BirthdayWishLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * Filter, which BirthdayWishLog to fetch.
     */
    where: BirthdayWishLogWhereUniqueInput
  }

  /**
   * BirthdayWishLog findFirst
   */
  export type BirthdayWishLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * Filter, which BirthdayWishLog to fetch.
     */
    where?: BirthdayWishLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirthdayWishLogs to fetch.
     */
    orderBy?: BirthdayWishLogOrderByWithRelationInput | BirthdayWishLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BirthdayWishLogs.
     */
    cursor?: BirthdayWishLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirthdayWishLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirthdayWishLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BirthdayWishLogs.
     */
    distinct?: BirthdayWishLogScalarFieldEnum | BirthdayWishLogScalarFieldEnum[]
  }

  /**
   * BirthdayWishLog findFirstOrThrow
   */
  export type BirthdayWishLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * Filter, which BirthdayWishLog to fetch.
     */
    where?: BirthdayWishLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirthdayWishLogs to fetch.
     */
    orderBy?: BirthdayWishLogOrderByWithRelationInput | BirthdayWishLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BirthdayWishLogs.
     */
    cursor?: BirthdayWishLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirthdayWishLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirthdayWishLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BirthdayWishLogs.
     */
    distinct?: BirthdayWishLogScalarFieldEnum | BirthdayWishLogScalarFieldEnum[]
  }

  /**
   * BirthdayWishLog findMany
   */
  export type BirthdayWishLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * Filter, which BirthdayWishLogs to fetch.
     */
    where?: BirthdayWishLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BirthdayWishLogs to fetch.
     */
    orderBy?: BirthdayWishLogOrderByWithRelationInput | BirthdayWishLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BirthdayWishLogs.
     */
    cursor?: BirthdayWishLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BirthdayWishLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BirthdayWishLogs.
     */
    skip?: number
    distinct?: BirthdayWishLogScalarFieldEnum | BirthdayWishLogScalarFieldEnum[]
  }

  /**
   * BirthdayWishLog create
   */
  export type BirthdayWishLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * The data needed to create a BirthdayWishLog.
     */
    data: XOR<BirthdayWishLogCreateInput, BirthdayWishLogUncheckedCreateInput>
  }

  /**
   * BirthdayWishLog createMany
   */
  export type BirthdayWishLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BirthdayWishLogs.
     */
    data: BirthdayWishLogCreateManyInput | BirthdayWishLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BirthdayWishLog createManyAndReturn
   */
  export type BirthdayWishLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * The data used to create many BirthdayWishLogs.
     */
    data: BirthdayWishLogCreateManyInput | BirthdayWishLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BirthdayWishLog update
   */
  export type BirthdayWishLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * The data needed to update a BirthdayWishLog.
     */
    data: XOR<BirthdayWishLogUpdateInput, BirthdayWishLogUncheckedUpdateInput>
    /**
     * Choose, which BirthdayWishLog to update.
     */
    where: BirthdayWishLogWhereUniqueInput
  }

  /**
   * BirthdayWishLog updateMany
   */
  export type BirthdayWishLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BirthdayWishLogs.
     */
    data: XOR<BirthdayWishLogUpdateManyMutationInput, BirthdayWishLogUncheckedUpdateManyInput>
    /**
     * Filter which BirthdayWishLogs to update
     */
    where?: BirthdayWishLogWhereInput
    /**
     * Limit how many BirthdayWishLogs to update.
     */
    limit?: number
  }

  /**
   * BirthdayWishLog updateManyAndReturn
   */
  export type BirthdayWishLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * The data used to update BirthdayWishLogs.
     */
    data: XOR<BirthdayWishLogUpdateManyMutationInput, BirthdayWishLogUncheckedUpdateManyInput>
    /**
     * Filter which BirthdayWishLogs to update
     */
    where?: BirthdayWishLogWhereInput
    /**
     * Limit how many BirthdayWishLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BirthdayWishLog upsert
   */
  export type BirthdayWishLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * The filter to search for the BirthdayWishLog to update in case it exists.
     */
    where: BirthdayWishLogWhereUniqueInput
    /**
     * In case the BirthdayWishLog found by the `where` argument doesn't exist, create a new BirthdayWishLog with this data.
     */
    create: XOR<BirthdayWishLogCreateInput, BirthdayWishLogUncheckedCreateInput>
    /**
     * In case the BirthdayWishLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BirthdayWishLogUpdateInput, BirthdayWishLogUncheckedUpdateInput>
  }

  /**
   * BirthdayWishLog delete
   */
  export type BirthdayWishLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
    /**
     * Filter which BirthdayWishLog to delete.
     */
    where: BirthdayWishLogWhereUniqueInput
  }

  /**
   * BirthdayWishLog deleteMany
   */
  export type BirthdayWishLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BirthdayWishLogs to delete
     */
    where?: BirthdayWishLogWhereInput
    /**
     * Limit how many BirthdayWishLogs to delete.
     */
    limit?: number
  }

  /**
   * BirthdayWishLog without action
   */
  export type BirthdayWishLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BirthdayWishLog
     */
    select?: BirthdayWishLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BirthdayWishLog
     */
    omit?: BirthdayWishLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BirthdayWishLogInclude<ExtArgs> | null
  }


  /**
   * Model ApplicationVehicleClass
   */

  export type AggregateApplicationVehicleClass = {
    _count: ApplicationVehicleClassCountAggregateOutputType | null
    _avg: ApplicationVehicleClassAvgAggregateOutputType | null
    _sum: ApplicationVehicleClassSumAggregateOutputType | null
    _min: ApplicationVehicleClassMinAggregateOutputType | null
    _max: ApplicationVehicleClassMaxAggregateOutputType | null
  }

  export type ApplicationVehicleClassAvgAggregateOutputType = {
    id: number | null
    vehicleClassId: number | null
  }

  export type ApplicationVehicleClassSumAggregateOutputType = {
    id: number | null
    vehicleClassId: number | null
  }

  export type ApplicationVehicleClassMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    vehicleClassId: number | null
  }

  export type ApplicationVehicleClassMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    vehicleClassId: number | null
  }

  export type ApplicationVehicleClassCountAggregateOutputType = {
    id: number
    applicationId: number
    vehicleClassId: number
    _all: number
  }


  export type ApplicationVehicleClassAvgAggregateInputType = {
    id?: true
    vehicleClassId?: true
  }

  export type ApplicationVehicleClassSumAggregateInputType = {
    id?: true
    vehicleClassId?: true
  }

  export type ApplicationVehicleClassMinAggregateInputType = {
    id?: true
    applicationId?: true
    vehicleClassId?: true
  }

  export type ApplicationVehicleClassMaxAggregateInputType = {
    id?: true
    applicationId?: true
    vehicleClassId?: true
  }

  export type ApplicationVehicleClassCountAggregateInputType = {
    id?: true
    applicationId?: true
    vehicleClassId?: true
    _all?: true
  }

  export type ApplicationVehicleClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationVehicleClass to aggregate.
     */
    where?: ApplicationVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationVehicleClasses to fetch.
     */
    orderBy?: ApplicationVehicleClassOrderByWithRelationInput | ApplicationVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationVehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApplicationVehicleClasses
    **/
    _count?: true | ApplicationVehicleClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationVehicleClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationVehicleClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationVehicleClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationVehicleClassMaxAggregateInputType
  }

  export type GetApplicationVehicleClassAggregateType<T extends ApplicationVehicleClassAggregateArgs> = {
        [P in keyof T & keyof AggregateApplicationVehicleClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicationVehicleClass[P]>
      : GetScalarType<T[P], AggregateApplicationVehicleClass[P]>
  }




  export type ApplicationVehicleClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationVehicleClassWhereInput
    orderBy?: ApplicationVehicleClassOrderByWithAggregationInput | ApplicationVehicleClassOrderByWithAggregationInput[]
    by: ApplicationVehicleClassScalarFieldEnum[] | ApplicationVehicleClassScalarFieldEnum
    having?: ApplicationVehicleClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationVehicleClassCountAggregateInputType | true
    _avg?: ApplicationVehicleClassAvgAggregateInputType
    _sum?: ApplicationVehicleClassSumAggregateInputType
    _min?: ApplicationVehicleClassMinAggregateInputType
    _max?: ApplicationVehicleClassMaxAggregateInputType
  }

  export type ApplicationVehicleClassGroupByOutputType = {
    id: number
    applicationId: string
    vehicleClassId: number
    _count: ApplicationVehicleClassCountAggregateOutputType | null
    _avg: ApplicationVehicleClassAvgAggregateOutputType | null
    _sum: ApplicationVehicleClassSumAggregateOutputType | null
    _min: ApplicationVehicleClassMinAggregateOutputType | null
    _max: ApplicationVehicleClassMaxAggregateOutputType | null
  }

  type GetApplicationVehicleClassGroupByPayload<T extends ApplicationVehicleClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationVehicleClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationVehicleClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationVehicleClassGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationVehicleClassGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationVehicleClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationVehicleClass"]>

  export type ApplicationVehicleClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationVehicleClass"]>

  export type ApplicationVehicleClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["applicationVehicleClass"]>

  export type ApplicationVehicleClassSelectScalar = {
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
  }

  export type ApplicationVehicleClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "vehicleClassId", ExtArgs["result"]["applicationVehicleClass"]>
  export type ApplicationVehicleClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }
  export type ApplicationVehicleClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }
  export type ApplicationVehicleClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }

  export type $ApplicationVehicleClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApplicationVehicleClass"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
      vehicleClass: Prisma.$VehicleClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      vehicleClassId: number
    }, ExtArgs["result"]["applicationVehicleClass"]>
    composites: {}
  }

  type ApplicationVehicleClassGetPayload<S extends boolean | null | undefined | ApplicationVehicleClassDefaultArgs> = $Result.GetResult<Prisma.$ApplicationVehicleClassPayload, S>

  type ApplicationVehicleClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationVehicleClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationVehicleClassCountAggregateInputType | true
    }

  export interface ApplicationVehicleClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApplicationVehicleClass'], meta: { name: 'ApplicationVehicleClass' } }
    /**
     * Find zero or one ApplicationVehicleClass that matches the filter.
     * @param {ApplicationVehicleClassFindUniqueArgs} args - Arguments to find a ApplicationVehicleClass
     * @example
     * // Get one ApplicationVehicleClass
     * const applicationVehicleClass = await prisma.applicationVehicleClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationVehicleClassFindUniqueArgs>(args: SelectSubset<T, ApplicationVehicleClassFindUniqueArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApplicationVehicleClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationVehicleClassFindUniqueOrThrowArgs} args - Arguments to find a ApplicationVehicleClass
     * @example
     * // Get one ApplicationVehicleClass
     * const applicationVehicleClass = await prisma.applicationVehicleClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationVehicleClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationVehicleClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationVehicleClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationVehicleClassFindFirstArgs} args - Arguments to find a ApplicationVehicleClass
     * @example
     * // Get one ApplicationVehicleClass
     * const applicationVehicleClass = await prisma.applicationVehicleClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationVehicleClassFindFirstArgs>(args?: SelectSubset<T, ApplicationVehicleClassFindFirstArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApplicationVehicleClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationVehicleClassFindFirstOrThrowArgs} args - Arguments to find a ApplicationVehicleClass
     * @example
     * // Get one ApplicationVehicleClass
     * const applicationVehicleClass = await prisma.applicationVehicleClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationVehicleClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationVehicleClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApplicationVehicleClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationVehicleClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApplicationVehicleClasses
     * const applicationVehicleClasses = await prisma.applicationVehicleClass.findMany()
     * 
     * // Get first 10 ApplicationVehicleClasses
     * const applicationVehicleClasses = await prisma.applicationVehicleClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationVehicleClassWithIdOnly = await prisma.applicationVehicleClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationVehicleClassFindManyArgs>(args?: SelectSubset<T, ApplicationVehicleClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApplicationVehicleClass.
     * @param {ApplicationVehicleClassCreateArgs} args - Arguments to create a ApplicationVehicleClass.
     * @example
     * // Create one ApplicationVehicleClass
     * const ApplicationVehicleClass = await prisma.applicationVehicleClass.create({
     *   data: {
     *     // ... data to create a ApplicationVehicleClass
     *   }
     * })
     * 
     */
    create<T extends ApplicationVehicleClassCreateArgs>(args: SelectSubset<T, ApplicationVehicleClassCreateArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApplicationVehicleClasses.
     * @param {ApplicationVehicleClassCreateManyArgs} args - Arguments to create many ApplicationVehicleClasses.
     * @example
     * // Create many ApplicationVehicleClasses
     * const applicationVehicleClass = await prisma.applicationVehicleClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationVehicleClassCreateManyArgs>(args?: SelectSubset<T, ApplicationVehicleClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApplicationVehicleClasses and returns the data saved in the database.
     * @param {ApplicationVehicleClassCreateManyAndReturnArgs} args - Arguments to create many ApplicationVehicleClasses.
     * @example
     * // Create many ApplicationVehicleClasses
     * const applicationVehicleClass = await prisma.applicationVehicleClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApplicationVehicleClasses and only return the `id`
     * const applicationVehicleClassWithIdOnly = await prisma.applicationVehicleClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationVehicleClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationVehicleClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApplicationVehicleClass.
     * @param {ApplicationVehicleClassDeleteArgs} args - Arguments to delete one ApplicationVehicleClass.
     * @example
     * // Delete one ApplicationVehicleClass
     * const ApplicationVehicleClass = await prisma.applicationVehicleClass.delete({
     *   where: {
     *     // ... filter to delete one ApplicationVehicleClass
     *   }
     * })
     * 
     */
    delete<T extends ApplicationVehicleClassDeleteArgs>(args: SelectSubset<T, ApplicationVehicleClassDeleteArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApplicationVehicleClass.
     * @param {ApplicationVehicleClassUpdateArgs} args - Arguments to update one ApplicationVehicleClass.
     * @example
     * // Update one ApplicationVehicleClass
     * const applicationVehicleClass = await prisma.applicationVehicleClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationVehicleClassUpdateArgs>(args: SelectSubset<T, ApplicationVehicleClassUpdateArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApplicationVehicleClasses.
     * @param {ApplicationVehicleClassDeleteManyArgs} args - Arguments to filter ApplicationVehicleClasses to delete.
     * @example
     * // Delete a few ApplicationVehicleClasses
     * const { count } = await prisma.applicationVehicleClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationVehicleClassDeleteManyArgs>(args?: SelectSubset<T, ApplicationVehicleClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationVehicleClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationVehicleClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApplicationVehicleClasses
     * const applicationVehicleClass = await prisma.applicationVehicleClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationVehicleClassUpdateManyArgs>(args: SelectSubset<T, ApplicationVehicleClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApplicationVehicleClasses and returns the data updated in the database.
     * @param {ApplicationVehicleClassUpdateManyAndReturnArgs} args - Arguments to update many ApplicationVehicleClasses.
     * @example
     * // Update many ApplicationVehicleClasses
     * const applicationVehicleClass = await prisma.applicationVehicleClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApplicationVehicleClasses and only return the `id`
     * const applicationVehicleClassWithIdOnly = await prisma.applicationVehicleClass.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationVehicleClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationVehicleClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApplicationVehicleClass.
     * @param {ApplicationVehicleClassUpsertArgs} args - Arguments to update or create a ApplicationVehicleClass.
     * @example
     * // Update or create a ApplicationVehicleClass
     * const applicationVehicleClass = await prisma.applicationVehicleClass.upsert({
     *   create: {
     *     // ... data to create a ApplicationVehicleClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApplicationVehicleClass we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationVehicleClassUpsertArgs>(args: SelectSubset<T, ApplicationVehicleClassUpsertArgs<ExtArgs>>): Prisma__ApplicationVehicleClassClient<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApplicationVehicleClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationVehicleClassCountArgs} args - Arguments to filter ApplicationVehicleClasses to count.
     * @example
     * // Count the number of ApplicationVehicleClasses
     * const count = await prisma.applicationVehicleClass.count({
     *   where: {
     *     // ... the filter for the ApplicationVehicleClasses we want to count
     *   }
     * })
    **/
    count<T extends ApplicationVehicleClassCountArgs>(
      args?: Subset<T, ApplicationVehicleClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationVehicleClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApplicationVehicleClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationVehicleClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationVehicleClassAggregateArgs>(args: Subset<T, ApplicationVehicleClassAggregateArgs>): Prisma.PrismaPromise<GetApplicationVehicleClassAggregateType<T>>

    /**
     * Group by ApplicationVehicleClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationVehicleClassGroupByArgs} args - Group by arguments.
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
      T extends ApplicationVehicleClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationVehicleClassGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationVehicleClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationVehicleClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationVehicleClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApplicationVehicleClass model
   */
  readonly fields: ApplicationVehicleClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApplicationVehicleClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationVehicleClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicleClass<T extends VehicleClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleClassDefaultArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ApplicationVehicleClass model
   */
  interface ApplicationVehicleClassFieldRefs {
    readonly id: FieldRef<"ApplicationVehicleClass", 'Int'>
    readonly applicationId: FieldRef<"ApplicationVehicleClass", 'String'>
    readonly vehicleClassId: FieldRef<"ApplicationVehicleClass", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ApplicationVehicleClass findUnique
   */
  export type ApplicationVehicleClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationVehicleClass to fetch.
     */
    where: ApplicationVehicleClassWhereUniqueInput
  }

  /**
   * ApplicationVehicleClass findUniqueOrThrow
   */
  export type ApplicationVehicleClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationVehicleClass to fetch.
     */
    where: ApplicationVehicleClassWhereUniqueInput
  }

  /**
   * ApplicationVehicleClass findFirst
   */
  export type ApplicationVehicleClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationVehicleClass to fetch.
     */
    where?: ApplicationVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationVehicleClasses to fetch.
     */
    orderBy?: ApplicationVehicleClassOrderByWithRelationInput | ApplicationVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationVehicleClasses.
     */
    cursor?: ApplicationVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationVehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationVehicleClasses.
     */
    distinct?: ApplicationVehicleClassScalarFieldEnum | ApplicationVehicleClassScalarFieldEnum[]
  }

  /**
   * ApplicationVehicleClass findFirstOrThrow
   */
  export type ApplicationVehicleClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationVehicleClass to fetch.
     */
    where?: ApplicationVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationVehicleClasses to fetch.
     */
    orderBy?: ApplicationVehicleClassOrderByWithRelationInput | ApplicationVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApplicationVehicleClasses.
     */
    cursor?: ApplicationVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationVehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApplicationVehicleClasses.
     */
    distinct?: ApplicationVehicleClassScalarFieldEnum | ApplicationVehicleClassScalarFieldEnum[]
  }

  /**
   * ApplicationVehicleClass findMany
   */
  export type ApplicationVehicleClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ApplicationVehicleClasses to fetch.
     */
    where?: ApplicationVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApplicationVehicleClasses to fetch.
     */
    orderBy?: ApplicationVehicleClassOrderByWithRelationInput | ApplicationVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApplicationVehicleClasses.
     */
    cursor?: ApplicationVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApplicationVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApplicationVehicleClasses.
     */
    skip?: number
    distinct?: ApplicationVehicleClassScalarFieldEnum | ApplicationVehicleClassScalarFieldEnum[]
  }

  /**
   * ApplicationVehicleClass create
   */
  export type ApplicationVehicleClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * The data needed to create a ApplicationVehicleClass.
     */
    data: XOR<ApplicationVehicleClassCreateInput, ApplicationVehicleClassUncheckedCreateInput>
  }

  /**
   * ApplicationVehicleClass createMany
   */
  export type ApplicationVehicleClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApplicationVehicleClasses.
     */
    data: ApplicationVehicleClassCreateManyInput | ApplicationVehicleClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApplicationVehicleClass createManyAndReturn
   */
  export type ApplicationVehicleClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * The data used to create many ApplicationVehicleClasses.
     */
    data: ApplicationVehicleClassCreateManyInput | ApplicationVehicleClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationVehicleClass update
   */
  export type ApplicationVehicleClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * The data needed to update a ApplicationVehicleClass.
     */
    data: XOR<ApplicationVehicleClassUpdateInput, ApplicationVehicleClassUncheckedUpdateInput>
    /**
     * Choose, which ApplicationVehicleClass to update.
     */
    where: ApplicationVehicleClassWhereUniqueInput
  }

  /**
   * ApplicationVehicleClass updateMany
   */
  export type ApplicationVehicleClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApplicationVehicleClasses.
     */
    data: XOR<ApplicationVehicleClassUpdateManyMutationInput, ApplicationVehicleClassUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationVehicleClasses to update
     */
    where?: ApplicationVehicleClassWhereInput
    /**
     * Limit how many ApplicationVehicleClasses to update.
     */
    limit?: number
  }

  /**
   * ApplicationVehicleClass updateManyAndReturn
   */
  export type ApplicationVehicleClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * The data used to update ApplicationVehicleClasses.
     */
    data: XOR<ApplicationVehicleClassUpdateManyMutationInput, ApplicationVehicleClassUncheckedUpdateManyInput>
    /**
     * Filter which ApplicationVehicleClasses to update
     */
    where?: ApplicationVehicleClassWhereInput
    /**
     * Limit how many ApplicationVehicleClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApplicationVehicleClass upsert
   */
  export type ApplicationVehicleClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * The filter to search for the ApplicationVehicleClass to update in case it exists.
     */
    where: ApplicationVehicleClassWhereUniqueInput
    /**
     * In case the ApplicationVehicleClass found by the `where` argument doesn't exist, create a new ApplicationVehicleClass with this data.
     */
    create: XOR<ApplicationVehicleClassCreateInput, ApplicationVehicleClassUncheckedCreateInput>
    /**
     * In case the ApplicationVehicleClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationVehicleClassUpdateInput, ApplicationVehicleClassUncheckedUpdateInput>
  }

  /**
   * ApplicationVehicleClass delete
   */
  export type ApplicationVehicleClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    /**
     * Filter which ApplicationVehicleClass to delete.
     */
    where: ApplicationVehicleClassWhereUniqueInput
  }

  /**
   * ApplicationVehicleClass deleteMany
   */
  export type ApplicationVehicleClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApplicationVehicleClasses to delete
     */
    where?: ApplicationVehicleClassWhereInput
    /**
     * Limit how many ApplicationVehicleClasses to delete.
     */
    limit?: number
  }

  /**
   * ApplicationVehicleClass without action
   */
  export type ApplicationVehicleClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
  }


  /**
   * Model VehicleClass
   */

  export type AggregateVehicleClass = {
    _count: VehicleClassCountAggregateOutputType | null
    _avg: VehicleClassAvgAggregateOutputType | null
    _sum: VehicleClassSumAggregateOutputType | null
    _min: VehicleClassMinAggregateOutputType | null
    _max: VehicleClassMaxAggregateOutputType | null
  }

  export type VehicleClassAvgAggregateOutputType = {
    id: number | null
  }

  export type VehicleClassSumAggregateOutputType = {
    id: number | null
  }

  export type VehicleClassMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    createdAt: Date | null
  }

  export type VehicleClassMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    createdAt: Date | null
  }

  export type VehicleClassCountAggregateOutputType = {
    id: number
    code: number
    name: number
    createdAt: number
    _all: number
  }


  export type VehicleClassAvgAggregateInputType = {
    id?: true
  }

  export type VehicleClassSumAggregateInputType = {
    id?: true
  }

  export type VehicleClassMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
  }

  export type VehicleClassMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
  }

  export type VehicleClassCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type VehicleClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleClass to aggregate.
     */
    where?: VehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleClasses to fetch.
     */
    orderBy?: VehicleClassOrderByWithRelationInput | VehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleClasses
    **/
    _count?: true | VehicleClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleClassMaxAggregateInputType
  }

  export type GetVehicleClassAggregateType<T extends VehicleClassAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleClass[P]>
      : GetScalarType<T[P], AggregateVehicleClass[P]>
  }




  export type VehicleClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleClassWhereInput
    orderBy?: VehicleClassOrderByWithAggregationInput | VehicleClassOrderByWithAggregationInput[]
    by: VehicleClassScalarFieldEnum[] | VehicleClassScalarFieldEnum
    having?: VehicleClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleClassCountAggregateInputType | true
    _avg?: VehicleClassAvgAggregateInputType
    _sum?: VehicleClassSumAggregateInputType
    _min?: VehicleClassMinAggregateInputType
    _max?: VehicleClassMaxAggregateInputType
  }

  export type VehicleClassGroupByOutputType = {
    id: number
    code: string
    name: string
    createdAt: Date
    _count: VehicleClassCountAggregateOutputType | null
    _avg: VehicleClassAvgAggregateOutputType | null
    _sum: VehicleClassSumAggregateOutputType | null
    _min: VehicleClassMinAggregateOutputType | null
    _max: VehicleClassMaxAggregateOutputType | null
  }

  type GetVehicleClassGroupByPayload<T extends VehicleClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleClassGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleClassGroupByOutputType[P]>
        }
      >
    >


  export type VehicleClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    applications?: boolean | VehicleClass$applicationsArgs<ExtArgs>
    existingLicenses?: boolean | VehicleClass$existingLicensesArgs<ExtArgs>
    drivingExamResults?: boolean | VehicleClass$drivingExamResultsArgs<ExtArgs>
    examAttempts?: boolean | VehicleClass$examAttemptsArgs<ExtArgs>
    _count?: boolean | VehicleClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicleClass"]>

  export type VehicleClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehicleClass"]>

  export type VehicleClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehicleClass"]>

  export type VehicleClassSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type VehicleClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "createdAt", ExtArgs["result"]["vehicleClass"]>
  export type VehicleClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | VehicleClass$applicationsArgs<ExtArgs>
    existingLicenses?: boolean | VehicleClass$existingLicensesArgs<ExtArgs>
    drivingExamResults?: boolean | VehicleClass$drivingExamResultsArgs<ExtArgs>
    examAttempts?: boolean | VehicleClass$examAttemptsArgs<ExtArgs>
    _count?: boolean | VehicleClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehicleClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehicleClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VehicleClass"
    objects: {
      applications: Prisma.$ApplicationVehicleClassPayload<ExtArgs>[]
      existingLicenses: Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>[]
      drivingExamResults: Prisma.$DrivingExamResultPayload<ExtArgs>[]
      examAttempts: Prisma.$ExamAttemptPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["vehicleClass"]>
    composites: {}
  }

  type VehicleClassGetPayload<S extends boolean | null | undefined | VehicleClassDefaultArgs> = $Result.GetResult<Prisma.$VehicleClassPayload, S>

  type VehicleClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleClassCountAggregateInputType | true
    }

  export interface VehicleClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VehicleClass'], meta: { name: 'VehicleClass' } }
    /**
     * Find zero or one VehicleClass that matches the filter.
     * @param {VehicleClassFindUniqueArgs} args - Arguments to find a VehicleClass
     * @example
     * // Get one VehicleClass
     * const vehicleClass = await prisma.vehicleClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleClassFindUniqueArgs>(args: SelectSubset<T, VehicleClassFindUniqueArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VehicleClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleClassFindUniqueOrThrowArgs} args - Arguments to find a VehicleClass
     * @example
     * // Get one VehicleClass
     * const vehicleClass = await prisma.vehicleClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleClassFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleClassFindFirstArgs} args - Arguments to find a VehicleClass
     * @example
     * // Get one VehicleClass
     * const vehicleClass = await prisma.vehicleClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleClassFindFirstArgs>(args?: SelectSubset<T, VehicleClassFindFirstArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VehicleClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleClassFindFirstOrThrowArgs} args - Arguments to find a VehicleClass
     * @example
     * // Get one VehicleClass
     * const vehicleClass = await prisma.vehicleClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleClassFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VehicleClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleClasses
     * const vehicleClasses = await prisma.vehicleClass.findMany()
     * 
     * // Get first 10 VehicleClasses
     * const vehicleClasses = await prisma.vehicleClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleClassWithIdOnly = await prisma.vehicleClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleClassFindManyArgs>(args?: SelectSubset<T, VehicleClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VehicleClass.
     * @param {VehicleClassCreateArgs} args - Arguments to create a VehicleClass.
     * @example
     * // Create one VehicleClass
     * const VehicleClass = await prisma.vehicleClass.create({
     *   data: {
     *     // ... data to create a VehicleClass
     *   }
     * })
     * 
     */
    create<T extends VehicleClassCreateArgs>(args: SelectSubset<T, VehicleClassCreateArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VehicleClasses.
     * @param {VehicleClassCreateManyArgs} args - Arguments to create many VehicleClasses.
     * @example
     * // Create many VehicleClasses
     * const vehicleClass = await prisma.vehicleClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleClassCreateManyArgs>(args?: SelectSubset<T, VehicleClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VehicleClasses and returns the data saved in the database.
     * @param {VehicleClassCreateManyAndReturnArgs} args - Arguments to create many VehicleClasses.
     * @example
     * // Create many VehicleClasses
     * const vehicleClass = await prisma.vehicleClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VehicleClasses and only return the `id`
     * const vehicleClassWithIdOnly = await prisma.vehicleClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleClassCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VehicleClass.
     * @param {VehicleClassDeleteArgs} args - Arguments to delete one VehicleClass.
     * @example
     * // Delete one VehicleClass
     * const VehicleClass = await prisma.vehicleClass.delete({
     *   where: {
     *     // ... filter to delete one VehicleClass
     *   }
     * })
     * 
     */
    delete<T extends VehicleClassDeleteArgs>(args: SelectSubset<T, VehicleClassDeleteArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VehicleClass.
     * @param {VehicleClassUpdateArgs} args - Arguments to update one VehicleClass.
     * @example
     * // Update one VehicleClass
     * const vehicleClass = await prisma.vehicleClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleClassUpdateArgs>(args: SelectSubset<T, VehicleClassUpdateArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VehicleClasses.
     * @param {VehicleClassDeleteManyArgs} args - Arguments to filter VehicleClasses to delete.
     * @example
     * // Delete a few VehicleClasses
     * const { count } = await prisma.vehicleClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleClassDeleteManyArgs>(args?: SelectSubset<T, VehicleClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleClasses
     * const vehicleClass = await prisma.vehicleClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleClassUpdateManyArgs>(args: SelectSubset<T, VehicleClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleClasses and returns the data updated in the database.
     * @param {VehicleClassUpdateManyAndReturnArgs} args - Arguments to update many VehicleClasses.
     * @example
     * // Update many VehicleClasses
     * const vehicleClass = await prisma.vehicleClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VehicleClasses and only return the `id`
     * const vehicleClassWithIdOnly = await prisma.vehicleClass.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleClassUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VehicleClass.
     * @param {VehicleClassUpsertArgs} args - Arguments to update or create a VehicleClass.
     * @example
     * // Update or create a VehicleClass
     * const vehicleClass = await prisma.vehicleClass.upsert({
     *   create: {
     *     // ... data to create a VehicleClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleClass we want to update
     *   }
     * })
     */
    upsert<T extends VehicleClassUpsertArgs>(args: SelectSubset<T, VehicleClassUpsertArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VehicleClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleClassCountArgs} args - Arguments to filter VehicleClasses to count.
     * @example
     * // Count the number of VehicleClasses
     * const count = await prisma.vehicleClass.count({
     *   where: {
     *     // ... the filter for the VehicleClasses we want to count
     *   }
     * })
    **/
    count<T extends VehicleClassCountArgs>(
      args?: Subset<T, VehicleClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleClassAggregateArgs>(args: Subset<T, VehicleClassAggregateArgs>): Prisma.PrismaPromise<GetVehicleClassAggregateType<T>>

    /**
     * Group by VehicleClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleClassGroupByArgs} args - Group by arguments.
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
      T extends VehicleClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleClassGroupByArgs['orderBy'] }
        : { orderBy?: VehicleClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VehicleClass model
   */
  readonly fields: VehicleClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    applications<T extends VehicleClass$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, VehicleClass$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationVehicleClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    existingLicenses<T extends VehicleClass$existingLicensesArgs<ExtArgs> = {}>(args?: Subset<T, VehicleClass$existingLicensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drivingExamResults<T extends VehicleClass$drivingExamResultsArgs<ExtArgs> = {}>(args?: Subset<T, VehicleClass$drivingExamResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examAttempts<T extends VehicleClass$examAttemptsArgs<ExtArgs> = {}>(args?: Subset<T, VehicleClass$examAttemptsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VehicleClass model
   */
  interface VehicleClassFieldRefs {
    readonly id: FieldRef<"VehicleClass", 'Int'>
    readonly code: FieldRef<"VehicleClass", 'String'>
    readonly name: FieldRef<"VehicleClass", 'String'>
    readonly createdAt: FieldRef<"VehicleClass", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VehicleClass findUnique
   */
  export type VehicleClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which VehicleClass to fetch.
     */
    where: VehicleClassWhereUniqueInput
  }

  /**
   * VehicleClass findUniqueOrThrow
   */
  export type VehicleClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which VehicleClass to fetch.
     */
    where: VehicleClassWhereUniqueInput
  }

  /**
   * VehicleClass findFirst
   */
  export type VehicleClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which VehicleClass to fetch.
     */
    where?: VehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleClasses to fetch.
     */
    orderBy?: VehicleClassOrderByWithRelationInput | VehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleClasses.
     */
    cursor?: VehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleClasses.
     */
    distinct?: VehicleClassScalarFieldEnum | VehicleClassScalarFieldEnum[]
  }

  /**
   * VehicleClass findFirstOrThrow
   */
  export type VehicleClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which VehicleClass to fetch.
     */
    where?: VehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleClasses to fetch.
     */
    orderBy?: VehicleClassOrderByWithRelationInput | VehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleClasses.
     */
    cursor?: VehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleClasses.
     */
    distinct?: VehicleClassScalarFieldEnum | VehicleClassScalarFieldEnum[]
  }

  /**
   * VehicleClass findMany
   */
  export type VehicleClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which VehicleClasses to fetch.
     */
    where?: VehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleClasses to fetch.
     */
    orderBy?: VehicleClassOrderByWithRelationInput | VehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleClasses.
     */
    cursor?: VehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleClasses.
     */
    skip?: number
    distinct?: VehicleClassScalarFieldEnum | VehicleClassScalarFieldEnum[]
  }

  /**
   * VehicleClass create
   */
  export type VehicleClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * The data needed to create a VehicleClass.
     */
    data: XOR<VehicleClassCreateInput, VehicleClassUncheckedCreateInput>
  }

  /**
   * VehicleClass createMany
   */
  export type VehicleClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VehicleClasses.
     */
    data: VehicleClassCreateManyInput | VehicleClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleClass createManyAndReturn
   */
  export type VehicleClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * The data used to create many VehicleClasses.
     */
    data: VehicleClassCreateManyInput | VehicleClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VehicleClass update
   */
  export type VehicleClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * The data needed to update a VehicleClass.
     */
    data: XOR<VehicleClassUpdateInput, VehicleClassUncheckedUpdateInput>
    /**
     * Choose, which VehicleClass to update.
     */
    where: VehicleClassWhereUniqueInput
  }

  /**
   * VehicleClass updateMany
   */
  export type VehicleClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VehicleClasses.
     */
    data: XOR<VehicleClassUpdateManyMutationInput, VehicleClassUncheckedUpdateManyInput>
    /**
     * Filter which VehicleClasses to update
     */
    where?: VehicleClassWhereInput
    /**
     * Limit how many VehicleClasses to update.
     */
    limit?: number
  }

  /**
   * VehicleClass updateManyAndReturn
   */
  export type VehicleClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * The data used to update VehicleClasses.
     */
    data: XOR<VehicleClassUpdateManyMutationInput, VehicleClassUncheckedUpdateManyInput>
    /**
     * Filter which VehicleClasses to update
     */
    where?: VehicleClassWhereInput
    /**
     * Limit how many VehicleClasses to update.
     */
    limit?: number
  }

  /**
   * VehicleClass upsert
   */
  export type VehicleClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * The filter to search for the VehicleClass to update in case it exists.
     */
    where: VehicleClassWhereUniqueInput
    /**
     * In case the VehicleClass found by the `where` argument doesn't exist, create a new VehicleClass with this data.
     */
    create: XOR<VehicleClassCreateInput, VehicleClassUncheckedCreateInput>
    /**
     * In case the VehicleClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleClassUpdateInput, VehicleClassUncheckedUpdateInput>
  }

  /**
   * VehicleClass delete
   */
  export type VehicleClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    /**
     * Filter which VehicleClass to delete.
     */
    where: VehicleClassWhereUniqueInput
  }

  /**
   * VehicleClass deleteMany
   */
  export type VehicleClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VehicleClasses to delete
     */
    where?: VehicleClassWhereInput
    /**
     * Limit how many VehicleClasses to delete.
     */
    limit?: number
  }

  /**
   * VehicleClass.applications
   */
  export type VehicleClass$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApplicationVehicleClass
     */
    select?: ApplicationVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApplicationVehicleClass
     */
    omit?: ApplicationVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationVehicleClassInclude<ExtArgs> | null
    where?: ApplicationVehicleClassWhereInput
    orderBy?: ApplicationVehicleClassOrderByWithRelationInput | ApplicationVehicleClassOrderByWithRelationInput[]
    cursor?: ApplicationVehicleClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationVehicleClassScalarFieldEnum | ApplicationVehicleClassScalarFieldEnum[]
  }

  /**
   * VehicleClass.existingLicenses
   */
  export type VehicleClass$existingLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    where?: ExistingLicenseVehicleClassWhereInput
    orderBy?: ExistingLicenseVehicleClassOrderByWithRelationInput | ExistingLicenseVehicleClassOrderByWithRelationInput[]
    cursor?: ExistingLicenseVehicleClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExistingLicenseVehicleClassScalarFieldEnum | ExistingLicenseVehicleClassScalarFieldEnum[]
  }

  /**
   * VehicleClass.drivingExamResults
   */
  export type VehicleClass$drivingExamResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    where?: DrivingExamResultWhereInput
    orderBy?: DrivingExamResultOrderByWithRelationInput | DrivingExamResultOrderByWithRelationInput[]
    cursor?: DrivingExamResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DrivingExamResultScalarFieldEnum | DrivingExamResultScalarFieldEnum[]
  }

  /**
   * VehicleClass.examAttempts
   */
  export type VehicleClass$examAttemptsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    cursor?: ExamAttemptWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * VehicleClass without action
   */
  export type VehicleClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
  }


  /**
   * Model ExistingLicense
   */

  export type AggregateExistingLicense = {
    _count: ExistingLicenseCountAggregateOutputType | null
    _avg: ExistingLicenseAvgAggregateOutputType | null
    _sum: ExistingLicenseSumAggregateOutputType | null
    _min: ExistingLicenseMinAggregateOutputType | null
    _max: ExistingLicenseMaxAggregateOutputType | null
  }

  export type ExistingLicenseAvgAggregateOutputType = {
    id: number | null
  }

  export type ExistingLicenseSumAggregateOutputType = {
    id: number | null
  }

  export type ExistingLicenseMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    licenseNumber: string | null
    issuedDate: Date | null
  }

  export type ExistingLicenseMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    licenseNumber: string | null
    issuedDate: Date | null
  }

  export type ExistingLicenseCountAggregateOutputType = {
    id: number
    applicationId: number
    licenseNumber: number
    issuedDate: number
    _all: number
  }


  export type ExistingLicenseAvgAggregateInputType = {
    id?: true
  }

  export type ExistingLicenseSumAggregateInputType = {
    id?: true
  }

  export type ExistingLicenseMinAggregateInputType = {
    id?: true
    applicationId?: true
    licenseNumber?: true
    issuedDate?: true
  }

  export type ExistingLicenseMaxAggregateInputType = {
    id?: true
    applicationId?: true
    licenseNumber?: true
    issuedDate?: true
  }

  export type ExistingLicenseCountAggregateInputType = {
    id?: true
    applicationId?: true
    licenseNumber?: true
    issuedDate?: true
    _all?: true
  }

  export type ExistingLicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExistingLicense to aggregate.
     */
    where?: ExistingLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenses to fetch.
     */
    orderBy?: ExistingLicenseOrderByWithRelationInput | ExistingLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExistingLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExistingLicenses
    **/
    _count?: true | ExistingLicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExistingLicenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExistingLicenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExistingLicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExistingLicenseMaxAggregateInputType
  }

  export type GetExistingLicenseAggregateType<T extends ExistingLicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExistingLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExistingLicense[P]>
      : GetScalarType<T[P], AggregateExistingLicense[P]>
  }




  export type ExistingLicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExistingLicenseWhereInput
    orderBy?: ExistingLicenseOrderByWithAggregationInput | ExistingLicenseOrderByWithAggregationInput[]
    by: ExistingLicenseScalarFieldEnum[] | ExistingLicenseScalarFieldEnum
    having?: ExistingLicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExistingLicenseCountAggregateInputType | true
    _avg?: ExistingLicenseAvgAggregateInputType
    _sum?: ExistingLicenseSumAggregateInputType
    _min?: ExistingLicenseMinAggregateInputType
    _max?: ExistingLicenseMaxAggregateInputType
  }

  export type ExistingLicenseGroupByOutputType = {
    id: number
    applicationId: string
    licenseNumber: string | null
    issuedDate: Date | null
    _count: ExistingLicenseCountAggregateOutputType | null
    _avg: ExistingLicenseAvgAggregateOutputType | null
    _sum: ExistingLicenseSumAggregateOutputType | null
    _min: ExistingLicenseMinAggregateOutputType | null
    _max: ExistingLicenseMaxAggregateOutputType | null
  }

  type GetExistingLicenseGroupByPayload<T extends ExistingLicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExistingLicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExistingLicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExistingLicenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExistingLicenseGroupByOutputType[P]>
        }
      >
    >


  export type ExistingLicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    licenseNumber?: boolean
    issuedDate?: boolean
    vehicleClasses?: boolean | ExistingLicense$vehicleClassesArgs<ExtArgs>
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    _count?: boolean | ExistingLicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["existingLicense"]>

  export type ExistingLicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    licenseNumber?: boolean
    issuedDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["existingLicense"]>

  export type ExistingLicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    licenseNumber?: boolean
    issuedDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["existingLicense"]>

  export type ExistingLicenseSelectScalar = {
    id?: boolean
    applicationId?: boolean
    licenseNumber?: boolean
    issuedDate?: boolean
  }

  export type ExistingLicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "licenseNumber" | "issuedDate", ExtArgs["result"]["existingLicense"]>
  export type ExistingLicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicleClasses?: boolean | ExistingLicense$vehicleClassesArgs<ExtArgs>
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    _count?: boolean | ExistingLicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExistingLicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type ExistingLicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }

  export type $ExistingLicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExistingLicense"
    objects: {
      vehicleClasses: Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>[]
      application: Prisma.$StudentApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      licenseNumber: string | null
      issuedDate: Date | null
    }, ExtArgs["result"]["existingLicense"]>
    composites: {}
  }

  type ExistingLicenseGetPayload<S extends boolean | null | undefined | ExistingLicenseDefaultArgs> = $Result.GetResult<Prisma.$ExistingLicensePayload, S>

  type ExistingLicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExistingLicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExistingLicenseCountAggregateInputType | true
    }

  export interface ExistingLicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExistingLicense'], meta: { name: 'ExistingLicense' } }
    /**
     * Find zero or one ExistingLicense that matches the filter.
     * @param {ExistingLicenseFindUniqueArgs} args - Arguments to find a ExistingLicense
     * @example
     * // Get one ExistingLicense
     * const existingLicense = await prisma.existingLicense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExistingLicenseFindUniqueArgs>(args: SelectSubset<T, ExistingLicenseFindUniqueArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExistingLicense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExistingLicenseFindUniqueOrThrowArgs} args - Arguments to find a ExistingLicense
     * @example
     * // Get one ExistingLicense
     * const existingLicense = await prisma.existingLicense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExistingLicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExistingLicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExistingLicense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseFindFirstArgs} args - Arguments to find a ExistingLicense
     * @example
     * // Get one ExistingLicense
     * const existingLicense = await prisma.existingLicense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExistingLicenseFindFirstArgs>(args?: SelectSubset<T, ExistingLicenseFindFirstArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExistingLicense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseFindFirstOrThrowArgs} args - Arguments to find a ExistingLicense
     * @example
     * // Get one ExistingLicense
     * const existingLicense = await prisma.existingLicense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExistingLicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExistingLicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExistingLicenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExistingLicenses
     * const existingLicenses = await prisma.existingLicense.findMany()
     * 
     * // Get first 10 ExistingLicenses
     * const existingLicenses = await prisma.existingLicense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const existingLicenseWithIdOnly = await prisma.existingLicense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExistingLicenseFindManyArgs>(args?: SelectSubset<T, ExistingLicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExistingLicense.
     * @param {ExistingLicenseCreateArgs} args - Arguments to create a ExistingLicense.
     * @example
     * // Create one ExistingLicense
     * const ExistingLicense = await prisma.existingLicense.create({
     *   data: {
     *     // ... data to create a ExistingLicense
     *   }
     * })
     * 
     */
    create<T extends ExistingLicenseCreateArgs>(args: SelectSubset<T, ExistingLicenseCreateArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExistingLicenses.
     * @param {ExistingLicenseCreateManyArgs} args - Arguments to create many ExistingLicenses.
     * @example
     * // Create many ExistingLicenses
     * const existingLicense = await prisma.existingLicense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExistingLicenseCreateManyArgs>(args?: SelectSubset<T, ExistingLicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExistingLicenses and returns the data saved in the database.
     * @param {ExistingLicenseCreateManyAndReturnArgs} args - Arguments to create many ExistingLicenses.
     * @example
     * // Create many ExistingLicenses
     * const existingLicense = await prisma.existingLicense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExistingLicenses and only return the `id`
     * const existingLicenseWithIdOnly = await prisma.existingLicense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExistingLicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExistingLicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExistingLicense.
     * @param {ExistingLicenseDeleteArgs} args - Arguments to delete one ExistingLicense.
     * @example
     * // Delete one ExistingLicense
     * const ExistingLicense = await prisma.existingLicense.delete({
     *   where: {
     *     // ... filter to delete one ExistingLicense
     *   }
     * })
     * 
     */
    delete<T extends ExistingLicenseDeleteArgs>(args: SelectSubset<T, ExistingLicenseDeleteArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExistingLicense.
     * @param {ExistingLicenseUpdateArgs} args - Arguments to update one ExistingLicense.
     * @example
     * // Update one ExistingLicense
     * const existingLicense = await prisma.existingLicense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExistingLicenseUpdateArgs>(args: SelectSubset<T, ExistingLicenseUpdateArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExistingLicenses.
     * @param {ExistingLicenseDeleteManyArgs} args - Arguments to filter ExistingLicenses to delete.
     * @example
     * // Delete a few ExistingLicenses
     * const { count } = await prisma.existingLicense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExistingLicenseDeleteManyArgs>(args?: SelectSubset<T, ExistingLicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExistingLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExistingLicenses
     * const existingLicense = await prisma.existingLicense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExistingLicenseUpdateManyArgs>(args: SelectSubset<T, ExistingLicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExistingLicenses and returns the data updated in the database.
     * @param {ExistingLicenseUpdateManyAndReturnArgs} args - Arguments to update many ExistingLicenses.
     * @example
     * // Update many ExistingLicenses
     * const existingLicense = await prisma.existingLicense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExistingLicenses and only return the `id`
     * const existingLicenseWithIdOnly = await prisma.existingLicense.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExistingLicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExistingLicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExistingLicense.
     * @param {ExistingLicenseUpsertArgs} args - Arguments to update or create a ExistingLicense.
     * @example
     * // Update or create a ExistingLicense
     * const existingLicense = await prisma.existingLicense.upsert({
     *   create: {
     *     // ... data to create a ExistingLicense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExistingLicense we want to update
     *   }
     * })
     */
    upsert<T extends ExistingLicenseUpsertArgs>(args: SelectSubset<T, ExistingLicenseUpsertArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExistingLicenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseCountArgs} args - Arguments to filter ExistingLicenses to count.
     * @example
     * // Count the number of ExistingLicenses
     * const count = await prisma.existingLicense.count({
     *   where: {
     *     // ... the filter for the ExistingLicenses we want to count
     *   }
     * })
    **/
    count<T extends ExistingLicenseCountArgs>(
      args?: Subset<T, ExistingLicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExistingLicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExistingLicense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExistingLicenseAggregateArgs>(args: Subset<T, ExistingLicenseAggregateArgs>): Prisma.PrismaPromise<GetExistingLicenseAggregateType<T>>

    /**
     * Group by ExistingLicense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseGroupByArgs} args - Group by arguments.
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
      T extends ExistingLicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExistingLicenseGroupByArgs['orderBy'] }
        : { orderBy?: ExistingLicenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExistingLicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExistingLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExistingLicense model
   */
  readonly fields: ExistingLicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExistingLicense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExistingLicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicleClasses<T extends ExistingLicense$vehicleClassesArgs<ExtArgs> = {}>(args?: Subset<T, ExistingLicense$vehicleClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExistingLicense model
   */
  interface ExistingLicenseFieldRefs {
    readonly id: FieldRef<"ExistingLicense", 'Int'>
    readonly applicationId: FieldRef<"ExistingLicense", 'String'>
    readonly licenseNumber: FieldRef<"ExistingLicense", 'String'>
    readonly issuedDate: FieldRef<"ExistingLicense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExistingLicense findUnique
   */
  export type ExistingLicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicense to fetch.
     */
    where: ExistingLicenseWhereUniqueInput
  }

  /**
   * ExistingLicense findUniqueOrThrow
   */
  export type ExistingLicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicense to fetch.
     */
    where: ExistingLicenseWhereUniqueInput
  }

  /**
   * ExistingLicense findFirst
   */
  export type ExistingLicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicense to fetch.
     */
    where?: ExistingLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenses to fetch.
     */
    orderBy?: ExistingLicenseOrderByWithRelationInput | ExistingLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExistingLicenses.
     */
    cursor?: ExistingLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExistingLicenses.
     */
    distinct?: ExistingLicenseScalarFieldEnum | ExistingLicenseScalarFieldEnum[]
  }

  /**
   * ExistingLicense findFirstOrThrow
   */
  export type ExistingLicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicense to fetch.
     */
    where?: ExistingLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenses to fetch.
     */
    orderBy?: ExistingLicenseOrderByWithRelationInput | ExistingLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExistingLicenses.
     */
    cursor?: ExistingLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExistingLicenses.
     */
    distinct?: ExistingLicenseScalarFieldEnum | ExistingLicenseScalarFieldEnum[]
  }

  /**
   * ExistingLicense findMany
   */
  export type ExistingLicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicenses to fetch.
     */
    where?: ExistingLicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenses to fetch.
     */
    orderBy?: ExistingLicenseOrderByWithRelationInput | ExistingLicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExistingLicenses.
     */
    cursor?: ExistingLicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenses.
     */
    skip?: number
    distinct?: ExistingLicenseScalarFieldEnum | ExistingLicenseScalarFieldEnum[]
  }

  /**
   * ExistingLicense create
   */
  export type ExistingLicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a ExistingLicense.
     */
    data: XOR<ExistingLicenseCreateInput, ExistingLicenseUncheckedCreateInput>
  }

  /**
   * ExistingLicense createMany
   */
  export type ExistingLicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExistingLicenses.
     */
    data: ExistingLicenseCreateManyInput | ExistingLicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExistingLicense createManyAndReturn
   */
  export type ExistingLicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * The data used to create many ExistingLicenses.
     */
    data: ExistingLicenseCreateManyInput | ExistingLicenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExistingLicense update
   */
  export type ExistingLicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a ExistingLicense.
     */
    data: XOR<ExistingLicenseUpdateInput, ExistingLicenseUncheckedUpdateInput>
    /**
     * Choose, which ExistingLicense to update.
     */
    where: ExistingLicenseWhereUniqueInput
  }

  /**
   * ExistingLicense updateMany
   */
  export type ExistingLicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExistingLicenses.
     */
    data: XOR<ExistingLicenseUpdateManyMutationInput, ExistingLicenseUncheckedUpdateManyInput>
    /**
     * Filter which ExistingLicenses to update
     */
    where?: ExistingLicenseWhereInput
    /**
     * Limit how many ExistingLicenses to update.
     */
    limit?: number
  }

  /**
   * ExistingLicense updateManyAndReturn
   */
  export type ExistingLicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * The data used to update ExistingLicenses.
     */
    data: XOR<ExistingLicenseUpdateManyMutationInput, ExistingLicenseUncheckedUpdateManyInput>
    /**
     * Filter which ExistingLicenses to update
     */
    where?: ExistingLicenseWhereInput
    /**
     * Limit how many ExistingLicenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExistingLicense upsert
   */
  export type ExistingLicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the ExistingLicense to update in case it exists.
     */
    where: ExistingLicenseWhereUniqueInput
    /**
     * In case the ExistingLicense found by the `where` argument doesn't exist, create a new ExistingLicense with this data.
     */
    create: XOR<ExistingLicenseCreateInput, ExistingLicenseUncheckedCreateInput>
    /**
     * In case the ExistingLicense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExistingLicenseUpdateInput, ExistingLicenseUncheckedUpdateInput>
  }

  /**
   * ExistingLicense delete
   */
  export type ExistingLicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
    /**
     * Filter which ExistingLicense to delete.
     */
    where: ExistingLicenseWhereUniqueInput
  }

  /**
   * ExistingLicense deleteMany
   */
  export type ExistingLicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExistingLicenses to delete
     */
    where?: ExistingLicenseWhereInput
    /**
     * Limit how many ExistingLicenses to delete.
     */
    limit?: number
  }

  /**
   * ExistingLicense.vehicleClasses
   */
  export type ExistingLicense$vehicleClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    where?: ExistingLicenseVehicleClassWhereInput
    orderBy?: ExistingLicenseVehicleClassOrderByWithRelationInput | ExistingLicenseVehicleClassOrderByWithRelationInput[]
    cursor?: ExistingLicenseVehicleClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExistingLicenseVehicleClassScalarFieldEnum | ExistingLicenseVehicleClassScalarFieldEnum[]
  }

  /**
   * ExistingLicense without action
   */
  export type ExistingLicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicense
     */
    select?: ExistingLicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicense
     */
    omit?: ExistingLicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseInclude<ExtArgs> | null
  }


  /**
   * Model ExistingLicenseVehicleClass
   */

  export type AggregateExistingLicenseVehicleClass = {
    _count: ExistingLicenseVehicleClassCountAggregateOutputType | null
    _avg: ExistingLicenseVehicleClassAvgAggregateOutputType | null
    _sum: ExistingLicenseVehicleClassSumAggregateOutputType | null
    _min: ExistingLicenseVehicleClassMinAggregateOutputType | null
    _max: ExistingLicenseVehicleClassMaxAggregateOutputType | null
  }

  export type ExistingLicenseVehicleClassAvgAggregateOutputType = {
    id: number | null
    licenseId: number | null
    vehicleClassId: number | null
  }

  export type ExistingLicenseVehicleClassSumAggregateOutputType = {
    id: number | null
    licenseId: number | null
    vehicleClassId: number | null
  }

  export type ExistingLicenseVehicleClassMinAggregateOutputType = {
    id: number | null
    licenseId: number | null
    vehicleClassId: number | null
  }

  export type ExistingLicenseVehicleClassMaxAggregateOutputType = {
    id: number | null
    licenseId: number | null
    vehicleClassId: number | null
  }

  export type ExistingLicenseVehicleClassCountAggregateOutputType = {
    id: number
    licenseId: number
    vehicleClassId: number
    _all: number
  }


  export type ExistingLicenseVehicleClassAvgAggregateInputType = {
    id?: true
    licenseId?: true
    vehicleClassId?: true
  }

  export type ExistingLicenseVehicleClassSumAggregateInputType = {
    id?: true
    licenseId?: true
    vehicleClassId?: true
  }

  export type ExistingLicenseVehicleClassMinAggregateInputType = {
    id?: true
    licenseId?: true
    vehicleClassId?: true
  }

  export type ExistingLicenseVehicleClassMaxAggregateInputType = {
    id?: true
    licenseId?: true
    vehicleClassId?: true
  }

  export type ExistingLicenseVehicleClassCountAggregateInputType = {
    id?: true
    licenseId?: true
    vehicleClassId?: true
    _all?: true
  }

  export type ExistingLicenseVehicleClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExistingLicenseVehicleClass to aggregate.
     */
    where?: ExistingLicenseVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenseVehicleClasses to fetch.
     */
    orderBy?: ExistingLicenseVehicleClassOrderByWithRelationInput | ExistingLicenseVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExistingLicenseVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenseVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenseVehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExistingLicenseVehicleClasses
    **/
    _count?: true | ExistingLicenseVehicleClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExistingLicenseVehicleClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExistingLicenseVehicleClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExistingLicenseVehicleClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExistingLicenseVehicleClassMaxAggregateInputType
  }

  export type GetExistingLicenseVehicleClassAggregateType<T extends ExistingLicenseVehicleClassAggregateArgs> = {
        [P in keyof T & keyof AggregateExistingLicenseVehicleClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExistingLicenseVehicleClass[P]>
      : GetScalarType<T[P], AggregateExistingLicenseVehicleClass[P]>
  }




  export type ExistingLicenseVehicleClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExistingLicenseVehicleClassWhereInput
    orderBy?: ExistingLicenseVehicleClassOrderByWithAggregationInput | ExistingLicenseVehicleClassOrderByWithAggregationInput[]
    by: ExistingLicenseVehicleClassScalarFieldEnum[] | ExistingLicenseVehicleClassScalarFieldEnum
    having?: ExistingLicenseVehicleClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExistingLicenseVehicleClassCountAggregateInputType | true
    _avg?: ExistingLicenseVehicleClassAvgAggregateInputType
    _sum?: ExistingLicenseVehicleClassSumAggregateInputType
    _min?: ExistingLicenseVehicleClassMinAggregateInputType
    _max?: ExistingLicenseVehicleClassMaxAggregateInputType
  }

  export type ExistingLicenseVehicleClassGroupByOutputType = {
    id: number
    licenseId: number
    vehicleClassId: number
    _count: ExistingLicenseVehicleClassCountAggregateOutputType | null
    _avg: ExistingLicenseVehicleClassAvgAggregateOutputType | null
    _sum: ExistingLicenseVehicleClassSumAggregateOutputType | null
    _min: ExistingLicenseVehicleClassMinAggregateOutputType | null
    _max: ExistingLicenseVehicleClassMaxAggregateOutputType | null
  }

  type GetExistingLicenseVehicleClassGroupByPayload<T extends ExistingLicenseVehicleClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExistingLicenseVehicleClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExistingLicenseVehicleClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExistingLicenseVehicleClassGroupByOutputType[P]>
            : GetScalarType<T[P], ExistingLicenseVehicleClassGroupByOutputType[P]>
        }
      >
    >


  export type ExistingLicenseVehicleClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    vehicleClassId?: boolean
    license?: boolean | ExistingLicenseDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["existingLicenseVehicleClass"]>

  export type ExistingLicenseVehicleClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    vehicleClassId?: boolean
    license?: boolean | ExistingLicenseDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["existingLicenseVehicleClass"]>

  export type ExistingLicenseVehicleClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    vehicleClassId?: boolean
    license?: boolean | ExistingLicenseDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["existingLicenseVehicleClass"]>

  export type ExistingLicenseVehicleClassSelectScalar = {
    id?: boolean
    licenseId?: boolean
    vehicleClassId?: boolean
  }

  export type ExistingLicenseVehicleClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licenseId" | "vehicleClassId", ExtArgs["result"]["existingLicenseVehicleClass"]>
  export type ExistingLicenseVehicleClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | ExistingLicenseDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }
  export type ExistingLicenseVehicleClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | ExistingLicenseDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }
  export type ExistingLicenseVehicleClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | ExistingLicenseDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }

  export type $ExistingLicenseVehicleClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExistingLicenseVehicleClass"
    objects: {
      license: Prisma.$ExistingLicensePayload<ExtArgs>
      vehicleClass: Prisma.$VehicleClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      licenseId: number
      vehicleClassId: number
    }, ExtArgs["result"]["existingLicenseVehicleClass"]>
    composites: {}
  }

  type ExistingLicenseVehicleClassGetPayload<S extends boolean | null | undefined | ExistingLicenseVehicleClassDefaultArgs> = $Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload, S>

  type ExistingLicenseVehicleClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExistingLicenseVehicleClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExistingLicenseVehicleClassCountAggregateInputType | true
    }

  export interface ExistingLicenseVehicleClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExistingLicenseVehicleClass'], meta: { name: 'ExistingLicenseVehicleClass' } }
    /**
     * Find zero or one ExistingLicenseVehicleClass that matches the filter.
     * @param {ExistingLicenseVehicleClassFindUniqueArgs} args - Arguments to find a ExistingLicenseVehicleClass
     * @example
     * // Get one ExistingLicenseVehicleClass
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExistingLicenseVehicleClassFindUniqueArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassFindUniqueArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExistingLicenseVehicleClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExistingLicenseVehicleClassFindUniqueOrThrowArgs} args - Arguments to find a ExistingLicenseVehicleClass
     * @example
     * // Get one ExistingLicenseVehicleClass
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExistingLicenseVehicleClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExistingLicenseVehicleClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseVehicleClassFindFirstArgs} args - Arguments to find a ExistingLicenseVehicleClass
     * @example
     * // Get one ExistingLicenseVehicleClass
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExistingLicenseVehicleClassFindFirstArgs>(args?: SelectSubset<T, ExistingLicenseVehicleClassFindFirstArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExistingLicenseVehicleClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseVehicleClassFindFirstOrThrowArgs} args - Arguments to find a ExistingLicenseVehicleClass
     * @example
     * // Get one ExistingLicenseVehicleClass
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExistingLicenseVehicleClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ExistingLicenseVehicleClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExistingLicenseVehicleClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseVehicleClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExistingLicenseVehicleClasses
     * const existingLicenseVehicleClasses = await prisma.existingLicenseVehicleClass.findMany()
     * 
     * // Get first 10 ExistingLicenseVehicleClasses
     * const existingLicenseVehicleClasses = await prisma.existingLicenseVehicleClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const existingLicenseVehicleClassWithIdOnly = await prisma.existingLicenseVehicleClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExistingLicenseVehicleClassFindManyArgs>(args?: SelectSubset<T, ExistingLicenseVehicleClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExistingLicenseVehicleClass.
     * @param {ExistingLicenseVehicleClassCreateArgs} args - Arguments to create a ExistingLicenseVehicleClass.
     * @example
     * // Create one ExistingLicenseVehicleClass
     * const ExistingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.create({
     *   data: {
     *     // ... data to create a ExistingLicenseVehicleClass
     *   }
     * })
     * 
     */
    create<T extends ExistingLicenseVehicleClassCreateArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassCreateArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExistingLicenseVehicleClasses.
     * @param {ExistingLicenseVehicleClassCreateManyArgs} args - Arguments to create many ExistingLicenseVehicleClasses.
     * @example
     * // Create many ExistingLicenseVehicleClasses
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExistingLicenseVehicleClassCreateManyArgs>(args?: SelectSubset<T, ExistingLicenseVehicleClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExistingLicenseVehicleClasses and returns the data saved in the database.
     * @param {ExistingLicenseVehicleClassCreateManyAndReturnArgs} args - Arguments to create many ExistingLicenseVehicleClasses.
     * @example
     * // Create many ExistingLicenseVehicleClasses
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExistingLicenseVehicleClasses and only return the `id`
     * const existingLicenseVehicleClassWithIdOnly = await prisma.existingLicenseVehicleClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExistingLicenseVehicleClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ExistingLicenseVehicleClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExistingLicenseVehicleClass.
     * @param {ExistingLicenseVehicleClassDeleteArgs} args - Arguments to delete one ExistingLicenseVehicleClass.
     * @example
     * // Delete one ExistingLicenseVehicleClass
     * const ExistingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.delete({
     *   where: {
     *     // ... filter to delete one ExistingLicenseVehicleClass
     *   }
     * })
     * 
     */
    delete<T extends ExistingLicenseVehicleClassDeleteArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassDeleteArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExistingLicenseVehicleClass.
     * @param {ExistingLicenseVehicleClassUpdateArgs} args - Arguments to update one ExistingLicenseVehicleClass.
     * @example
     * // Update one ExistingLicenseVehicleClass
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExistingLicenseVehicleClassUpdateArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassUpdateArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExistingLicenseVehicleClasses.
     * @param {ExistingLicenseVehicleClassDeleteManyArgs} args - Arguments to filter ExistingLicenseVehicleClasses to delete.
     * @example
     * // Delete a few ExistingLicenseVehicleClasses
     * const { count } = await prisma.existingLicenseVehicleClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExistingLicenseVehicleClassDeleteManyArgs>(args?: SelectSubset<T, ExistingLicenseVehicleClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExistingLicenseVehicleClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseVehicleClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExistingLicenseVehicleClasses
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExistingLicenseVehicleClassUpdateManyArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExistingLicenseVehicleClasses and returns the data updated in the database.
     * @param {ExistingLicenseVehicleClassUpdateManyAndReturnArgs} args - Arguments to update many ExistingLicenseVehicleClasses.
     * @example
     * // Update many ExistingLicenseVehicleClasses
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExistingLicenseVehicleClasses and only return the `id`
     * const existingLicenseVehicleClassWithIdOnly = await prisma.existingLicenseVehicleClass.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExistingLicenseVehicleClassUpdateManyAndReturnArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExistingLicenseVehicleClass.
     * @param {ExistingLicenseVehicleClassUpsertArgs} args - Arguments to update or create a ExistingLicenseVehicleClass.
     * @example
     * // Update or create a ExistingLicenseVehicleClass
     * const existingLicenseVehicleClass = await prisma.existingLicenseVehicleClass.upsert({
     *   create: {
     *     // ... data to create a ExistingLicenseVehicleClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExistingLicenseVehicleClass we want to update
     *   }
     * })
     */
    upsert<T extends ExistingLicenseVehicleClassUpsertArgs>(args: SelectSubset<T, ExistingLicenseVehicleClassUpsertArgs<ExtArgs>>): Prisma__ExistingLicenseVehicleClassClient<$Result.GetResult<Prisma.$ExistingLicenseVehicleClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExistingLicenseVehicleClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseVehicleClassCountArgs} args - Arguments to filter ExistingLicenseVehicleClasses to count.
     * @example
     * // Count the number of ExistingLicenseVehicleClasses
     * const count = await prisma.existingLicenseVehicleClass.count({
     *   where: {
     *     // ... the filter for the ExistingLicenseVehicleClasses we want to count
     *   }
     * })
    **/
    count<T extends ExistingLicenseVehicleClassCountArgs>(
      args?: Subset<T, ExistingLicenseVehicleClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExistingLicenseVehicleClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExistingLicenseVehicleClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseVehicleClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExistingLicenseVehicleClassAggregateArgs>(args: Subset<T, ExistingLicenseVehicleClassAggregateArgs>): Prisma.PrismaPromise<GetExistingLicenseVehicleClassAggregateType<T>>

    /**
     * Group by ExistingLicenseVehicleClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExistingLicenseVehicleClassGroupByArgs} args - Group by arguments.
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
      T extends ExistingLicenseVehicleClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExistingLicenseVehicleClassGroupByArgs['orderBy'] }
        : { orderBy?: ExistingLicenseVehicleClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExistingLicenseVehicleClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExistingLicenseVehicleClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExistingLicenseVehicleClass model
   */
  readonly fields: ExistingLicenseVehicleClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExistingLicenseVehicleClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExistingLicenseVehicleClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends ExistingLicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExistingLicenseDefaultArgs<ExtArgs>>): Prisma__ExistingLicenseClient<$Result.GetResult<Prisma.$ExistingLicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicleClass<T extends VehicleClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleClassDefaultArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExistingLicenseVehicleClass model
   */
  interface ExistingLicenseVehicleClassFieldRefs {
    readonly id: FieldRef<"ExistingLicenseVehicleClass", 'Int'>
    readonly licenseId: FieldRef<"ExistingLicenseVehicleClass", 'Int'>
    readonly vehicleClassId: FieldRef<"ExistingLicenseVehicleClass", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ExistingLicenseVehicleClass findUnique
   */
  export type ExistingLicenseVehicleClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicenseVehicleClass to fetch.
     */
    where: ExistingLicenseVehicleClassWhereUniqueInput
  }

  /**
   * ExistingLicenseVehicleClass findUniqueOrThrow
   */
  export type ExistingLicenseVehicleClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicenseVehicleClass to fetch.
     */
    where: ExistingLicenseVehicleClassWhereUniqueInput
  }

  /**
   * ExistingLicenseVehicleClass findFirst
   */
  export type ExistingLicenseVehicleClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicenseVehicleClass to fetch.
     */
    where?: ExistingLicenseVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenseVehicleClasses to fetch.
     */
    orderBy?: ExistingLicenseVehicleClassOrderByWithRelationInput | ExistingLicenseVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExistingLicenseVehicleClasses.
     */
    cursor?: ExistingLicenseVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenseVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenseVehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExistingLicenseVehicleClasses.
     */
    distinct?: ExistingLicenseVehicleClassScalarFieldEnum | ExistingLicenseVehicleClassScalarFieldEnum[]
  }

  /**
   * ExistingLicenseVehicleClass findFirstOrThrow
   */
  export type ExistingLicenseVehicleClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicenseVehicleClass to fetch.
     */
    where?: ExistingLicenseVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenseVehicleClasses to fetch.
     */
    orderBy?: ExistingLicenseVehicleClassOrderByWithRelationInput | ExistingLicenseVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExistingLicenseVehicleClasses.
     */
    cursor?: ExistingLicenseVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenseVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenseVehicleClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExistingLicenseVehicleClasses.
     */
    distinct?: ExistingLicenseVehicleClassScalarFieldEnum | ExistingLicenseVehicleClassScalarFieldEnum[]
  }

  /**
   * ExistingLicenseVehicleClass findMany
   */
  export type ExistingLicenseVehicleClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * Filter, which ExistingLicenseVehicleClasses to fetch.
     */
    where?: ExistingLicenseVehicleClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExistingLicenseVehicleClasses to fetch.
     */
    orderBy?: ExistingLicenseVehicleClassOrderByWithRelationInput | ExistingLicenseVehicleClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExistingLicenseVehicleClasses.
     */
    cursor?: ExistingLicenseVehicleClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExistingLicenseVehicleClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExistingLicenseVehicleClasses.
     */
    skip?: number
    distinct?: ExistingLicenseVehicleClassScalarFieldEnum | ExistingLicenseVehicleClassScalarFieldEnum[]
  }

  /**
   * ExistingLicenseVehicleClass create
   */
  export type ExistingLicenseVehicleClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * The data needed to create a ExistingLicenseVehicleClass.
     */
    data: XOR<ExistingLicenseVehicleClassCreateInput, ExistingLicenseVehicleClassUncheckedCreateInput>
  }

  /**
   * ExistingLicenseVehicleClass createMany
   */
  export type ExistingLicenseVehicleClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExistingLicenseVehicleClasses.
     */
    data: ExistingLicenseVehicleClassCreateManyInput | ExistingLicenseVehicleClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExistingLicenseVehicleClass createManyAndReturn
   */
  export type ExistingLicenseVehicleClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * The data used to create many ExistingLicenseVehicleClasses.
     */
    data: ExistingLicenseVehicleClassCreateManyInput | ExistingLicenseVehicleClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExistingLicenseVehicleClass update
   */
  export type ExistingLicenseVehicleClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * The data needed to update a ExistingLicenseVehicleClass.
     */
    data: XOR<ExistingLicenseVehicleClassUpdateInput, ExistingLicenseVehicleClassUncheckedUpdateInput>
    /**
     * Choose, which ExistingLicenseVehicleClass to update.
     */
    where: ExistingLicenseVehicleClassWhereUniqueInput
  }

  /**
   * ExistingLicenseVehicleClass updateMany
   */
  export type ExistingLicenseVehicleClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExistingLicenseVehicleClasses.
     */
    data: XOR<ExistingLicenseVehicleClassUpdateManyMutationInput, ExistingLicenseVehicleClassUncheckedUpdateManyInput>
    /**
     * Filter which ExistingLicenseVehicleClasses to update
     */
    where?: ExistingLicenseVehicleClassWhereInput
    /**
     * Limit how many ExistingLicenseVehicleClasses to update.
     */
    limit?: number
  }

  /**
   * ExistingLicenseVehicleClass updateManyAndReturn
   */
  export type ExistingLicenseVehicleClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * The data used to update ExistingLicenseVehicleClasses.
     */
    data: XOR<ExistingLicenseVehicleClassUpdateManyMutationInput, ExistingLicenseVehicleClassUncheckedUpdateManyInput>
    /**
     * Filter which ExistingLicenseVehicleClasses to update
     */
    where?: ExistingLicenseVehicleClassWhereInput
    /**
     * Limit how many ExistingLicenseVehicleClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExistingLicenseVehicleClass upsert
   */
  export type ExistingLicenseVehicleClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * The filter to search for the ExistingLicenseVehicleClass to update in case it exists.
     */
    where: ExistingLicenseVehicleClassWhereUniqueInput
    /**
     * In case the ExistingLicenseVehicleClass found by the `where` argument doesn't exist, create a new ExistingLicenseVehicleClass with this data.
     */
    create: XOR<ExistingLicenseVehicleClassCreateInput, ExistingLicenseVehicleClassUncheckedCreateInput>
    /**
     * In case the ExistingLicenseVehicleClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExistingLicenseVehicleClassUpdateInput, ExistingLicenseVehicleClassUncheckedUpdateInput>
  }

  /**
   * ExistingLicenseVehicleClass delete
   */
  export type ExistingLicenseVehicleClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
    /**
     * Filter which ExistingLicenseVehicleClass to delete.
     */
    where: ExistingLicenseVehicleClassWhereUniqueInput
  }

  /**
   * ExistingLicenseVehicleClass deleteMany
   */
  export type ExistingLicenseVehicleClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExistingLicenseVehicleClasses to delete
     */
    where?: ExistingLicenseVehicleClassWhereInput
    /**
     * Limit how many ExistingLicenseVehicleClasses to delete.
     */
    limit?: number
  }

  /**
   * ExistingLicenseVehicleClass without action
   */
  export type ExistingLicenseVehicleClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExistingLicenseVehicleClass
     */
    select?: ExistingLicenseVehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExistingLicenseVehicleClass
     */
    omit?: ExistingLicenseVehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExistingLicenseVehicleClassInclude<ExtArgs> | null
  }


  /**
   * Model PaymentInfo
   */

  export type AggregatePaymentInfo = {
    _count: PaymentInfoCountAggregateOutputType | null
    _avg: PaymentInfoAvgAggregateOutputType | null
    _sum: PaymentInfoSumAggregateOutputType | null
    _min: PaymentInfoMinAggregateOutputType | null
    _max: PaymentInfoMaxAggregateOutputType | null
  }

  export type PaymentInfoAvgAggregateOutputType = {
    id: number | null
    totalFee: number | null
    advanceFee: number | null
  }

  export type PaymentInfoSumAggregateOutputType = {
    id: number | null
    totalFee: number | null
    advanceFee: number | null
  }

  export type PaymentInfoMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    totalFee: number | null
    advanceFee: number | null
    status: string | null
    paidDate: Date | null
  }

  export type PaymentInfoMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    totalFee: number | null
    advanceFee: number | null
    status: string | null
    paidDate: Date | null
  }

  export type PaymentInfoCountAggregateOutputType = {
    id: number
    applicationId: number
    totalFee: number
    advanceFee: number
    status: number
    paidDate: number
    _all: number
  }


  export type PaymentInfoAvgAggregateInputType = {
    id?: true
    totalFee?: true
    advanceFee?: true
  }

  export type PaymentInfoSumAggregateInputType = {
    id?: true
    totalFee?: true
    advanceFee?: true
  }

  export type PaymentInfoMinAggregateInputType = {
    id?: true
    applicationId?: true
    totalFee?: true
    advanceFee?: true
    status?: true
    paidDate?: true
  }

  export type PaymentInfoMaxAggregateInputType = {
    id?: true
    applicationId?: true
    totalFee?: true
    advanceFee?: true
    status?: true
    paidDate?: true
  }

  export type PaymentInfoCountAggregateInputType = {
    id?: true
    applicationId?: true
    totalFee?: true
    advanceFee?: true
    status?: true
    paidDate?: true
    _all?: true
  }

  export type PaymentInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentInfo to aggregate.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentInfos
    **/
    _count?: true | PaymentInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentInfoMaxAggregateInputType
  }

  export type GetPaymentInfoAggregateType<T extends PaymentInfoAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentInfo[P]>
      : GetScalarType<T[P], AggregatePaymentInfo[P]>
  }




  export type PaymentInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentInfoWhereInput
    orderBy?: PaymentInfoOrderByWithAggregationInput | PaymentInfoOrderByWithAggregationInput[]
    by: PaymentInfoScalarFieldEnum[] | PaymentInfoScalarFieldEnum
    having?: PaymentInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentInfoCountAggregateInputType | true
    _avg?: PaymentInfoAvgAggregateInputType
    _sum?: PaymentInfoSumAggregateInputType
    _min?: PaymentInfoMinAggregateInputType
    _max?: PaymentInfoMaxAggregateInputType
  }

  export type PaymentInfoGroupByOutputType = {
    id: number
    applicationId: string
    totalFee: number
    advanceFee: number
    status: string
    paidDate: Date | null
    _count: PaymentInfoCountAggregateOutputType | null
    _avg: PaymentInfoAvgAggregateOutputType | null
    _sum: PaymentInfoSumAggregateOutputType | null
    _min: PaymentInfoMinAggregateOutputType | null
    _max: PaymentInfoMaxAggregateOutputType | null
  }

  type GetPaymentInfoGroupByPayload<T extends PaymentInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentInfoGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentInfoGroupByOutputType[P]>
        }
      >
    >


  export type PaymentInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    status?: boolean
    paidDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInfo"]>

  export type PaymentInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    status?: boolean
    paidDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInfo"]>

  export type PaymentInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    status?: boolean
    paidDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentInfo"]>

  export type PaymentInfoSelectScalar = {
    id?: boolean
    applicationId?: boolean
    totalFee?: boolean
    advanceFee?: boolean
    status?: boolean
    paidDate?: boolean
  }

  export type PaymentInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "totalFee" | "advanceFee" | "status" | "paidDate", ExtArgs["result"]["paymentInfo"]>
  export type PaymentInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type PaymentInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type PaymentInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }

  export type $PaymentInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentInfo"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      totalFee: number
      advanceFee: number
      status: string
      paidDate: Date | null
    }, ExtArgs["result"]["paymentInfo"]>
    composites: {}
  }

  type PaymentInfoGetPayload<S extends boolean | null | undefined | PaymentInfoDefaultArgs> = $Result.GetResult<Prisma.$PaymentInfoPayload, S>

  type PaymentInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentInfoCountAggregateInputType | true
    }

  export interface PaymentInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentInfo'], meta: { name: 'PaymentInfo' } }
    /**
     * Find zero or one PaymentInfo that matches the filter.
     * @param {PaymentInfoFindUniqueArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentInfoFindUniqueArgs>(args: SelectSubset<T, PaymentInfoFindUniqueArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentInfoFindUniqueOrThrowArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoFindFirstArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentInfoFindFirstArgs>(args?: SelectSubset<T, PaymentInfoFindFirstArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoFindFirstOrThrowArgs} args - Arguments to find a PaymentInfo
     * @example
     * // Get one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentInfos
     * const paymentInfos = await prisma.paymentInfo.findMany()
     * 
     * // Get first 10 PaymentInfos
     * const paymentInfos = await prisma.paymentInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentInfoWithIdOnly = await prisma.paymentInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentInfoFindManyArgs>(args?: SelectSubset<T, PaymentInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentInfo.
     * @param {PaymentInfoCreateArgs} args - Arguments to create a PaymentInfo.
     * @example
     * // Create one PaymentInfo
     * const PaymentInfo = await prisma.paymentInfo.create({
     *   data: {
     *     // ... data to create a PaymentInfo
     *   }
     * })
     * 
     */
    create<T extends PaymentInfoCreateArgs>(args: SelectSubset<T, PaymentInfoCreateArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentInfos.
     * @param {PaymentInfoCreateManyArgs} args - Arguments to create many PaymentInfos.
     * @example
     * // Create many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentInfoCreateManyArgs>(args?: SelectSubset<T, PaymentInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentInfos and returns the data saved in the database.
     * @param {PaymentInfoCreateManyAndReturnArgs} args - Arguments to create many PaymentInfos.
     * @example
     * // Create many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentInfos and only return the `id`
     * const paymentInfoWithIdOnly = await prisma.paymentInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentInfo.
     * @param {PaymentInfoDeleteArgs} args - Arguments to delete one PaymentInfo.
     * @example
     * // Delete one PaymentInfo
     * const PaymentInfo = await prisma.paymentInfo.delete({
     *   where: {
     *     // ... filter to delete one PaymentInfo
     *   }
     * })
     * 
     */
    delete<T extends PaymentInfoDeleteArgs>(args: SelectSubset<T, PaymentInfoDeleteArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentInfo.
     * @param {PaymentInfoUpdateArgs} args - Arguments to update one PaymentInfo.
     * @example
     * // Update one PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentInfoUpdateArgs>(args: SelectSubset<T, PaymentInfoUpdateArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentInfos.
     * @param {PaymentInfoDeleteManyArgs} args - Arguments to filter PaymentInfos to delete.
     * @example
     * // Delete a few PaymentInfos
     * const { count } = await prisma.paymentInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentInfoDeleteManyArgs>(args?: SelectSubset<T, PaymentInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentInfoUpdateManyArgs>(args: SelectSubset<T, PaymentInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentInfos and returns the data updated in the database.
     * @param {PaymentInfoUpdateManyAndReturnArgs} args - Arguments to update many PaymentInfos.
     * @example
     * // Update many PaymentInfos
     * const paymentInfo = await prisma.paymentInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentInfos and only return the `id`
     * const paymentInfoWithIdOnly = await prisma.paymentInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentInfo.
     * @param {PaymentInfoUpsertArgs} args - Arguments to update or create a PaymentInfo.
     * @example
     * // Update or create a PaymentInfo
     * const paymentInfo = await prisma.paymentInfo.upsert({
     *   create: {
     *     // ... data to create a PaymentInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentInfo we want to update
     *   }
     * })
     */
    upsert<T extends PaymentInfoUpsertArgs>(args: SelectSubset<T, PaymentInfoUpsertArgs<ExtArgs>>): Prisma__PaymentInfoClient<$Result.GetResult<Prisma.$PaymentInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoCountArgs} args - Arguments to filter PaymentInfos to count.
     * @example
     * // Count the number of PaymentInfos
     * const count = await prisma.paymentInfo.count({
     *   where: {
     *     // ... the filter for the PaymentInfos we want to count
     *   }
     * })
    **/
    count<T extends PaymentInfoCountArgs>(
      args?: Subset<T, PaymentInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentInfoAggregateArgs>(args: Subset<T, PaymentInfoAggregateArgs>): Prisma.PrismaPromise<GetPaymentInfoAggregateType<T>>

    /**
     * Group by PaymentInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentInfoGroupByArgs} args - Group by arguments.
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
      T extends PaymentInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentInfoGroupByArgs['orderBy'] }
        : { orderBy?: PaymentInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentInfo model
   */
  readonly fields: PaymentInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentInfo model
   */
  interface PaymentInfoFieldRefs {
    readonly id: FieldRef<"PaymentInfo", 'Int'>
    readonly applicationId: FieldRef<"PaymentInfo", 'String'>
    readonly totalFee: FieldRef<"PaymentInfo", 'Int'>
    readonly advanceFee: FieldRef<"PaymentInfo", 'Int'>
    readonly status: FieldRef<"PaymentInfo", 'String'>
    readonly paidDate: FieldRef<"PaymentInfo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentInfo findUnique
   */
  export type PaymentInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo findUniqueOrThrow
   */
  export type PaymentInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo findFirst
   */
  export type PaymentInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentInfos.
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentInfos.
     */
    distinct?: PaymentInfoScalarFieldEnum | PaymentInfoScalarFieldEnum[]
  }

  /**
   * PaymentInfo findFirstOrThrow
   */
  export type PaymentInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfo to fetch.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentInfos.
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentInfos.
     */
    distinct?: PaymentInfoScalarFieldEnum | PaymentInfoScalarFieldEnum[]
  }

  /**
   * PaymentInfo findMany
   */
  export type PaymentInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter, which PaymentInfos to fetch.
     */
    where?: PaymentInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentInfos to fetch.
     */
    orderBy?: PaymentInfoOrderByWithRelationInput | PaymentInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentInfos.
     */
    cursor?: PaymentInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentInfos.
     */
    skip?: number
    distinct?: PaymentInfoScalarFieldEnum | PaymentInfoScalarFieldEnum[]
  }

  /**
   * PaymentInfo create
   */
  export type PaymentInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentInfo.
     */
    data: XOR<PaymentInfoCreateInput, PaymentInfoUncheckedCreateInput>
  }

  /**
   * PaymentInfo createMany
   */
  export type PaymentInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentInfos.
     */
    data: PaymentInfoCreateManyInput | PaymentInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentInfo createManyAndReturn
   */
  export type PaymentInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentInfos.
     */
    data: PaymentInfoCreateManyInput | PaymentInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentInfo update
   */
  export type PaymentInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentInfo.
     */
    data: XOR<PaymentInfoUpdateInput, PaymentInfoUncheckedUpdateInput>
    /**
     * Choose, which PaymentInfo to update.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo updateMany
   */
  export type PaymentInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentInfos.
     */
    data: XOR<PaymentInfoUpdateManyMutationInput, PaymentInfoUncheckedUpdateManyInput>
    /**
     * Filter which PaymentInfos to update
     */
    where?: PaymentInfoWhereInput
    /**
     * Limit how many PaymentInfos to update.
     */
    limit?: number
  }

  /**
   * PaymentInfo updateManyAndReturn
   */
  export type PaymentInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * The data used to update PaymentInfos.
     */
    data: XOR<PaymentInfoUpdateManyMutationInput, PaymentInfoUncheckedUpdateManyInput>
    /**
     * Filter which PaymentInfos to update
     */
    where?: PaymentInfoWhereInput
    /**
     * Limit how many PaymentInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentInfo upsert
   */
  export type PaymentInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentInfo to update in case it exists.
     */
    where: PaymentInfoWhereUniqueInput
    /**
     * In case the PaymentInfo found by the `where` argument doesn't exist, create a new PaymentInfo with this data.
     */
    create: XOR<PaymentInfoCreateInput, PaymentInfoUncheckedCreateInput>
    /**
     * In case the PaymentInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentInfoUpdateInput, PaymentInfoUncheckedUpdateInput>
  }

  /**
   * PaymentInfo delete
   */
  export type PaymentInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
    /**
     * Filter which PaymentInfo to delete.
     */
    where: PaymentInfoWhereUniqueInput
  }

  /**
   * PaymentInfo deleteMany
   */
  export type PaymentInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentInfos to delete
     */
    where?: PaymentInfoWhereInput
    /**
     * Limit how many PaymentInfos to delete.
     */
    limit?: number
  }

  /**
   * PaymentInfo without action
   */
  export type PaymentInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentInfo
     */
    select?: PaymentInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentInfo
     */
    omit?: PaymentInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInfoInclude<ExtArgs> | null
  }


  /**
   * Model User1
   */

  export type AggregateUser1 = {
    _count: User1CountAggregateOutputType | null
    _min: User1MinAggregateOutputType | null
    _max: User1MaxAggregateOutputType | null
  }

  export type User1MinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type User1MaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    createdAt: Date | null
  }

  export type User1CountAggregateOutputType = {
    id: number
    name: number
    email: number
    createdAt: number
    _all: number
  }


  export type User1MinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type User1MaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
  }

  export type User1CountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    createdAt?: true
    _all?: true
  }

  export type User1AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User1 to aggregate.
     */
    where?: User1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User1s to fetch.
     */
    orderBy?: User1OrderByWithRelationInput | User1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: User1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned User1s
    **/
    _count?: true | User1CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User1MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User1MaxAggregateInputType
  }

  export type GetUser1AggregateType<T extends User1AggregateArgs> = {
        [P in keyof T & keyof AggregateUser1]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser1[P]>
      : GetScalarType<T[P], AggregateUser1[P]>
  }




  export type User1GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: User1WhereInput
    orderBy?: User1OrderByWithAggregationInput | User1OrderByWithAggregationInput[]
    by: User1ScalarFieldEnum[] | User1ScalarFieldEnum
    having?: User1ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User1CountAggregateInputType | true
    _min?: User1MinAggregateInputType
    _max?: User1MaxAggregateInputType
  }

  export type User1GroupByOutputType = {
    id: string
    name: string
    email: string
    createdAt: Date
    _count: User1CountAggregateOutputType | null
    _min: User1MinAggregateOutputType | null
    _max: User1MaxAggregateOutputType | null
  }

  type GetUser1GroupByPayload<T extends User1GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User1GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User1GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User1GroupByOutputType[P]>
            : GetScalarType<T[P], User1GroupByOutputType[P]>
        }
      >
    >


  export type User1Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user1"]>

  export type User1SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user1"]>

  export type User1SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user1"]>

  export type User1SelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    createdAt?: boolean
  }

  export type User1Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "createdAt", ExtArgs["result"]["user1"]>

  export type $User1Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User1"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      createdAt: Date
    }, ExtArgs["result"]["user1"]>
    composites: {}
  }

  type User1GetPayload<S extends boolean | null | undefined | User1DefaultArgs> = $Result.GetResult<Prisma.$User1Payload, S>

  type User1CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<User1FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User1CountAggregateInputType | true
    }

  export interface User1Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User1'], meta: { name: 'User1' } }
    /**
     * Find zero or one User1 that matches the filter.
     * @param {User1FindUniqueArgs} args - Arguments to find a User1
     * @example
     * // Get one User1
     * const user1 = await prisma.user1.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends User1FindUniqueArgs>(args: SelectSubset<T, User1FindUniqueArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User1 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {User1FindUniqueOrThrowArgs} args - Arguments to find a User1
     * @example
     * // Get one User1
     * const user1 = await prisma.user1.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends User1FindUniqueOrThrowArgs>(args: SelectSubset<T, User1FindUniqueOrThrowArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User1 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User1FindFirstArgs} args - Arguments to find a User1
     * @example
     * // Get one User1
     * const user1 = await prisma.user1.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends User1FindFirstArgs>(args?: SelectSubset<T, User1FindFirstArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User1 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User1FindFirstOrThrowArgs} args - Arguments to find a User1
     * @example
     * // Get one User1
     * const user1 = await prisma.user1.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends User1FindFirstOrThrowArgs>(args?: SelectSubset<T, User1FindFirstOrThrowArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User1s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User1FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User1s
     * const user1s = await prisma.user1.findMany()
     * 
     * // Get first 10 User1s
     * const user1s = await prisma.user1.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user1WithIdOnly = await prisma.user1.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends User1FindManyArgs>(args?: SelectSubset<T, User1FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User1.
     * @param {User1CreateArgs} args - Arguments to create a User1.
     * @example
     * // Create one User1
     * const User1 = await prisma.user1.create({
     *   data: {
     *     // ... data to create a User1
     *   }
     * })
     * 
     */
    create<T extends User1CreateArgs>(args: SelectSubset<T, User1CreateArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User1s.
     * @param {User1CreateManyArgs} args - Arguments to create many User1s.
     * @example
     * // Create many User1s
     * const user1 = await prisma.user1.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends User1CreateManyArgs>(args?: SelectSubset<T, User1CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User1s and returns the data saved in the database.
     * @param {User1CreateManyAndReturnArgs} args - Arguments to create many User1s.
     * @example
     * // Create many User1s
     * const user1 = await prisma.user1.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User1s and only return the `id`
     * const user1WithIdOnly = await prisma.user1.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends User1CreateManyAndReturnArgs>(args?: SelectSubset<T, User1CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User1.
     * @param {User1DeleteArgs} args - Arguments to delete one User1.
     * @example
     * // Delete one User1
     * const User1 = await prisma.user1.delete({
     *   where: {
     *     // ... filter to delete one User1
     *   }
     * })
     * 
     */
    delete<T extends User1DeleteArgs>(args: SelectSubset<T, User1DeleteArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User1.
     * @param {User1UpdateArgs} args - Arguments to update one User1.
     * @example
     * // Update one User1
     * const user1 = await prisma.user1.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends User1UpdateArgs>(args: SelectSubset<T, User1UpdateArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User1s.
     * @param {User1DeleteManyArgs} args - Arguments to filter User1s to delete.
     * @example
     * // Delete a few User1s
     * const { count } = await prisma.user1.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends User1DeleteManyArgs>(args?: SelectSubset<T, User1DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User1UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User1s
     * const user1 = await prisma.user1.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends User1UpdateManyArgs>(args: SelectSubset<T, User1UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User1s and returns the data updated in the database.
     * @param {User1UpdateManyAndReturnArgs} args - Arguments to update many User1s.
     * @example
     * // Update many User1s
     * const user1 = await prisma.user1.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User1s and only return the `id`
     * const user1WithIdOnly = await prisma.user1.updateManyAndReturn({
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
    updateManyAndReturn<T extends User1UpdateManyAndReturnArgs>(args: SelectSubset<T, User1UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User1.
     * @param {User1UpsertArgs} args - Arguments to update or create a User1.
     * @example
     * // Update or create a User1
     * const user1 = await prisma.user1.upsert({
     *   create: {
     *     // ... data to create a User1
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User1 we want to update
     *   }
     * })
     */
    upsert<T extends User1UpsertArgs>(args: SelectSubset<T, User1UpsertArgs<ExtArgs>>): Prisma__User1Client<$Result.GetResult<Prisma.$User1Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User1s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User1CountArgs} args - Arguments to filter User1s to count.
     * @example
     * // Count the number of User1s
     * const count = await prisma.user1.count({
     *   where: {
     *     // ... the filter for the User1s we want to count
     *   }
     * })
    **/
    count<T extends User1CountArgs>(
      args?: Subset<T, User1CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User1CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User1AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User1AggregateArgs>(args: Subset<T, User1AggregateArgs>): Prisma.PrismaPromise<GetUser1AggregateType<T>>

    /**
     * Group by User1.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User1GroupByArgs} args - Group by arguments.
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
      T extends User1GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: User1GroupByArgs['orderBy'] }
        : { orderBy?: User1GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, User1GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser1GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User1 model
   */
  readonly fields: User1FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User1.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__User1Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User1 model
   */
  interface User1FieldRefs {
    readonly id: FieldRef<"User1", 'String'>
    readonly name: FieldRef<"User1", 'String'>
    readonly email: FieldRef<"User1", 'String'>
    readonly createdAt: FieldRef<"User1", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User1 findUnique
   */
  export type User1FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * Filter, which User1 to fetch.
     */
    where: User1WhereUniqueInput
  }

  /**
   * User1 findUniqueOrThrow
   */
  export type User1FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * Filter, which User1 to fetch.
     */
    where: User1WhereUniqueInput
  }

  /**
   * User1 findFirst
   */
  export type User1FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * Filter, which User1 to fetch.
     */
    where?: User1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User1s to fetch.
     */
    orderBy?: User1OrderByWithRelationInput | User1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User1s.
     */
    cursor?: User1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User1s.
     */
    distinct?: User1ScalarFieldEnum | User1ScalarFieldEnum[]
  }

  /**
   * User1 findFirstOrThrow
   */
  export type User1FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * Filter, which User1 to fetch.
     */
    where?: User1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User1s to fetch.
     */
    orderBy?: User1OrderByWithRelationInput | User1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for User1s.
     */
    cursor?: User1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User1s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of User1s.
     */
    distinct?: User1ScalarFieldEnum | User1ScalarFieldEnum[]
  }

  /**
   * User1 findMany
   */
  export type User1FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * Filter, which User1s to fetch.
     */
    where?: User1WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of User1s to fetch.
     */
    orderBy?: User1OrderByWithRelationInput | User1OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing User1s.
     */
    cursor?: User1WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` User1s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` User1s.
     */
    skip?: number
    distinct?: User1ScalarFieldEnum | User1ScalarFieldEnum[]
  }

  /**
   * User1 create
   */
  export type User1CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * The data needed to create a User1.
     */
    data: XOR<User1CreateInput, User1UncheckedCreateInput>
  }

  /**
   * User1 createMany
   */
  export type User1CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many User1s.
     */
    data: User1CreateManyInput | User1CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User1 createManyAndReturn
   */
  export type User1CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * The data used to create many User1s.
     */
    data: User1CreateManyInput | User1CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User1 update
   */
  export type User1UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * The data needed to update a User1.
     */
    data: XOR<User1UpdateInput, User1UncheckedUpdateInput>
    /**
     * Choose, which User1 to update.
     */
    where: User1WhereUniqueInput
  }

  /**
   * User1 updateMany
   */
  export type User1UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update User1s.
     */
    data: XOR<User1UpdateManyMutationInput, User1UncheckedUpdateManyInput>
    /**
     * Filter which User1s to update
     */
    where?: User1WhereInput
    /**
     * Limit how many User1s to update.
     */
    limit?: number
  }

  /**
   * User1 updateManyAndReturn
   */
  export type User1UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * The data used to update User1s.
     */
    data: XOR<User1UpdateManyMutationInput, User1UncheckedUpdateManyInput>
    /**
     * Filter which User1s to update
     */
    where?: User1WhereInput
    /**
     * Limit how many User1s to update.
     */
    limit?: number
  }

  /**
   * User1 upsert
   */
  export type User1UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * The filter to search for the User1 to update in case it exists.
     */
    where: User1WhereUniqueInput
    /**
     * In case the User1 found by the `where` argument doesn't exist, create a new User1 with this data.
     */
    create: XOR<User1CreateInput, User1UncheckedCreateInput>
    /**
     * In case the User1 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<User1UpdateInput, User1UncheckedUpdateInput>
  }

  /**
   * User1 delete
   */
  export type User1DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
    /**
     * Filter which User1 to delete.
     */
    where: User1WhereUniqueInput
  }

  /**
   * User1 deleteMany
   */
  export type User1DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User1s to delete
     */
    where?: User1WhereInput
    /**
     * Limit how many User1s to delete.
     */
    limit?: number
  }

  /**
   * User1 without action
   */
  export type User1DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User1
     */
    select?: User1Select<ExtArgs> | null
    /**
     * Omit specific fields from the User1
     */
    omit?: User1Omit<ExtArgs> | null
  }


  /**
   * Model WrittenExam
   */

  export type AggregateWrittenExam = {
    _count: WrittenExamCountAggregateOutputType | null
    _avg: WrittenExamAvgAggregateOutputType | null
    _sum: WrittenExamSumAggregateOutputType | null
    _min: WrittenExamMinAggregateOutputType | null
    _max: WrittenExamMaxAggregateOutputType | null
  }

  export type WrittenExamAvgAggregateOutputType = {
    id: number | null
    attemptNo: number | null
    passAttemptNo: number | null
  }

  export type WrittenExamSumAggregateOutputType = {
    id: number | null
    attemptNo: number | null
    passAttemptNo: number | null
  }

  export type WrittenExamMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    barCode: string | null
    examDate: Date | null
    result: $Enums.ExamResult | null
    attemptNo: number | null
    createdAt: Date | null
    notes: string | null
    passAttemptNo: number | null
    passDate: Date | null
    passWithText: string | null
  }

  export type WrittenExamMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    barCode: string | null
    examDate: Date | null
    result: $Enums.ExamResult | null
    attemptNo: number | null
    createdAt: Date | null
    notes: string | null
    passAttemptNo: number | null
    passDate: Date | null
    passWithText: string | null
  }

  export type WrittenExamCountAggregateOutputType = {
    id: number
    applicationId: number
    barCode: number
    examDate: number
    result: number
    attemptNo: number
    createdAt: number
    notes: number
    passAttemptNo: number
    passDate: number
    passWithText: number
    _all: number
  }


  export type WrittenExamAvgAggregateInputType = {
    id?: true
    attemptNo?: true
    passAttemptNo?: true
  }

  export type WrittenExamSumAggregateInputType = {
    id?: true
    attemptNo?: true
    passAttemptNo?: true
  }

  export type WrittenExamMinAggregateInputType = {
    id?: true
    applicationId?: true
    barCode?: true
    examDate?: true
    result?: true
    attemptNo?: true
    createdAt?: true
    notes?: true
    passAttemptNo?: true
    passDate?: true
    passWithText?: true
  }

  export type WrittenExamMaxAggregateInputType = {
    id?: true
    applicationId?: true
    barCode?: true
    examDate?: true
    result?: true
    attemptNo?: true
    createdAt?: true
    notes?: true
    passAttemptNo?: true
    passDate?: true
    passWithText?: true
  }

  export type WrittenExamCountAggregateInputType = {
    id?: true
    applicationId?: true
    barCode?: true
    examDate?: true
    result?: true
    attemptNo?: true
    createdAt?: true
    notes?: true
    passAttemptNo?: true
    passDate?: true
    passWithText?: true
    _all?: true
  }

  export type WrittenExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WrittenExam to aggregate.
     */
    where?: WrittenExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenExams to fetch.
     */
    orderBy?: WrittenExamOrderByWithRelationInput | WrittenExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WrittenExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WrittenExams
    **/
    _count?: true | WrittenExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WrittenExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WrittenExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WrittenExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WrittenExamMaxAggregateInputType
  }

  export type GetWrittenExamAggregateType<T extends WrittenExamAggregateArgs> = {
        [P in keyof T & keyof AggregateWrittenExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWrittenExam[P]>
      : GetScalarType<T[P], AggregateWrittenExam[P]>
  }




  export type WrittenExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WrittenExamWhereInput
    orderBy?: WrittenExamOrderByWithAggregationInput | WrittenExamOrderByWithAggregationInput[]
    by: WrittenExamScalarFieldEnum[] | WrittenExamScalarFieldEnum
    having?: WrittenExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WrittenExamCountAggregateInputType | true
    _avg?: WrittenExamAvgAggregateInputType
    _sum?: WrittenExamSumAggregateInputType
    _min?: WrittenExamMinAggregateInputType
    _max?: WrittenExamMaxAggregateInputType
  }

  export type WrittenExamGroupByOutputType = {
    id: number
    applicationId: string
    barCode: string
    examDate: Date
    result: $Enums.ExamResult
    attemptNo: number
    createdAt: Date
    notes: string | null
    passAttemptNo: number | null
    passDate: Date | null
    passWithText: string | null
    _count: WrittenExamCountAggregateOutputType | null
    _avg: WrittenExamAvgAggregateOutputType | null
    _sum: WrittenExamSumAggregateOutputType | null
    _min: WrittenExamMinAggregateOutputType | null
    _max: WrittenExamMaxAggregateOutputType | null
  }

  type GetWrittenExamGroupByPayload<T extends WrittenExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WrittenExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WrittenExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WrittenExamGroupByOutputType[P]>
            : GetScalarType<T[P], WrittenExamGroupByOutputType[P]>
        }
      >
    >


  export type WrittenExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    barCode?: boolean
    examDate?: boolean
    result?: boolean
    attemptNo?: boolean
    createdAt?: boolean
    notes?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writtenExam"]>

  export type WrittenExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    barCode?: boolean
    examDate?: boolean
    result?: boolean
    attemptNo?: boolean
    createdAt?: boolean
    notes?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writtenExam"]>

  export type WrittenExamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    barCode?: boolean
    examDate?: boolean
    result?: boolean
    attemptNo?: boolean
    createdAt?: boolean
    notes?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["writtenExam"]>

  export type WrittenExamSelectScalar = {
    id?: boolean
    applicationId?: boolean
    barCode?: boolean
    examDate?: boolean
    result?: boolean
    attemptNo?: boolean
    createdAt?: boolean
    notes?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
  }

  export type WrittenExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "barCode" | "examDate" | "result" | "attemptNo" | "createdAt" | "notes" | "passAttemptNo" | "passDate" | "passWithText", ExtArgs["result"]["writtenExam"]>
  export type WrittenExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type WrittenExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type WrittenExamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }

  export type $WrittenExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WrittenExam"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      barCode: string
      examDate: Date
      result: $Enums.ExamResult
      attemptNo: number
      createdAt: Date
      notes: string | null
      passAttemptNo: number | null
      passDate: Date | null
      passWithText: string | null
    }, ExtArgs["result"]["writtenExam"]>
    composites: {}
  }

  type WrittenExamGetPayload<S extends boolean | null | undefined | WrittenExamDefaultArgs> = $Result.GetResult<Prisma.$WrittenExamPayload, S>

  type WrittenExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WrittenExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WrittenExamCountAggregateInputType | true
    }

  export interface WrittenExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WrittenExam'], meta: { name: 'WrittenExam' } }
    /**
     * Find zero or one WrittenExam that matches the filter.
     * @param {WrittenExamFindUniqueArgs} args - Arguments to find a WrittenExam
     * @example
     * // Get one WrittenExam
     * const writtenExam = await prisma.writtenExam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WrittenExamFindUniqueArgs>(args: SelectSubset<T, WrittenExamFindUniqueArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WrittenExam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WrittenExamFindUniqueOrThrowArgs} args - Arguments to find a WrittenExam
     * @example
     * // Get one WrittenExam
     * const writtenExam = await prisma.writtenExam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WrittenExamFindUniqueOrThrowArgs>(args: SelectSubset<T, WrittenExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WrittenExam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenExamFindFirstArgs} args - Arguments to find a WrittenExam
     * @example
     * // Get one WrittenExam
     * const writtenExam = await prisma.writtenExam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WrittenExamFindFirstArgs>(args?: SelectSubset<T, WrittenExamFindFirstArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WrittenExam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenExamFindFirstOrThrowArgs} args - Arguments to find a WrittenExam
     * @example
     * // Get one WrittenExam
     * const writtenExam = await prisma.writtenExam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WrittenExamFindFirstOrThrowArgs>(args?: SelectSubset<T, WrittenExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WrittenExams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WrittenExams
     * const writtenExams = await prisma.writtenExam.findMany()
     * 
     * // Get first 10 WrittenExams
     * const writtenExams = await prisma.writtenExam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const writtenExamWithIdOnly = await prisma.writtenExam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WrittenExamFindManyArgs>(args?: SelectSubset<T, WrittenExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WrittenExam.
     * @param {WrittenExamCreateArgs} args - Arguments to create a WrittenExam.
     * @example
     * // Create one WrittenExam
     * const WrittenExam = await prisma.writtenExam.create({
     *   data: {
     *     // ... data to create a WrittenExam
     *   }
     * })
     * 
     */
    create<T extends WrittenExamCreateArgs>(args: SelectSubset<T, WrittenExamCreateArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WrittenExams.
     * @param {WrittenExamCreateManyArgs} args - Arguments to create many WrittenExams.
     * @example
     * // Create many WrittenExams
     * const writtenExam = await prisma.writtenExam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WrittenExamCreateManyArgs>(args?: SelectSubset<T, WrittenExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WrittenExams and returns the data saved in the database.
     * @param {WrittenExamCreateManyAndReturnArgs} args - Arguments to create many WrittenExams.
     * @example
     * // Create many WrittenExams
     * const writtenExam = await prisma.writtenExam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WrittenExams and only return the `id`
     * const writtenExamWithIdOnly = await prisma.writtenExam.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WrittenExamCreateManyAndReturnArgs>(args?: SelectSubset<T, WrittenExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WrittenExam.
     * @param {WrittenExamDeleteArgs} args - Arguments to delete one WrittenExam.
     * @example
     * // Delete one WrittenExam
     * const WrittenExam = await prisma.writtenExam.delete({
     *   where: {
     *     // ... filter to delete one WrittenExam
     *   }
     * })
     * 
     */
    delete<T extends WrittenExamDeleteArgs>(args: SelectSubset<T, WrittenExamDeleteArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WrittenExam.
     * @param {WrittenExamUpdateArgs} args - Arguments to update one WrittenExam.
     * @example
     * // Update one WrittenExam
     * const writtenExam = await prisma.writtenExam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WrittenExamUpdateArgs>(args: SelectSubset<T, WrittenExamUpdateArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WrittenExams.
     * @param {WrittenExamDeleteManyArgs} args - Arguments to filter WrittenExams to delete.
     * @example
     * // Delete a few WrittenExams
     * const { count } = await prisma.writtenExam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WrittenExamDeleteManyArgs>(args?: SelectSubset<T, WrittenExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WrittenExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WrittenExams
     * const writtenExam = await prisma.writtenExam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WrittenExamUpdateManyArgs>(args: SelectSubset<T, WrittenExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WrittenExams and returns the data updated in the database.
     * @param {WrittenExamUpdateManyAndReturnArgs} args - Arguments to update many WrittenExams.
     * @example
     * // Update many WrittenExams
     * const writtenExam = await prisma.writtenExam.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WrittenExams and only return the `id`
     * const writtenExamWithIdOnly = await prisma.writtenExam.updateManyAndReturn({
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
    updateManyAndReturn<T extends WrittenExamUpdateManyAndReturnArgs>(args: SelectSubset<T, WrittenExamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WrittenExam.
     * @param {WrittenExamUpsertArgs} args - Arguments to update or create a WrittenExam.
     * @example
     * // Update or create a WrittenExam
     * const writtenExam = await prisma.writtenExam.upsert({
     *   create: {
     *     // ... data to create a WrittenExam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WrittenExam we want to update
     *   }
     * })
     */
    upsert<T extends WrittenExamUpsertArgs>(args: SelectSubset<T, WrittenExamUpsertArgs<ExtArgs>>): Prisma__WrittenExamClient<$Result.GetResult<Prisma.$WrittenExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WrittenExams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenExamCountArgs} args - Arguments to filter WrittenExams to count.
     * @example
     * // Count the number of WrittenExams
     * const count = await prisma.writtenExam.count({
     *   where: {
     *     // ... the filter for the WrittenExams we want to count
     *   }
     * })
    **/
    count<T extends WrittenExamCountArgs>(
      args?: Subset<T, WrittenExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WrittenExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WrittenExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WrittenExamAggregateArgs>(args: Subset<T, WrittenExamAggregateArgs>): Prisma.PrismaPromise<GetWrittenExamAggregateType<T>>

    /**
     * Group by WrittenExam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WrittenExamGroupByArgs} args - Group by arguments.
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
      T extends WrittenExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WrittenExamGroupByArgs['orderBy'] }
        : { orderBy?: WrittenExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WrittenExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWrittenExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WrittenExam model
   */
  readonly fields: WrittenExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WrittenExam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WrittenExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WrittenExam model
   */
  interface WrittenExamFieldRefs {
    readonly id: FieldRef<"WrittenExam", 'Int'>
    readonly applicationId: FieldRef<"WrittenExam", 'String'>
    readonly barCode: FieldRef<"WrittenExam", 'String'>
    readonly examDate: FieldRef<"WrittenExam", 'DateTime'>
    readonly result: FieldRef<"WrittenExam", 'ExamResult'>
    readonly attemptNo: FieldRef<"WrittenExam", 'Int'>
    readonly createdAt: FieldRef<"WrittenExam", 'DateTime'>
    readonly notes: FieldRef<"WrittenExam", 'String'>
    readonly passAttemptNo: FieldRef<"WrittenExam", 'Int'>
    readonly passDate: FieldRef<"WrittenExam", 'DateTime'>
    readonly passWithText: FieldRef<"WrittenExam", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WrittenExam findUnique
   */
  export type WrittenExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * Filter, which WrittenExam to fetch.
     */
    where: WrittenExamWhereUniqueInput
  }

  /**
   * WrittenExam findUniqueOrThrow
   */
  export type WrittenExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * Filter, which WrittenExam to fetch.
     */
    where: WrittenExamWhereUniqueInput
  }

  /**
   * WrittenExam findFirst
   */
  export type WrittenExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * Filter, which WrittenExam to fetch.
     */
    where?: WrittenExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenExams to fetch.
     */
    orderBy?: WrittenExamOrderByWithRelationInput | WrittenExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WrittenExams.
     */
    cursor?: WrittenExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WrittenExams.
     */
    distinct?: WrittenExamScalarFieldEnum | WrittenExamScalarFieldEnum[]
  }

  /**
   * WrittenExam findFirstOrThrow
   */
  export type WrittenExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * Filter, which WrittenExam to fetch.
     */
    where?: WrittenExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenExams to fetch.
     */
    orderBy?: WrittenExamOrderByWithRelationInput | WrittenExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WrittenExams.
     */
    cursor?: WrittenExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenExams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WrittenExams.
     */
    distinct?: WrittenExamScalarFieldEnum | WrittenExamScalarFieldEnum[]
  }

  /**
   * WrittenExam findMany
   */
  export type WrittenExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * Filter, which WrittenExams to fetch.
     */
    where?: WrittenExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WrittenExams to fetch.
     */
    orderBy?: WrittenExamOrderByWithRelationInput | WrittenExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WrittenExams.
     */
    cursor?: WrittenExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WrittenExams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WrittenExams.
     */
    skip?: number
    distinct?: WrittenExamScalarFieldEnum | WrittenExamScalarFieldEnum[]
  }

  /**
   * WrittenExam create
   */
  export type WrittenExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * The data needed to create a WrittenExam.
     */
    data: XOR<WrittenExamCreateInput, WrittenExamUncheckedCreateInput>
  }

  /**
   * WrittenExam createMany
   */
  export type WrittenExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WrittenExams.
     */
    data: WrittenExamCreateManyInput | WrittenExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WrittenExam createManyAndReturn
   */
  export type WrittenExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * The data used to create many WrittenExams.
     */
    data: WrittenExamCreateManyInput | WrittenExamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WrittenExam update
   */
  export type WrittenExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * The data needed to update a WrittenExam.
     */
    data: XOR<WrittenExamUpdateInput, WrittenExamUncheckedUpdateInput>
    /**
     * Choose, which WrittenExam to update.
     */
    where: WrittenExamWhereUniqueInput
  }

  /**
   * WrittenExam updateMany
   */
  export type WrittenExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WrittenExams.
     */
    data: XOR<WrittenExamUpdateManyMutationInput, WrittenExamUncheckedUpdateManyInput>
    /**
     * Filter which WrittenExams to update
     */
    where?: WrittenExamWhereInput
    /**
     * Limit how many WrittenExams to update.
     */
    limit?: number
  }

  /**
   * WrittenExam updateManyAndReturn
   */
  export type WrittenExamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * The data used to update WrittenExams.
     */
    data: XOR<WrittenExamUpdateManyMutationInput, WrittenExamUncheckedUpdateManyInput>
    /**
     * Filter which WrittenExams to update
     */
    where?: WrittenExamWhereInput
    /**
     * Limit how many WrittenExams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WrittenExam upsert
   */
  export type WrittenExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * The filter to search for the WrittenExam to update in case it exists.
     */
    where: WrittenExamWhereUniqueInput
    /**
     * In case the WrittenExam found by the `where` argument doesn't exist, create a new WrittenExam with this data.
     */
    create: XOR<WrittenExamCreateInput, WrittenExamUncheckedCreateInput>
    /**
     * In case the WrittenExam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WrittenExamUpdateInput, WrittenExamUncheckedUpdateInput>
  }

  /**
   * WrittenExam delete
   */
  export type WrittenExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
    /**
     * Filter which WrittenExam to delete.
     */
    where: WrittenExamWhereUniqueInput
  }

  /**
   * WrittenExam deleteMany
   */
  export type WrittenExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WrittenExams to delete
     */
    where?: WrittenExamWhereInput
    /**
     * Limit how many WrittenExams to delete.
     */
    limit?: number
  }

  /**
   * WrittenExam without action
   */
  export type WrittenExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WrittenExam
     */
    select?: WrittenExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WrittenExam
     */
    omit?: WrittenExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WrittenExamInclude<ExtArgs> | null
  }


  /**
   * Model DrivingExamResult
   */

  export type AggregateDrivingExamResult = {
    _count: DrivingExamResultCountAggregateOutputType | null
    _avg: DrivingExamResultAvgAggregateOutputType | null
    _sum: DrivingExamResultSumAggregateOutputType | null
    _min: DrivingExamResultMinAggregateOutputType | null
    _max: DrivingExamResultMaxAggregateOutputType | null
  }

  export type DrivingExamResultAvgAggregateOutputType = {
    id: number | null
    vehicleClassId: number | null
    passAttemptNo: number | null
  }

  export type DrivingExamResultSumAggregateOutputType = {
    id: number | null
    vehicleClassId: number | null
    passAttemptNo: number | null
  }

  export type DrivingExamResultMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    vehicleClassId: number | null
    result: $Enums.DrivingExamResultStatus | null
    notes: string | null
    examDate: Date | null
    trainedDates: string | null
    createdAt: Date | null
    passAttemptNo: number | null
    passDate: Date | null
    passWithText: string | null
  }

  export type DrivingExamResultMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    vehicleClassId: number | null
    result: $Enums.DrivingExamResultStatus | null
    notes: string | null
    examDate: Date | null
    trainedDates: string | null
    createdAt: Date | null
    passAttemptNo: number | null
    passDate: Date | null
    passWithText: string | null
  }

  export type DrivingExamResultCountAggregateOutputType = {
    id: number
    applicationId: number
    vehicleClassId: number
    result: number
    notes: number
    examDate: number
    trainedDates: number
    createdAt: number
    passAttemptNo: number
    passDate: number
    passWithText: number
    _all: number
  }


  export type DrivingExamResultAvgAggregateInputType = {
    id?: true
    vehicleClassId?: true
    passAttemptNo?: true
  }

  export type DrivingExamResultSumAggregateInputType = {
    id?: true
    vehicleClassId?: true
    passAttemptNo?: true
  }

  export type DrivingExamResultMinAggregateInputType = {
    id?: true
    applicationId?: true
    vehicleClassId?: true
    result?: true
    notes?: true
    examDate?: true
    trainedDates?: true
    createdAt?: true
    passAttemptNo?: true
    passDate?: true
    passWithText?: true
  }

  export type DrivingExamResultMaxAggregateInputType = {
    id?: true
    applicationId?: true
    vehicleClassId?: true
    result?: true
    notes?: true
    examDate?: true
    trainedDates?: true
    createdAt?: true
    passAttemptNo?: true
    passDate?: true
    passWithText?: true
  }

  export type DrivingExamResultCountAggregateInputType = {
    id?: true
    applicationId?: true
    vehicleClassId?: true
    result?: true
    notes?: true
    examDate?: true
    trainedDates?: true
    createdAt?: true
    passAttemptNo?: true
    passDate?: true
    passWithText?: true
    _all?: true
  }

  export type DrivingExamResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrivingExamResult to aggregate.
     */
    where?: DrivingExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingExamResults to fetch.
     */
    orderBy?: DrivingExamResultOrderByWithRelationInput | DrivingExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DrivingExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DrivingExamResults
    **/
    _count?: true | DrivingExamResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DrivingExamResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DrivingExamResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DrivingExamResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DrivingExamResultMaxAggregateInputType
  }

  export type GetDrivingExamResultAggregateType<T extends DrivingExamResultAggregateArgs> = {
        [P in keyof T & keyof AggregateDrivingExamResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrivingExamResult[P]>
      : GetScalarType<T[P], AggregateDrivingExamResult[P]>
  }




  export type DrivingExamResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DrivingExamResultWhereInput
    orderBy?: DrivingExamResultOrderByWithAggregationInput | DrivingExamResultOrderByWithAggregationInput[]
    by: DrivingExamResultScalarFieldEnum[] | DrivingExamResultScalarFieldEnum
    having?: DrivingExamResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DrivingExamResultCountAggregateInputType | true
    _avg?: DrivingExamResultAvgAggregateInputType
    _sum?: DrivingExamResultSumAggregateInputType
    _min?: DrivingExamResultMinAggregateInputType
    _max?: DrivingExamResultMaxAggregateInputType
  }

  export type DrivingExamResultGroupByOutputType = {
    id: number
    applicationId: string
    vehicleClassId: number
    result: $Enums.DrivingExamResultStatus
    notes: string | null
    examDate: Date | null
    trainedDates: string
    createdAt: Date
    passAttemptNo: number | null
    passDate: Date | null
    passWithText: string | null
    _count: DrivingExamResultCountAggregateOutputType | null
    _avg: DrivingExamResultAvgAggregateOutputType | null
    _sum: DrivingExamResultSumAggregateOutputType | null
    _min: DrivingExamResultMinAggregateOutputType | null
    _max: DrivingExamResultMaxAggregateOutputType | null
  }

  type GetDrivingExamResultGroupByPayload<T extends DrivingExamResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DrivingExamResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DrivingExamResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DrivingExamResultGroupByOutputType[P]>
            : GetScalarType<T[P], DrivingExamResultGroupByOutputType[P]>
        }
      >
    >


  export type DrivingExamResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
    result?: boolean
    notes?: boolean
    examDate?: boolean
    trainedDates?: boolean
    createdAt?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivingExamResult"]>

  export type DrivingExamResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
    result?: boolean
    notes?: boolean
    examDate?: boolean
    trainedDates?: boolean
    createdAt?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivingExamResult"]>

  export type DrivingExamResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
    result?: boolean
    notes?: boolean
    examDate?: boolean
    trainedDates?: boolean
    createdAt?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivingExamResult"]>

  export type DrivingExamResultSelectScalar = {
    id?: boolean
    applicationId?: boolean
    vehicleClassId?: boolean
    result?: boolean
    notes?: boolean
    examDate?: boolean
    trainedDates?: boolean
    createdAt?: boolean
    passAttemptNo?: boolean
    passDate?: boolean
    passWithText?: boolean
  }

  export type DrivingExamResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "vehicleClassId" | "result" | "notes" | "examDate" | "trainedDates" | "createdAt" | "passAttemptNo" | "passDate" | "passWithText", ExtArgs["result"]["drivingExamResult"]>
  export type DrivingExamResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }
  export type DrivingExamResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }
  export type DrivingExamResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | VehicleClassDefaultArgs<ExtArgs>
  }

  export type $DrivingExamResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DrivingExamResult"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
      vehicleClass: Prisma.$VehicleClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      vehicleClassId: number
      result: $Enums.DrivingExamResultStatus
      notes: string | null
      examDate: Date | null
      trainedDates: string
      createdAt: Date
      passAttemptNo: number | null
      passDate: Date | null
      passWithText: string | null
    }, ExtArgs["result"]["drivingExamResult"]>
    composites: {}
  }

  type DrivingExamResultGetPayload<S extends boolean | null | undefined | DrivingExamResultDefaultArgs> = $Result.GetResult<Prisma.$DrivingExamResultPayload, S>

  type DrivingExamResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DrivingExamResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DrivingExamResultCountAggregateInputType | true
    }

  export interface DrivingExamResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DrivingExamResult'], meta: { name: 'DrivingExamResult' } }
    /**
     * Find zero or one DrivingExamResult that matches the filter.
     * @param {DrivingExamResultFindUniqueArgs} args - Arguments to find a DrivingExamResult
     * @example
     * // Get one DrivingExamResult
     * const drivingExamResult = await prisma.drivingExamResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DrivingExamResultFindUniqueArgs>(args: SelectSubset<T, DrivingExamResultFindUniqueArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DrivingExamResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DrivingExamResultFindUniqueOrThrowArgs} args - Arguments to find a DrivingExamResult
     * @example
     * // Get one DrivingExamResult
     * const drivingExamResult = await prisma.drivingExamResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DrivingExamResultFindUniqueOrThrowArgs>(args: SelectSubset<T, DrivingExamResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrivingExamResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingExamResultFindFirstArgs} args - Arguments to find a DrivingExamResult
     * @example
     * // Get one DrivingExamResult
     * const drivingExamResult = await prisma.drivingExamResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DrivingExamResultFindFirstArgs>(args?: SelectSubset<T, DrivingExamResultFindFirstArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DrivingExamResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingExamResultFindFirstOrThrowArgs} args - Arguments to find a DrivingExamResult
     * @example
     * // Get one DrivingExamResult
     * const drivingExamResult = await prisma.drivingExamResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DrivingExamResultFindFirstOrThrowArgs>(args?: SelectSubset<T, DrivingExamResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DrivingExamResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingExamResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DrivingExamResults
     * const drivingExamResults = await prisma.drivingExamResult.findMany()
     * 
     * // Get first 10 DrivingExamResults
     * const drivingExamResults = await prisma.drivingExamResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const drivingExamResultWithIdOnly = await prisma.drivingExamResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DrivingExamResultFindManyArgs>(args?: SelectSubset<T, DrivingExamResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DrivingExamResult.
     * @param {DrivingExamResultCreateArgs} args - Arguments to create a DrivingExamResult.
     * @example
     * // Create one DrivingExamResult
     * const DrivingExamResult = await prisma.drivingExamResult.create({
     *   data: {
     *     // ... data to create a DrivingExamResult
     *   }
     * })
     * 
     */
    create<T extends DrivingExamResultCreateArgs>(args: SelectSubset<T, DrivingExamResultCreateArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DrivingExamResults.
     * @param {DrivingExamResultCreateManyArgs} args - Arguments to create many DrivingExamResults.
     * @example
     * // Create many DrivingExamResults
     * const drivingExamResult = await prisma.drivingExamResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DrivingExamResultCreateManyArgs>(args?: SelectSubset<T, DrivingExamResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DrivingExamResults and returns the data saved in the database.
     * @param {DrivingExamResultCreateManyAndReturnArgs} args - Arguments to create many DrivingExamResults.
     * @example
     * // Create many DrivingExamResults
     * const drivingExamResult = await prisma.drivingExamResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DrivingExamResults and only return the `id`
     * const drivingExamResultWithIdOnly = await prisma.drivingExamResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DrivingExamResultCreateManyAndReturnArgs>(args?: SelectSubset<T, DrivingExamResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DrivingExamResult.
     * @param {DrivingExamResultDeleteArgs} args - Arguments to delete one DrivingExamResult.
     * @example
     * // Delete one DrivingExamResult
     * const DrivingExamResult = await prisma.drivingExamResult.delete({
     *   where: {
     *     // ... filter to delete one DrivingExamResult
     *   }
     * })
     * 
     */
    delete<T extends DrivingExamResultDeleteArgs>(args: SelectSubset<T, DrivingExamResultDeleteArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DrivingExamResult.
     * @param {DrivingExamResultUpdateArgs} args - Arguments to update one DrivingExamResult.
     * @example
     * // Update one DrivingExamResult
     * const drivingExamResult = await prisma.drivingExamResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DrivingExamResultUpdateArgs>(args: SelectSubset<T, DrivingExamResultUpdateArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DrivingExamResults.
     * @param {DrivingExamResultDeleteManyArgs} args - Arguments to filter DrivingExamResults to delete.
     * @example
     * // Delete a few DrivingExamResults
     * const { count } = await prisma.drivingExamResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DrivingExamResultDeleteManyArgs>(args?: SelectSubset<T, DrivingExamResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrivingExamResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingExamResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DrivingExamResults
     * const drivingExamResult = await prisma.drivingExamResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DrivingExamResultUpdateManyArgs>(args: SelectSubset<T, DrivingExamResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DrivingExamResults and returns the data updated in the database.
     * @param {DrivingExamResultUpdateManyAndReturnArgs} args - Arguments to update many DrivingExamResults.
     * @example
     * // Update many DrivingExamResults
     * const drivingExamResult = await prisma.drivingExamResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DrivingExamResults and only return the `id`
     * const drivingExamResultWithIdOnly = await prisma.drivingExamResult.updateManyAndReturn({
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
    updateManyAndReturn<T extends DrivingExamResultUpdateManyAndReturnArgs>(args: SelectSubset<T, DrivingExamResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DrivingExamResult.
     * @param {DrivingExamResultUpsertArgs} args - Arguments to update or create a DrivingExamResult.
     * @example
     * // Update or create a DrivingExamResult
     * const drivingExamResult = await prisma.drivingExamResult.upsert({
     *   create: {
     *     // ... data to create a DrivingExamResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DrivingExamResult we want to update
     *   }
     * })
     */
    upsert<T extends DrivingExamResultUpsertArgs>(args: SelectSubset<T, DrivingExamResultUpsertArgs<ExtArgs>>): Prisma__DrivingExamResultClient<$Result.GetResult<Prisma.$DrivingExamResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DrivingExamResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingExamResultCountArgs} args - Arguments to filter DrivingExamResults to count.
     * @example
     * // Count the number of DrivingExamResults
     * const count = await prisma.drivingExamResult.count({
     *   where: {
     *     // ... the filter for the DrivingExamResults we want to count
     *   }
     * })
    **/
    count<T extends DrivingExamResultCountArgs>(
      args?: Subset<T, DrivingExamResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DrivingExamResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DrivingExamResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingExamResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DrivingExamResultAggregateArgs>(args: Subset<T, DrivingExamResultAggregateArgs>): Prisma.PrismaPromise<GetDrivingExamResultAggregateType<T>>

    /**
     * Group by DrivingExamResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DrivingExamResultGroupByArgs} args - Group by arguments.
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
      T extends DrivingExamResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DrivingExamResultGroupByArgs['orderBy'] }
        : { orderBy?: DrivingExamResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DrivingExamResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDrivingExamResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DrivingExamResult model
   */
  readonly fields: DrivingExamResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DrivingExamResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DrivingExamResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicleClass<T extends VehicleClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleClassDefaultArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DrivingExamResult model
   */
  interface DrivingExamResultFieldRefs {
    readonly id: FieldRef<"DrivingExamResult", 'Int'>
    readonly applicationId: FieldRef<"DrivingExamResult", 'String'>
    readonly vehicleClassId: FieldRef<"DrivingExamResult", 'Int'>
    readonly result: FieldRef<"DrivingExamResult", 'DrivingExamResultStatus'>
    readonly notes: FieldRef<"DrivingExamResult", 'String'>
    readonly examDate: FieldRef<"DrivingExamResult", 'DateTime'>
    readonly trainedDates: FieldRef<"DrivingExamResult", 'String'>
    readonly createdAt: FieldRef<"DrivingExamResult", 'DateTime'>
    readonly passAttemptNo: FieldRef<"DrivingExamResult", 'Int'>
    readonly passDate: FieldRef<"DrivingExamResult", 'DateTime'>
    readonly passWithText: FieldRef<"DrivingExamResult", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DrivingExamResult findUnique
   */
  export type DrivingExamResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * Filter, which DrivingExamResult to fetch.
     */
    where: DrivingExamResultWhereUniqueInput
  }

  /**
   * DrivingExamResult findUniqueOrThrow
   */
  export type DrivingExamResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * Filter, which DrivingExamResult to fetch.
     */
    where: DrivingExamResultWhereUniqueInput
  }

  /**
   * DrivingExamResult findFirst
   */
  export type DrivingExamResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * Filter, which DrivingExamResult to fetch.
     */
    where?: DrivingExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingExamResults to fetch.
     */
    orderBy?: DrivingExamResultOrderByWithRelationInput | DrivingExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrivingExamResults.
     */
    cursor?: DrivingExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrivingExamResults.
     */
    distinct?: DrivingExamResultScalarFieldEnum | DrivingExamResultScalarFieldEnum[]
  }

  /**
   * DrivingExamResult findFirstOrThrow
   */
  export type DrivingExamResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * Filter, which DrivingExamResult to fetch.
     */
    where?: DrivingExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingExamResults to fetch.
     */
    orderBy?: DrivingExamResultOrderByWithRelationInput | DrivingExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DrivingExamResults.
     */
    cursor?: DrivingExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingExamResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DrivingExamResults.
     */
    distinct?: DrivingExamResultScalarFieldEnum | DrivingExamResultScalarFieldEnum[]
  }

  /**
   * DrivingExamResult findMany
   */
  export type DrivingExamResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * Filter, which DrivingExamResults to fetch.
     */
    where?: DrivingExamResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DrivingExamResults to fetch.
     */
    orderBy?: DrivingExamResultOrderByWithRelationInput | DrivingExamResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DrivingExamResults.
     */
    cursor?: DrivingExamResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DrivingExamResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DrivingExamResults.
     */
    skip?: number
    distinct?: DrivingExamResultScalarFieldEnum | DrivingExamResultScalarFieldEnum[]
  }

  /**
   * DrivingExamResult create
   */
  export type DrivingExamResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * The data needed to create a DrivingExamResult.
     */
    data: XOR<DrivingExamResultCreateInput, DrivingExamResultUncheckedCreateInput>
  }

  /**
   * DrivingExamResult createMany
   */
  export type DrivingExamResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DrivingExamResults.
     */
    data: DrivingExamResultCreateManyInput | DrivingExamResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DrivingExamResult createManyAndReturn
   */
  export type DrivingExamResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * The data used to create many DrivingExamResults.
     */
    data: DrivingExamResultCreateManyInput | DrivingExamResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrivingExamResult update
   */
  export type DrivingExamResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * The data needed to update a DrivingExamResult.
     */
    data: XOR<DrivingExamResultUpdateInput, DrivingExamResultUncheckedUpdateInput>
    /**
     * Choose, which DrivingExamResult to update.
     */
    where: DrivingExamResultWhereUniqueInput
  }

  /**
   * DrivingExamResult updateMany
   */
  export type DrivingExamResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DrivingExamResults.
     */
    data: XOR<DrivingExamResultUpdateManyMutationInput, DrivingExamResultUncheckedUpdateManyInput>
    /**
     * Filter which DrivingExamResults to update
     */
    where?: DrivingExamResultWhereInput
    /**
     * Limit how many DrivingExamResults to update.
     */
    limit?: number
  }

  /**
   * DrivingExamResult updateManyAndReturn
   */
  export type DrivingExamResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * The data used to update DrivingExamResults.
     */
    data: XOR<DrivingExamResultUpdateManyMutationInput, DrivingExamResultUncheckedUpdateManyInput>
    /**
     * Filter which DrivingExamResults to update
     */
    where?: DrivingExamResultWhereInput
    /**
     * Limit how many DrivingExamResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DrivingExamResult upsert
   */
  export type DrivingExamResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * The filter to search for the DrivingExamResult to update in case it exists.
     */
    where: DrivingExamResultWhereUniqueInput
    /**
     * In case the DrivingExamResult found by the `where` argument doesn't exist, create a new DrivingExamResult with this data.
     */
    create: XOR<DrivingExamResultCreateInput, DrivingExamResultUncheckedCreateInput>
    /**
     * In case the DrivingExamResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DrivingExamResultUpdateInput, DrivingExamResultUncheckedUpdateInput>
  }

  /**
   * DrivingExamResult delete
   */
  export type DrivingExamResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
    /**
     * Filter which DrivingExamResult to delete.
     */
    where: DrivingExamResultWhereUniqueInput
  }

  /**
   * DrivingExamResult deleteMany
   */
  export type DrivingExamResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DrivingExamResults to delete
     */
    where?: DrivingExamResultWhereInput
    /**
     * Limit how many DrivingExamResults to delete.
     */
    limit?: number
  }

  /**
   * DrivingExamResult without action
   */
  export type DrivingExamResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DrivingExamResult
     */
    select?: DrivingExamResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DrivingExamResult
     */
    omit?: DrivingExamResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DrivingExamResultInclude<ExtArgs> | null
  }


  /**
   * Model PaymentRecord
   */

  export type AggregatePaymentRecord = {
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  export type PaymentRecordAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentRecordSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type PaymentRecordMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    amount: number | null
    paidDate: Date | null
  }

  export type PaymentRecordMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    amount: number | null
    paidDate: Date | null
  }

  export type PaymentRecordCountAggregateOutputType = {
    id: number
    applicationId: number
    amount: number
    paidDate: number
    _all: number
  }


  export type PaymentRecordAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentRecordSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type PaymentRecordMinAggregateInputType = {
    id?: true
    applicationId?: true
    amount?: true
    paidDate?: true
  }

  export type PaymentRecordMaxAggregateInputType = {
    id?: true
    applicationId?: true
    amount?: true
    paidDate?: true
  }

  export type PaymentRecordCountAggregateInputType = {
    id?: true
    applicationId?: true
    amount?: true
    paidDate?: true
    _all?: true
  }

  export type PaymentRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecord to aggregate.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentRecords
    **/
    _count?: true | PaymentRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type GetPaymentRecordAggregateType<T extends PaymentRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentRecord[P]>
      : GetScalarType<T[P], AggregatePaymentRecord[P]>
  }




  export type PaymentRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentRecordWhereInput
    orderBy?: PaymentRecordOrderByWithAggregationInput | PaymentRecordOrderByWithAggregationInput[]
    by: PaymentRecordScalarFieldEnum[] | PaymentRecordScalarFieldEnum
    having?: PaymentRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentRecordCountAggregateInputType | true
    _avg?: PaymentRecordAvgAggregateInputType
    _sum?: PaymentRecordSumAggregateInputType
    _min?: PaymentRecordMinAggregateInputType
    _max?: PaymentRecordMaxAggregateInputType
  }

  export type PaymentRecordGroupByOutputType = {
    id: number
    applicationId: string
    amount: number
    paidDate: Date
    _count: PaymentRecordCountAggregateOutputType | null
    _avg: PaymentRecordAvgAggregateOutputType | null
    _sum: PaymentRecordSumAggregateOutputType | null
    _min: PaymentRecordMinAggregateOutputType | null
    _max: PaymentRecordMaxAggregateOutputType | null
  }

  type GetPaymentRecordGroupByPayload<T extends PaymentRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentRecordGroupByOutputType[P]>
        }
      >
    >


  export type PaymentRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    amount?: boolean
    paidDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    amount?: boolean
    paidDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    amount?: boolean
    paidDate?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentRecord"]>

  export type PaymentRecordSelectScalar = {
    id?: boolean
    applicationId?: boolean
    amount?: boolean
    paidDate?: boolean
  }

  export type PaymentRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "amount" | "paidDate", ExtArgs["result"]["paymentRecord"]>
  export type PaymentRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type PaymentRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }
  export type PaymentRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
  }

  export type $PaymentRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentRecord"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      amount: number
      paidDate: Date
    }, ExtArgs["result"]["paymentRecord"]>
    composites: {}
  }

  type PaymentRecordGetPayload<S extends boolean | null | undefined | PaymentRecordDefaultArgs> = $Result.GetResult<Prisma.$PaymentRecordPayload, S>

  type PaymentRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentRecordCountAggregateInputType | true
    }

  export interface PaymentRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentRecord'], meta: { name: 'PaymentRecord' } }
    /**
     * Find zero or one PaymentRecord that matches the filter.
     * @param {PaymentRecordFindUniqueArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentRecordFindUniqueArgs>(args: SelectSubset<T, PaymentRecordFindUniqueArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentRecordFindUniqueOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentRecordFindFirstArgs>(args?: SelectSubset<T, PaymentRecordFindFirstArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindFirstOrThrowArgs} args - Arguments to find a PaymentRecord
     * @example
     * // Get one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany()
     * 
     * // Get first 10 PaymentRecords
     * const paymentRecords = await prisma.paymentRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentRecordFindManyArgs>(args?: SelectSubset<T, PaymentRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentRecord.
     * @param {PaymentRecordCreateArgs} args - Arguments to create a PaymentRecord.
     * @example
     * // Create one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.create({
     *   data: {
     *     // ... data to create a PaymentRecord
     *   }
     * })
     * 
     */
    create<T extends PaymentRecordCreateArgs>(args: SelectSubset<T, PaymentRecordCreateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentRecords.
     * @param {PaymentRecordCreateManyArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentRecordCreateManyArgs>(args?: SelectSubset<T, PaymentRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentRecords and returns the data saved in the database.
     * @param {PaymentRecordCreateManyAndReturnArgs} args - Arguments to create many PaymentRecords.
     * @example
     * // Create many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentRecord.
     * @param {PaymentRecordDeleteArgs} args - Arguments to delete one PaymentRecord.
     * @example
     * // Delete one PaymentRecord
     * const PaymentRecord = await prisma.paymentRecord.delete({
     *   where: {
     *     // ... filter to delete one PaymentRecord
     *   }
     * })
     * 
     */
    delete<T extends PaymentRecordDeleteArgs>(args: SelectSubset<T, PaymentRecordDeleteArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentRecord.
     * @param {PaymentRecordUpdateArgs} args - Arguments to update one PaymentRecord.
     * @example
     * // Update one PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentRecordUpdateArgs>(args: SelectSubset<T, PaymentRecordUpdateArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentRecords.
     * @param {PaymentRecordDeleteManyArgs} args - Arguments to filter PaymentRecords to delete.
     * @example
     * // Delete a few PaymentRecords
     * const { count } = await prisma.paymentRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentRecordDeleteManyArgs>(args?: SelectSubset<T, PaymentRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentRecordUpdateManyArgs>(args: SelectSubset<T, PaymentRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentRecords and returns the data updated in the database.
     * @param {PaymentRecordUpdateManyAndReturnArgs} args - Arguments to update many PaymentRecords.
     * @example
     * // Update many PaymentRecords
     * const paymentRecord = await prisma.paymentRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentRecords and only return the `id`
     * const paymentRecordWithIdOnly = await prisma.paymentRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentRecord.
     * @param {PaymentRecordUpsertArgs} args - Arguments to update or create a PaymentRecord.
     * @example
     * // Update or create a PaymentRecord
     * const paymentRecord = await prisma.paymentRecord.upsert({
     *   create: {
     *     // ... data to create a PaymentRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentRecord we want to update
     *   }
     * })
     */
    upsert<T extends PaymentRecordUpsertArgs>(args: SelectSubset<T, PaymentRecordUpsertArgs<ExtArgs>>): Prisma__PaymentRecordClient<$Result.GetResult<Prisma.$PaymentRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordCountArgs} args - Arguments to filter PaymentRecords to count.
     * @example
     * // Count the number of PaymentRecords
     * const count = await prisma.paymentRecord.count({
     *   where: {
     *     // ... the filter for the PaymentRecords we want to count
     *   }
     * })
    **/
    count<T extends PaymentRecordCountArgs>(
      args?: Subset<T, PaymentRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentRecordAggregateArgs>(args: Subset<T, PaymentRecordAggregateArgs>): Prisma.PrismaPromise<GetPaymentRecordAggregateType<T>>

    /**
     * Group by PaymentRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentRecordGroupByArgs} args - Group by arguments.
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
      T extends PaymentRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentRecordGroupByArgs['orderBy'] }
        : { orderBy?: PaymentRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentRecord model
   */
  readonly fields: PaymentRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaymentRecord model
   */
  interface PaymentRecordFieldRefs {
    readonly id: FieldRef<"PaymentRecord", 'Int'>
    readonly applicationId: FieldRef<"PaymentRecord", 'String'>
    readonly amount: FieldRef<"PaymentRecord", 'Int'>
    readonly paidDate: FieldRef<"PaymentRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentRecord findUnique
   */
  export type PaymentRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findUniqueOrThrow
   */
  export type PaymentRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord findFirst
   */
  export type PaymentRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findFirstOrThrow
   */
  export type PaymentRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecord to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentRecords.
     */
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord findMany
   */
  export type PaymentRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter, which PaymentRecords to fetch.
     */
    where?: PaymentRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentRecords to fetch.
     */
    orderBy?: PaymentRecordOrderByWithRelationInput | PaymentRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentRecords.
     */
    cursor?: PaymentRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentRecords.
     */
    skip?: number
    distinct?: PaymentRecordScalarFieldEnum | PaymentRecordScalarFieldEnum[]
  }

  /**
   * PaymentRecord create
   */
  export type PaymentRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentRecord.
     */
    data: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
  }

  /**
   * PaymentRecord createMany
   */
  export type PaymentRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentRecord createManyAndReturn
   */
  export type PaymentRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentRecords.
     */
    data: PaymentRecordCreateManyInput | PaymentRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord update
   */
  export type PaymentRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentRecord.
     */
    data: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
    /**
     * Choose, which PaymentRecord to update.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord updateMany
   */
  export type PaymentRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
  }

  /**
   * PaymentRecord updateManyAndReturn
   */
  export type PaymentRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * The data used to update PaymentRecords.
     */
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyInput>
    /**
     * Filter which PaymentRecords to update
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentRecord upsert
   */
  export type PaymentRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentRecord to update in case it exists.
     */
    where: PaymentRecordWhereUniqueInput
    /**
     * In case the PaymentRecord found by the `where` argument doesn't exist, create a new PaymentRecord with this data.
     */
    create: XOR<PaymentRecordCreateInput, PaymentRecordUncheckedCreateInput>
    /**
     * In case the PaymentRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentRecordUpdateInput, PaymentRecordUncheckedUpdateInput>
  }

  /**
   * PaymentRecord delete
   */
  export type PaymentRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
    /**
     * Filter which PaymentRecord to delete.
     */
    where: PaymentRecordWhereUniqueInput
  }

  /**
   * PaymentRecord deleteMany
   */
  export type PaymentRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentRecords to delete
     */
    where?: PaymentRecordWhereInput
    /**
     * Limit how many PaymentRecords to delete.
     */
    limit?: number
  }

  /**
   * PaymentRecord without action
   */
  export type PaymentRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentRecord
     */
    select?: PaymentRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentRecord
     */
    omit?: PaymentRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentRecordInclude<ExtArgs> | null
  }


  /**
   * Model ExamAttempt
   */

  export type AggregateExamAttempt = {
    _count: ExamAttemptCountAggregateOutputType | null
    _avg: ExamAttemptAvgAggregateOutputType | null
    _sum: ExamAttemptSumAggregateOutputType | null
    _min: ExamAttemptMinAggregateOutputType | null
    _max: ExamAttemptMaxAggregateOutputType | null
  }

  export type ExamAttemptAvgAggregateOutputType = {
    id: number | null
    vehicleClassId: number | null
    attemptNo: number | null
  }

  export type ExamAttemptSumAggregateOutputType = {
    id: number | null
    vehicleClassId: number | null
    attemptNo: number | null
  }

  export type ExamAttemptMinAggregateOutputType = {
    id: number | null
    applicationId: string | null
    examType: string | null
    vehicleClassId: number | null
    attemptNo: number | null
    examDate: Date | null
    examTime: Date | null
    notes: string | null
    result: $Enums.DrivingExamResultStatus | null
    createdAt: Date | null
  }

  export type ExamAttemptMaxAggregateOutputType = {
    id: number | null
    applicationId: string | null
    examType: string | null
    vehicleClassId: number | null
    attemptNo: number | null
    examDate: Date | null
    examTime: Date | null
    notes: string | null
    result: $Enums.DrivingExamResultStatus | null
    createdAt: Date | null
  }

  export type ExamAttemptCountAggregateOutputType = {
    id: number
    applicationId: number
    examType: number
    vehicleClassId: number
    attemptNo: number
    examDate: number
    examTime: number
    notes: number
    result: number
    createdAt: number
    _all: number
  }


  export type ExamAttemptAvgAggregateInputType = {
    id?: true
    vehicleClassId?: true
    attemptNo?: true
  }

  export type ExamAttemptSumAggregateInputType = {
    id?: true
    vehicleClassId?: true
    attemptNo?: true
  }

  export type ExamAttemptMinAggregateInputType = {
    id?: true
    applicationId?: true
    examType?: true
    vehicleClassId?: true
    attemptNo?: true
    examDate?: true
    examTime?: true
    notes?: true
    result?: true
    createdAt?: true
  }

  export type ExamAttemptMaxAggregateInputType = {
    id?: true
    applicationId?: true
    examType?: true
    vehicleClassId?: true
    attemptNo?: true
    examDate?: true
    examTime?: true
    notes?: true
    result?: true
    createdAt?: true
  }

  export type ExamAttemptCountAggregateInputType = {
    id?: true
    applicationId?: true
    examType?: true
    vehicleClassId?: true
    attemptNo?: true
    examDate?: true
    examTime?: true
    notes?: true
    result?: true
    createdAt?: true
    _all?: true
  }

  export type ExamAttemptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAttempt to aggregate.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamAttempts
    **/
    _count?: true | ExamAttemptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAttemptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamAttemptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamAttemptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamAttemptMaxAggregateInputType
  }

  export type GetExamAttemptAggregateType<T extends ExamAttemptAggregateArgs> = {
        [P in keyof T & keyof AggregateExamAttempt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamAttempt[P]>
      : GetScalarType<T[P], AggregateExamAttempt[P]>
  }




  export type ExamAttemptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAttemptWhereInput
    orderBy?: ExamAttemptOrderByWithAggregationInput | ExamAttemptOrderByWithAggregationInput[]
    by: ExamAttemptScalarFieldEnum[] | ExamAttemptScalarFieldEnum
    having?: ExamAttemptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamAttemptCountAggregateInputType | true
    _avg?: ExamAttemptAvgAggregateInputType
    _sum?: ExamAttemptSumAggregateInputType
    _min?: ExamAttemptMinAggregateInputType
    _max?: ExamAttemptMaxAggregateInputType
  }

  export type ExamAttemptGroupByOutputType = {
    id: number
    applicationId: string
    examType: string
    vehicleClassId: number | null
    attemptNo: number
    examDate: Date
    examTime: Date | null
    notes: string | null
    result: $Enums.DrivingExamResultStatus
    createdAt: Date
    _count: ExamAttemptCountAggregateOutputType | null
    _avg: ExamAttemptAvgAggregateOutputType | null
    _sum: ExamAttemptSumAggregateOutputType | null
    _min: ExamAttemptMinAggregateOutputType | null
    _max: ExamAttemptMaxAggregateOutputType | null
  }

  type GetExamAttemptGroupByPayload<T extends ExamAttemptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamAttemptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamAttemptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamAttemptGroupByOutputType[P]>
            : GetScalarType<T[P], ExamAttemptGroupByOutputType[P]>
        }
      >
    >


  export type ExamAttemptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    vehicleClassId?: boolean
    attemptNo?: boolean
    examDate?: boolean
    examTime?: boolean
    notes?: boolean
    result?: boolean
    createdAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | ExamAttempt$vehicleClassArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    vehicleClassId?: boolean
    attemptNo?: boolean
    examDate?: boolean
    examTime?: boolean
    notes?: boolean
    result?: boolean
    createdAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | ExamAttempt$vehicleClassArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    vehicleClassId?: boolean
    attemptNo?: boolean
    examDate?: boolean
    examTime?: boolean
    notes?: boolean
    result?: boolean
    createdAt?: boolean
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | ExamAttempt$vehicleClassArgs<ExtArgs>
  }, ExtArgs["result"]["examAttempt"]>

  export type ExamAttemptSelectScalar = {
    id?: boolean
    applicationId?: boolean
    examType?: boolean
    vehicleClassId?: boolean
    attemptNo?: boolean
    examDate?: boolean
    examTime?: boolean
    notes?: boolean
    result?: boolean
    createdAt?: boolean
  }

  export type ExamAttemptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "examType" | "vehicleClassId" | "attemptNo" | "examDate" | "examTime" | "notes" | "result" | "createdAt", ExtArgs["result"]["examAttempt"]>
  export type ExamAttemptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | ExamAttempt$vehicleClassArgs<ExtArgs>
  }
  export type ExamAttemptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | ExamAttempt$vehicleClassArgs<ExtArgs>
  }
  export type ExamAttemptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | StudentApplicationDefaultArgs<ExtArgs>
    vehicleClass?: boolean | ExamAttempt$vehicleClassArgs<ExtArgs>
  }

  export type $ExamAttemptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamAttempt"
    objects: {
      application: Prisma.$StudentApplicationPayload<ExtArgs>
      vehicleClass: Prisma.$VehicleClassPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationId: string
      examType: string
      vehicleClassId: number | null
      attemptNo: number
      examDate: Date
      examTime: Date | null
      notes: string | null
      result: $Enums.DrivingExamResultStatus
      createdAt: Date
    }, ExtArgs["result"]["examAttempt"]>
    composites: {}
  }

  type ExamAttemptGetPayload<S extends boolean | null | undefined | ExamAttemptDefaultArgs> = $Result.GetResult<Prisma.$ExamAttemptPayload, S>

  type ExamAttemptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamAttemptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamAttemptCountAggregateInputType | true
    }

  export interface ExamAttemptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamAttempt'], meta: { name: 'ExamAttempt' } }
    /**
     * Find zero or one ExamAttempt that matches the filter.
     * @param {ExamAttemptFindUniqueArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamAttemptFindUniqueArgs>(args: SelectSubset<T, ExamAttemptFindUniqueArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamAttempt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamAttemptFindUniqueOrThrowArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamAttemptFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamAttemptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAttempt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindFirstArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamAttemptFindFirstArgs>(args?: SelectSubset<T, ExamAttemptFindFirstArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAttempt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindFirstOrThrowArgs} args - Arguments to find a ExamAttempt
     * @example
     * // Get one ExamAttempt
     * const examAttempt = await prisma.examAttempt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamAttemptFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamAttemptFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamAttempts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamAttempts
     * const examAttempts = await prisma.examAttempt.findMany()
     * 
     * // Get first 10 ExamAttempts
     * const examAttempts = await prisma.examAttempt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamAttemptFindManyArgs>(args?: SelectSubset<T, ExamAttemptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamAttempt.
     * @param {ExamAttemptCreateArgs} args - Arguments to create a ExamAttempt.
     * @example
     * // Create one ExamAttempt
     * const ExamAttempt = await prisma.examAttempt.create({
     *   data: {
     *     // ... data to create a ExamAttempt
     *   }
     * })
     * 
     */
    create<T extends ExamAttemptCreateArgs>(args: SelectSubset<T, ExamAttemptCreateArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamAttempts.
     * @param {ExamAttemptCreateManyArgs} args - Arguments to create many ExamAttempts.
     * @example
     * // Create many ExamAttempts
     * const examAttempt = await prisma.examAttempt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamAttemptCreateManyArgs>(args?: SelectSubset<T, ExamAttemptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExamAttempts and returns the data saved in the database.
     * @param {ExamAttemptCreateManyAndReturnArgs} args - Arguments to create many ExamAttempts.
     * @example
     * // Create many ExamAttempts
     * const examAttempt = await prisma.examAttempt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExamAttempts and only return the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamAttemptCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamAttemptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExamAttempt.
     * @param {ExamAttemptDeleteArgs} args - Arguments to delete one ExamAttempt.
     * @example
     * // Delete one ExamAttempt
     * const ExamAttempt = await prisma.examAttempt.delete({
     *   where: {
     *     // ... filter to delete one ExamAttempt
     *   }
     * })
     * 
     */
    delete<T extends ExamAttemptDeleteArgs>(args: SelectSubset<T, ExamAttemptDeleteArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamAttempt.
     * @param {ExamAttemptUpdateArgs} args - Arguments to update one ExamAttempt.
     * @example
     * // Update one ExamAttempt
     * const examAttempt = await prisma.examAttempt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamAttemptUpdateArgs>(args: SelectSubset<T, ExamAttemptUpdateArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamAttempts.
     * @param {ExamAttemptDeleteManyArgs} args - Arguments to filter ExamAttempts to delete.
     * @example
     * // Delete a few ExamAttempts
     * const { count } = await prisma.examAttempt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamAttemptDeleteManyArgs>(args?: SelectSubset<T, ExamAttemptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamAttempts
     * const examAttempt = await prisma.examAttempt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamAttemptUpdateManyArgs>(args: SelectSubset<T, ExamAttemptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAttempts and returns the data updated in the database.
     * @param {ExamAttemptUpdateManyAndReturnArgs} args - Arguments to update many ExamAttempts.
     * @example
     * // Update many ExamAttempts
     * const examAttempt = await prisma.examAttempt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExamAttempts and only return the `id`
     * const examAttemptWithIdOnly = await prisma.examAttempt.updateManyAndReturn({
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
    updateManyAndReturn<T extends ExamAttemptUpdateManyAndReturnArgs>(args: SelectSubset<T, ExamAttemptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExamAttempt.
     * @param {ExamAttemptUpsertArgs} args - Arguments to update or create a ExamAttempt.
     * @example
     * // Update or create a ExamAttempt
     * const examAttempt = await prisma.examAttempt.upsert({
     *   create: {
     *     // ... data to create a ExamAttempt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamAttempt we want to update
     *   }
     * })
     */
    upsert<T extends ExamAttemptUpsertArgs>(args: SelectSubset<T, ExamAttemptUpsertArgs<ExtArgs>>): Prisma__ExamAttemptClient<$Result.GetResult<Prisma.$ExamAttemptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamAttempts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptCountArgs} args - Arguments to filter ExamAttempts to count.
     * @example
     * // Count the number of ExamAttempts
     * const count = await prisma.examAttempt.count({
     *   where: {
     *     // ... the filter for the ExamAttempts we want to count
     *   }
     * })
    **/
    count<T extends ExamAttemptCountArgs>(
      args?: Subset<T, ExamAttemptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamAttemptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAttemptAggregateArgs>(args: Subset<T, ExamAttemptAggregateArgs>): Prisma.PrismaPromise<GetExamAttemptAggregateType<T>>

    /**
     * Group by ExamAttempt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAttemptGroupByArgs} args - Group by arguments.
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
      T extends ExamAttemptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamAttemptGroupByArgs['orderBy'] }
        : { orderBy?: ExamAttemptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamAttemptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamAttemptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamAttempt model
   */
  readonly fields: ExamAttemptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamAttempt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamAttemptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends StudentApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentApplicationDefaultArgs<ExtArgs>>): Prisma__StudentApplicationClient<$Result.GetResult<Prisma.$StudentApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicleClass<T extends ExamAttempt$vehicleClassArgs<ExtArgs> = {}>(args?: Subset<T, ExamAttempt$vehicleClassArgs<ExtArgs>>): Prisma__VehicleClassClient<$Result.GetResult<Prisma.$VehicleClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExamAttempt model
   */
  interface ExamAttemptFieldRefs {
    readonly id: FieldRef<"ExamAttempt", 'Int'>
    readonly applicationId: FieldRef<"ExamAttempt", 'String'>
    readonly examType: FieldRef<"ExamAttempt", 'String'>
    readonly vehicleClassId: FieldRef<"ExamAttempt", 'Int'>
    readonly attemptNo: FieldRef<"ExamAttempt", 'Int'>
    readonly examDate: FieldRef<"ExamAttempt", 'DateTime'>
    readonly examTime: FieldRef<"ExamAttempt", 'DateTime'>
    readonly notes: FieldRef<"ExamAttempt", 'String'>
    readonly result: FieldRef<"ExamAttempt", 'DrivingExamResultStatus'>
    readonly createdAt: FieldRef<"ExamAttempt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamAttempt findUnique
   */
  export type ExamAttemptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt findUniqueOrThrow
   */
  export type ExamAttemptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt findFirst
   */
  export type ExamAttemptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAttempts.
     */
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt findFirstOrThrow
   */
  export type ExamAttemptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempt to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAttempts.
     */
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt findMany
   */
  export type ExamAttemptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter, which ExamAttempts to fetch.
     */
    where?: ExamAttemptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAttempts to fetch.
     */
    orderBy?: ExamAttemptOrderByWithRelationInput | ExamAttemptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamAttempts.
     */
    cursor?: ExamAttemptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAttempts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAttempts.
     */
    skip?: number
    distinct?: ExamAttemptScalarFieldEnum | ExamAttemptScalarFieldEnum[]
  }

  /**
   * ExamAttempt create
   */
  export type ExamAttemptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamAttempt.
     */
    data: XOR<ExamAttemptCreateInput, ExamAttemptUncheckedCreateInput>
  }

  /**
   * ExamAttempt createMany
   */
  export type ExamAttemptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamAttempts.
     */
    data: ExamAttemptCreateManyInput | ExamAttemptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamAttempt createManyAndReturn
   */
  export type ExamAttemptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * The data used to create many ExamAttempts.
     */
    data: ExamAttemptCreateManyInput | ExamAttemptCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAttempt update
   */
  export type ExamAttemptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamAttempt.
     */
    data: XOR<ExamAttemptUpdateInput, ExamAttemptUncheckedUpdateInput>
    /**
     * Choose, which ExamAttempt to update.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt updateMany
   */
  export type ExamAttemptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamAttempts.
     */
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExamAttempts to update
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to update.
     */
    limit?: number
  }

  /**
   * ExamAttempt updateManyAndReturn
   */
  export type ExamAttemptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * The data used to update ExamAttempts.
     */
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyInput>
    /**
     * Filter which ExamAttempts to update
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExamAttempt upsert
   */
  export type ExamAttemptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamAttempt to update in case it exists.
     */
    where: ExamAttemptWhereUniqueInput
    /**
     * In case the ExamAttempt found by the `where` argument doesn't exist, create a new ExamAttempt with this data.
     */
    create: XOR<ExamAttemptCreateInput, ExamAttemptUncheckedCreateInput>
    /**
     * In case the ExamAttempt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamAttemptUpdateInput, ExamAttemptUncheckedUpdateInput>
  }

  /**
   * ExamAttempt delete
   */
  export type ExamAttemptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
    /**
     * Filter which ExamAttempt to delete.
     */
    where: ExamAttemptWhereUniqueInput
  }

  /**
   * ExamAttempt deleteMany
   */
  export type ExamAttemptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAttempts to delete
     */
    where?: ExamAttemptWhereInput
    /**
     * Limit how many ExamAttempts to delete.
     */
    limit?: number
  }

  /**
   * ExamAttempt.vehicleClass
   */
  export type ExamAttempt$vehicleClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleClass
     */
    select?: VehicleClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VehicleClass
     */
    omit?: VehicleClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleClassInclude<ExtArgs> | null
    where?: VehicleClassWhereInput
  }

  /**
   * ExamAttempt without action
   */
  export type ExamAttemptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAttempt
     */
    select?: ExamAttemptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAttempt
     */
    omit?: ExamAttemptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAttemptInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentApplicationScalarFieldEnum: {
    id: 'id',
    referenceNo: 'referenceNo',
    fullName: 'fullName',
    nic: 'nic',
    address: 'address',
    email: 'email',
    phone1: 'phone1',
    phone2: 'phone2',
    dob: 'dob',
    age: 'age',
    canDriveVehicles: 'canDriveVehicles',
    notes: 'notes',
    medicalDate: 'medicalDate',
    medicalTime: 'medicalTime',
    medicalStatus: 'medicalStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentApplicationScalarFieldEnum = (typeof StudentApplicationScalarFieldEnum)[keyof typeof StudentApplicationScalarFieldEnum]


  export const ExamReminderLogScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    examType: 'examType',
    examRecordId: 'examRecordId',
    sentAt: 'sentAt'
  };

  export type ExamReminderLogScalarFieldEnum = (typeof ExamReminderLogScalarFieldEnum)[keyof typeof ExamReminderLogScalarFieldEnum]


  export const BirthdayWishLogScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    year: 'year',
    sentAt: 'sentAt'
  };

  export type BirthdayWishLogScalarFieldEnum = (typeof BirthdayWishLogScalarFieldEnum)[keyof typeof BirthdayWishLogScalarFieldEnum]


  export const ApplicationVehicleClassScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    vehicleClassId: 'vehicleClassId'
  };

  export type ApplicationVehicleClassScalarFieldEnum = (typeof ApplicationVehicleClassScalarFieldEnum)[keyof typeof ApplicationVehicleClassScalarFieldEnum]


  export const VehicleClassScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type VehicleClassScalarFieldEnum = (typeof VehicleClassScalarFieldEnum)[keyof typeof VehicleClassScalarFieldEnum]


  export const ExistingLicenseScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    licenseNumber: 'licenseNumber',
    issuedDate: 'issuedDate'
  };

  export type ExistingLicenseScalarFieldEnum = (typeof ExistingLicenseScalarFieldEnum)[keyof typeof ExistingLicenseScalarFieldEnum]


  export const ExistingLicenseVehicleClassScalarFieldEnum: {
    id: 'id',
    licenseId: 'licenseId',
    vehicleClassId: 'vehicleClassId'
  };

  export type ExistingLicenseVehicleClassScalarFieldEnum = (typeof ExistingLicenseVehicleClassScalarFieldEnum)[keyof typeof ExistingLicenseVehicleClassScalarFieldEnum]


  export const PaymentInfoScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    totalFee: 'totalFee',
    advanceFee: 'advanceFee',
    status: 'status',
    paidDate: 'paidDate'
  };

  export type PaymentInfoScalarFieldEnum = (typeof PaymentInfoScalarFieldEnum)[keyof typeof PaymentInfoScalarFieldEnum]


  export const User1ScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    createdAt: 'createdAt'
  };

  export type User1ScalarFieldEnum = (typeof User1ScalarFieldEnum)[keyof typeof User1ScalarFieldEnum]


  export const WrittenExamScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    barCode: 'barCode',
    examDate: 'examDate',
    result: 'result',
    attemptNo: 'attemptNo',
    createdAt: 'createdAt',
    notes: 'notes',
    passAttemptNo: 'passAttemptNo',
    passDate: 'passDate',
    passWithText: 'passWithText'
  };

  export type WrittenExamScalarFieldEnum = (typeof WrittenExamScalarFieldEnum)[keyof typeof WrittenExamScalarFieldEnum]


  export const DrivingExamResultScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    vehicleClassId: 'vehicleClassId',
    result: 'result',
    notes: 'notes',
    examDate: 'examDate',
    trainedDates: 'trainedDates',
    createdAt: 'createdAt',
    passAttemptNo: 'passAttemptNo',
    passDate: 'passDate',
    passWithText: 'passWithText'
  };

  export type DrivingExamResultScalarFieldEnum = (typeof DrivingExamResultScalarFieldEnum)[keyof typeof DrivingExamResultScalarFieldEnum]


  export const PaymentRecordScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    amount: 'amount',
    paidDate: 'paidDate'
  };

  export type PaymentRecordScalarFieldEnum = (typeof PaymentRecordScalarFieldEnum)[keyof typeof PaymentRecordScalarFieldEnum]


  export const ExamAttemptScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    examType: 'examType',
    vehicleClassId: 'vehicleClassId',
    attemptNo: 'attemptNo',
    examDate: 'examDate',
    examTime: 'examTime',
    notes: 'notes',
    result: 'result',
    createdAt: 'createdAt'
  };

  export type ExamAttemptScalarFieldEnum = (typeof ExamAttemptScalarFieldEnum)[keyof typeof ExamAttemptScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ExamResult'
   */
  export type EnumExamResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamResult'>
    


  /**
   * Reference to a field of type 'ExamResult[]'
   */
  export type ListEnumExamResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExamResult[]'>
    


  /**
   * Reference to a field of type 'DrivingExamResultStatus'
   */
  export type EnumDrivingExamResultStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrivingExamResultStatus'>
    


  /**
   * Reference to a field of type 'DrivingExamResultStatus[]'
   */
  export type ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DrivingExamResultStatus[]'>
    


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
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentApplicationWhereInput = {
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    id?: StringFilter<"StudentApplication"> | string
    referenceNo?: StringFilter<"StudentApplication"> | string
    fullName?: StringFilter<"StudentApplication"> | string
    nic?: StringFilter<"StudentApplication"> | string
    address?: StringFilter<"StudentApplication"> | string
    email?: StringNullableFilter<"StudentApplication"> | string | null
    phone1?: StringFilter<"StudentApplication"> | string
    phone2?: StringNullableFilter<"StudentApplication"> | string | null
    dob?: DateTimeFilter<"StudentApplication"> | Date | string
    age?: IntFilter<"StudentApplication"> | number
    canDriveVehicles?: BoolFilter<"StudentApplication"> | boolean
    notes?: StringNullableFilter<"StudentApplication"> | string | null
    medicalDate?: DateTimeNullableFilter<"StudentApplication"> | Date | string | null
    medicalTime?: DateTimeNullableFilter<"StudentApplication"> | Date | string | null
    medicalStatus?: StringFilter<"StudentApplication"> | string
    createdAt?: DateTimeFilter<"StudentApplication"> | Date | string
    updatedAt?: DateTimeFilter<"StudentApplication"> | Date | string
    vehicleClasses?: ApplicationVehicleClassListRelationFilter
    existingLicense?: XOR<ExistingLicenseNullableScalarRelationFilter, ExistingLicenseWhereInput> | null
    writtenExams?: WrittenExamListRelationFilter
    paymentInfo?: XOR<PaymentInfoNullableScalarRelationFilter, PaymentInfoWhereInput> | null
    paymentRecords?: PaymentRecordListRelationFilter
    drivingExamResults?: DrivingExamResultListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
    birthdayWishLogs?: BirthdayWishLogListRelationFilter
    examReminderLogs?: ExamReminderLogListRelationFilter
  }

  export type StudentApplicationOrderByWithRelationInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    address?: SortOrder
    email?: SortOrderInput | SortOrder
    phone1?: SortOrder
    phone2?: SortOrderInput | SortOrder
    dob?: SortOrder
    age?: SortOrder
    canDriveVehicles?: SortOrder
    notes?: SortOrderInput | SortOrder
    medicalDate?: SortOrderInput | SortOrder
    medicalTime?: SortOrderInput | SortOrder
    medicalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    vehicleClasses?: ApplicationVehicleClassOrderByRelationAggregateInput
    existingLicense?: ExistingLicenseOrderByWithRelationInput
    writtenExams?: WrittenExamOrderByRelationAggregateInput
    paymentInfo?: PaymentInfoOrderByWithRelationInput
    paymentRecords?: PaymentRecordOrderByRelationAggregateInput
    drivingExamResults?: DrivingExamResultOrderByRelationAggregateInput
    examAttempts?: ExamAttemptOrderByRelationAggregateInput
    birthdayWishLogs?: BirthdayWishLogOrderByRelationAggregateInput
    examReminderLogs?: ExamReminderLogOrderByRelationAggregateInput
  }

  export type StudentApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    referenceNo?: string
    AND?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    OR?: StudentApplicationWhereInput[]
    NOT?: StudentApplicationWhereInput | StudentApplicationWhereInput[]
    fullName?: StringFilter<"StudentApplication"> | string
    nic?: StringFilter<"StudentApplication"> | string
    address?: StringFilter<"StudentApplication"> | string
    email?: StringNullableFilter<"StudentApplication"> | string | null
    phone1?: StringFilter<"StudentApplication"> | string
    phone2?: StringNullableFilter<"StudentApplication"> | string | null
    dob?: DateTimeFilter<"StudentApplication"> | Date | string
    age?: IntFilter<"StudentApplication"> | number
    canDriveVehicles?: BoolFilter<"StudentApplication"> | boolean
    notes?: StringNullableFilter<"StudentApplication"> | string | null
    medicalDate?: DateTimeNullableFilter<"StudentApplication"> | Date | string | null
    medicalTime?: DateTimeNullableFilter<"StudentApplication"> | Date | string | null
    medicalStatus?: StringFilter<"StudentApplication"> | string
    createdAt?: DateTimeFilter<"StudentApplication"> | Date | string
    updatedAt?: DateTimeFilter<"StudentApplication"> | Date | string
    vehicleClasses?: ApplicationVehicleClassListRelationFilter
    existingLicense?: XOR<ExistingLicenseNullableScalarRelationFilter, ExistingLicenseWhereInput> | null
    writtenExams?: WrittenExamListRelationFilter
    paymentInfo?: XOR<PaymentInfoNullableScalarRelationFilter, PaymentInfoWhereInput> | null
    paymentRecords?: PaymentRecordListRelationFilter
    drivingExamResults?: DrivingExamResultListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
    birthdayWishLogs?: BirthdayWishLogListRelationFilter
    examReminderLogs?: ExamReminderLogListRelationFilter
  }, "id" | "referenceNo">

  export type StudentApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    address?: SortOrder
    email?: SortOrderInput | SortOrder
    phone1?: SortOrder
    phone2?: SortOrderInput | SortOrder
    dob?: SortOrder
    age?: SortOrder
    canDriveVehicles?: SortOrder
    notes?: SortOrderInput | SortOrder
    medicalDate?: SortOrderInput | SortOrder
    medicalTime?: SortOrderInput | SortOrder
    medicalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentApplicationCountOrderByAggregateInput
    _avg?: StudentApplicationAvgOrderByAggregateInput
    _max?: StudentApplicationMaxOrderByAggregateInput
    _min?: StudentApplicationMinOrderByAggregateInput
    _sum?: StudentApplicationSumOrderByAggregateInput
  }

  export type StudentApplicationScalarWhereWithAggregatesInput = {
    AND?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    OR?: StudentApplicationScalarWhereWithAggregatesInput[]
    NOT?: StudentApplicationScalarWhereWithAggregatesInput | StudentApplicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentApplication"> | string
    referenceNo?: StringWithAggregatesFilter<"StudentApplication"> | string
    fullName?: StringWithAggregatesFilter<"StudentApplication"> | string
    nic?: StringWithAggregatesFilter<"StudentApplication"> | string
    address?: StringWithAggregatesFilter<"StudentApplication"> | string
    email?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    phone1?: StringWithAggregatesFilter<"StudentApplication"> | string
    phone2?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    dob?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
    age?: IntWithAggregatesFilter<"StudentApplication"> | number
    canDriveVehicles?: BoolWithAggregatesFilter<"StudentApplication"> | boolean
    notes?: StringNullableWithAggregatesFilter<"StudentApplication"> | string | null
    medicalDate?: DateTimeNullableWithAggregatesFilter<"StudentApplication"> | Date | string | null
    medicalTime?: DateTimeNullableWithAggregatesFilter<"StudentApplication"> | Date | string | null
    medicalStatus?: StringWithAggregatesFilter<"StudentApplication"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentApplication"> | Date | string
  }

  export type ExamReminderLogWhereInput = {
    AND?: ExamReminderLogWhereInput | ExamReminderLogWhereInput[]
    OR?: ExamReminderLogWhereInput[]
    NOT?: ExamReminderLogWhereInput | ExamReminderLogWhereInput[]
    id?: IntFilter<"ExamReminderLog"> | number
    applicationId?: StringFilter<"ExamReminderLog"> | string
    examType?: StringFilter<"ExamReminderLog"> | string
    examRecordId?: IntFilter<"ExamReminderLog"> | number
    sentAt?: DateTimeFilter<"ExamReminderLog"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }

  export type ExamReminderLogOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    examRecordId?: SortOrder
    sentAt?: SortOrder
    application?: StudentApplicationOrderByWithRelationInput
  }

  export type ExamReminderLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    examType_examRecordId?: ExamReminderLogExamTypeExamRecordIdCompoundUniqueInput
    AND?: ExamReminderLogWhereInput | ExamReminderLogWhereInput[]
    OR?: ExamReminderLogWhereInput[]
    NOT?: ExamReminderLogWhereInput | ExamReminderLogWhereInput[]
    applicationId?: StringFilter<"ExamReminderLog"> | string
    examType?: StringFilter<"ExamReminderLog"> | string
    examRecordId?: IntFilter<"ExamReminderLog"> | number
    sentAt?: DateTimeFilter<"ExamReminderLog"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }, "id" | "examType_examRecordId">

  export type ExamReminderLogOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    examRecordId?: SortOrder
    sentAt?: SortOrder
    _count?: ExamReminderLogCountOrderByAggregateInput
    _avg?: ExamReminderLogAvgOrderByAggregateInput
    _max?: ExamReminderLogMaxOrderByAggregateInput
    _min?: ExamReminderLogMinOrderByAggregateInput
    _sum?: ExamReminderLogSumOrderByAggregateInput
  }

  export type ExamReminderLogScalarWhereWithAggregatesInput = {
    AND?: ExamReminderLogScalarWhereWithAggregatesInput | ExamReminderLogScalarWhereWithAggregatesInput[]
    OR?: ExamReminderLogScalarWhereWithAggregatesInput[]
    NOT?: ExamReminderLogScalarWhereWithAggregatesInput | ExamReminderLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExamReminderLog"> | number
    applicationId?: StringWithAggregatesFilter<"ExamReminderLog"> | string
    examType?: StringWithAggregatesFilter<"ExamReminderLog"> | string
    examRecordId?: IntWithAggregatesFilter<"ExamReminderLog"> | number
    sentAt?: DateTimeWithAggregatesFilter<"ExamReminderLog"> | Date | string
  }

  export type BirthdayWishLogWhereInput = {
    AND?: BirthdayWishLogWhereInput | BirthdayWishLogWhereInput[]
    OR?: BirthdayWishLogWhereInput[]
    NOT?: BirthdayWishLogWhereInput | BirthdayWishLogWhereInput[]
    id?: IntFilter<"BirthdayWishLog"> | number
    applicationId?: StringFilter<"BirthdayWishLog"> | string
    year?: IntFilter<"BirthdayWishLog"> | number
    sentAt?: DateTimeFilter<"BirthdayWishLog"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }

  export type BirthdayWishLogOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    year?: SortOrder
    sentAt?: SortOrder
    application?: StudentApplicationOrderByWithRelationInput
  }

  export type BirthdayWishLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId_year?: BirthdayWishLogApplicationIdYearCompoundUniqueInput
    AND?: BirthdayWishLogWhereInput | BirthdayWishLogWhereInput[]
    OR?: BirthdayWishLogWhereInput[]
    NOT?: BirthdayWishLogWhereInput | BirthdayWishLogWhereInput[]
    applicationId?: StringFilter<"BirthdayWishLog"> | string
    year?: IntFilter<"BirthdayWishLog"> | number
    sentAt?: DateTimeFilter<"BirthdayWishLog"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }, "id" | "applicationId_year">

  export type BirthdayWishLogOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    year?: SortOrder
    sentAt?: SortOrder
    _count?: BirthdayWishLogCountOrderByAggregateInput
    _avg?: BirthdayWishLogAvgOrderByAggregateInput
    _max?: BirthdayWishLogMaxOrderByAggregateInput
    _min?: BirthdayWishLogMinOrderByAggregateInput
    _sum?: BirthdayWishLogSumOrderByAggregateInput
  }

  export type BirthdayWishLogScalarWhereWithAggregatesInput = {
    AND?: BirthdayWishLogScalarWhereWithAggregatesInput | BirthdayWishLogScalarWhereWithAggregatesInput[]
    OR?: BirthdayWishLogScalarWhereWithAggregatesInput[]
    NOT?: BirthdayWishLogScalarWhereWithAggregatesInput | BirthdayWishLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BirthdayWishLog"> | number
    applicationId?: StringWithAggregatesFilter<"BirthdayWishLog"> | string
    year?: IntWithAggregatesFilter<"BirthdayWishLog"> | number
    sentAt?: DateTimeWithAggregatesFilter<"BirthdayWishLog"> | Date | string
  }

  export type ApplicationVehicleClassWhereInput = {
    AND?: ApplicationVehicleClassWhereInput | ApplicationVehicleClassWhereInput[]
    OR?: ApplicationVehicleClassWhereInput[]
    NOT?: ApplicationVehicleClassWhereInput | ApplicationVehicleClassWhereInput[]
    id?: IntFilter<"ApplicationVehicleClass"> | number
    applicationId?: StringFilter<"ApplicationVehicleClass"> | string
    vehicleClassId?: IntFilter<"ApplicationVehicleClass"> | number
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    vehicleClass?: XOR<VehicleClassScalarRelationFilter, VehicleClassWhereInput>
  }

  export type ApplicationVehicleClassOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
    application?: StudentApplicationOrderByWithRelationInput
    vehicleClass?: VehicleClassOrderByWithRelationInput
  }

  export type ApplicationVehicleClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ApplicationVehicleClassWhereInput | ApplicationVehicleClassWhereInput[]
    OR?: ApplicationVehicleClassWhereInput[]
    NOT?: ApplicationVehicleClassWhereInput | ApplicationVehicleClassWhereInput[]
    applicationId?: StringFilter<"ApplicationVehicleClass"> | string
    vehicleClassId?: IntFilter<"ApplicationVehicleClass"> | number
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    vehicleClass?: XOR<VehicleClassScalarRelationFilter, VehicleClassWhereInput>
  }, "id">

  export type ApplicationVehicleClassOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
    _count?: ApplicationVehicleClassCountOrderByAggregateInput
    _avg?: ApplicationVehicleClassAvgOrderByAggregateInput
    _max?: ApplicationVehicleClassMaxOrderByAggregateInput
    _min?: ApplicationVehicleClassMinOrderByAggregateInput
    _sum?: ApplicationVehicleClassSumOrderByAggregateInput
  }

  export type ApplicationVehicleClassScalarWhereWithAggregatesInput = {
    AND?: ApplicationVehicleClassScalarWhereWithAggregatesInput | ApplicationVehicleClassScalarWhereWithAggregatesInput[]
    OR?: ApplicationVehicleClassScalarWhereWithAggregatesInput[]
    NOT?: ApplicationVehicleClassScalarWhereWithAggregatesInput | ApplicationVehicleClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ApplicationVehicleClass"> | number
    applicationId?: StringWithAggregatesFilter<"ApplicationVehicleClass"> | string
    vehicleClassId?: IntWithAggregatesFilter<"ApplicationVehicleClass"> | number
  }

  export type VehicleClassWhereInput = {
    AND?: VehicleClassWhereInput | VehicleClassWhereInput[]
    OR?: VehicleClassWhereInput[]
    NOT?: VehicleClassWhereInput | VehicleClassWhereInput[]
    id?: IntFilter<"VehicleClass"> | number
    code?: StringFilter<"VehicleClass"> | string
    name?: StringFilter<"VehicleClass"> | string
    createdAt?: DateTimeFilter<"VehicleClass"> | Date | string
    applications?: ApplicationVehicleClassListRelationFilter
    existingLicenses?: ExistingLicenseVehicleClassListRelationFilter
    drivingExamResults?: DrivingExamResultListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
  }

  export type VehicleClassOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    applications?: ApplicationVehicleClassOrderByRelationAggregateInput
    existingLicenses?: ExistingLicenseVehicleClassOrderByRelationAggregateInput
    drivingExamResults?: DrivingExamResultOrderByRelationAggregateInput
    examAttempts?: ExamAttemptOrderByRelationAggregateInput
  }

  export type VehicleClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: VehicleClassWhereInput | VehicleClassWhereInput[]
    OR?: VehicleClassWhereInput[]
    NOT?: VehicleClassWhereInput | VehicleClassWhereInput[]
    name?: StringFilter<"VehicleClass"> | string
    createdAt?: DateTimeFilter<"VehicleClass"> | Date | string
    applications?: ApplicationVehicleClassListRelationFilter
    existingLicenses?: ExistingLicenseVehicleClassListRelationFilter
    drivingExamResults?: DrivingExamResultListRelationFilter
    examAttempts?: ExamAttemptListRelationFilter
  }, "id" | "code">

  export type VehicleClassOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: VehicleClassCountOrderByAggregateInput
    _avg?: VehicleClassAvgOrderByAggregateInput
    _max?: VehicleClassMaxOrderByAggregateInput
    _min?: VehicleClassMinOrderByAggregateInput
    _sum?: VehicleClassSumOrderByAggregateInput
  }

  export type VehicleClassScalarWhereWithAggregatesInput = {
    AND?: VehicleClassScalarWhereWithAggregatesInput | VehicleClassScalarWhereWithAggregatesInput[]
    OR?: VehicleClassScalarWhereWithAggregatesInput[]
    NOT?: VehicleClassScalarWhereWithAggregatesInput | VehicleClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VehicleClass"> | number
    code?: StringWithAggregatesFilter<"VehicleClass"> | string
    name?: StringWithAggregatesFilter<"VehicleClass"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VehicleClass"> | Date | string
  }

  export type ExistingLicenseWhereInput = {
    AND?: ExistingLicenseWhereInput | ExistingLicenseWhereInput[]
    OR?: ExistingLicenseWhereInput[]
    NOT?: ExistingLicenseWhereInput | ExistingLicenseWhereInput[]
    id?: IntFilter<"ExistingLicense"> | number
    applicationId?: StringFilter<"ExistingLicense"> | string
    licenseNumber?: StringNullableFilter<"ExistingLicense"> | string | null
    issuedDate?: DateTimeNullableFilter<"ExistingLicense"> | Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassListRelationFilter
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }

  export type ExistingLicenseOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    issuedDate?: SortOrderInput | SortOrder
    vehicleClasses?: ExistingLicenseVehicleClassOrderByRelationAggregateInput
    application?: StudentApplicationOrderByWithRelationInput
  }

  export type ExistingLicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId?: string
    AND?: ExistingLicenseWhereInput | ExistingLicenseWhereInput[]
    OR?: ExistingLicenseWhereInput[]
    NOT?: ExistingLicenseWhereInput | ExistingLicenseWhereInput[]
    licenseNumber?: StringNullableFilter<"ExistingLicense"> | string | null
    issuedDate?: DateTimeNullableFilter<"ExistingLicense"> | Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassListRelationFilter
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }, "id" | "applicationId">

  export type ExistingLicenseOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    issuedDate?: SortOrderInput | SortOrder
    _count?: ExistingLicenseCountOrderByAggregateInput
    _avg?: ExistingLicenseAvgOrderByAggregateInput
    _max?: ExistingLicenseMaxOrderByAggregateInput
    _min?: ExistingLicenseMinOrderByAggregateInput
    _sum?: ExistingLicenseSumOrderByAggregateInput
  }

  export type ExistingLicenseScalarWhereWithAggregatesInput = {
    AND?: ExistingLicenseScalarWhereWithAggregatesInput | ExistingLicenseScalarWhereWithAggregatesInput[]
    OR?: ExistingLicenseScalarWhereWithAggregatesInput[]
    NOT?: ExistingLicenseScalarWhereWithAggregatesInput | ExistingLicenseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExistingLicense"> | number
    applicationId?: StringWithAggregatesFilter<"ExistingLicense"> | string
    licenseNumber?: StringNullableWithAggregatesFilter<"ExistingLicense"> | string | null
    issuedDate?: DateTimeNullableWithAggregatesFilter<"ExistingLicense"> | Date | string | null
  }

  export type ExistingLicenseVehicleClassWhereInput = {
    AND?: ExistingLicenseVehicleClassWhereInput | ExistingLicenseVehicleClassWhereInput[]
    OR?: ExistingLicenseVehicleClassWhereInput[]
    NOT?: ExistingLicenseVehicleClassWhereInput | ExistingLicenseVehicleClassWhereInput[]
    id?: IntFilter<"ExistingLicenseVehicleClass"> | number
    licenseId?: IntFilter<"ExistingLicenseVehicleClass"> | number
    vehicleClassId?: IntFilter<"ExistingLicenseVehicleClass"> | number
    license?: XOR<ExistingLicenseScalarRelationFilter, ExistingLicenseWhereInput>
    vehicleClass?: XOR<VehicleClassScalarRelationFilter, VehicleClassWhereInput>
  }

  export type ExistingLicenseVehicleClassOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    vehicleClassId?: SortOrder
    license?: ExistingLicenseOrderByWithRelationInput
    vehicleClass?: VehicleClassOrderByWithRelationInput
  }

  export type ExistingLicenseVehicleClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExistingLicenseVehicleClassWhereInput | ExistingLicenseVehicleClassWhereInput[]
    OR?: ExistingLicenseVehicleClassWhereInput[]
    NOT?: ExistingLicenseVehicleClassWhereInput | ExistingLicenseVehicleClassWhereInput[]
    licenseId?: IntFilter<"ExistingLicenseVehicleClass"> | number
    vehicleClassId?: IntFilter<"ExistingLicenseVehicleClass"> | number
    license?: XOR<ExistingLicenseScalarRelationFilter, ExistingLicenseWhereInput>
    vehicleClass?: XOR<VehicleClassScalarRelationFilter, VehicleClassWhereInput>
  }, "id">

  export type ExistingLicenseVehicleClassOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    vehicleClassId?: SortOrder
    _count?: ExistingLicenseVehicleClassCountOrderByAggregateInput
    _avg?: ExistingLicenseVehicleClassAvgOrderByAggregateInput
    _max?: ExistingLicenseVehicleClassMaxOrderByAggregateInput
    _min?: ExistingLicenseVehicleClassMinOrderByAggregateInput
    _sum?: ExistingLicenseVehicleClassSumOrderByAggregateInput
  }

  export type ExistingLicenseVehicleClassScalarWhereWithAggregatesInput = {
    AND?: ExistingLicenseVehicleClassScalarWhereWithAggregatesInput | ExistingLicenseVehicleClassScalarWhereWithAggregatesInput[]
    OR?: ExistingLicenseVehicleClassScalarWhereWithAggregatesInput[]
    NOT?: ExistingLicenseVehicleClassScalarWhereWithAggregatesInput | ExistingLicenseVehicleClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExistingLicenseVehicleClass"> | number
    licenseId?: IntWithAggregatesFilter<"ExistingLicenseVehicleClass"> | number
    vehicleClassId?: IntWithAggregatesFilter<"ExistingLicenseVehicleClass"> | number
  }

  export type PaymentInfoWhereInput = {
    AND?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    OR?: PaymentInfoWhereInput[]
    NOT?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    id?: IntFilter<"PaymentInfo"> | number
    applicationId?: StringFilter<"PaymentInfo"> | string
    totalFee?: IntFilter<"PaymentInfo"> | number
    advanceFee?: IntFilter<"PaymentInfo"> | number
    status?: StringFilter<"PaymentInfo"> | string
    paidDate?: DateTimeNullableFilter<"PaymentInfo"> | Date | string | null
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }

  export type PaymentInfoOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    status?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    application?: StudentApplicationOrderByWithRelationInput
  }

  export type PaymentInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId?: string
    AND?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    OR?: PaymentInfoWhereInput[]
    NOT?: PaymentInfoWhereInput | PaymentInfoWhereInput[]
    totalFee?: IntFilter<"PaymentInfo"> | number
    advanceFee?: IntFilter<"PaymentInfo"> | number
    status?: StringFilter<"PaymentInfo"> | string
    paidDate?: DateTimeNullableFilter<"PaymentInfo"> | Date | string | null
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }, "id" | "applicationId">

  export type PaymentInfoOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    status?: SortOrder
    paidDate?: SortOrderInput | SortOrder
    _count?: PaymentInfoCountOrderByAggregateInput
    _avg?: PaymentInfoAvgOrderByAggregateInput
    _max?: PaymentInfoMaxOrderByAggregateInput
    _min?: PaymentInfoMinOrderByAggregateInput
    _sum?: PaymentInfoSumOrderByAggregateInput
  }

  export type PaymentInfoScalarWhereWithAggregatesInput = {
    AND?: PaymentInfoScalarWhereWithAggregatesInput | PaymentInfoScalarWhereWithAggregatesInput[]
    OR?: PaymentInfoScalarWhereWithAggregatesInput[]
    NOT?: PaymentInfoScalarWhereWithAggregatesInput | PaymentInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentInfo"> | number
    applicationId?: StringWithAggregatesFilter<"PaymentInfo"> | string
    totalFee?: IntWithAggregatesFilter<"PaymentInfo"> | number
    advanceFee?: IntWithAggregatesFilter<"PaymentInfo"> | number
    status?: StringWithAggregatesFilter<"PaymentInfo"> | string
    paidDate?: DateTimeNullableWithAggregatesFilter<"PaymentInfo"> | Date | string | null
  }

  export type User1WhereInput = {
    AND?: User1WhereInput | User1WhereInput[]
    OR?: User1WhereInput[]
    NOT?: User1WhereInput | User1WhereInput[]
    id?: StringFilter<"User1"> | string
    name?: StringFilter<"User1"> | string
    email?: StringFilter<"User1"> | string
    createdAt?: DateTimeFilter<"User1"> | Date | string
  }

  export type User1OrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type User1WhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: User1WhereInput | User1WhereInput[]
    OR?: User1WhereInput[]
    NOT?: User1WhereInput | User1WhereInput[]
    name?: StringFilter<"User1"> | string
    createdAt?: DateTimeFilter<"User1"> | Date | string
  }, "id" | "email">

  export type User1OrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    _count?: User1CountOrderByAggregateInput
    _max?: User1MaxOrderByAggregateInput
    _min?: User1MinOrderByAggregateInput
  }

  export type User1ScalarWhereWithAggregatesInput = {
    AND?: User1ScalarWhereWithAggregatesInput | User1ScalarWhereWithAggregatesInput[]
    OR?: User1ScalarWhereWithAggregatesInput[]
    NOT?: User1ScalarWhereWithAggregatesInput | User1ScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User1"> | string
    name?: StringWithAggregatesFilter<"User1"> | string
    email?: StringWithAggregatesFilter<"User1"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User1"> | Date | string
  }

  export type WrittenExamWhereInput = {
    AND?: WrittenExamWhereInput | WrittenExamWhereInput[]
    OR?: WrittenExamWhereInput[]
    NOT?: WrittenExamWhereInput | WrittenExamWhereInput[]
    id?: IntFilter<"WrittenExam"> | number
    applicationId?: StringFilter<"WrittenExam"> | string
    barCode?: StringFilter<"WrittenExam"> | string
    examDate?: DateTimeFilter<"WrittenExam"> | Date | string
    result?: EnumExamResultFilter<"WrittenExam"> | $Enums.ExamResult
    attemptNo?: IntFilter<"WrittenExam"> | number
    createdAt?: DateTimeFilter<"WrittenExam"> | Date | string
    notes?: StringNullableFilter<"WrittenExam"> | string | null
    passAttemptNo?: IntNullableFilter<"WrittenExam"> | number | null
    passDate?: DateTimeNullableFilter<"WrittenExam"> | Date | string | null
    passWithText?: StringNullableFilter<"WrittenExam"> | string | null
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }

  export type WrittenExamOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    barCode?: SortOrder
    examDate?: SortOrder
    result?: SortOrder
    attemptNo?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    passAttemptNo?: SortOrderInput | SortOrder
    passDate?: SortOrderInput | SortOrder
    passWithText?: SortOrderInput | SortOrder
    application?: StudentApplicationOrderByWithRelationInput
  }

  export type WrittenExamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId_attemptNo?: WrittenExamApplicationIdAttemptNoCompoundUniqueInput
    AND?: WrittenExamWhereInput | WrittenExamWhereInput[]
    OR?: WrittenExamWhereInput[]
    NOT?: WrittenExamWhereInput | WrittenExamWhereInput[]
    applicationId?: StringFilter<"WrittenExam"> | string
    barCode?: StringFilter<"WrittenExam"> | string
    examDate?: DateTimeFilter<"WrittenExam"> | Date | string
    result?: EnumExamResultFilter<"WrittenExam"> | $Enums.ExamResult
    attemptNo?: IntFilter<"WrittenExam"> | number
    createdAt?: DateTimeFilter<"WrittenExam"> | Date | string
    notes?: StringNullableFilter<"WrittenExam"> | string | null
    passAttemptNo?: IntNullableFilter<"WrittenExam"> | number | null
    passDate?: DateTimeNullableFilter<"WrittenExam"> | Date | string | null
    passWithText?: StringNullableFilter<"WrittenExam"> | string | null
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }, "id" | "applicationId_attemptNo">

  export type WrittenExamOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    barCode?: SortOrder
    examDate?: SortOrder
    result?: SortOrder
    attemptNo?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    passAttemptNo?: SortOrderInput | SortOrder
    passDate?: SortOrderInput | SortOrder
    passWithText?: SortOrderInput | SortOrder
    _count?: WrittenExamCountOrderByAggregateInput
    _avg?: WrittenExamAvgOrderByAggregateInput
    _max?: WrittenExamMaxOrderByAggregateInput
    _min?: WrittenExamMinOrderByAggregateInput
    _sum?: WrittenExamSumOrderByAggregateInput
  }

  export type WrittenExamScalarWhereWithAggregatesInput = {
    AND?: WrittenExamScalarWhereWithAggregatesInput | WrittenExamScalarWhereWithAggregatesInput[]
    OR?: WrittenExamScalarWhereWithAggregatesInput[]
    NOT?: WrittenExamScalarWhereWithAggregatesInput | WrittenExamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WrittenExam"> | number
    applicationId?: StringWithAggregatesFilter<"WrittenExam"> | string
    barCode?: StringWithAggregatesFilter<"WrittenExam"> | string
    examDate?: DateTimeWithAggregatesFilter<"WrittenExam"> | Date | string
    result?: EnumExamResultWithAggregatesFilter<"WrittenExam"> | $Enums.ExamResult
    attemptNo?: IntWithAggregatesFilter<"WrittenExam"> | number
    createdAt?: DateTimeWithAggregatesFilter<"WrittenExam"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"WrittenExam"> | string | null
    passAttemptNo?: IntNullableWithAggregatesFilter<"WrittenExam"> | number | null
    passDate?: DateTimeNullableWithAggregatesFilter<"WrittenExam"> | Date | string | null
    passWithText?: StringNullableWithAggregatesFilter<"WrittenExam"> | string | null
  }

  export type DrivingExamResultWhereInput = {
    AND?: DrivingExamResultWhereInput | DrivingExamResultWhereInput[]
    OR?: DrivingExamResultWhereInput[]
    NOT?: DrivingExamResultWhereInput | DrivingExamResultWhereInput[]
    id?: IntFilter<"DrivingExamResult"> | number
    applicationId?: StringFilter<"DrivingExamResult"> | string
    vehicleClassId?: IntFilter<"DrivingExamResult"> | number
    result?: EnumDrivingExamResultStatusFilter<"DrivingExamResult"> | $Enums.DrivingExamResultStatus
    notes?: StringNullableFilter<"DrivingExamResult"> | string | null
    examDate?: DateTimeNullableFilter<"DrivingExamResult"> | Date | string | null
    trainedDates?: StringFilter<"DrivingExamResult"> | string
    createdAt?: DateTimeFilter<"DrivingExamResult"> | Date | string
    passAttemptNo?: IntNullableFilter<"DrivingExamResult"> | number | null
    passDate?: DateTimeNullableFilter<"DrivingExamResult"> | Date | string | null
    passWithText?: StringNullableFilter<"DrivingExamResult"> | string | null
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    vehicleClass?: XOR<VehicleClassScalarRelationFilter, VehicleClassWhereInput>
  }

  export type DrivingExamResultOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
    result?: SortOrder
    notes?: SortOrderInput | SortOrder
    examDate?: SortOrderInput | SortOrder
    trainedDates?: SortOrder
    createdAt?: SortOrder
    passAttemptNo?: SortOrderInput | SortOrder
    passDate?: SortOrderInput | SortOrder
    passWithText?: SortOrderInput | SortOrder
    application?: StudentApplicationOrderByWithRelationInput
    vehicleClass?: VehicleClassOrderByWithRelationInput
  }

  export type DrivingExamResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId_vehicleClassId?: DrivingExamResultApplicationIdVehicleClassIdCompoundUniqueInput
    AND?: DrivingExamResultWhereInput | DrivingExamResultWhereInput[]
    OR?: DrivingExamResultWhereInput[]
    NOT?: DrivingExamResultWhereInput | DrivingExamResultWhereInput[]
    applicationId?: StringFilter<"DrivingExamResult"> | string
    vehicleClassId?: IntFilter<"DrivingExamResult"> | number
    result?: EnumDrivingExamResultStatusFilter<"DrivingExamResult"> | $Enums.DrivingExamResultStatus
    notes?: StringNullableFilter<"DrivingExamResult"> | string | null
    examDate?: DateTimeNullableFilter<"DrivingExamResult"> | Date | string | null
    trainedDates?: StringFilter<"DrivingExamResult"> | string
    createdAt?: DateTimeFilter<"DrivingExamResult"> | Date | string
    passAttemptNo?: IntNullableFilter<"DrivingExamResult"> | number | null
    passDate?: DateTimeNullableFilter<"DrivingExamResult"> | Date | string | null
    passWithText?: StringNullableFilter<"DrivingExamResult"> | string | null
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    vehicleClass?: XOR<VehicleClassScalarRelationFilter, VehicleClassWhereInput>
  }, "id" | "applicationId_vehicleClassId">

  export type DrivingExamResultOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
    result?: SortOrder
    notes?: SortOrderInput | SortOrder
    examDate?: SortOrderInput | SortOrder
    trainedDates?: SortOrder
    createdAt?: SortOrder
    passAttemptNo?: SortOrderInput | SortOrder
    passDate?: SortOrderInput | SortOrder
    passWithText?: SortOrderInput | SortOrder
    _count?: DrivingExamResultCountOrderByAggregateInput
    _avg?: DrivingExamResultAvgOrderByAggregateInput
    _max?: DrivingExamResultMaxOrderByAggregateInput
    _min?: DrivingExamResultMinOrderByAggregateInput
    _sum?: DrivingExamResultSumOrderByAggregateInput
  }

  export type DrivingExamResultScalarWhereWithAggregatesInput = {
    AND?: DrivingExamResultScalarWhereWithAggregatesInput | DrivingExamResultScalarWhereWithAggregatesInput[]
    OR?: DrivingExamResultScalarWhereWithAggregatesInput[]
    NOT?: DrivingExamResultScalarWhereWithAggregatesInput | DrivingExamResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DrivingExamResult"> | number
    applicationId?: StringWithAggregatesFilter<"DrivingExamResult"> | string
    vehicleClassId?: IntWithAggregatesFilter<"DrivingExamResult"> | number
    result?: EnumDrivingExamResultStatusWithAggregatesFilter<"DrivingExamResult"> | $Enums.DrivingExamResultStatus
    notes?: StringNullableWithAggregatesFilter<"DrivingExamResult"> | string | null
    examDate?: DateTimeNullableWithAggregatesFilter<"DrivingExamResult"> | Date | string | null
    trainedDates?: StringWithAggregatesFilter<"DrivingExamResult"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DrivingExamResult"> | Date | string
    passAttemptNo?: IntNullableWithAggregatesFilter<"DrivingExamResult"> | number | null
    passDate?: DateTimeNullableWithAggregatesFilter<"DrivingExamResult"> | Date | string | null
    passWithText?: StringNullableWithAggregatesFilter<"DrivingExamResult"> | string | null
  }

  export type PaymentRecordWhereInput = {
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    id?: IntFilter<"PaymentRecord"> | number
    applicationId?: StringFilter<"PaymentRecord"> | string
    amount?: IntFilter<"PaymentRecord"> | number
    paidDate?: DateTimeFilter<"PaymentRecord"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }

  export type PaymentRecordOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    application?: StudentApplicationOrderByWithRelationInput
  }

  export type PaymentRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    OR?: PaymentRecordWhereInput[]
    NOT?: PaymentRecordWhereInput | PaymentRecordWhereInput[]
    applicationId?: StringFilter<"PaymentRecord"> | string
    amount?: IntFilter<"PaymentRecord"> | number
    paidDate?: DateTimeFilter<"PaymentRecord"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
  }, "id">

  export type PaymentRecordOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
    _count?: PaymentRecordCountOrderByAggregateInput
    _avg?: PaymentRecordAvgOrderByAggregateInput
    _max?: PaymentRecordMaxOrderByAggregateInput
    _min?: PaymentRecordMinOrderByAggregateInput
    _sum?: PaymentRecordSumOrderByAggregateInput
  }

  export type PaymentRecordScalarWhereWithAggregatesInput = {
    AND?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    OR?: PaymentRecordScalarWhereWithAggregatesInput[]
    NOT?: PaymentRecordScalarWhereWithAggregatesInput | PaymentRecordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentRecord"> | number
    applicationId?: StringWithAggregatesFilter<"PaymentRecord"> | string
    amount?: IntWithAggregatesFilter<"PaymentRecord"> | number
    paidDate?: DateTimeWithAggregatesFilter<"PaymentRecord"> | Date | string
  }

  export type ExamAttemptWhereInput = {
    AND?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    OR?: ExamAttemptWhereInput[]
    NOT?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    id?: IntFilter<"ExamAttempt"> | number
    applicationId?: StringFilter<"ExamAttempt"> | string
    examType?: StringFilter<"ExamAttempt"> | string
    vehicleClassId?: IntNullableFilter<"ExamAttempt"> | number | null
    attemptNo?: IntFilter<"ExamAttempt"> | number
    examDate?: DateTimeFilter<"ExamAttempt"> | Date | string
    examTime?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    notes?: StringNullableFilter<"ExamAttempt"> | string | null
    result?: EnumDrivingExamResultStatusFilter<"ExamAttempt"> | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFilter<"ExamAttempt"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    vehicleClass?: XOR<VehicleClassNullableScalarRelationFilter, VehicleClassWhereInput> | null
  }

  export type ExamAttemptOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    vehicleClassId?: SortOrderInput | SortOrder
    attemptNo?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    application?: StudentApplicationOrderByWithRelationInput
    vehicleClass?: VehicleClassOrderByWithRelationInput
  }

  export type ExamAttemptWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    OR?: ExamAttemptWhereInput[]
    NOT?: ExamAttemptWhereInput | ExamAttemptWhereInput[]
    applicationId?: StringFilter<"ExamAttempt"> | string
    examType?: StringFilter<"ExamAttempt"> | string
    vehicleClassId?: IntNullableFilter<"ExamAttempt"> | number | null
    attemptNo?: IntFilter<"ExamAttempt"> | number
    examDate?: DateTimeFilter<"ExamAttempt"> | Date | string
    examTime?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    notes?: StringNullableFilter<"ExamAttempt"> | string | null
    result?: EnumDrivingExamResultStatusFilter<"ExamAttempt"> | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFilter<"ExamAttempt"> | Date | string
    application?: XOR<StudentApplicationScalarRelationFilter, StudentApplicationWhereInput>
    vehicleClass?: XOR<VehicleClassNullableScalarRelationFilter, VehicleClassWhereInput> | null
  }, "id">

  export type ExamAttemptOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    vehicleClassId?: SortOrderInput | SortOrder
    attemptNo?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    _count?: ExamAttemptCountOrderByAggregateInput
    _avg?: ExamAttemptAvgOrderByAggregateInput
    _max?: ExamAttemptMaxOrderByAggregateInput
    _min?: ExamAttemptMinOrderByAggregateInput
    _sum?: ExamAttemptSumOrderByAggregateInput
  }

  export type ExamAttemptScalarWhereWithAggregatesInput = {
    AND?: ExamAttemptScalarWhereWithAggregatesInput | ExamAttemptScalarWhereWithAggregatesInput[]
    OR?: ExamAttemptScalarWhereWithAggregatesInput[]
    NOT?: ExamAttemptScalarWhereWithAggregatesInput | ExamAttemptScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExamAttempt"> | number
    applicationId?: StringWithAggregatesFilter<"ExamAttempt"> | string
    examType?: StringWithAggregatesFilter<"ExamAttempt"> | string
    vehicleClassId?: IntNullableWithAggregatesFilter<"ExamAttempt"> | number | null
    attemptNo?: IntWithAggregatesFilter<"ExamAttempt"> | number
    examDate?: DateTimeWithAggregatesFilter<"ExamAttempt"> | Date | string
    examTime?: DateTimeNullableWithAggregatesFilter<"ExamAttempt"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"ExamAttempt"> | string | null
    result?: EnumDrivingExamResultStatusWithAggregatesFilter<"ExamAttempt"> | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeWithAggregatesFilter<"ExamAttempt"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    username: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationCreateInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationCreateManyInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamReminderLogCreateInput = {
    examType: string
    examRecordId: number
    sentAt?: Date | string
    application: StudentApplicationCreateNestedOneWithoutExamReminderLogsInput
  }

  export type ExamReminderLogUncheckedCreateInput = {
    id?: number
    applicationId: string
    examType: string
    examRecordId: number
    sentAt?: Date | string
  }

  export type ExamReminderLogUpdateInput = {
    examType?: StringFieldUpdateOperationsInput | string
    examRecordId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: StudentApplicationUpdateOneRequiredWithoutExamReminderLogsNestedInput
  }

  export type ExamReminderLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    examRecordId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamReminderLogCreateManyInput = {
    id?: number
    applicationId: string
    examType: string
    examRecordId: number
    sentAt?: Date | string
  }

  export type ExamReminderLogUpdateManyMutationInput = {
    examType?: StringFieldUpdateOperationsInput | string
    examRecordId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamReminderLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    examRecordId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayWishLogCreateInput = {
    year: number
    sentAt?: Date | string
    application: StudentApplicationCreateNestedOneWithoutBirthdayWishLogsInput
  }

  export type BirthdayWishLogUncheckedCreateInput = {
    id?: number
    applicationId: string
    year: number
    sentAt?: Date | string
  }

  export type BirthdayWishLogUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: StudentApplicationUpdateOneRequiredWithoutBirthdayWishLogsNestedInput
  }

  export type BirthdayWishLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayWishLogCreateManyInput = {
    id?: number
    applicationId: string
    year: number
    sentAt?: Date | string
  }

  export type BirthdayWishLogUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayWishLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationVehicleClassCreateInput = {
    application: StudentApplicationCreateNestedOneWithoutVehicleClassesInput
    vehicleClass: VehicleClassCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationVehicleClassUncheckedCreateInput = {
    id?: number
    applicationId: string
    vehicleClassId: number
  }

  export type ApplicationVehicleClassUpdateInput = {
    application?: StudentApplicationUpdateOneRequiredWithoutVehicleClassesNestedInput
    vehicleClass?: VehicleClassUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationVehicleClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationVehicleClassCreateManyInput = {
    id?: number
    applicationId: string
    vehicleClassId: number
  }

  export type ApplicationVehicleClassUpdateManyMutationInput = {

  }

  export type ApplicationVehicleClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleClassCreateInput = {
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassCreateNestedManyWithoutVehicleClassInput
    existingLicenses?: ExistingLicenseVehicleClassCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    existingLicenses?: ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUpdateManyWithoutVehicleClassNestedInput
    existingLicenses?: ExistingLicenseVehicleClassUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutVehicleClassNestedInput
  }

  export type VehicleClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    existingLicenses?: ExistingLicenseVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutVehicleClassNestedInput
  }

  export type VehicleClassCreateManyInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
  }

  export type VehicleClassUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExistingLicenseCreateInput = {
    licenseNumber?: string | null
    issuedDate?: Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassCreateNestedManyWithoutLicenseInput
    application: StudentApplicationCreateNestedOneWithoutExistingLicenseInput
  }

  export type ExistingLicenseUncheckedCreateInput = {
    id?: number
    applicationId: string
    licenseNumber?: string | null
    issuedDate?: Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type ExistingLicenseUpdateInput = {
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassUpdateManyWithoutLicenseNestedInput
    application?: StudentApplicationUpdateOneRequiredWithoutExistingLicenseNestedInput
  }

  export type ExistingLicenseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type ExistingLicenseCreateManyInput = {
    id?: number
    applicationId: string
    licenseNumber?: string | null
    issuedDate?: Date | string | null
  }

  export type ExistingLicenseUpdateManyMutationInput = {
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExistingLicenseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExistingLicenseVehicleClassCreateInput = {
    license: ExistingLicenseCreateNestedOneWithoutVehicleClassesInput
    vehicleClass: VehicleClassCreateNestedOneWithoutExistingLicensesInput
  }

  export type ExistingLicenseVehicleClassUncheckedCreateInput = {
    id?: number
    licenseId: number
    vehicleClassId: number
  }

  export type ExistingLicenseVehicleClassUpdateInput = {
    license?: ExistingLicenseUpdateOneRequiredWithoutVehicleClassesNestedInput
    vehicleClass?: VehicleClassUpdateOneRequiredWithoutExistingLicensesNestedInput
  }

  export type ExistingLicenseVehicleClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    licenseId?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
  }

  export type ExistingLicenseVehicleClassCreateManyInput = {
    id?: number
    licenseId: number
    vehicleClassId: number
  }

  export type ExistingLicenseVehicleClassUpdateManyMutationInput = {

  }

  export type ExistingLicenseVehicleClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    licenseId?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentInfoCreateInput = {
    totalFee: number
    advanceFee: number
    status?: string
    paidDate?: Date | string | null
    application: StudentApplicationCreateNestedOneWithoutPaymentInfoInput
  }

  export type PaymentInfoUncheckedCreateInput = {
    id?: number
    applicationId: string
    totalFee: number
    advanceFee: number
    status?: string
    paidDate?: Date | string | null
  }

  export type PaymentInfoUpdateInput = {
    totalFee?: IntFieldUpdateOperationsInput | number
    advanceFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application?: StudentApplicationUpdateOneRequiredWithoutPaymentInfoNestedInput
  }

  export type PaymentInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    totalFee?: IntFieldUpdateOperationsInput | number
    advanceFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentInfoCreateManyInput = {
    id?: number
    applicationId: string
    totalFee: number
    advanceFee: number
    status?: string
    paidDate?: Date | string | null
  }

  export type PaymentInfoUpdateManyMutationInput = {
    totalFee?: IntFieldUpdateOperationsInput | number
    advanceFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    totalFee?: IntFieldUpdateOperationsInput | number
    advanceFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type User1CreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
  }

  export type User1UncheckedCreateInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
  }

  export type User1UpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User1UncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User1CreateManyInput = {
    id?: string
    name: string
    email: string
    createdAt?: Date | string
  }

  export type User1UpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type User1UncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WrittenExamCreateInput = {
    barCode: string
    examDate: Date | string
    result: $Enums.ExamResult
    attemptNo: number
    createdAt?: Date | string
    notes?: string | null
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
    application: StudentApplicationCreateNestedOneWithoutWrittenExamsInput
  }

  export type WrittenExamUncheckedCreateInput = {
    id?: number
    applicationId: string
    barCode: string
    examDate: Date | string
    result: $Enums.ExamResult
    attemptNo: number
    createdAt?: Date | string
    notes?: string | null
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type WrittenExamUpdateInput = {
    barCode?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumExamResultFieldUpdateOperationsInput | $Enums.ExamResult
    attemptNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
    application?: StudentApplicationUpdateOneRequiredWithoutWrittenExamsNestedInput
  }

  export type WrittenExamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    barCode?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumExamResultFieldUpdateOperationsInput | $Enums.ExamResult
    attemptNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WrittenExamCreateManyInput = {
    id?: number
    applicationId: string
    barCode: string
    examDate: Date | string
    result: $Enums.ExamResult
    attemptNo: number
    createdAt?: Date | string
    notes?: string | null
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type WrittenExamUpdateManyMutationInput = {
    barCode?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumExamResultFieldUpdateOperationsInput | $Enums.ExamResult
    attemptNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WrittenExamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    barCode?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumExamResultFieldUpdateOperationsInput | $Enums.ExamResult
    attemptNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrivingExamResultCreateInput = {
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
    application: StudentApplicationCreateNestedOneWithoutDrivingExamResultsInput
    vehicleClass: VehicleClassCreateNestedOneWithoutDrivingExamResultsInput
  }

  export type DrivingExamResultUncheckedCreateInput = {
    id?: number
    applicationId: string
    vehicleClassId: number
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type DrivingExamResultUpdateInput = {
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
    application?: StudentApplicationUpdateOneRequiredWithoutDrivingExamResultsNestedInput
    vehicleClass?: VehicleClassUpdateOneRequiredWithoutDrivingExamResultsNestedInput
  }

  export type DrivingExamResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: IntFieldUpdateOperationsInput | number
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrivingExamResultCreateManyInput = {
    id?: number
    applicationId: string
    vehicleClassId: number
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type DrivingExamResultUpdateManyMutationInput = {
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrivingExamResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: IntFieldUpdateOperationsInput | number
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentRecordCreateInput = {
    amount: number
    paidDate?: Date | string
    application: StudentApplicationCreateNestedOneWithoutPaymentRecordsInput
  }

  export type PaymentRecordUncheckedCreateInput = {
    id?: number
    applicationId: string
    amount: number
    paidDate?: Date | string
  }

  export type PaymentRecordUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: StudentApplicationUpdateOneRequiredWithoutPaymentRecordsNestedInput
  }

  export type PaymentRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordCreateManyInput = {
    id?: number
    applicationId: string
    amount: number
    paidDate?: Date | string
  }

  export type PaymentRecordUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAttemptCreateInput = {
    examType: string
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
    application: StudentApplicationCreateNestedOneWithoutExamAttemptsInput
    vehicleClass?: VehicleClassCreateNestedOneWithoutExamAttemptsInput
  }

  export type ExamAttemptUncheckedCreateInput = {
    id?: number
    applicationId: string
    examType: string
    vehicleClassId?: number | null
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
  }

  export type ExamAttemptUpdateInput = {
    examType?: StringFieldUpdateOperationsInput | string
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: StudentApplicationUpdateOneRequiredWithoutExamAttemptsNestedInput
    vehicleClass?: VehicleClassUpdateOneWithoutExamAttemptsNestedInput
  }

  export type ExamAttemptUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: NullableIntFieldUpdateOperationsInput | number | null
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAttemptCreateManyInput = {
    id?: number
    applicationId: string
    examType: string
    vehicleClassId?: number | null
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
  }

  export type ExamAttemptUpdateManyMutationInput = {
    examType?: StringFieldUpdateOperationsInput | string
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAttemptUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: NullableIntFieldUpdateOperationsInput | number | null
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ApplicationVehicleClassListRelationFilter = {
    every?: ApplicationVehicleClassWhereInput
    some?: ApplicationVehicleClassWhereInput
    none?: ApplicationVehicleClassWhereInput
  }

  export type ExistingLicenseNullableScalarRelationFilter = {
    is?: ExistingLicenseWhereInput | null
    isNot?: ExistingLicenseWhereInput | null
  }

  export type WrittenExamListRelationFilter = {
    every?: WrittenExamWhereInput
    some?: WrittenExamWhereInput
    none?: WrittenExamWhereInput
  }

  export type PaymentInfoNullableScalarRelationFilter = {
    is?: PaymentInfoWhereInput | null
    isNot?: PaymentInfoWhereInput | null
  }

  export type PaymentRecordListRelationFilter = {
    every?: PaymentRecordWhereInput
    some?: PaymentRecordWhereInput
    none?: PaymentRecordWhereInput
  }

  export type DrivingExamResultListRelationFilter = {
    every?: DrivingExamResultWhereInput
    some?: DrivingExamResultWhereInput
    none?: DrivingExamResultWhereInput
  }

  export type ExamAttemptListRelationFilter = {
    every?: ExamAttemptWhereInput
    some?: ExamAttemptWhereInput
    none?: ExamAttemptWhereInput
  }

  export type BirthdayWishLogListRelationFilter = {
    every?: BirthdayWishLogWhereInput
    some?: BirthdayWishLogWhereInput
    none?: BirthdayWishLogWhereInput
  }

  export type ExamReminderLogListRelationFilter = {
    every?: ExamReminderLogWhereInput
    some?: ExamReminderLogWhereInput
    none?: ExamReminderLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApplicationVehicleClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WrittenExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DrivingExamResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamAttemptOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BirthdayWishLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamReminderLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    canDriveVehicles?: SortOrder
    notes?: SortOrder
    medicalDate?: SortOrder
    medicalTime?: SortOrder
    medicalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentApplicationAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type StudentApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    canDriveVehicles?: SortOrder
    notes?: SortOrder
    medicalDate?: SortOrder
    medicalTime?: SortOrder
    medicalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    referenceNo?: SortOrder
    fullName?: SortOrder
    nic?: SortOrder
    address?: SortOrder
    email?: SortOrder
    phone1?: SortOrder
    phone2?: SortOrder
    dob?: SortOrder
    age?: SortOrder
    canDriveVehicles?: SortOrder
    notes?: SortOrder
    medicalDate?: SortOrder
    medicalTime?: SortOrder
    medicalStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentApplicationSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StudentApplicationScalarRelationFilter = {
    is?: StudentApplicationWhereInput
    isNot?: StudentApplicationWhereInput
  }

  export type ExamReminderLogExamTypeExamRecordIdCompoundUniqueInput = {
    examType: string
    examRecordId: number
  }

  export type ExamReminderLogCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    examRecordId?: SortOrder
    sentAt?: SortOrder
  }

  export type ExamReminderLogAvgOrderByAggregateInput = {
    id?: SortOrder
    examRecordId?: SortOrder
  }

  export type ExamReminderLogMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    examRecordId?: SortOrder
    sentAt?: SortOrder
  }

  export type ExamReminderLogMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    examRecordId?: SortOrder
    sentAt?: SortOrder
  }

  export type ExamReminderLogSumOrderByAggregateInput = {
    id?: SortOrder
    examRecordId?: SortOrder
  }

  export type BirthdayWishLogApplicationIdYearCompoundUniqueInput = {
    applicationId: string
    year: number
  }

  export type BirthdayWishLogCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    year?: SortOrder
    sentAt?: SortOrder
  }

  export type BirthdayWishLogAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type BirthdayWishLogMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    year?: SortOrder
    sentAt?: SortOrder
  }

  export type BirthdayWishLogMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    year?: SortOrder
    sentAt?: SortOrder
  }

  export type BirthdayWishLogSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
  }

  export type VehicleClassScalarRelationFilter = {
    is?: VehicleClassWhereInput
    isNot?: VehicleClassWhereInput
  }

  export type ApplicationVehicleClassCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ApplicationVehicleClassAvgOrderByAggregateInput = {
    id?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ApplicationVehicleClassMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ApplicationVehicleClassMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ApplicationVehicleClassSumOrderByAggregateInput = {
    id?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ExistingLicenseVehicleClassListRelationFilter = {
    every?: ExistingLicenseVehicleClassWhereInput
    some?: ExistingLicenseVehicleClassWhereInput
    none?: ExistingLicenseVehicleClassWhereInput
  }

  export type ExistingLicenseVehicleClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleClassCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleClassAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleClassMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleClassMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type VehicleClassSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExistingLicenseCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    licenseNumber?: SortOrder
    issuedDate?: SortOrder
  }

  export type ExistingLicenseAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExistingLicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    licenseNumber?: SortOrder
    issuedDate?: SortOrder
  }

  export type ExistingLicenseMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    licenseNumber?: SortOrder
    issuedDate?: SortOrder
  }

  export type ExistingLicenseSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExistingLicenseScalarRelationFilter = {
    is?: ExistingLicenseWhereInput
    isNot?: ExistingLicenseWhereInput
  }

  export type ExistingLicenseVehicleClassCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ExistingLicenseVehicleClassAvgOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ExistingLicenseVehicleClassMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ExistingLicenseVehicleClassMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type ExistingLicenseVehicleClassSumOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    vehicleClassId?: SortOrder
  }

  export type PaymentInfoCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    status?: SortOrder
    paidDate?: SortOrder
  }

  export type PaymentInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
  }

  export type PaymentInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    status?: SortOrder
    paidDate?: SortOrder
  }

  export type PaymentInfoMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
    status?: SortOrder
    paidDate?: SortOrder
  }

  export type PaymentInfoSumOrderByAggregateInput = {
    id?: SortOrder
    totalFee?: SortOrder
    advanceFee?: SortOrder
  }

  export type User1CountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type User1MaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type User1MinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumExamResultFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResult | EnumExamResultFieldRefInput<$PrismaModel>
    in?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    not?: NestedEnumExamResultFilter<$PrismaModel> | $Enums.ExamResult
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type WrittenExamApplicationIdAttemptNoCompoundUniqueInput = {
    applicationId: string
    attemptNo: number
  }

  export type WrittenExamCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    barCode?: SortOrder
    examDate?: SortOrder
    result?: SortOrder
    attemptNo?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrder
    passAttemptNo?: SortOrder
    passDate?: SortOrder
    passWithText?: SortOrder
  }

  export type WrittenExamAvgOrderByAggregateInput = {
    id?: SortOrder
    attemptNo?: SortOrder
    passAttemptNo?: SortOrder
  }

  export type WrittenExamMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    barCode?: SortOrder
    examDate?: SortOrder
    result?: SortOrder
    attemptNo?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrder
    passAttemptNo?: SortOrder
    passDate?: SortOrder
    passWithText?: SortOrder
  }

  export type WrittenExamMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    barCode?: SortOrder
    examDate?: SortOrder
    result?: SortOrder
    attemptNo?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrder
    passAttemptNo?: SortOrder
    passDate?: SortOrder
    passWithText?: SortOrder
  }

  export type WrittenExamSumOrderByAggregateInput = {
    id?: SortOrder
    attemptNo?: SortOrder
    passAttemptNo?: SortOrder
  }

  export type EnumExamResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResult | EnumExamResultFieldRefInput<$PrismaModel>
    in?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    not?: NestedEnumExamResultWithAggregatesFilter<$PrismaModel> | $Enums.ExamResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamResultFilter<$PrismaModel>
    _max?: NestedEnumExamResultFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumDrivingExamResultStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrivingExamResultStatus | EnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrivingExamResultStatusFilter<$PrismaModel> | $Enums.DrivingExamResultStatus
  }

  export type DrivingExamResultApplicationIdVehicleClassIdCompoundUniqueInput = {
    applicationId: string
    vehicleClassId: number
  }

  export type DrivingExamResultCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
    result?: SortOrder
    notes?: SortOrder
    examDate?: SortOrder
    trainedDates?: SortOrder
    createdAt?: SortOrder
    passAttemptNo?: SortOrder
    passDate?: SortOrder
    passWithText?: SortOrder
  }

  export type DrivingExamResultAvgOrderByAggregateInput = {
    id?: SortOrder
    vehicleClassId?: SortOrder
    passAttemptNo?: SortOrder
  }

  export type DrivingExamResultMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
    result?: SortOrder
    notes?: SortOrder
    examDate?: SortOrder
    trainedDates?: SortOrder
    createdAt?: SortOrder
    passAttemptNo?: SortOrder
    passDate?: SortOrder
    passWithText?: SortOrder
  }

  export type DrivingExamResultMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    vehicleClassId?: SortOrder
    result?: SortOrder
    notes?: SortOrder
    examDate?: SortOrder
    trainedDates?: SortOrder
    createdAt?: SortOrder
    passAttemptNo?: SortOrder
    passDate?: SortOrder
    passWithText?: SortOrder
  }

  export type DrivingExamResultSumOrderByAggregateInput = {
    id?: SortOrder
    vehicleClassId?: SortOrder
    passAttemptNo?: SortOrder
  }

  export type EnumDrivingExamResultStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrivingExamResultStatus | EnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrivingExamResultStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrivingExamResultStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrivingExamResultStatusFilter<$PrismaModel>
    _max?: NestedEnumDrivingExamResultStatusFilter<$PrismaModel>
  }

  export type PaymentRecordCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
  }

  export type PaymentRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type PaymentRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
  }

  export type PaymentRecordMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    amount?: SortOrder
    paidDate?: SortOrder
  }

  export type PaymentRecordSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type VehicleClassNullableScalarRelationFilter = {
    is?: VehicleClassWhereInput | null
    isNot?: VehicleClassWhereInput | null
  }

  export type ExamAttemptCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    vehicleClassId?: SortOrder
    attemptNo?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    notes?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamAttemptAvgOrderByAggregateInput = {
    id?: SortOrder
    vehicleClassId?: SortOrder
    attemptNo?: SortOrder
  }

  export type ExamAttemptMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    vehicleClassId?: SortOrder
    attemptNo?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    notes?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamAttemptMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    examType?: SortOrder
    vehicleClassId?: SortOrder
    attemptNo?: SortOrder
    examDate?: SortOrder
    examTime?: SortOrder
    notes?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamAttemptSumOrderByAggregateInput = {
    id?: SortOrder
    vehicleClassId?: SortOrder
    attemptNo?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ApplicationVehicleClassCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutApplicationInput, ApplicationVehicleClassUncheckedCreateWithoutApplicationInput> | ApplicationVehicleClassCreateWithoutApplicationInput[] | ApplicationVehicleClassUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutApplicationInput | ApplicationVehicleClassCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationVehicleClassCreateManyApplicationInputEnvelope
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
  }

  export type ExistingLicenseCreateNestedOneWithoutApplicationInput = {
    create?: XOR<ExistingLicenseCreateWithoutApplicationInput, ExistingLicenseUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ExistingLicenseCreateOrConnectWithoutApplicationInput
    connect?: ExistingLicenseWhereUniqueInput
  }

  export type WrittenExamCreateNestedManyWithoutApplicationInput = {
    create?: XOR<WrittenExamCreateWithoutApplicationInput, WrittenExamUncheckedCreateWithoutApplicationInput> | WrittenExamCreateWithoutApplicationInput[] | WrittenExamUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: WrittenExamCreateOrConnectWithoutApplicationInput | WrittenExamCreateOrConnectWithoutApplicationInput[]
    createMany?: WrittenExamCreateManyApplicationInputEnvelope
    connect?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
  }

  export type PaymentInfoCreateNestedOneWithoutApplicationInput = {
    create?: XOR<PaymentInfoCreateWithoutApplicationInput, PaymentInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutApplicationInput
    connect?: PaymentInfoWhereUniqueInput
  }

  export type PaymentRecordCreateNestedManyWithoutApplicationInput = {
    create?: XOR<PaymentRecordCreateWithoutApplicationInput, PaymentRecordUncheckedCreateWithoutApplicationInput> | PaymentRecordCreateWithoutApplicationInput[] | PaymentRecordUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutApplicationInput | PaymentRecordCreateOrConnectWithoutApplicationInput[]
    createMany?: PaymentRecordCreateManyApplicationInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type DrivingExamResultCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DrivingExamResultCreateWithoutApplicationInput, DrivingExamResultUncheckedCreateWithoutApplicationInput> | DrivingExamResultCreateWithoutApplicationInput[] | DrivingExamResultUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutApplicationInput | DrivingExamResultCreateOrConnectWithoutApplicationInput[]
    createMany?: DrivingExamResultCreateManyApplicationInputEnvelope
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
  }

  export type ExamAttemptCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ExamAttemptCreateWithoutApplicationInput, ExamAttemptUncheckedCreateWithoutApplicationInput> | ExamAttemptCreateWithoutApplicationInput[] | ExamAttemptUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutApplicationInput | ExamAttemptCreateOrConnectWithoutApplicationInput[]
    createMany?: ExamAttemptCreateManyApplicationInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type BirthdayWishLogCreateNestedManyWithoutApplicationInput = {
    create?: XOR<BirthdayWishLogCreateWithoutApplicationInput, BirthdayWishLogUncheckedCreateWithoutApplicationInput> | BirthdayWishLogCreateWithoutApplicationInput[] | BirthdayWishLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: BirthdayWishLogCreateOrConnectWithoutApplicationInput | BirthdayWishLogCreateOrConnectWithoutApplicationInput[]
    createMany?: BirthdayWishLogCreateManyApplicationInputEnvelope
    connect?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
  }

  export type ExamReminderLogCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ExamReminderLogCreateWithoutApplicationInput, ExamReminderLogUncheckedCreateWithoutApplicationInput> | ExamReminderLogCreateWithoutApplicationInput[] | ExamReminderLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamReminderLogCreateOrConnectWithoutApplicationInput | ExamReminderLogCreateOrConnectWithoutApplicationInput[]
    createMany?: ExamReminderLogCreateManyApplicationInputEnvelope
    connect?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
  }

  export type ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutApplicationInput, ApplicationVehicleClassUncheckedCreateWithoutApplicationInput> | ApplicationVehicleClassCreateWithoutApplicationInput[] | ApplicationVehicleClassUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutApplicationInput | ApplicationVehicleClassCreateOrConnectWithoutApplicationInput[]
    createMany?: ApplicationVehicleClassCreateManyApplicationInputEnvelope
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
  }

  export type ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<ExistingLicenseCreateWithoutApplicationInput, ExistingLicenseUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ExistingLicenseCreateOrConnectWithoutApplicationInput
    connect?: ExistingLicenseWhereUniqueInput
  }

  export type WrittenExamUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<WrittenExamCreateWithoutApplicationInput, WrittenExamUncheckedCreateWithoutApplicationInput> | WrittenExamCreateWithoutApplicationInput[] | WrittenExamUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: WrittenExamCreateOrConnectWithoutApplicationInput | WrittenExamCreateOrConnectWithoutApplicationInput[]
    createMany?: WrittenExamCreateManyApplicationInputEnvelope
    connect?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
  }

  export type PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<PaymentInfoCreateWithoutApplicationInput, PaymentInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutApplicationInput
    connect?: PaymentInfoWhereUniqueInput
  }

  export type PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<PaymentRecordCreateWithoutApplicationInput, PaymentRecordUncheckedCreateWithoutApplicationInput> | PaymentRecordCreateWithoutApplicationInput[] | PaymentRecordUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutApplicationInput | PaymentRecordCreateOrConnectWithoutApplicationInput[]
    createMany?: PaymentRecordCreateManyApplicationInputEnvelope
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
  }

  export type DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<DrivingExamResultCreateWithoutApplicationInput, DrivingExamResultUncheckedCreateWithoutApplicationInput> | DrivingExamResultCreateWithoutApplicationInput[] | DrivingExamResultUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutApplicationInput | DrivingExamResultCreateOrConnectWithoutApplicationInput[]
    createMany?: DrivingExamResultCreateManyApplicationInputEnvelope
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
  }

  export type ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ExamAttemptCreateWithoutApplicationInput, ExamAttemptUncheckedCreateWithoutApplicationInput> | ExamAttemptCreateWithoutApplicationInput[] | ExamAttemptUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutApplicationInput | ExamAttemptCreateOrConnectWithoutApplicationInput[]
    createMany?: ExamAttemptCreateManyApplicationInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<BirthdayWishLogCreateWithoutApplicationInput, BirthdayWishLogUncheckedCreateWithoutApplicationInput> | BirthdayWishLogCreateWithoutApplicationInput[] | BirthdayWishLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: BirthdayWishLogCreateOrConnectWithoutApplicationInput | BirthdayWishLogCreateOrConnectWithoutApplicationInput[]
    createMany?: BirthdayWishLogCreateManyApplicationInputEnvelope
    connect?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
  }

  export type ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput = {
    create?: XOR<ExamReminderLogCreateWithoutApplicationInput, ExamReminderLogUncheckedCreateWithoutApplicationInput> | ExamReminderLogCreateWithoutApplicationInput[] | ExamReminderLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamReminderLogCreateOrConnectWithoutApplicationInput | ExamReminderLogCreateOrConnectWithoutApplicationInput[]
    createMany?: ExamReminderLogCreateManyApplicationInputEnvelope
    connect?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutApplicationInput, ApplicationVehicleClassUncheckedCreateWithoutApplicationInput> | ApplicationVehicleClassCreateWithoutApplicationInput[] | ApplicationVehicleClassUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutApplicationInput | ApplicationVehicleClassCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationVehicleClassUpsertWithWhereUniqueWithoutApplicationInput | ApplicationVehicleClassUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationVehicleClassCreateManyApplicationInputEnvelope
    set?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    disconnect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    delete?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    update?: ApplicationVehicleClassUpdateWithWhereUniqueWithoutApplicationInput | ApplicationVehicleClassUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationVehicleClassUpdateManyWithWhereWithoutApplicationInput | ApplicationVehicleClassUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationVehicleClassScalarWhereInput | ApplicationVehicleClassScalarWhereInput[]
  }

  export type ExistingLicenseUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<ExistingLicenseCreateWithoutApplicationInput, ExistingLicenseUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ExistingLicenseCreateOrConnectWithoutApplicationInput
    upsert?: ExistingLicenseUpsertWithoutApplicationInput
    disconnect?: ExistingLicenseWhereInput | boolean
    delete?: ExistingLicenseWhereInput | boolean
    connect?: ExistingLicenseWhereUniqueInput
    update?: XOR<XOR<ExistingLicenseUpdateToOneWithWhereWithoutApplicationInput, ExistingLicenseUpdateWithoutApplicationInput>, ExistingLicenseUncheckedUpdateWithoutApplicationInput>
  }

  export type WrittenExamUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<WrittenExamCreateWithoutApplicationInput, WrittenExamUncheckedCreateWithoutApplicationInput> | WrittenExamCreateWithoutApplicationInput[] | WrittenExamUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: WrittenExamCreateOrConnectWithoutApplicationInput | WrittenExamCreateOrConnectWithoutApplicationInput[]
    upsert?: WrittenExamUpsertWithWhereUniqueWithoutApplicationInput | WrittenExamUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: WrittenExamCreateManyApplicationInputEnvelope
    set?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    disconnect?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    delete?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    connect?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    update?: WrittenExamUpdateWithWhereUniqueWithoutApplicationInput | WrittenExamUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: WrittenExamUpdateManyWithWhereWithoutApplicationInput | WrittenExamUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: WrittenExamScalarWhereInput | WrittenExamScalarWhereInput[]
  }

  export type PaymentInfoUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<PaymentInfoCreateWithoutApplicationInput, PaymentInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutApplicationInput
    upsert?: PaymentInfoUpsertWithoutApplicationInput
    disconnect?: PaymentInfoWhereInput | boolean
    delete?: PaymentInfoWhereInput | boolean
    connect?: PaymentInfoWhereUniqueInput
    update?: XOR<XOR<PaymentInfoUpdateToOneWithWhereWithoutApplicationInput, PaymentInfoUpdateWithoutApplicationInput>, PaymentInfoUncheckedUpdateWithoutApplicationInput>
  }

  export type PaymentRecordUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutApplicationInput, PaymentRecordUncheckedCreateWithoutApplicationInput> | PaymentRecordCreateWithoutApplicationInput[] | PaymentRecordUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutApplicationInput | PaymentRecordCreateOrConnectWithoutApplicationInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutApplicationInput | PaymentRecordUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: PaymentRecordCreateManyApplicationInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutApplicationInput | PaymentRecordUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutApplicationInput | PaymentRecordUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type DrivingExamResultUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DrivingExamResultCreateWithoutApplicationInput, DrivingExamResultUncheckedCreateWithoutApplicationInput> | DrivingExamResultCreateWithoutApplicationInput[] | DrivingExamResultUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutApplicationInput | DrivingExamResultCreateOrConnectWithoutApplicationInput[]
    upsert?: DrivingExamResultUpsertWithWhereUniqueWithoutApplicationInput | DrivingExamResultUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DrivingExamResultCreateManyApplicationInputEnvelope
    set?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    disconnect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    delete?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    update?: DrivingExamResultUpdateWithWhereUniqueWithoutApplicationInput | DrivingExamResultUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DrivingExamResultUpdateManyWithWhereWithoutApplicationInput | DrivingExamResultUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DrivingExamResultScalarWhereInput | DrivingExamResultScalarWhereInput[]
  }

  export type ExamAttemptUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutApplicationInput, ExamAttemptUncheckedCreateWithoutApplicationInput> | ExamAttemptCreateWithoutApplicationInput[] | ExamAttemptUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutApplicationInput | ExamAttemptCreateOrConnectWithoutApplicationInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutApplicationInput | ExamAttemptUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ExamAttemptCreateManyApplicationInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutApplicationInput | ExamAttemptUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutApplicationInput | ExamAttemptUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type BirthdayWishLogUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<BirthdayWishLogCreateWithoutApplicationInput, BirthdayWishLogUncheckedCreateWithoutApplicationInput> | BirthdayWishLogCreateWithoutApplicationInput[] | BirthdayWishLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: BirthdayWishLogCreateOrConnectWithoutApplicationInput | BirthdayWishLogCreateOrConnectWithoutApplicationInput[]
    upsert?: BirthdayWishLogUpsertWithWhereUniqueWithoutApplicationInput | BirthdayWishLogUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: BirthdayWishLogCreateManyApplicationInputEnvelope
    set?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    disconnect?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    delete?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    connect?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    update?: BirthdayWishLogUpdateWithWhereUniqueWithoutApplicationInput | BirthdayWishLogUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: BirthdayWishLogUpdateManyWithWhereWithoutApplicationInput | BirthdayWishLogUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: BirthdayWishLogScalarWhereInput | BirthdayWishLogScalarWhereInput[]
  }

  export type ExamReminderLogUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ExamReminderLogCreateWithoutApplicationInput, ExamReminderLogUncheckedCreateWithoutApplicationInput> | ExamReminderLogCreateWithoutApplicationInput[] | ExamReminderLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamReminderLogCreateOrConnectWithoutApplicationInput | ExamReminderLogCreateOrConnectWithoutApplicationInput[]
    upsert?: ExamReminderLogUpsertWithWhereUniqueWithoutApplicationInput | ExamReminderLogUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ExamReminderLogCreateManyApplicationInputEnvelope
    set?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    disconnect?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    delete?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    connect?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    update?: ExamReminderLogUpdateWithWhereUniqueWithoutApplicationInput | ExamReminderLogUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ExamReminderLogUpdateManyWithWhereWithoutApplicationInput | ExamReminderLogUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ExamReminderLogScalarWhereInput | ExamReminderLogScalarWhereInput[]
  }

  export type ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutApplicationInput, ApplicationVehicleClassUncheckedCreateWithoutApplicationInput> | ApplicationVehicleClassCreateWithoutApplicationInput[] | ApplicationVehicleClassUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutApplicationInput | ApplicationVehicleClassCreateOrConnectWithoutApplicationInput[]
    upsert?: ApplicationVehicleClassUpsertWithWhereUniqueWithoutApplicationInput | ApplicationVehicleClassUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ApplicationVehicleClassCreateManyApplicationInputEnvelope
    set?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    disconnect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    delete?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    update?: ApplicationVehicleClassUpdateWithWhereUniqueWithoutApplicationInput | ApplicationVehicleClassUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ApplicationVehicleClassUpdateManyWithWhereWithoutApplicationInput | ApplicationVehicleClassUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ApplicationVehicleClassScalarWhereInput | ApplicationVehicleClassScalarWhereInput[]
  }

  export type ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<ExistingLicenseCreateWithoutApplicationInput, ExistingLicenseUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: ExistingLicenseCreateOrConnectWithoutApplicationInput
    upsert?: ExistingLicenseUpsertWithoutApplicationInput
    disconnect?: ExistingLicenseWhereInput | boolean
    delete?: ExistingLicenseWhereInput | boolean
    connect?: ExistingLicenseWhereUniqueInput
    update?: XOR<XOR<ExistingLicenseUpdateToOneWithWhereWithoutApplicationInput, ExistingLicenseUpdateWithoutApplicationInput>, ExistingLicenseUncheckedUpdateWithoutApplicationInput>
  }

  export type WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<WrittenExamCreateWithoutApplicationInput, WrittenExamUncheckedCreateWithoutApplicationInput> | WrittenExamCreateWithoutApplicationInput[] | WrittenExamUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: WrittenExamCreateOrConnectWithoutApplicationInput | WrittenExamCreateOrConnectWithoutApplicationInput[]
    upsert?: WrittenExamUpsertWithWhereUniqueWithoutApplicationInput | WrittenExamUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: WrittenExamCreateManyApplicationInputEnvelope
    set?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    disconnect?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    delete?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    connect?: WrittenExamWhereUniqueInput | WrittenExamWhereUniqueInput[]
    update?: WrittenExamUpdateWithWhereUniqueWithoutApplicationInput | WrittenExamUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: WrittenExamUpdateManyWithWhereWithoutApplicationInput | WrittenExamUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: WrittenExamScalarWhereInput | WrittenExamScalarWhereInput[]
  }

  export type PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<PaymentInfoCreateWithoutApplicationInput, PaymentInfoUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: PaymentInfoCreateOrConnectWithoutApplicationInput
    upsert?: PaymentInfoUpsertWithoutApplicationInput
    disconnect?: PaymentInfoWhereInput | boolean
    delete?: PaymentInfoWhereInput | boolean
    connect?: PaymentInfoWhereUniqueInput
    update?: XOR<XOR<PaymentInfoUpdateToOneWithWhereWithoutApplicationInput, PaymentInfoUpdateWithoutApplicationInput>, PaymentInfoUncheckedUpdateWithoutApplicationInput>
  }

  export type PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<PaymentRecordCreateWithoutApplicationInput, PaymentRecordUncheckedCreateWithoutApplicationInput> | PaymentRecordCreateWithoutApplicationInput[] | PaymentRecordUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: PaymentRecordCreateOrConnectWithoutApplicationInput | PaymentRecordCreateOrConnectWithoutApplicationInput[]
    upsert?: PaymentRecordUpsertWithWhereUniqueWithoutApplicationInput | PaymentRecordUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: PaymentRecordCreateManyApplicationInputEnvelope
    set?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    disconnect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    delete?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    connect?: PaymentRecordWhereUniqueInput | PaymentRecordWhereUniqueInput[]
    update?: PaymentRecordUpdateWithWhereUniqueWithoutApplicationInput | PaymentRecordUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: PaymentRecordUpdateManyWithWhereWithoutApplicationInput | PaymentRecordUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
  }

  export type DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<DrivingExamResultCreateWithoutApplicationInput, DrivingExamResultUncheckedCreateWithoutApplicationInput> | DrivingExamResultCreateWithoutApplicationInput[] | DrivingExamResultUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutApplicationInput | DrivingExamResultCreateOrConnectWithoutApplicationInput[]
    upsert?: DrivingExamResultUpsertWithWhereUniqueWithoutApplicationInput | DrivingExamResultUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: DrivingExamResultCreateManyApplicationInputEnvelope
    set?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    disconnect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    delete?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    update?: DrivingExamResultUpdateWithWhereUniqueWithoutApplicationInput | DrivingExamResultUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: DrivingExamResultUpdateManyWithWhereWithoutApplicationInput | DrivingExamResultUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: DrivingExamResultScalarWhereInput | DrivingExamResultScalarWhereInput[]
  }

  export type ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutApplicationInput, ExamAttemptUncheckedCreateWithoutApplicationInput> | ExamAttemptCreateWithoutApplicationInput[] | ExamAttemptUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutApplicationInput | ExamAttemptCreateOrConnectWithoutApplicationInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutApplicationInput | ExamAttemptUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ExamAttemptCreateManyApplicationInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutApplicationInput | ExamAttemptUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutApplicationInput | ExamAttemptUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<BirthdayWishLogCreateWithoutApplicationInput, BirthdayWishLogUncheckedCreateWithoutApplicationInput> | BirthdayWishLogCreateWithoutApplicationInput[] | BirthdayWishLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: BirthdayWishLogCreateOrConnectWithoutApplicationInput | BirthdayWishLogCreateOrConnectWithoutApplicationInput[]
    upsert?: BirthdayWishLogUpsertWithWhereUniqueWithoutApplicationInput | BirthdayWishLogUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: BirthdayWishLogCreateManyApplicationInputEnvelope
    set?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    disconnect?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    delete?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    connect?: BirthdayWishLogWhereUniqueInput | BirthdayWishLogWhereUniqueInput[]
    update?: BirthdayWishLogUpdateWithWhereUniqueWithoutApplicationInput | BirthdayWishLogUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: BirthdayWishLogUpdateManyWithWhereWithoutApplicationInput | BirthdayWishLogUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: BirthdayWishLogScalarWhereInput | BirthdayWishLogScalarWhereInput[]
  }

  export type ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput = {
    create?: XOR<ExamReminderLogCreateWithoutApplicationInput, ExamReminderLogUncheckedCreateWithoutApplicationInput> | ExamReminderLogCreateWithoutApplicationInput[] | ExamReminderLogUncheckedCreateWithoutApplicationInput[]
    connectOrCreate?: ExamReminderLogCreateOrConnectWithoutApplicationInput | ExamReminderLogCreateOrConnectWithoutApplicationInput[]
    upsert?: ExamReminderLogUpsertWithWhereUniqueWithoutApplicationInput | ExamReminderLogUpsertWithWhereUniqueWithoutApplicationInput[]
    createMany?: ExamReminderLogCreateManyApplicationInputEnvelope
    set?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    disconnect?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    delete?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    connect?: ExamReminderLogWhereUniqueInput | ExamReminderLogWhereUniqueInput[]
    update?: ExamReminderLogUpdateWithWhereUniqueWithoutApplicationInput | ExamReminderLogUpdateWithWhereUniqueWithoutApplicationInput[]
    updateMany?: ExamReminderLogUpdateManyWithWhereWithoutApplicationInput | ExamReminderLogUpdateManyWithWhereWithoutApplicationInput[]
    deleteMany?: ExamReminderLogScalarWhereInput | ExamReminderLogScalarWhereInput[]
  }

  export type StudentApplicationCreateNestedOneWithoutExamReminderLogsInput = {
    create?: XOR<StudentApplicationCreateWithoutExamReminderLogsInput, StudentApplicationUncheckedCreateWithoutExamReminderLogsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutExamReminderLogsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type StudentApplicationUpdateOneRequiredWithoutExamReminderLogsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutExamReminderLogsInput, StudentApplicationUncheckedCreateWithoutExamReminderLogsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutExamReminderLogsInput
    upsert?: StudentApplicationUpsertWithoutExamReminderLogsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutExamReminderLogsInput, StudentApplicationUpdateWithoutExamReminderLogsInput>, StudentApplicationUncheckedUpdateWithoutExamReminderLogsInput>
  }

  export type StudentApplicationCreateNestedOneWithoutBirthdayWishLogsInput = {
    create?: XOR<StudentApplicationCreateWithoutBirthdayWishLogsInput, StudentApplicationUncheckedCreateWithoutBirthdayWishLogsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutBirthdayWishLogsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type StudentApplicationUpdateOneRequiredWithoutBirthdayWishLogsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutBirthdayWishLogsInput, StudentApplicationUncheckedCreateWithoutBirthdayWishLogsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutBirthdayWishLogsInput
    upsert?: StudentApplicationUpsertWithoutBirthdayWishLogsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutBirthdayWishLogsInput, StudentApplicationUpdateWithoutBirthdayWishLogsInput>, StudentApplicationUncheckedUpdateWithoutBirthdayWishLogsInput>
  }

  export type StudentApplicationCreateNestedOneWithoutVehicleClassesInput = {
    create?: XOR<StudentApplicationCreateWithoutVehicleClassesInput, StudentApplicationUncheckedCreateWithoutVehicleClassesInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutVehicleClassesInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type VehicleClassCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<VehicleClassCreateWithoutApplicationsInput, VehicleClassUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutApplicationsInput
    connect?: VehicleClassWhereUniqueInput
  }

  export type StudentApplicationUpdateOneRequiredWithoutVehicleClassesNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutVehicleClassesInput, StudentApplicationUncheckedCreateWithoutVehicleClassesInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutVehicleClassesInput
    upsert?: StudentApplicationUpsertWithoutVehicleClassesInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutVehicleClassesInput, StudentApplicationUpdateWithoutVehicleClassesInput>, StudentApplicationUncheckedUpdateWithoutVehicleClassesInput>
  }

  export type VehicleClassUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<VehicleClassCreateWithoutApplicationsInput, VehicleClassUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutApplicationsInput
    upsert?: VehicleClassUpsertWithoutApplicationsInput
    connect?: VehicleClassWhereUniqueInput
    update?: XOR<XOR<VehicleClassUpdateToOneWithWhereWithoutApplicationsInput, VehicleClassUpdateWithoutApplicationsInput>, VehicleClassUncheckedUpdateWithoutApplicationsInput>
  }

  export type ApplicationVehicleClassCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput> | ApplicationVehicleClassCreateWithoutVehicleClassInput[] | ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput | ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    createMany?: ApplicationVehicleClassCreateManyVehicleClassInputEnvelope
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
  }

  export type ExistingLicenseVehicleClassCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput> | ExistingLicenseVehicleClassCreateWithoutVehicleClassInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput | ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyVehicleClassInputEnvelope
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
  }

  export type DrivingExamResultCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<DrivingExamResultCreateWithoutVehicleClassInput, DrivingExamResultUncheckedCreateWithoutVehicleClassInput> | DrivingExamResultCreateWithoutVehicleClassInput[] | DrivingExamResultUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutVehicleClassInput | DrivingExamResultCreateOrConnectWithoutVehicleClassInput[]
    createMany?: DrivingExamResultCreateManyVehicleClassInputEnvelope
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
  }

  export type ExamAttemptCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<ExamAttemptCreateWithoutVehicleClassInput, ExamAttemptUncheckedCreateWithoutVehicleClassInput> | ExamAttemptCreateWithoutVehicleClassInput[] | ExamAttemptUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutVehicleClassInput | ExamAttemptCreateOrConnectWithoutVehicleClassInput[]
    createMany?: ExamAttemptCreateManyVehicleClassInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type ApplicationVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput> | ApplicationVehicleClassCreateWithoutVehicleClassInput[] | ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput | ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    createMany?: ApplicationVehicleClassCreateManyVehicleClassInputEnvelope
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
  }

  export type ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput> | ExistingLicenseVehicleClassCreateWithoutVehicleClassInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput | ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyVehicleClassInputEnvelope
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
  }

  export type DrivingExamResultUncheckedCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<DrivingExamResultCreateWithoutVehicleClassInput, DrivingExamResultUncheckedCreateWithoutVehicleClassInput> | DrivingExamResultCreateWithoutVehicleClassInput[] | DrivingExamResultUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutVehicleClassInput | DrivingExamResultCreateOrConnectWithoutVehicleClassInput[]
    createMany?: DrivingExamResultCreateManyVehicleClassInputEnvelope
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
  }

  export type ExamAttemptUncheckedCreateNestedManyWithoutVehicleClassInput = {
    create?: XOR<ExamAttemptCreateWithoutVehicleClassInput, ExamAttemptUncheckedCreateWithoutVehicleClassInput> | ExamAttemptCreateWithoutVehicleClassInput[] | ExamAttemptUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutVehicleClassInput | ExamAttemptCreateOrConnectWithoutVehicleClassInput[]
    createMany?: ExamAttemptCreateManyVehicleClassInputEnvelope
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
  }

  export type ApplicationVehicleClassUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput> | ApplicationVehicleClassCreateWithoutVehicleClassInput[] | ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput | ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    upsert?: ApplicationVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput | ApplicationVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: ApplicationVehicleClassCreateManyVehicleClassInputEnvelope
    set?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    disconnect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    delete?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    update?: ApplicationVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput | ApplicationVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: ApplicationVehicleClassUpdateManyWithWhereWithoutVehicleClassInput | ApplicationVehicleClassUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: ApplicationVehicleClassScalarWhereInput | ApplicationVehicleClassScalarWhereInput[]
  }

  export type ExistingLicenseVehicleClassUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput> | ExistingLicenseVehicleClassCreateWithoutVehicleClassInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput | ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    upsert?: ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput | ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyVehicleClassInputEnvelope
    set?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    disconnect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    delete?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    update?: ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput | ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: ExistingLicenseVehicleClassUpdateManyWithWhereWithoutVehicleClassInput | ExistingLicenseVehicleClassUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: ExistingLicenseVehicleClassScalarWhereInput | ExistingLicenseVehicleClassScalarWhereInput[]
  }

  export type DrivingExamResultUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<DrivingExamResultCreateWithoutVehicleClassInput, DrivingExamResultUncheckedCreateWithoutVehicleClassInput> | DrivingExamResultCreateWithoutVehicleClassInput[] | DrivingExamResultUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutVehicleClassInput | DrivingExamResultCreateOrConnectWithoutVehicleClassInput[]
    upsert?: DrivingExamResultUpsertWithWhereUniqueWithoutVehicleClassInput | DrivingExamResultUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: DrivingExamResultCreateManyVehicleClassInputEnvelope
    set?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    disconnect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    delete?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    update?: DrivingExamResultUpdateWithWhereUniqueWithoutVehicleClassInput | DrivingExamResultUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: DrivingExamResultUpdateManyWithWhereWithoutVehicleClassInput | DrivingExamResultUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: DrivingExamResultScalarWhereInput | DrivingExamResultScalarWhereInput[]
  }

  export type ExamAttemptUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutVehicleClassInput, ExamAttemptUncheckedCreateWithoutVehicleClassInput> | ExamAttemptCreateWithoutVehicleClassInput[] | ExamAttemptUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutVehicleClassInput | ExamAttemptCreateOrConnectWithoutVehicleClassInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutVehicleClassInput | ExamAttemptUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: ExamAttemptCreateManyVehicleClassInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutVehicleClassInput | ExamAttemptUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutVehicleClassInput | ExamAttemptUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type ApplicationVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<ApplicationVehicleClassCreateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput> | ApplicationVehicleClassCreateWithoutVehicleClassInput[] | ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput | ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    upsert?: ApplicationVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput | ApplicationVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: ApplicationVehicleClassCreateManyVehicleClassInputEnvelope
    set?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    disconnect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    delete?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    connect?: ApplicationVehicleClassWhereUniqueInput | ApplicationVehicleClassWhereUniqueInput[]
    update?: ApplicationVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput | ApplicationVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: ApplicationVehicleClassUpdateManyWithWhereWithoutVehicleClassInput | ApplicationVehicleClassUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: ApplicationVehicleClassScalarWhereInput | ApplicationVehicleClassScalarWhereInput[]
  }

  export type ExistingLicenseVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput> | ExistingLicenseVehicleClassCreateWithoutVehicleClassInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput | ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput[]
    upsert?: ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput | ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyVehicleClassInputEnvelope
    set?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    disconnect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    delete?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    update?: ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput | ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: ExistingLicenseVehicleClassUpdateManyWithWhereWithoutVehicleClassInput | ExistingLicenseVehicleClassUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: ExistingLicenseVehicleClassScalarWhereInput | ExistingLicenseVehicleClassScalarWhereInput[]
  }

  export type DrivingExamResultUncheckedUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<DrivingExamResultCreateWithoutVehicleClassInput, DrivingExamResultUncheckedCreateWithoutVehicleClassInput> | DrivingExamResultCreateWithoutVehicleClassInput[] | DrivingExamResultUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: DrivingExamResultCreateOrConnectWithoutVehicleClassInput | DrivingExamResultCreateOrConnectWithoutVehicleClassInput[]
    upsert?: DrivingExamResultUpsertWithWhereUniqueWithoutVehicleClassInput | DrivingExamResultUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: DrivingExamResultCreateManyVehicleClassInputEnvelope
    set?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    disconnect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    delete?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    connect?: DrivingExamResultWhereUniqueInput | DrivingExamResultWhereUniqueInput[]
    update?: DrivingExamResultUpdateWithWhereUniqueWithoutVehicleClassInput | DrivingExamResultUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: DrivingExamResultUpdateManyWithWhereWithoutVehicleClassInput | DrivingExamResultUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: DrivingExamResultScalarWhereInput | DrivingExamResultScalarWhereInput[]
  }

  export type ExamAttemptUncheckedUpdateManyWithoutVehicleClassNestedInput = {
    create?: XOR<ExamAttemptCreateWithoutVehicleClassInput, ExamAttemptUncheckedCreateWithoutVehicleClassInput> | ExamAttemptCreateWithoutVehicleClassInput[] | ExamAttemptUncheckedCreateWithoutVehicleClassInput[]
    connectOrCreate?: ExamAttemptCreateOrConnectWithoutVehicleClassInput | ExamAttemptCreateOrConnectWithoutVehicleClassInput[]
    upsert?: ExamAttemptUpsertWithWhereUniqueWithoutVehicleClassInput | ExamAttemptUpsertWithWhereUniqueWithoutVehicleClassInput[]
    createMany?: ExamAttemptCreateManyVehicleClassInputEnvelope
    set?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    disconnect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    delete?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    connect?: ExamAttemptWhereUniqueInput | ExamAttemptWhereUniqueInput[]
    update?: ExamAttemptUpdateWithWhereUniqueWithoutVehicleClassInput | ExamAttemptUpdateWithWhereUniqueWithoutVehicleClassInput[]
    updateMany?: ExamAttemptUpdateManyWithWhereWithoutVehicleClassInput | ExamAttemptUpdateManyWithWhereWithoutVehicleClassInput[]
    deleteMany?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
  }

  export type ExistingLicenseVehicleClassCreateNestedManyWithoutLicenseInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput> | ExistingLicenseVehicleClassCreateWithoutLicenseInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput | ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyLicenseInputEnvelope
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
  }

  export type StudentApplicationCreateNestedOneWithoutExistingLicenseInput = {
    create?: XOR<StudentApplicationCreateWithoutExistingLicenseInput, StudentApplicationUncheckedCreateWithoutExistingLicenseInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutExistingLicenseInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput> | ExistingLicenseVehicleClassCreateWithoutLicenseInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput | ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyLicenseInputEnvelope
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
  }

  export type ExistingLicenseVehicleClassUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput> | ExistingLicenseVehicleClassCreateWithoutLicenseInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput | ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput[]
    upsert?: ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutLicenseInput | ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyLicenseInputEnvelope
    set?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    disconnect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    delete?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    update?: ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutLicenseInput | ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: ExistingLicenseVehicleClassUpdateManyWithWhereWithoutLicenseInput | ExistingLicenseVehicleClassUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: ExistingLicenseVehicleClassScalarWhereInput | ExistingLicenseVehicleClassScalarWhereInput[]
  }

  export type StudentApplicationUpdateOneRequiredWithoutExistingLicenseNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutExistingLicenseInput, StudentApplicationUncheckedCreateWithoutExistingLicenseInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutExistingLicenseInput
    upsert?: StudentApplicationUpsertWithoutExistingLicenseInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutExistingLicenseInput, StudentApplicationUpdateWithoutExistingLicenseInput>, StudentApplicationUncheckedUpdateWithoutExistingLicenseInput>
  }

  export type ExistingLicenseVehicleClassUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<ExistingLicenseVehicleClassCreateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput> | ExistingLicenseVehicleClassCreateWithoutLicenseInput[] | ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput | ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput[]
    upsert?: ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutLicenseInput | ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: ExistingLicenseVehicleClassCreateManyLicenseInputEnvelope
    set?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    disconnect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    delete?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    connect?: ExistingLicenseVehicleClassWhereUniqueInput | ExistingLicenseVehicleClassWhereUniqueInput[]
    update?: ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutLicenseInput | ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: ExistingLicenseVehicleClassUpdateManyWithWhereWithoutLicenseInput | ExistingLicenseVehicleClassUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: ExistingLicenseVehicleClassScalarWhereInput | ExistingLicenseVehicleClassScalarWhereInput[]
  }

  export type ExistingLicenseCreateNestedOneWithoutVehicleClassesInput = {
    create?: XOR<ExistingLicenseCreateWithoutVehicleClassesInput, ExistingLicenseUncheckedCreateWithoutVehicleClassesInput>
    connectOrCreate?: ExistingLicenseCreateOrConnectWithoutVehicleClassesInput
    connect?: ExistingLicenseWhereUniqueInput
  }

  export type VehicleClassCreateNestedOneWithoutExistingLicensesInput = {
    create?: XOR<VehicleClassCreateWithoutExistingLicensesInput, VehicleClassUncheckedCreateWithoutExistingLicensesInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutExistingLicensesInput
    connect?: VehicleClassWhereUniqueInput
  }

  export type ExistingLicenseUpdateOneRequiredWithoutVehicleClassesNestedInput = {
    create?: XOR<ExistingLicenseCreateWithoutVehicleClassesInput, ExistingLicenseUncheckedCreateWithoutVehicleClassesInput>
    connectOrCreate?: ExistingLicenseCreateOrConnectWithoutVehicleClassesInput
    upsert?: ExistingLicenseUpsertWithoutVehicleClassesInput
    connect?: ExistingLicenseWhereUniqueInput
    update?: XOR<XOR<ExistingLicenseUpdateToOneWithWhereWithoutVehicleClassesInput, ExistingLicenseUpdateWithoutVehicleClassesInput>, ExistingLicenseUncheckedUpdateWithoutVehicleClassesInput>
  }

  export type VehicleClassUpdateOneRequiredWithoutExistingLicensesNestedInput = {
    create?: XOR<VehicleClassCreateWithoutExistingLicensesInput, VehicleClassUncheckedCreateWithoutExistingLicensesInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutExistingLicensesInput
    upsert?: VehicleClassUpsertWithoutExistingLicensesInput
    connect?: VehicleClassWhereUniqueInput
    update?: XOR<XOR<VehicleClassUpdateToOneWithWhereWithoutExistingLicensesInput, VehicleClassUpdateWithoutExistingLicensesInput>, VehicleClassUncheckedUpdateWithoutExistingLicensesInput>
  }

  export type StudentApplicationCreateNestedOneWithoutPaymentInfoInput = {
    create?: XOR<StudentApplicationCreateWithoutPaymentInfoInput, StudentApplicationUncheckedCreateWithoutPaymentInfoInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutPaymentInfoInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type StudentApplicationUpdateOneRequiredWithoutPaymentInfoNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutPaymentInfoInput, StudentApplicationUncheckedCreateWithoutPaymentInfoInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutPaymentInfoInput
    upsert?: StudentApplicationUpsertWithoutPaymentInfoInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutPaymentInfoInput, StudentApplicationUpdateWithoutPaymentInfoInput>, StudentApplicationUncheckedUpdateWithoutPaymentInfoInput>
  }

  export type StudentApplicationCreateNestedOneWithoutWrittenExamsInput = {
    create?: XOR<StudentApplicationCreateWithoutWrittenExamsInput, StudentApplicationUncheckedCreateWithoutWrittenExamsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutWrittenExamsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type EnumExamResultFieldUpdateOperationsInput = {
    set?: $Enums.ExamResult
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentApplicationUpdateOneRequiredWithoutWrittenExamsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutWrittenExamsInput, StudentApplicationUncheckedCreateWithoutWrittenExamsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutWrittenExamsInput
    upsert?: StudentApplicationUpsertWithoutWrittenExamsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutWrittenExamsInput, StudentApplicationUpdateWithoutWrittenExamsInput>, StudentApplicationUncheckedUpdateWithoutWrittenExamsInput>
  }

  export type StudentApplicationCreateNestedOneWithoutDrivingExamResultsInput = {
    create?: XOR<StudentApplicationCreateWithoutDrivingExamResultsInput, StudentApplicationUncheckedCreateWithoutDrivingExamResultsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutDrivingExamResultsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type VehicleClassCreateNestedOneWithoutDrivingExamResultsInput = {
    create?: XOR<VehicleClassCreateWithoutDrivingExamResultsInput, VehicleClassUncheckedCreateWithoutDrivingExamResultsInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutDrivingExamResultsInput
    connect?: VehicleClassWhereUniqueInput
  }

  export type EnumDrivingExamResultStatusFieldUpdateOperationsInput = {
    set?: $Enums.DrivingExamResultStatus
  }

  export type StudentApplicationUpdateOneRequiredWithoutDrivingExamResultsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutDrivingExamResultsInput, StudentApplicationUncheckedCreateWithoutDrivingExamResultsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutDrivingExamResultsInput
    upsert?: StudentApplicationUpsertWithoutDrivingExamResultsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutDrivingExamResultsInput, StudentApplicationUpdateWithoutDrivingExamResultsInput>, StudentApplicationUncheckedUpdateWithoutDrivingExamResultsInput>
  }

  export type VehicleClassUpdateOneRequiredWithoutDrivingExamResultsNestedInput = {
    create?: XOR<VehicleClassCreateWithoutDrivingExamResultsInput, VehicleClassUncheckedCreateWithoutDrivingExamResultsInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutDrivingExamResultsInput
    upsert?: VehicleClassUpsertWithoutDrivingExamResultsInput
    connect?: VehicleClassWhereUniqueInput
    update?: XOR<XOR<VehicleClassUpdateToOneWithWhereWithoutDrivingExamResultsInput, VehicleClassUpdateWithoutDrivingExamResultsInput>, VehicleClassUncheckedUpdateWithoutDrivingExamResultsInput>
  }

  export type StudentApplicationCreateNestedOneWithoutPaymentRecordsInput = {
    create?: XOR<StudentApplicationCreateWithoutPaymentRecordsInput, StudentApplicationUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutPaymentRecordsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type StudentApplicationUpdateOneRequiredWithoutPaymentRecordsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutPaymentRecordsInput, StudentApplicationUncheckedCreateWithoutPaymentRecordsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutPaymentRecordsInput
    upsert?: StudentApplicationUpsertWithoutPaymentRecordsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutPaymentRecordsInput, StudentApplicationUpdateWithoutPaymentRecordsInput>, StudentApplicationUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type StudentApplicationCreateNestedOneWithoutExamAttemptsInput = {
    create?: XOR<StudentApplicationCreateWithoutExamAttemptsInput, StudentApplicationUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutExamAttemptsInput
    connect?: StudentApplicationWhereUniqueInput
  }

  export type VehicleClassCreateNestedOneWithoutExamAttemptsInput = {
    create?: XOR<VehicleClassCreateWithoutExamAttemptsInput, VehicleClassUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutExamAttemptsInput
    connect?: VehicleClassWhereUniqueInput
  }

  export type StudentApplicationUpdateOneRequiredWithoutExamAttemptsNestedInput = {
    create?: XOR<StudentApplicationCreateWithoutExamAttemptsInput, StudentApplicationUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: StudentApplicationCreateOrConnectWithoutExamAttemptsInput
    upsert?: StudentApplicationUpsertWithoutExamAttemptsInput
    connect?: StudentApplicationWhereUniqueInput
    update?: XOR<XOR<StudentApplicationUpdateToOneWithWhereWithoutExamAttemptsInput, StudentApplicationUpdateWithoutExamAttemptsInput>, StudentApplicationUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type VehicleClassUpdateOneWithoutExamAttemptsNestedInput = {
    create?: XOR<VehicleClassCreateWithoutExamAttemptsInput, VehicleClassUncheckedCreateWithoutExamAttemptsInput>
    connectOrCreate?: VehicleClassCreateOrConnectWithoutExamAttemptsInput
    upsert?: VehicleClassUpsertWithoutExamAttemptsInput
    disconnect?: VehicleClassWhereInput | boolean
    delete?: VehicleClassWhereInput | boolean
    connect?: VehicleClassWhereUniqueInput
    update?: XOR<XOR<VehicleClassUpdateToOneWithWhereWithoutExamAttemptsInput, VehicleClassUpdateWithoutExamAttemptsInput>, VehicleClassUncheckedUpdateWithoutExamAttemptsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumExamResultFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResult | EnumExamResultFieldRefInput<$PrismaModel>
    in?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    not?: NestedEnumExamResultFilter<$PrismaModel> | $Enums.ExamResult
  }

  export type NestedEnumExamResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExamResult | EnumExamResultFieldRefInput<$PrismaModel>
    in?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExamResult[] | ListEnumExamResultFieldRefInput<$PrismaModel>
    not?: NestedEnumExamResultWithAggregatesFilter<$PrismaModel> | $Enums.ExamResult
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExamResultFilter<$PrismaModel>
    _max?: NestedEnumExamResultFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumDrivingExamResultStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DrivingExamResultStatus | EnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrivingExamResultStatusFilter<$PrismaModel> | $Enums.DrivingExamResultStatus
  }

  export type NestedEnumDrivingExamResultStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DrivingExamResultStatus | EnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DrivingExamResultStatus[] | ListEnumDrivingExamResultStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDrivingExamResultStatusWithAggregatesFilter<$PrismaModel> | $Enums.DrivingExamResultStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDrivingExamResultStatusFilter<$PrismaModel>
    _max?: NestedEnumDrivingExamResultStatusFilter<$PrismaModel>
  }

  export type ApplicationVehicleClassCreateWithoutApplicationInput = {
    vehicleClass: VehicleClassCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationVehicleClassUncheckedCreateWithoutApplicationInput = {
    id?: number
    vehicleClassId: number
  }

  export type ApplicationVehicleClassCreateOrConnectWithoutApplicationInput = {
    where: ApplicationVehicleClassWhereUniqueInput
    create: XOR<ApplicationVehicleClassCreateWithoutApplicationInput, ApplicationVehicleClassUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationVehicleClassCreateManyApplicationInputEnvelope = {
    data: ApplicationVehicleClassCreateManyApplicationInput | ApplicationVehicleClassCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ExistingLicenseCreateWithoutApplicationInput = {
    licenseNumber?: string | null
    issuedDate?: Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassCreateNestedManyWithoutLicenseInput
  }

  export type ExistingLicenseUncheckedCreateWithoutApplicationInput = {
    id?: number
    licenseNumber?: string | null
    issuedDate?: Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type ExistingLicenseCreateOrConnectWithoutApplicationInput = {
    where: ExistingLicenseWhereUniqueInput
    create: XOR<ExistingLicenseCreateWithoutApplicationInput, ExistingLicenseUncheckedCreateWithoutApplicationInput>
  }

  export type WrittenExamCreateWithoutApplicationInput = {
    barCode: string
    examDate: Date | string
    result: $Enums.ExamResult
    attemptNo: number
    createdAt?: Date | string
    notes?: string | null
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type WrittenExamUncheckedCreateWithoutApplicationInput = {
    id?: number
    barCode: string
    examDate: Date | string
    result: $Enums.ExamResult
    attemptNo: number
    createdAt?: Date | string
    notes?: string | null
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type WrittenExamCreateOrConnectWithoutApplicationInput = {
    where: WrittenExamWhereUniqueInput
    create: XOR<WrittenExamCreateWithoutApplicationInput, WrittenExamUncheckedCreateWithoutApplicationInput>
  }

  export type WrittenExamCreateManyApplicationInputEnvelope = {
    data: WrittenExamCreateManyApplicationInput | WrittenExamCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type PaymentInfoCreateWithoutApplicationInput = {
    totalFee: number
    advanceFee: number
    status?: string
    paidDate?: Date | string | null
  }

  export type PaymentInfoUncheckedCreateWithoutApplicationInput = {
    id?: number
    totalFee: number
    advanceFee: number
    status?: string
    paidDate?: Date | string | null
  }

  export type PaymentInfoCreateOrConnectWithoutApplicationInput = {
    where: PaymentInfoWhereUniqueInput
    create: XOR<PaymentInfoCreateWithoutApplicationInput, PaymentInfoUncheckedCreateWithoutApplicationInput>
  }

  export type PaymentRecordCreateWithoutApplicationInput = {
    amount: number
    paidDate?: Date | string
  }

  export type PaymentRecordUncheckedCreateWithoutApplicationInput = {
    id?: number
    amount: number
    paidDate?: Date | string
  }

  export type PaymentRecordCreateOrConnectWithoutApplicationInput = {
    where: PaymentRecordWhereUniqueInput
    create: XOR<PaymentRecordCreateWithoutApplicationInput, PaymentRecordUncheckedCreateWithoutApplicationInput>
  }

  export type PaymentRecordCreateManyApplicationInputEnvelope = {
    data: PaymentRecordCreateManyApplicationInput | PaymentRecordCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type DrivingExamResultCreateWithoutApplicationInput = {
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
    vehicleClass: VehicleClassCreateNestedOneWithoutDrivingExamResultsInput
  }

  export type DrivingExamResultUncheckedCreateWithoutApplicationInput = {
    id?: number
    vehicleClassId: number
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type DrivingExamResultCreateOrConnectWithoutApplicationInput = {
    where: DrivingExamResultWhereUniqueInput
    create: XOR<DrivingExamResultCreateWithoutApplicationInput, DrivingExamResultUncheckedCreateWithoutApplicationInput>
  }

  export type DrivingExamResultCreateManyApplicationInputEnvelope = {
    data: DrivingExamResultCreateManyApplicationInput | DrivingExamResultCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ExamAttemptCreateWithoutApplicationInput = {
    examType: string
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
    vehicleClass?: VehicleClassCreateNestedOneWithoutExamAttemptsInput
  }

  export type ExamAttemptUncheckedCreateWithoutApplicationInput = {
    id?: number
    examType: string
    vehicleClassId?: number | null
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
  }

  export type ExamAttemptCreateOrConnectWithoutApplicationInput = {
    where: ExamAttemptWhereUniqueInput
    create: XOR<ExamAttemptCreateWithoutApplicationInput, ExamAttemptUncheckedCreateWithoutApplicationInput>
  }

  export type ExamAttemptCreateManyApplicationInputEnvelope = {
    data: ExamAttemptCreateManyApplicationInput | ExamAttemptCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type BirthdayWishLogCreateWithoutApplicationInput = {
    year: number
    sentAt?: Date | string
  }

  export type BirthdayWishLogUncheckedCreateWithoutApplicationInput = {
    id?: number
    year: number
    sentAt?: Date | string
  }

  export type BirthdayWishLogCreateOrConnectWithoutApplicationInput = {
    where: BirthdayWishLogWhereUniqueInput
    create: XOR<BirthdayWishLogCreateWithoutApplicationInput, BirthdayWishLogUncheckedCreateWithoutApplicationInput>
  }

  export type BirthdayWishLogCreateManyApplicationInputEnvelope = {
    data: BirthdayWishLogCreateManyApplicationInput | BirthdayWishLogCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ExamReminderLogCreateWithoutApplicationInput = {
    examType: string
    examRecordId: number
    sentAt?: Date | string
  }

  export type ExamReminderLogUncheckedCreateWithoutApplicationInput = {
    id?: number
    examType: string
    examRecordId: number
    sentAt?: Date | string
  }

  export type ExamReminderLogCreateOrConnectWithoutApplicationInput = {
    where: ExamReminderLogWhereUniqueInput
    create: XOR<ExamReminderLogCreateWithoutApplicationInput, ExamReminderLogUncheckedCreateWithoutApplicationInput>
  }

  export type ExamReminderLogCreateManyApplicationInputEnvelope = {
    data: ExamReminderLogCreateManyApplicationInput | ExamReminderLogCreateManyApplicationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationVehicleClassUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationVehicleClassWhereUniqueInput
    update: XOR<ApplicationVehicleClassUpdateWithoutApplicationInput, ApplicationVehicleClassUncheckedUpdateWithoutApplicationInput>
    create: XOR<ApplicationVehicleClassCreateWithoutApplicationInput, ApplicationVehicleClassUncheckedCreateWithoutApplicationInput>
  }

  export type ApplicationVehicleClassUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ApplicationVehicleClassWhereUniqueInput
    data: XOR<ApplicationVehicleClassUpdateWithoutApplicationInput, ApplicationVehicleClassUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationVehicleClassUpdateManyWithWhereWithoutApplicationInput = {
    where: ApplicationVehicleClassScalarWhereInput
    data: XOR<ApplicationVehicleClassUpdateManyMutationInput, ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ApplicationVehicleClassScalarWhereInput = {
    AND?: ApplicationVehicleClassScalarWhereInput | ApplicationVehicleClassScalarWhereInput[]
    OR?: ApplicationVehicleClassScalarWhereInput[]
    NOT?: ApplicationVehicleClassScalarWhereInput | ApplicationVehicleClassScalarWhereInput[]
    id?: IntFilter<"ApplicationVehicleClass"> | number
    applicationId?: StringFilter<"ApplicationVehicleClass"> | string
    vehicleClassId?: IntFilter<"ApplicationVehicleClass"> | number
  }

  export type ExistingLicenseUpsertWithoutApplicationInput = {
    update: XOR<ExistingLicenseUpdateWithoutApplicationInput, ExistingLicenseUncheckedUpdateWithoutApplicationInput>
    create: XOR<ExistingLicenseCreateWithoutApplicationInput, ExistingLicenseUncheckedCreateWithoutApplicationInput>
    where?: ExistingLicenseWhereInput
  }

  export type ExistingLicenseUpdateToOneWithWhereWithoutApplicationInput = {
    where?: ExistingLicenseWhereInput
    data: XOR<ExistingLicenseUpdateWithoutApplicationInput, ExistingLicenseUncheckedUpdateWithoutApplicationInput>
  }

  export type ExistingLicenseUpdateWithoutApplicationInput = {
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassUpdateManyWithoutLicenseNestedInput
  }

  export type ExistingLicenseUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleClasses?: ExistingLicenseVehicleClassUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type WrittenExamUpsertWithWhereUniqueWithoutApplicationInput = {
    where: WrittenExamWhereUniqueInput
    update: XOR<WrittenExamUpdateWithoutApplicationInput, WrittenExamUncheckedUpdateWithoutApplicationInput>
    create: XOR<WrittenExamCreateWithoutApplicationInput, WrittenExamUncheckedCreateWithoutApplicationInput>
  }

  export type WrittenExamUpdateWithWhereUniqueWithoutApplicationInput = {
    where: WrittenExamWhereUniqueInput
    data: XOR<WrittenExamUpdateWithoutApplicationInput, WrittenExamUncheckedUpdateWithoutApplicationInput>
  }

  export type WrittenExamUpdateManyWithWhereWithoutApplicationInput = {
    where: WrittenExamScalarWhereInput
    data: XOR<WrittenExamUpdateManyMutationInput, WrittenExamUncheckedUpdateManyWithoutApplicationInput>
  }

  export type WrittenExamScalarWhereInput = {
    AND?: WrittenExamScalarWhereInput | WrittenExamScalarWhereInput[]
    OR?: WrittenExamScalarWhereInput[]
    NOT?: WrittenExamScalarWhereInput | WrittenExamScalarWhereInput[]
    id?: IntFilter<"WrittenExam"> | number
    applicationId?: StringFilter<"WrittenExam"> | string
    barCode?: StringFilter<"WrittenExam"> | string
    examDate?: DateTimeFilter<"WrittenExam"> | Date | string
    result?: EnumExamResultFilter<"WrittenExam"> | $Enums.ExamResult
    attemptNo?: IntFilter<"WrittenExam"> | number
    createdAt?: DateTimeFilter<"WrittenExam"> | Date | string
    notes?: StringNullableFilter<"WrittenExam"> | string | null
    passAttemptNo?: IntNullableFilter<"WrittenExam"> | number | null
    passDate?: DateTimeNullableFilter<"WrittenExam"> | Date | string | null
    passWithText?: StringNullableFilter<"WrittenExam"> | string | null
  }

  export type PaymentInfoUpsertWithoutApplicationInput = {
    update: XOR<PaymentInfoUpdateWithoutApplicationInput, PaymentInfoUncheckedUpdateWithoutApplicationInput>
    create: XOR<PaymentInfoCreateWithoutApplicationInput, PaymentInfoUncheckedCreateWithoutApplicationInput>
    where?: PaymentInfoWhereInput
  }

  export type PaymentInfoUpdateToOneWithWhereWithoutApplicationInput = {
    where?: PaymentInfoWhereInput
    data: XOR<PaymentInfoUpdateWithoutApplicationInput, PaymentInfoUncheckedUpdateWithoutApplicationInput>
  }

  export type PaymentInfoUpdateWithoutApplicationInput = {
    totalFee?: IntFieldUpdateOperationsInput | number
    advanceFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentInfoUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    totalFee?: IntFieldUpdateOperationsInput | number
    advanceFee?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    paidDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentRecordUpsertWithWhereUniqueWithoutApplicationInput = {
    where: PaymentRecordWhereUniqueInput
    update: XOR<PaymentRecordUpdateWithoutApplicationInput, PaymentRecordUncheckedUpdateWithoutApplicationInput>
    create: XOR<PaymentRecordCreateWithoutApplicationInput, PaymentRecordUncheckedCreateWithoutApplicationInput>
  }

  export type PaymentRecordUpdateWithWhereUniqueWithoutApplicationInput = {
    where: PaymentRecordWhereUniqueInput
    data: XOR<PaymentRecordUpdateWithoutApplicationInput, PaymentRecordUncheckedUpdateWithoutApplicationInput>
  }

  export type PaymentRecordUpdateManyWithWhereWithoutApplicationInput = {
    where: PaymentRecordScalarWhereInput
    data: XOR<PaymentRecordUpdateManyMutationInput, PaymentRecordUncheckedUpdateManyWithoutApplicationInput>
  }

  export type PaymentRecordScalarWhereInput = {
    AND?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    OR?: PaymentRecordScalarWhereInput[]
    NOT?: PaymentRecordScalarWhereInput | PaymentRecordScalarWhereInput[]
    id?: IntFilter<"PaymentRecord"> | number
    applicationId?: StringFilter<"PaymentRecord"> | string
    amount?: IntFilter<"PaymentRecord"> | number
    paidDate?: DateTimeFilter<"PaymentRecord"> | Date | string
  }

  export type DrivingExamResultUpsertWithWhereUniqueWithoutApplicationInput = {
    where: DrivingExamResultWhereUniqueInput
    update: XOR<DrivingExamResultUpdateWithoutApplicationInput, DrivingExamResultUncheckedUpdateWithoutApplicationInput>
    create: XOR<DrivingExamResultCreateWithoutApplicationInput, DrivingExamResultUncheckedCreateWithoutApplicationInput>
  }

  export type DrivingExamResultUpdateWithWhereUniqueWithoutApplicationInput = {
    where: DrivingExamResultWhereUniqueInput
    data: XOR<DrivingExamResultUpdateWithoutApplicationInput, DrivingExamResultUncheckedUpdateWithoutApplicationInput>
  }

  export type DrivingExamResultUpdateManyWithWhereWithoutApplicationInput = {
    where: DrivingExamResultScalarWhereInput
    data: XOR<DrivingExamResultUpdateManyMutationInput, DrivingExamResultUncheckedUpdateManyWithoutApplicationInput>
  }

  export type DrivingExamResultScalarWhereInput = {
    AND?: DrivingExamResultScalarWhereInput | DrivingExamResultScalarWhereInput[]
    OR?: DrivingExamResultScalarWhereInput[]
    NOT?: DrivingExamResultScalarWhereInput | DrivingExamResultScalarWhereInput[]
    id?: IntFilter<"DrivingExamResult"> | number
    applicationId?: StringFilter<"DrivingExamResult"> | string
    vehicleClassId?: IntFilter<"DrivingExamResult"> | number
    result?: EnumDrivingExamResultStatusFilter<"DrivingExamResult"> | $Enums.DrivingExamResultStatus
    notes?: StringNullableFilter<"DrivingExamResult"> | string | null
    examDate?: DateTimeNullableFilter<"DrivingExamResult"> | Date | string | null
    trainedDates?: StringFilter<"DrivingExamResult"> | string
    createdAt?: DateTimeFilter<"DrivingExamResult"> | Date | string
    passAttemptNo?: IntNullableFilter<"DrivingExamResult"> | number | null
    passDate?: DateTimeNullableFilter<"DrivingExamResult"> | Date | string | null
    passWithText?: StringNullableFilter<"DrivingExamResult"> | string | null
  }

  export type ExamAttemptUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ExamAttemptWhereUniqueInput
    update: XOR<ExamAttemptUpdateWithoutApplicationInput, ExamAttemptUncheckedUpdateWithoutApplicationInput>
    create: XOR<ExamAttemptCreateWithoutApplicationInput, ExamAttemptUncheckedCreateWithoutApplicationInput>
  }

  export type ExamAttemptUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ExamAttemptWhereUniqueInput
    data: XOR<ExamAttemptUpdateWithoutApplicationInput, ExamAttemptUncheckedUpdateWithoutApplicationInput>
  }

  export type ExamAttemptUpdateManyWithWhereWithoutApplicationInput = {
    where: ExamAttemptScalarWhereInput
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ExamAttemptScalarWhereInput = {
    AND?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
    OR?: ExamAttemptScalarWhereInput[]
    NOT?: ExamAttemptScalarWhereInput | ExamAttemptScalarWhereInput[]
    id?: IntFilter<"ExamAttempt"> | number
    applicationId?: StringFilter<"ExamAttempt"> | string
    examType?: StringFilter<"ExamAttempt"> | string
    vehicleClassId?: IntNullableFilter<"ExamAttempt"> | number | null
    attemptNo?: IntFilter<"ExamAttempt"> | number
    examDate?: DateTimeFilter<"ExamAttempt"> | Date | string
    examTime?: DateTimeNullableFilter<"ExamAttempt"> | Date | string | null
    notes?: StringNullableFilter<"ExamAttempt"> | string | null
    result?: EnumDrivingExamResultStatusFilter<"ExamAttempt"> | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFilter<"ExamAttempt"> | Date | string
  }

  export type BirthdayWishLogUpsertWithWhereUniqueWithoutApplicationInput = {
    where: BirthdayWishLogWhereUniqueInput
    update: XOR<BirthdayWishLogUpdateWithoutApplicationInput, BirthdayWishLogUncheckedUpdateWithoutApplicationInput>
    create: XOR<BirthdayWishLogCreateWithoutApplicationInput, BirthdayWishLogUncheckedCreateWithoutApplicationInput>
  }

  export type BirthdayWishLogUpdateWithWhereUniqueWithoutApplicationInput = {
    where: BirthdayWishLogWhereUniqueInput
    data: XOR<BirthdayWishLogUpdateWithoutApplicationInput, BirthdayWishLogUncheckedUpdateWithoutApplicationInput>
  }

  export type BirthdayWishLogUpdateManyWithWhereWithoutApplicationInput = {
    where: BirthdayWishLogScalarWhereInput
    data: XOR<BirthdayWishLogUpdateManyMutationInput, BirthdayWishLogUncheckedUpdateManyWithoutApplicationInput>
  }

  export type BirthdayWishLogScalarWhereInput = {
    AND?: BirthdayWishLogScalarWhereInput | BirthdayWishLogScalarWhereInput[]
    OR?: BirthdayWishLogScalarWhereInput[]
    NOT?: BirthdayWishLogScalarWhereInput | BirthdayWishLogScalarWhereInput[]
    id?: IntFilter<"BirthdayWishLog"> | number
    applicationId?: StringFilter<"BirthdayWishLog"> | string
    year?: IntFilter<"BirthdayWishLog"> | number
    sentAt?: DateTimeFilter<"BirthdayWishLog"> | Date | string
  }

  export type ExamReminderLogUpsertWithWhereUniqueWithoutApplicationInput = {
    where: ExamReminderLogWhereUniqueInput
    update: XOR<ExamReminderLogUpdateWithoutApplicationInput, ExamReminderLogUncheckedUpdateWithoutApplicationInput>
    create: XOR<ExamReminderLogCreateWithoutApplicationInput, ExamReminderLogUncheckedCreateWithoutApplicationInput>
  }

  export type ExamReminderLogUpdateWithWhereUniqueWithoutApplicationInput = {
    where: ExamReminderLogWhereUniqueInput
    data: XOR<ExamReminderLogUpdateWithoutApplicationInput, ExamReminderLogUncheckedUpdateWithoutApplicationInput>
  }

  export type ExamReminderLogUpdateManyWithWhereWithoutApplicationInput = {
    where: ExamReminderLogScalarWhereInput
    data: XOR<ExamReminderLogUpdateManyMutationInput, ExamReminderLogUncheckedUpdateManyWithoutApplicationInput>
  }

  export type ExamReminderLogScalarWhereInput = {
    AND?: ExamReminderLogScalarWhereInput | ExamReminderLogScalarWhereInput[]
    OR?: ExamReminderLogScalarWhereInput[]
    NOT?: ExamReminderLogScalarWhereInput | ExamReminderLogScalarWhereInput[]
    id?: IntFilter<"ExamReminderLog"> | number
    applicationId?: StringFilter<"ExamReminderLog"> | string
    examType?: StringFilter<"ExamReminderLog"> | string
    examRecordId?: IntFilter<"ExamReminderLog"> | number
    sentAt?: DateTimeFilter<"ExamReminderLog"> | Date | string
  }

  export type StudentApplicationCreateWithoutExamReminderLogsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutExamReminderLogsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutExamReminderLogsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutExamReminderLogsInput, StudentApplicationUncheckedCreateWithoutExamReminderLogsInput>
  }

  export type StudentApplicationUpsertWithoutExamReminderLogsInput = {
    update: XOR<StudentApplicationUpdateWithoutExamReminderLogsInput, StudentApplicationUncheckedUpdateWithoutExamReminderLogsInput>
    create: XOR<StudentApplicationCreateWithoutExamReminderLogsInput, StudentApplicationUncheckedCreateWithoutExamReminderLogsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutExamReminderLogsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutExamReminderLogsInput, StudentApplicationUncheckedUpdateWithoutExamReminderLogsInput>
  }

  export type StudentApplicationUpdateWithoutExamReminderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutExamReminderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationCreateWithoutBirthdayWishLogsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutBirthdayWishLogsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutBirthdayWishLogsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutBirthdayWishLogsInput, StudentApplicationUncheckedCreateWithoutBirthdayWishLogsInput>
  }

  export type StudentApplicationUpsertWithoutBirthdayWishLogsInput = {
    update: XOR<StudentApplicationUpdateWithoutBirthdayWishLogsInput, StudentApplicationUncheckedUpdateWithoutBirthdayWishLogsInput>
    create: XOR<StudentApplicationCreateWithoutBirthdayWishLogsInput, StudentApplicationUncheckedCreateWithoutBirthdayWishLogsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutBirthdayWishLogsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutBirthdayWishLogsInput, StudentApplicationUncheckedUpdateWithoutBirthdayWishLogsInput>
  }

  export type StudentApplicationUpdateWithoutBirthdayWishLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutBirthdayWishLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationCreateWithoutVehicleClassesInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutVehicleClassesInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutVehicleClassesInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutVehicleClassesInput, StudentApplicationUncheckedCreateWithoutVehicleClassesInput>
  }

  export type VehicleClassCreateWithoutApplicationsInput = {
    code: string
    name: string
    createdAt?: Date | string
    existingLicenses?: ExistingLicenseVehicleClassCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassUncheckedCreateWithoutApplicationsInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    existingLicenses?: ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassCreateOrConnectWithoutApplicationsInput = {
    where: VehicleClassWhereUniqueInput
    create: XOR<VehicleClassCreateWithoutApplicationsInput, VehicleClassUncheckedCreateWithoutApplicationsInput>
  }

  export type StudentApplicationUpsertWithoutVehicleClassesInput = {
    update: XOR<StudentApplicationUpdateWithoutVehicleClassesInput, StudentApplicationUncheckedUpdateWithoutVehicleClassesInput>
    create: XOR<StudentApplicationCreateWithoutVehicleClassesInput, StudentApplicationUncheckedCreateWithoutVehicleClassesInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutVehicleClassesInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutVehicleClassesInput, StudentApplicationUncheckedUpdateWithoutVehicleClassesInput>
  }

  export type StudentApplicationUpdateWithoutVehicleClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutVehicleClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type VehicleClassUpsertWithoutApplicationsInput = {
    update: XOR<VehicleClassUpdateWithoutApplicationsInput, VehicleClassUncheckedUpdateWithoutApplicationsInput>
    create: XOR<VehicleClassCreateWithoutApplicationsInput, VehicleClassUncheckedCreateWithoutApplicationsInput>
    where?: VehicleClassWhereInput
  }

  export type VehicleClassUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: VehicleClassWhereInput
    data: XOR<VehicleClassUpdateWithoutApplicationsInput, VehicleClassUncheckedUpdateWithoutApplicationsInput>
  }

  export type VehicleClassUpdateWithoutApplicationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    existingLicenses?: ExistingLicenseVehicleClassUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutVehicleClassNestedInput
  }

  export type VehicleClassUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    existingLicenses?: ExistingLicenseVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutVehicleClassNestedInput
  }

  export type ApplicationVehicleClassCreateWithoutVehicleClassInput = {
    application: StudentApplicationCreateNestedOneWithoutVehicleClassesInput
  }

  export type ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput = {
    id?: number
    applicationId: string
  }

  export type ApplicationVehicleClassCreateOrConnectWithoutVehicleClassInput = {
    where: ApplicationVehicleClassWhereUniqueInput
    create: XOR<ApplicationVehicleClassCreateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput>
  }

  export type ApplicationVehicleClassCreateManyVehicleClassInputEnvelope = {
    data: ApplicationVehicleClassCreateManyVehicleClassInput | ApplicationVehicleClassCreateManyVehicleClassInput[]
    skipDuplicates?: boolean
  }

  export type ExistingLicenseVehicleClassCreateWithoutVehicleClassInput = {
    license: ExistingLicenseCreateNestedOneWithoutVehicleClassesInput
  }

  export type ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput = {
    id?: number
    licenseId: number
  }

  export type ExistingLicenseVehicleClassCreateOrConnectWithoutVehicleClassInput = {
    where: ExistingLicenseVehicleClassWhereUniqueInput
    create: XOR<ExistingLicenseVehicleClassCreateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput>
  }

  export type ExistingLicenseVehicleClassCreateManyVehicleClassInputEnvelope = {
    data: ExistingLicenseVehicleClassCreateManyVehicleClassInput | ExistingLicenseVehicleClassCreateManyVehicleClassInput[]
    skipDuplicates?: boolean
  }

  export type DrivingExamResultCreateWithoutVehicleClassInput = {
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
    application: StudentApplicationCreateNestedOneWithoutDrivingExamResultsInput
  }

  export type DrivingExamResultUncheckedCreateWithoutVehicleClassInput = {
    id?: number
    applicationId: string
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type DrivingExamResultCreateOrConnectWithoutVehicleClassInput = {
    where: DrivingExamResultWhereUniqueInput
    create: XOR<DrivingExamResultCreateWithoutVehicleClassInput, DrivingExamResultUncheckedCreateWithoutVehicleClassInput>
  }

  export type DrivingExamResultCreateManyVehicleClassInputEnvelope = {
    data: DrivingExamResultCreateManyVehicleClassInput | DrivingExamResultCreateManyVehicleClassInput[]
    skipDuplicates?: boolean
  }

  export type ExamAttemptCreateWithoutVehicleClassInput = {
    examType: string
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
    application: StudentApplicationCreateNestedOneWithoutExamAttemptsInput
  }

  export type ExamAttemptUncheckedCreateWithoutVehicleClassInput = {
    id?: number
    applicationId: string
    examType: string
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
  }

  export type ExamAttemptCreateOrConnectWithoutVehicleClassInput = {
    where: ExamAttemptWhereUniqueInput
    create: XOR<ExamAttemptCreateWithoutVehicleClassInput, ExamAttemptUncheckedCreateWithoutVehicleClassInput>
  }

  export type ExamAttemptCreateManyVehicleClassInputEnvelope = {
    data: ExamAttemptCreateManyVehicleClassInput | ExamAttemptCreateManyVehicleClassInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput = {
    where: ApplicationVehicleClassWhereUniqueInput
    update: XOR<ApplicationVehicleClassUpdateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedUpdateWithoutVehicleClassInput>
    create: XOR<ApplicationVehicleClassCreateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedCreateWithoutVehicleClassInput>
  }

  export type ApplicationVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput = {
    where: ApplicationVehicleClassWhereUniqueInput
    data: XOR<ApplicationVehicleClassUpdateWithoutVehicleClassInput, ApplicationVehicleClassUncheckedUpdateWithoutVehicleClassInput>
  }

  export type ApplicationVehicleClassUpdateManyWithWhereWithoutVehicleClassInput = {
    where: ApplicationVehicleClassScalarWhereInput
    data: XOR<ApplicationVehicleClassUpdateManyMutationInput, ApplicationVehicleClassUncheckedUpdateManyWithoutVehicleClassInput>
  }

  export type ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutVehicleClassInput = {
    where: ExistingLicenseVehicleClassWhereUniqueInput
    update: XOR<ExistingLicenseVehicleClassUpdateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedUpdateWithoutVehicleClassInput>
    create: XOR<ExistingLicenseVehicleClassCreateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedCreateWithoutVehicleClassInput>
  }

  export type ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutVehicleClassInput = {
    where: ExistingLicenseVehicleClassWhereUniqueInput
    data: XOR<ExistingLicenseVehicleClassUpdateWithoutVehicleClassInput, ExistingLicenseVehicleClassUncheckedUpdateWithoutVehicleClassInput>
  }

  export type ExistingLicenseVehicleClassUpdateManyWithWhereWithoutVehicleClassInput = {
    where: ExistingLicenseVehicleClassScalarWhereInput
    data: XOR<ExistingLicenseVehicleClassUpdateManyMutationInput, ExistingLicenseVehicleClassUncheckedUpdateManyWithoutVehicleClassInput>
  }

  export type ExistingLicenseVehicleClassScalarWhereInput = {
    AND?: ExistingLicenseVehicleClassScalarWhereInput | ExistingLicenseVehicleClassScalarWhereInput[]
    OR?: ExistingLicenseVehicleClassScalarWhereInput[]
    NOT?: ExistingLicenseVehicleClassScalarWhereInput | ExistingLicenseVehicleClassScalarWhereInput[]
    id?: IntFilter<"ExistingLicenseVehicleClass"> | number
    licenseId?: IntFilter<"ExistingLicenseVehicleClass"> | number
    vehicleClassId?: IntFilter<"ExistingLicenseVehicleClass"> | number
  }

  export type DrivingExamResultUpsertWithWhereUniqueWithoutVehicleClassInput = {
    where: DrivingExamResultWhereUniqueInput
    update: XOR<DrivingExamResultUpdateWithoutVehicleClassInput, DrivingExamResultUncheckedUpdateWithoutVehicleClassInput>
    create: XOR<DrivingExamResultCreateWithoutVehicleClassInput, DrivingExamResultUncheckedCreateWithoutVehicleClassInput>
  }

  export type DrivingExamResultUpdateWithWhereUniqueWithoutVehicleClassInput = {
    where: DrivingExamResultWhereUniqueInput
    data: XOR<DrivingExamResultUpdateWithoutVehicleClassInput, DrivingExamResultUncheckedUpdateWithoutVehicleClassInput>
  }

  export type DrivingExamResultUpdateManyWithWhereWithoutVehicleClassInput = {
    where: DrivingExamResultScalarWhereInput
    data: XOR<DrivingExamResultUpdateManyMutationInput, DrivingExamResultUncheckedUpdateManyWithoutVehicleClassInput>
  }

  export type ExamAttemptUpsertWithWhereUniqueWithoutVehicleClassInput = {
    where: ExamAttemptWhereUniqueInput
    update: XOR<ExamAttemptUpdateWithoutVehicleClassInput, ExamAttemptUncheckedUpdateWithoutVehicleClassInput>
    create: XOR<ExamAttemptCreateWithoutVehicleClassInput, ExamAttemptUncheckedCreateWithoutVehicleClassInput>
  }

  export type ExamAttemptUpdateWithWhereUniqueWithoutVehicleClassInput = {
    where: ExamAttemptWhereUniqueInput
    data: XOR<ExamAttemptUpdateWithoutVehicleClassInput, ExamAttemptUncheckedUpdateWithoutVehicleClassInput>
  }

  export type ExamAttemptUpdateManyWithWhereWithoutVehicleClassInput = {
    where: ExamAttemptScalarWhereInput
    data: XOR<ExamAttemptUpdateManyMutationInput, ExamAttemptUncheckedUpdateManyWithoutVehicleClassInput>
  }

  export type ExistingLicenseVehicleClassCreateWithoutLicenseInput = {
    vehicleClass: VehicleClassCreateNestedOneWithoutExistingLicensesInput
  }

  export type ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput = {
    id?: number
    vehicleClassId: number
  }

  export type ExistingLicenseVehicleClassCreateOrConnectWithoutLicenseInput = {
    where: ExistingLicenseVehicleClassWhereUniqueInput
    create: XOR<ExistingLicenseVehicleClassCreateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput>
  }

  export type ExistingLicenseVehicleClassCreateManyLicenseInputEnvelope = {
    data: ExistingLicenseVehicleClassCreateManyLicenseInput | ExistingLicenseVehicleClassCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type StudentApplicationCreateWithoutExistingLicenseInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutExistingLicenseInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutExistingLicenseInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutExistingLicenseInput, StudentApplicationUncheckedCreateWithoutExistingLicenseInput>
  }

  export type ExistingLicenseVehicleClassUpsertWithWhereUniqueWithoutLicenseInput = {
    where: ExistingLicenseVehicleClassWhereUniqueInput
    update: XOR<ExistingLicenseVehicleClassUpdateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedUpdateWithoutLicenseInput>
    create: XOR<ExistingLicenseVehicleClassCreateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedCreateWithoutLicenseInput>
  }

  export type ExistingLicenseVehicleClassUpdateWithWhereUniqueWithoutLicenseInput = {
    where: ExistingLicenseVehicleClassWhereUniqueInput
    data: XOR<ExistingLicenseVehicleClassUpdateWithoutLicenseInput, ExistingLicenseVehicleClassUncheckedUpdateWithoutLicenseInput>
  }

  export type ExistingLicenseVehicleClassUpdateManyWithWhereWithoutLicenseInput = {
    where: ExistingLicenseVehicleClassScalarWhereInput
    data: XOR<ExistingLicenseVehicleClassUpdateManyMutationInput, ExistingLicenseVehicleClassUncheckedUpdateManyWithoutLicenseInput>
  }

  export type StudentApplicationUpsertWithoutExistingLicenseInput = {
    update: XOR<StudentApplicationUpdateWithoutExistingLicenseInput, StudentApplicationUncheckedUpdateWithoutExistingLicenseInput>
    create: XOR<StudentApplicationCreateWithoutExistingLicenseInput, StudentApplicationUncheckedCreateWithoutExistingLicenseInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutExistingLicenseInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutExistingLicenseInput, StudentApplicationUncheckedUpdateWithoutExistingLicenseInput>
  }

  export type StudentApplicationUpdateWithoutExistingLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutExistingLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type ExistingLicenseCreateWithoutVehicleClassesInput = {
    licenseNumber?: string | null
    issuedDate?: Date | string | null
    application: StudentApplicationCreateNestedOneWithoutExistingLicenseInput
  }

  export type ExistingLicenseUncheckedCreateWithoutVehicleClassesInput = {
    id?: number
    applicationId: string
    licenseNumber?: string | null
    issuedDate?: Date | string | null
  }

  export type ExistingLicenseCreateOrConnectWithoutVehicleClassesInput = {
    where: ExistingLicenseWhereUniqueInput
    create: XOR<ExistingLicenseCreateWithoutVehicleClassesInput, ExistingLicenseUncheckedCreateWithoutVehicleClassesInput>
  }

  export type VehicleClassCreateWithoutExistingLicensesInput = {
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassUncheckedCreateWithoutExistingLicensesInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassCreateOrConnectWithoutExistingLicensesInput = {
    where: VehicleClassWhereUniqueInput
    create: XOR<VehicleClassCreateWithoutExistingLicensesInput, VehicleClassUncheckedCreateWithoutExistingLicensesInput>
  }

  export type ExistingLicenseUpsertWithoutVehicleClassesInput = {
    update: XOR<ExistingLicenseUpdateWithoutVehicleClassesInput, ExistingLicenseUncheckedUpdateWithoutVehicleClassesInput>
    create: XOR<ExistingLicenseCreateWithoutVehicleClassesInput, ExistingLicenseUncheckedCreateWithoutVehicleClassesInput>
    where?: ExistingLicenseWhereInput
  }

  export type ExistingLicenseUpdateToOneWithWhereWithoutVehicleClassesInput = {
    where?: ExistingLicenseWhereInput
    data: XOR<ExistingLicenseUpdateWithoutVehicleClassesInput, ExistingLicenseUncheckedUpdateWithoutVehicleClassesInput>
  }

  export type ExistingLicenseUpdateWithoutVehicleClassesInput = {
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application?: StudentApplicationUpdateOneRequiredWithoutExistingLicenseNestedInput
  }

  export type ExistingLicenseUncheckedUpdateWithoutVehicleClassesInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    issuedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VehicleClassUpsertWithoutExistingLicensesInput = {
    update: XOR<VehicleClassUpdateWithoutExistingLicensesInput, VehicleClassUncheckedUpdateWithoutExistingLicensesInput>
    create: XOR<VehicleClassCreateWithoutExistingLicensesInput, VehicleClassUncheckedCreateWithoutExistingLicensesInput>
    where?: VehicleClassWhereInput
  }

  export type VehicleClassUpdateToOneWithWhereWithoutExistingLicensesInput = {
    where?: VehicleClassWhereInput
    data: XOR<VehicleClassUpdateWithoutExistingLicensesInput, VehicleClassUncheckedUpdateWithoutExistingLicensesInput>
  }

  export type VehicleClassUpdateWithoutExistingLicensesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutVehicleClassNestedInput
  }

  export type VehicleClassUncheckedUpdateWithoutExistingLicensesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutVehicleClassNestedInput
  }

  export type StudentApplicationCreateWithoutPaymentInfoInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutPaymentInfoInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutPaymentInfoInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutPaymentInfoInput, StudentApplicationUncheckedCreateWithoutPaymentInfoInput>
  }

  export type StudentApplicationUpsertWithoutPaymentInfoInput = {
    update: XOR<StudentApplicationUpdateWithoutPaymentInfoInput, StudentApplicationUncheckedUpdateWithoutPaymentInfoInput>
    create: XOR<StudentApplicationCreateWithoutPaymentInfoInput, StudentApplicationUncheckedCreateWithoutPaymentInfoInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutPaymentInfoInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutPaymentInfoInput, StudentApplicationUncheckedUpdateWithoutPaymentInfoInput>
  }

  export type StudentApplicationUpdateWithoutPaymentInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutPaymentInfoInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationCreateWithoutWrittenExamsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutWrittenExamsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutWrittenExamsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutWrittenExamsInput, StudentApplicationUncheckedCreateWithoutWrittenExamsInput>
  }

  export type StudentApplicationUpsertWithoutWrittenExamsInput = {
    update: XOR<StudentApplicationUpdateWithoutWrittenExamsInput, StudentApplicationUncheckedUpdateWithoutWrittenExamsInput>
    create: XOR<StudentApplicationCreateWithoutWrittenExamsInput, StudentApplicationUncheckedCreateWithoutWrittenExamsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutWrittenExamsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutWrittenExamsInput, StudentApplicationUncheckedUpdateWithoutWrittenExamsInput>
  }

  export type StudentApplicationUpdateWithoutWrittenExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutWrittenExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationCreateWithoutDrivingExamResultsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutDrivingExamResultsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutDrivingExamResultsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutDrivingExamResultsInput, StudentApplicationUncheckedCreateWithoutDrivingExamResultsInput>
  }

  export type VehicleClassCreateWithoutDrivingExamResultsInput = {
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassCreateNestedManyWithoutVehicleClassInput
    existingLicenses?: ExistingLicenseVehicleClassCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassUncheckedCreateWithoutDrivingExamResultsInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    existingLicenses?: ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassCreateOrConnectWithoutDrivingExamResultsInput = {
    where: VehicleClassWhereUniqueInput
    create: XOR<VehicleClassCreateWithoutDrivingExamResultsInput, VehicleClassUncheckedCreateWithoutDrivingExamResultsInput>
  }

  export type StudentApplicationUpsertWithoutDrivingExamResultsInput = {
    update: XOR<StudentApplicationUpdateWithoutDrivingExamResultsInput, StudentApplicationUncheckedUpdateWithoutDrivingExamResultsInput>
    create: XOR<StudentApplicationCreateWithoutDrivingExamResultsInput, StudentApplicationUncheckedCreateWithoutDrivingExamResultsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutDrivingExamResultsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutDrivingExamResultsInput, StudentApplicationUncheckedUpdateWithoutDrivingExamResultsInput>
  }

  export type StudentApplicationUpdateWithoutDrivingExamResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutDrivingExamResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type VehicleClassUpsertWithoutDrivingExamResultsInput = {
    update: XOR<VehicleClassUpdateWithoutDrivingExamResultsInput, VehicleClassUncheckedUpdateWithoutDrivingExamResultsInput>
    create: XOR<VehicleClassCreateWithoutDrivingExamResultsInput, VehicleClassUncheckedCreateWithoutDrivingExamResultsInput>
    where?: VehicleClassWhereInput
  }

  export type VehicleClassUpdateToOneWithWhereWithoutDrivingExamResultsInput = {
    where?: VehicleClassWhereInput
    data: XOR<VehicleClassUpdateWithoutDrivingExamResultsInput, VehicleClassUncheckedUpdateWithoutDrivingExamResultsInput>
  }

  export type VehicleClassUpdateWithoutDrivingExamResultsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUpdateManyWithoutVehicleClassNestedInput
    existingLicenses?: ExistingLicenseVehicleClassUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutVehicleClassNestedInput
  }

  export type VehicleClassUncheckedUpdateWithoutDrivingExamResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    existingLicenses?: ExistingLicenseVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutVehicleClassNestedInput
  }

  export type StudentApplicationCreateWithoutPaymentRecordsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutPaymentRecordsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    examAttempts?: ExamAttemptUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutPaymentRecordsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutPaymentRecordsInput, StudentApplicationUncheckedCreateWithoutPaymentRecordsInput>
  }

  export type StudentApplicationUpsertWithoutPaymentRecordsInput = {
    update: XOR<StudentApplicationUpdateWithoutPaymentRecordsInput, StudentApplicationUncheckedUpdateWithoutPaymentRecordsInput>
    create: XOR<StudentApplicationCreateWithoutPaymentRecordsInput, StudentApplicationUncheckedCreateWithoutPaymentRecordsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutPaymentRecordsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutPaymentRecordsInput, StudentApplicationUncheckedUpdateWithoutPaymentRecordsInput>
  }

  export type StudentApplicationUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutPaymentRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    examAttempts?: ExamAttemptUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationCreateWithoutExamAttemptsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationUncheckedCreateWithoutExamAttemptsInput = {
    id?: string
    referenceNo: string
    fullName: string
    nic: string
    address: string
    email?: string | null
    phone1: string
    phone2?: string | null
    dob: Date | string
    age: number
    canDriveVehicles?: boolean
    notes?: string | null
    medicalDate?: Date | string | null
    medicalTime?: Date | string | null
    medicalStatus?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutApplicationInput
    existingLicense?: ExistingLicenseUncheckedCreateNestedOneWithoutApplicationInput
    writtenExams?: WrittenExamUncheckedCreateNestedManyWithoutApplicationInput
    paymentInfo?: PaymentInfoUncheckedCreateNestedOneWithoutApplicationInput
    paymentRecords?: PaymentRecordUncheckedCreateNestedManyWithoutApplicationInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutApplicationInput
    birthdayWishLogs?: BirthdayWishLogUncheckedCreateNestedManyWithoutApplicationInput
    examReminderLogs?: ExamReminderLogUncheckedCreateNestedManyWithoutApplicationInput
  }

  export type StudentApplicationCreateOrConnectWithoutExamAttemptsInput = {
    where: StudentApplicationWhereUniqueInput
    create: XOR<StudentApplicationCreateWithoutExamAttemptsInput, StudentApplicationUncheckedCreateWithoutExamAttemptsInput>
  }

  export type VehicleClassCreateWithoutExamAttemptsInput = {
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassCreateNestedManyWithoutVehicleClassInput
    existingLicenses?: ExistingLicenseVehicleClassCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassUncheckedCreateWithoutExamAttemptsInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    applications?: ApplicationVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    existingLicenses?: ExistingLicenseVehicleClassUncheckedCreateNestedManyWithoutVehicleClassInput
    drivingExamResults?: DrivingExamResultUncheckedCreateNestedManyWithoutVehicleClassInput
  }

  export type VehicleClassCreateOrConnectWithoutExamAttemptsInput = {
    where: VehicleClassWhereUniqueInput
    create: XOR<VehicleClassCreateWithoutExamAttemptsInput, VehicleClassUncheckedCreateWithoutExamAttemptsInput>
  }

  export type StudentApplicationUpsertWithoutExamAttemptsInput = {
    update: XOR<StudentApplicationUpdateWithoutExamAttemptsInput, StudentApplicationUncheckedUpdateWithoutExamAttemptsInput>
    create: XOR<StudentApplicationCreateWithoutExamAttemptsInput, StudentApplicationUncheckedCreateWithoutExamAttemptsInput>
    where?: StudentApplicationWhereInput
  }

  export type StudentApplicationUpdateToOneWithWhereWithoutExamAttemptsInput = {
    where?: StudentApplicationWhereInput
    data: XOR<StudentApplicationUpdateWithoutExamAttemptsInput, StudentApplicationUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type StudentApplicationUpdateWithoutExamAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUpdateManyWithoutApplicationNestedInput
  }

  export type StudentApplicationUncheckedUpdateWithoutExamAttemptsInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceNo?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    nic?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone1?: StringFieldUpdateOperationsInput | string
    phone2?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    age?: IntFieldUpdateOperationsInput | number
    canDriveVehicles?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    medicalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    medicalStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClasses?: ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationNestedInput
    existingLicense?: ExistingLicenseUncheckedUpdateOneWithoutApplicationNestedInput
    writtenExams?: WrittenExamUncheckedUpdateManyWithoutApplicationNestedInput
    paymentInfo?: PaymentInfoUncheckedUpdateOneWithoutApplicationNestedInput
    paymentRecords?: PaymentRecordUncheckedUpdateManyWithoutApplicationNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutApplicationNestedInput
    birthdayWishLogs?: BirthdayWishLogUncheckedUpdateManyWithoutApplicationNestedInput
    examReminderLogs?: ExamReminderLogUncheckedUpdateManyWithoutApplicationNestedInput
  }

  export type VehicleClassUpsertWithoutExamAttemptsInput = {
    update: XOR<VehicleClassUpdateWithoutExamAttemptsInput, VehicleClassUncheckedUpdateWithoutExamAttemptsInput>
    create: XOR<VehicleClassCreateWithoutExamAttemptsInput, VehicleClassUncheckedCreateWithoutExamAttemptsInput>
    where?: VehicleClassWhereInput
  }

  export type VehicleClassUpdateToOneWithWhereWithoutExamAttemptsInput = {
    where?: VehicleClassWhereInput
    data: XOR<VehicleClassUpdateWithoutExamAttemptsInput, VehicleClassUncheckedUpdateWithoutExamAttemptsInput>
  }

  export type VehicleClassUpdateWithoutExamAttemptsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUpdateManyWithoutVehicleClassNestedInput
    existingLicenses?: ExistingLicenseVehicleClassUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUpdateManyWithoutVehicleClassNestedInput
  }

  export type VehicleClassUncheckedUpdateWithoutExamAttemptsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    existingLicenses?: ExistingLicenseVehicleClassUncheckedUpdateManyWithoutVehicleClassNestedInput
    drivingExamResults?: DrivingExamResultUncheckedUpdateManyWithoutVehicleClassNestedInput
  }

  export type ApplicationVehicleClassCreateManyApplicationInput = {
    id?: number
    vehicleClassId: number
  }

  export type WrittenExamCreateManyApplicationInput = {
    id?: number
    barCode: string
    examDate: Date | string
    result: $Enums.ExamResult
    attemptNo: number
    createdAt?: Date | string
    notes?: string | null
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type PaymentRecordCreateManyApplicationInput = {
    id?: number
    amount: number
    paidDate?: Date | string
  }

  export type DrivingExamResultCreateManyApplicationInput = {
    id?: number
    vehicleClassId: number
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type ExamAttemptCreateManyApplicationInput = {
    id?: number
    examType: string
    vehicleClassId?: number | null
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
  }

  export type BirthdayWishLogCreateManyApplicationInput = {
    id?: number
    year: number
    sentAt?: Date | string
  }

  export type ExamReminderLogCreateManyApplicationInput = {
    id?: number
    examType: string
    examRecordId: number
    sentAt?: Date | string
  }

  export type ApplicationVehicleClassUpdateWithoutApplicationInput = {
    vehicleClass?: VehicleClassUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationVehicleClassUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationVehicleClassUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
  }

  export type WrittenExamUpdateWithoutApplicationInput = {
    barCode?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumExamResultFieldUpdateOperationsInput | $Enums.ExamResult
    attemptNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WrittenExamUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    barCode?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumExamResultFieldUpdateOperationsInput | $Enums.ExamResult
    attemptNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WrittenExamUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    barCode?: StringFieldUpdateOperationsInput | string
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    result?: EnumExamResultFieldUpdateOperationsInput | $Enums.ExamResult
    attemptNo?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentRecordUpdateWithoutApplicationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentRecordUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    paidDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DrivingExamResultUpdateWithoutApplicationInput = {
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleClass?: VehicleClassUpdateOneRequiredWithoutDrivingExamResultsNestedInput
  }

  export type DrivingExamResultUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrivingExamResultUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamAttemptUpdateWithoutApplicationInput = {
    examType?: StringFieldUpdateOperationsInput | string
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicleClass?: VehicleClassUpdateOneWithoutExamAttemptsNestedInput
  }

  export type ExamAttemptUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    examType?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: NullableIntFieldUpdateOperationsInput | number | null
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAttemptUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    examType?: StringFieldUpdateOperationsInput | string
    vehicleClassId?: NullableIntFieldUpdateOperationsInput | number | null
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayWishLogUpdateWithoutApplicationInput = {
    year?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayWishLogUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BirthdayWishLogUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamReminderLogUpdateWithoutApplicationInput = {
    examType?: StringFieldUpdateOperationsInput | string
    examRecordId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamReminderLogUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    examType?: StringFieldUpdateOperationsInput | string
    examRecordId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamReminderLogUncheckedUpdateManyWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    examType?: StringFieldUpdateOperationsInput | string
    examRecordId?: IntFieldUpdateOperationsInput | number
    sentAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationVehicleClassCreateManyVehicleClassInput = {
    id?: number
    applicationId: string
  }

  export type ExistingLicenseVehicleClassCreateManyVehicleClassInput = {
    id?: number
    licenseId: number
  }

  export type DrivingExamResultCreateManyVehicleClassInput = {
    id?: number
    applicationId: string
    result: $Enums.DrivingExamResultStatus
    notes?: string | null
    examDate?: Date | string | null
    trainedDates: string
    createdAt?: Date | string
    passAttemptNo?: number | null
    passDate?: Date | string | null
    passWithText?: string | null
  }

  export type ExamAttemptCreateManyVehicleClassInput = {
    id?: number
    applicationId: string
    examType: string
    attemptNo: number
    examDate: Date | string
    examTime?: Date | string | null
    notes?: string | null
    result?: $Enums.DrivingExamResultStatus
    createdAt?: Date | string
  }

  export type ApplicationVehicleClassUpdateWithoutVehicleClassInput = {
    application?: StudentApplicationUpdateOneRequiredWithoutVehicleClassesNestedInput
  }

  export type ApplicationVehicleClassUncheckedUpdateWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationVehicleClassUncheckedUpdateManyWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
  }

  export type ExistingLicenseVehicleClassUpdateWithoutVehicleClassInput = {
    license?: ExistingLicenseUpdateOneRequiredWithoutVehicleClassesNestedInput
  }

  export type ExistingLicenseVehicleClassUncheckedUpdateWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    licenseId?: IntFieldUpdateOperationsInput | number
  }

  export type ExistingLicenseVehicleClassUncheckedUpdateManyWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    licenseId?: IntFieldUpdateOperationsInput | number
  }

  export type DrivingExamResultUpdateWithoutVehicleClassInput = {
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
    application?: StudentApplicationUpdateOneRequiredWithoutDrivingExamResultsNestedInput
  }

  export type DrivingExamResultUncheckedUpdateWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DrivingExamResultUncheckedUpdateManyWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    examDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    trainedDates?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passAttemptNo?: NullableIntFieldUpdateOperationsInput | number | null
    passDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    passWithText?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamAttemptUpdateWithoutVehicleClassInput = {
    examType?: StringFieldUpdateOperationsInput | string
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: StudentApplicationUpdateOneRequiredWithoutExamAttemptsNestedInput
  }

  export type ExamAttemptUncheckedUpdateWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAttemptUncheckedUpdateManyWithoutVehicleClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: StringFieldUpdateOperationsInput | string
    examType?: StringFieldUpdateOperationsInput | string
    attemptNo?: IntFieldUpdateOperationsInput | number
    examDate?: DateTimeFieldUpdateOperationsInput | Date | string
    examTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    result?: EnumDrivingExamResultStatusFieldUpdateOperationsInput | $Enums.DrivingExamResultStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExistingLicenseVehicleClassCreateManyLicenseInput = {
    id?: number
    vehicleClassId: number
  }

  export type ExistingLicenseVehicleClassUpdateWithoutLicenseInput = {
    vehicleClass?: VehicleClassUpdateOneRequiredWithoutExistingLicensesNestedInput
  }

  export type ExistingLicenseVehicleClassUncheckedUpdateWithoutLicenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
  }

  export type ExistingLicenseVehicleClassUncheckedUpdateManyWithoutLicenseInput = {
    id?: IntFieldUpdateOperationsInput | number
    vehicleClassId?: IntFieldUpdateOperationsInput | number
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