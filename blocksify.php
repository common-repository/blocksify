<?php

/**
 * Plugin Name:       Blocksify - Gutenberg blocks by PressMaximum
 * Description:       Add more blocks with advanced settings for Gutenberg - Blocks Editor.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            pressmaximum
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pm-blocks
 *
 * @package           blocksify
 */


define('PM_BLOCKS_BASEFILE', __FILE__);
define('PM_BLOCKS_URL', plugins_url('/', __FILE__));
define('PM_BLOCKS_PATH', dirname(__FILE__));
define('PM_BLOCKS_VERSION', '0.1.0');

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function pm_blocks_init()
{
	$blocks = [
		'section',
		'section-column',
		'list'
	];
	foreach ($blocks as $block) {
		register_block_type( PM_BLOCKS_PATH . '/build/blocks/' . $block );
	}
	wp_enqueue_style( 'pm-blocks-plugins', PM_BLOCKS_URL . "/build/plugins.css", false );

}
add_action('init', 'pm_blocks_init');


add_action( 'enqueue_block_editor_assets', 'pm_block_css', 1 );
function pm_block_css(){
	$asset_file = include PM_BLOCKS_PATH . '/build/plugins.asset.php';
	wp_enqueue_script(
		'pm-block-plugins',
		PM_BLOCKS_URL . '/build/plugins.js',
		array_merge( $asset_file['dependencies'], [] ),
		$asset_file['version'],
		true
	);
}


/**
 * @see wp_enqueue_block_style()
 * 
 * @see /wp-includes/class-wp-block.php
 *
 * @param [type] $block_content
 * @param [type] $block
 * @return void
 */
function pm_block_render_css($block_content, $block ) {
	$css = isset( $block['attrs']['pm_style'] ) ? $block['attrs']['pm_style'] : false;
	/**
	 * Add style support
	 * 
	 * file wp-includes/block-supports/elements.php
	 * 
	 * add_filter( 'the_content', 'do_blocks', 9 );
	 * Can use wp_enqueue_style() here.
	 */
	if ( $css ) {
		wp_enqueue_block_support_styles( $css );
	}
	return $block_content;
}

add_filter( 'render_block', 'pm_block_render_css', 66, 2 );


// register custom meta tag field
function pm_register_post_meta() {
	$post_types = get_post_types();
	foreach( $post_types as $type ) {
		register_post_meta( $type, 'pm_blocks_css', array(
			'show_in_rest' => true,
			'single' => true,
			'type' => 'object',
		) );
	}

}
add_action( 'init', 'pm_register_post_meta', 999 );
