var WeddingPartyView = ContentView.extend({

  /*
   * Initialize with the template-id
   */
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    var content = $(this.template).html();
    $(this.el).html(content);

    $('.view-bio').overlay({
      top: 'center',
      left: 'center',
      mask: {
        color: '#FFF',
        loadSpeed: 200,
        opacity: 0.9
      },
      closeOnClick: false
    });
    return this;
  }
});
