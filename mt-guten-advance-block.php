<?php
/**
 * Plugin Name: MT-Guten Advance Blocks
 * Plugin URI:  #
 * Description: Advance guten blocks
 * Version:     1.0
 * Author:      Mehedi Hasan
 * Author URI:  https://codewithmehedi.com
 * Text Domain: #
 * Domain Path: /languages
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 * @wordpress-plugin
 * Prefix:      mtgtab
 */

defined( 'ABSPATH' ) || die( 'No script kiddies please!' );

// add_action( 'plugins_loaded', 'Plugin Functions Prefix_plugin_init' );
// /**
//  * Load localization files
//  *
//  * @return void
//  */
// function Plugin Functions Prefix_plugin_init() {
//     load_plugin_textdomain( 'Plugin Slug', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
// }

class Mtgtab_assets {
    function __construct()
    {
        add_action('init',[$this,'mtgtab_enqueue_assets']);
    }

    function mtgtab_enqueue_assets() {
        //register the block editor scripts
        wp_register_script( 'mtgtab-editor-script', 
        plugin_dir_url(__FILE__).'./build/index.js', 
        ['wp-blocks','wp-i18n','wp-element','wp-editor'],
         filemtime( plugin_dir_path( __FILE__ ).'build/index.js'),
        );

        //register_editor_style

        wp_register_style( 'mtgtab-editor-style', 
        plugin_dir_url( __FILE__ ).'./build/editor.css');

        //register front-end style
        wp_register_style( 'mtgtab-frontend-style', 
        plugin_dir_url( __FILE__ ).'./build/style.css');

        //an array of blocks
        $blocs=[
            'mtgtab/testimonial'
        ];

        //add the blocks and resgister the stylesheets
        foreach( $blocs as $block ){
            register_block_type( $block, 
            [
                'editor_script'=>'mtgtab-editor-script',
                'editor_style'=>'mtgtab-editor-style',
                'style'=>'mtgtab-frontend-style'
            ]);
        }

    }
}

$mtgtab_init= new Mtgtab_assets();