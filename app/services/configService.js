angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Bodensee',
        'id'            : '102863795915305230399',
        'googleApi'     : 'AIzaSyCoY8fJm9CEc4p5Pj4Cwj9MqU-d3O3sM7I',
        'pwaId'         : '5884887694290374801', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'http://www.gdg-bodensee.de',
        'twitter'       : 'lcgtug',
        'facebook'      : '',
        'meetup'        : 'GDG-Bodensee',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - H:mm',
        'cover' : {
            title : 'GDG Bodensee',
            subtitle : 'Let\'s talk about software and technology...',
            button : {
                text : 'Join',
                url : 'https://plus.google.com/102863795915305230399'
            }
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
