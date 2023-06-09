/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.20.3
// source: user.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.userServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.userServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserId,
 *   !proto.User>}
 */
const methodDescriptor_userService_GetUser = new grpc.web.MethodDescriptor(
  '/userService/GetUser',
  grpc.web.MethodType.UNARY,
  proto.UserId,
  proto.User,
  /**
   * @param {!proto.UserId} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userServiceClient.prototype.getUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userService/GetUser',
      request,
      metadata || {},
      methodDescriptor_userService_GetUser,
      callback);
};


/**
 * @param {!proto.UserId} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     Promise that resolves to the response
 */
proto.userServicePromiseClient.prototype.getUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userService/GetUser',
      request,
      metadata || {},
      methodDescriptor_userService_GetUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserRegisterInput,
 *   !proto.UserId>}
 */
const methodDescriptor_userService_RegisterUser = new grpc.web.MethodDescriptor(
  '/userService/RegisterUser',
  grpc.web.MethodType.UNARY,
  proto.UserRegisterInput,
  proto.UserId,
  /**
   * @param {!proto.UserRegisterInput} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserId.deserializeBinary
);


/**
 * @param {!proto.UserRegisterInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UserId)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserId>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userServiceClient.prototype.registerUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userService/RegisterUser',
      request,
      metadata || {},
      methodDescriptor_userService_RegisterUser,
      callback);
};


/**
 * @param {!proto.UserRegisterInput} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserId>}
 *     Promise that resolves to the response
 */
proto.userServicePromiseClient.prototype.registerUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userService/RegisterUser',
      request,
      metadata || {},
      methodDescriptor_userService_RegisterUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.User,
 *   !proto.User>}
 */
const methodDescriptor_userService_EditUser = new grpc.web.MethodDescriptor(
  '/userService/EditUser',
  grpc.web.MethodType.UNARY,
  proto.User,
  proto.User,
  /**
   * @param {!proto.User} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.User.deserializeBinary
);


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.User)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.User>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userServiceClient.prototype.editUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userService/EditUser',
      request,
      metadata || {},
      methodDescriptor_userService_EditUser,
      callback);
};


/**
 * @param {!proto.User} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.User>}
 *     Promise that resolves to the response
 */
proto.userServicePromiseClient.prototype.editUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userService/EditUser',
      request,
      metadata || {},
      methodDescriptor_userService_EditUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UserLoginInput,
 *   !proto.UserLoginResponse>}
 */
const methodDescriptor_userService_UserLogin = new grpc.web.MethodDescriptor(
  '/userService/UserLogin',
  grpc.web.MethodType.UNARY,
  proto.UserLoginInput,
  proto.UserLoginResponse,
  /**
   * @param {!proto.UserLoginInput} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.UserLoginResponse.deserializeBinary
);


/**
 * @param {!proto.UserLoginInput} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.UserLoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UserLoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userServiceClient.prototype.userLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userService/UserLogin',
      request,
      metadata || {},
      methodDescriptor_userService_UserLogin,
      callback);
};


/**
 * @param {!proto.UserLoginInput} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UserLoginResponse>}
 *     Promise that resolves to the response
 */
proto.userServicePromiseClient.prototype.userLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userService/UserLogin',
      request,
      metadata || {},
      methodDescriptor_userService_UserLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.TestMessage>}
 */
const methodDescriptor_userService_TestRpc = new grpc.web.MethodDescriptor(
  '/userService/TestRpc',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.TestMessage,
  /**
   * @param {!proto.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.TestMessage.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.TestMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TestMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.userServiceClient.prototype.testRpc =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/userService/TestRpc',
      request,
      metadata || {},
      methodDescriptor_userService_TestRpc,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TestMessage>}
 *     Promise that resolves to the response
 */
proto.userServicePromiseClient.prototype.testRpc =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/userService/TestRpc',
      request,
      metadata || {},
      methodDescriptor_userService_TestRpc);
};


module.exports = proto;

