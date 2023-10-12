<?php

/*
Plugin Name: Custom-fonts
Description: custom fonts 
*/

function enqueue_custom_fonts() {
    wp_enqueue_style(
        'custom-fonts',
        plugins_url('editor.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );
}

add_action('enqueue_block_editor_assets', 'enqueue_custom_fonts');
