<?php
/*
Plugin Name: Content Accordion
Plugin URI: http://patrick.forringer.com/plugins/content-accordion
Description: Manage and create content accordions.
Version: 0.0.1
Author: Patrick Forringer
Author URI: http://patrick.forringer.com
*/

define( PF_CA_VER, '0.0.1' );

/* Set constant path to the volunteers plugin directory. */
define( PF_CA_DIR, plugin_dir_path( __FILE__ ) );

/* Set constant path to the volunteers plugin URL. */
define( PF_CA_URL, plugin_dir_url( __FILE__ ) );

class PF_Content_Accordion{
	
	function __construct(){

		$short_code = 'accordion'; // TODO: over writeable shortcode - in options
		
		add_action( 'wp_enqueue_scripts', array( &$this , 'enqueue_scripts' ) );
		
		add_shortcode( $short_code , array( &$this, 'do_shortcode' ) );
		
		// register scripts
		wp_register_script('PF_Content_Accordion_JS',
			PF_CA_URL . 'js/accordion.js',
			array( 'jquery' ), '0.1');		
	}
	
	function enqueue_scripts(){
		if(!is_admin()){
				wp_enqueue_script( 'PF_Content_Accordion_JS' );
		}
	}
	
	function do_shortcode( $attrs, $content ){

		$op = (object) shortcode_atts(array(
				'title' => 'Expand Content',
				'group' => get_the_ID()
			), $attrs );
		
		return "<a href=\"#\" data-accordion-group=\"{$op->group}\" class=\"accordion-title\">{$op->title}</a><div class=\"accordion-content\">{$content}</div>";
		
	}

}

new PF_Content_Accordion;