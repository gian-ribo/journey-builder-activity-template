define([
  'postmonger'
], function (
  Postmonger
) {
  'use strict';

  var connection = new Postmonger.Session();
  var authTokens = {};
  var payload = {};
  $(window).ready(onRender);

  connection.on('initActivity', initialize);
  connection.on('requestedTokens', onGetTokens);
  connection.on('requestedEndpoints', onGetEndpoints);

  connection.on('clickedNext', save);

  function onRender() {
    // JB will respond the first time 'ready' is called with 'initActivity'
    connection.trigger('ready');

    connection.trigger('requestTokens');
    connection.trigger('requestEndpoints');

  }

  function initialize(data) {
    console.log(data);
    if (data) {
      payload = data;
    }

    var hasInArguments = Boolean(
      payload['arguments'] &&
      payload['arguments'].execute &&
      payload['arguments'].execute.inArguments &&
      payload['arguments'].execute.inArguments.length > 0
    );

    var inArguments = hasInArguments ? payload['arguments'].execute.inArguments : {};

    console.log(inArguments);

    $.each(inArguments, function (index, inArgument) {
      $.each(inArgument, function (key, val) {
        console.log("key ", key)
        console.log("val ", val)
      });
    });

    connection.trigger('updateButton', {
      button: 'next',
      text: 'done',
      visible: true
    });
  }

  function onGetTokens(tokens) {
    console.log(tokens);
    authTokens = tokens;
  }

  function onGetEndpoints(endpoints) {
    console.log(endpoints);
  }

  function save() {
    var title = $('#title').val();
    var text = $('#text').val();

    console.log('title: ', title)
    console.log('text: ', title)

    payload['arguments'].execute.inArguments = [{
      "tokens": authTokens,
      "email": "{{Contact.Attribute.PushNotificationTest.Email}}",
      "firstName": "{{Contact.Attribute.PushNotificationTest.FirstName}}",
      "lastName": "{{Contact.Attribute.PushNotificationTest.LastName}}",
      "contactId": "{{Contact.Attribute.PushNotificationTest.ContactId}}"
    }];

    payload['metaData'].isConfigured = true;
    connection.trigger('updateActivity', payload);
  }
});