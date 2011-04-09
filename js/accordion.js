(function($){

$(document).ready(function(){
	
	$('a[data-accordion-group]').each(function(){
		var my_group = $(this).data('accordion-group');
		var $my_content = $(this).next('.accordion-content');
		$my_content.width( $my_content.parent().width() ).hide(); // fixe slide jitter by giving width
		
		var $myself = $(this);
		
		$(this).click(function(){
			// find everyone in my group and trigger collapse them.
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

