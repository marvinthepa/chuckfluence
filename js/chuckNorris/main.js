/**
 * The main module
 *
 * @context atl.general
 */
var $ = require('speakeasy/jquery').jQuery;
var images = $.map(
        [ 'alert.jpg', 'bad_ass.jpg', 'thumb_up.jpg' ],
        function(img) {
            return require('speakeasy/resources').getImageUrl(module, img);
        });


$(document).ready(function() {
    var imageIndex = 0;
    $('.welcome-message').prepend('<div id="chuck"><img id="chuckImage"/><div id="chuck-norris-facts"></div></div>');

    $('#chuck').bind('click', function() {
        $.ajax({
            url: 'http://api.icndb.com/jokes/random',
            success: function(data) {
                var joke = JSON.parse(data);

                if (joke.type === 'success') {
                    $('#chuck-norris-facts').html(joke.value.joke);
                }
                $('#chuckImage').attr('src', images[imageIndex]);
                imageIndex = (imageIndex + 1) / 3;
            }
        });
    }).trigger('click');
});
