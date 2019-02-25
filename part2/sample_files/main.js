function write_email(name,host,anchor) {
  emailE = name + '@' + host;
  if (!anchor) {
    anchor = emailE;
  }
  document.write(
    '<a href="mailto:' + emailE + '">' 
    + anchor + '</a>'
  )
}


$(document).ready(function(){
	if ($('#view_count').length > 0) {
//		$("#view_count").load("/feed/count/" + $('#view_count_access_key').val());
		$('#view_count').html('[disabled count]');
	}
//	$('a[rel*=facebox]').facebox();
	
	if ($('a[rel*=facebox]').length > 0) {
		$('a[rel*=facebox]').facebox();
	}
	
	$('#hidden_email').hide();
	$('#show_email').click(function(){ 
		$('#hidden_email').show();
	});

	if ($('#comic').length > 0) {
		$('#comic').children('.panel').each(function() {
//			console.log('panel');

		});
	}
	
	if ($('#bearfood_links').length > 0) {
		$('#bearfood_links').load('/bearfood_json');
	}
	
//	if ($('#bearfood_links_big').length > 0) {
//		$('#bearfood_links_big').load('/bearfood_json_big');
//	}
	

	if ($('#shopify_feed_target').length > 0) {
		$('#shopify_feed_target').load('/shopify_feed');
	}

});


function random_int() {                           
 return Math.floor(Math.random()*100000);         
}                                                 
