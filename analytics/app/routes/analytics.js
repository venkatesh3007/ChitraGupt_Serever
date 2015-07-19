import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller) {

    new Ember.RSVP.Promise( function (resolve, reject) {
      Ember.$.ajax({
        contentType: "application/json; charset=utf-8",
        type: 'GET',
        url: '/api/merchants/1/items'
      }).done( function (json) {
        json.forEach(function (singleObject) {
          controller.get('items').addObject(singleObject);
          controller.get('selectedItems').addObject(singleObject);
        });
        resolve(json);
      }).fail( function (jqXHR, textStatus, error) {
        reject(error);
      });
    });
  },

  actions: {
    createItems: function(text) {
      var controller = this.controllerFor('analytics');

      var data = {};
      data.name = text;
      data = JSON.stringify(data);


      new Ember.RSVP.Promise( function (resolve, reject) {
        Ember.$.ajax({
          contentType: "application/json; charset=utf-8",
          data: data,
          processData: false,
          type: 'POST',
          url: 'api/merchants/1/items'
        }).done( function (json) {
          var record = json;
          controller.get('selectedItems').addObject(record);
          controller.get('items').addObject(record);
          resolve(json);
        }).fail( function (jqXHR, textStatus, error) {
          reject(error);
        });
      });
    }
  }
});
