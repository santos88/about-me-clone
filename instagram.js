var token = '11029235.22947', // learn how to obtain it below
userid = 111111, // User ID - get it in source HTML of your Instagram profile
num_photos = 10; // how much photos do you want to get
$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', 
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos}
}).done(function( json ) {
    console.log(json);
    for( x in json.data ){
        var carouselClass = x == 0 ? "carousel-item active" : "carousel-item"
        var newItem = '<div class="'+ carouselClass +'"><img class="d-block w-100" src="' + 
        json.data[x].images.standard_resolution.url +'"> <div class="carousel-caption d-none d-md-block"><h5>' +
        json.data[x].caption.text + '</h5></div></div>';
        $( '.carousel-inner' ).append( newItem );
    }
});
