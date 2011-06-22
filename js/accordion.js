(function($){

$(document).ready(function(){
	
	$('a[data-accordion-group]').each(function(){
		var $myself = $(this).css('display','block');
		
		var my_group = $myself.data('accordion-group');
		var $my_content = $myself.next('.accordion-content');
		
		// fixe slide jitter by giving width
		$my_content.width( $my_content.parent().width() ).hide();
		
		$myself.click(function(){
			// find everyone in my group and trigger compact.
			$('a[data-accordion-group='+my_group+']').not($myself).trigger('compact');
			
			if($myself.hasClass('down'))
				$myself.trigger('compact');
			else
				$myself.trigger('expand');
				
			return false;
		}).bind('expand',function(){
			$my_content.slideDown();
			$myself.addClass('down');
		}).bind('compact',function(){
			$my_content.slideUp();
			$myself.removeClass('down');
		});
	});
		
});	

})(this.jQuery);

