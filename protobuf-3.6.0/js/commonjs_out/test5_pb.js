/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.jspb.exttest.beta.TestBetaExtensionsMessage', null, global);
goog.exportSymbol('proto.jspb.exttest.beta.floatingStrField', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 1, null, null);
};
goog.inherits(proto.jspb.exttest.beta.TestBetaExtensionsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.jspb.exttest.beta.TestBetaExtensionsMessage.displayName = 'proto.jspb.exttest.beta.TestBetaExtensionsMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.jspb.exttest.beta.TestBetaExtensionsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.jspb.exttest.beta.TestBetaExtensionsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  jspb.Message.toObjectExtension(/** @type {!jspb.Message} */ (msg), obj,
      proto.jspb.exttest.beta.TestBetaExtensionsMessage.extensions, proto.jspb.exttest.beta.TestBetaExtensionsMessage.prototype.getExtension,
      includeInstance);
  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.jspb.exttest.beta.TestBetaExtensionsMessage}
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.jspb.exttest.beta.TestBetaExtensionsMessage;
  return proto.jspb.exttest.beta.TestBetaExtensionsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.jspb.exttest.beta.TestBetaExtensionsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.jspb.exttest.beta.TestBetaExtensionsMessage}
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      jspb.Message.readBinaryExtension(msg, reader, proto.jspb.exttest.beta.TestBetaExtensionsMessage.extensionsBinary,
        proto.jspb.exttest.beta.TestBetaExtensionsMessage.prototype.getExtension,
        proto.jspb.exttest.beta.TestBetaExtensionsMessage.prototype.setExtension);
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.jspb.exttest.beta.TestBetaExtensionsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.jspb.exttest.beta.TestBetaExtensionsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  jspb.Message.serializeBinaryExtensions(message, writer,
    proto.jspb.exttest.beta.TestBetaExtensionsMessage.extensionsBinary, proto.jspb.exttest.beta.TestBetaExtensionsMessage.prototype.getExtension);
};



/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldInfo>}
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.extensions = {};


/**
 * The extensions registered with this message class. This is a map of
 * extension field number to fieldInfo object.
 *
 * For example:
 *     { 123: {fieldIndex: 123, fieldName: {my_field_name: 0}, ctor: proto.example.MyMessage} }
 *
 * fieldName contains the JsCompiler renamed field name property so that it
 * works in OPTIMIZED mode.
 *
 * @type {!Object<number, jspb.ExtensionFieldBinaryInfo>}
 */
proto.jspb.exttest.beta.TestBetaExtensionsMessage.extensionsBinary = {};


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `floatingStrField`.
 * @type {!jspb.ExtensionFieldInfo<string>}
 */
proto.jspb.exttest.beta.floatingStrField = new jspb.ExtensionFieldInfo(
    101,
    {floatingStrField: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

proto.jspb.exttest.beta.TestBetaExtensionsMessage.extensionsBinary[101] = new jspb.ExtensionFieldBinaryInfo(
    proto.jspb.exttest.beta.floatingStrField,
    jspb.BinaryReader.prototype.readString,
    jspb.BinaryWriter.prototype.writeString,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
proto.jspb.exttest.beta.TestBetaExtensionsMessage.extensions[101] = proto.jspb.exttest.beta.floatingStrField;

goog.object.extend(exports, proto.jspb.exttest.beta);
