/**
 * The main module
 *
 * @context atl.general
 */
var $ = require('speakeasy/jquery').jQuery;
var img = require('speakeasy/resources').getImageUrl(module, 'projectavatar.png'); // TODO

$(document).ready(function() {
    $('.welcome-message').prepend('<div id="chuck-norris-facts"></div>');

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
