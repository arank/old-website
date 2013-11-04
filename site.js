
	jQuery(document).ready(function($) {

		    //$('#nav-main').scrollspy()
		    
		    // Localscrolling 
    		//$('.menu-main-container').localScroll();
    		$('#nav-main, .brand').localScroll();
     		$('#news, .container').localScroll();
   		
    		$('#banner').carousel({
    			interval: 12000
    		})
    		
    		
            // Initialize scrollorama plugin, passing the blocks class selector as a parameter
            var scrollorama = $.scrollorama({
                blocks:'.scrollblock',
                enablePin:false 
            });
            
            
            scrollorama.onBlockChange(function( ) {
                 // alert('You just scrolled to block#'+scrollorama.blockIndex);
            });
            
            


	});
	
	
