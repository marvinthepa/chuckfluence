/**
 * The main module
 *
 * @context atl.general
 */
var $ = require('speakeasy/jquery').jQuery,
    encoder = require('./encoder'),
    images = $.map(
        [ 'alert.jpg', 'bad_ass.jpg', 'thumb_up.jpg' ],
        function(img) {
            return require('speakeasy/resources').getImageUrl(module, img);
        });


$(document).ready(function() {
    var imageIndex = Math.floor(4 * Math.random());
    $('.welcome-message').prepend('<div id="chuck"><img id="chuckImage"/><div id="chuck-norris-facts"></div></div>');
    
    $('#chuckImage').attr('src', images[imageIndex]);
  
    $('#chuckImage').load(function() {
        $.ajax({
            url: 'http://api.icndb.com/jokes/random',
            success: function(data) {
                var joke = JSON.parse(data);

                if (joke.type === 'success') {
                    $('#chuck-norris-facts').html(joke.value.joke);
                }

            }
        });
    });

    $('#chuck').bind('click', function() {
        imageIndex = (imageIndex + 1) % images.length;
        $('#chuckImage').attr('src', images[imageIndex]);
        
    }).trigger('click');
});
