<?php


add_action( 'enqueue_block_editor_assets', function() {
        wp_enqueue_style( 'arial-font-activate', get_stylesheet_directory_uri() . '/style.css' );
    } );


?>