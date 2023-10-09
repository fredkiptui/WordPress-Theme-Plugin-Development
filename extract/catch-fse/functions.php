<?php
/**
 * Catch FSE functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Catch_FSE
 * @since 1.0
 */

if ( ! function_exists( 'catch_fse_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since 1.0
	 *
	 * @return void
	 */
	function catch_fse_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'catch_fse_support' );

if ( ! function_exists( 'catch_fse_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since 1.0
	 *
	 * @return void
	 */
	function catch_fse_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_enqueue_style(
			'catch-fse-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);
	}

endif;

add_action( 'wp_enqueue_scripts', 'catch_fse_styles' );

function catch_fse_dismissible_script() {
		wp_enqueue_script(
            'dismissible-notices',
            get_theme_file_uri( 'assets/js/dismiss-notice.js' ),
            array(),
            filemtime( get_theme_file_path( 'assets/js/dismiss-notice.js' ) ),
            true
        );

        wp_localize_script(
			'dismissible-notices',
			'dismissible_notice',
			array(
				'nonce' => wp_create_nonce( 'dismissible-notice' ),
			)
		);
	}

add_action( 'admin_enqueue_scripts', 'catch_fse_dismissible_script' );

/**
 * Register the required plugins for this theme.
 *
 * In this example, we register five plugins:
 * - one included with the TGMPA library
 * - two from an external source, one from an arbitrary source, one from a GitHub repository
 * - two from the .org repo, where one demonstrates the use of the `is_callable` argument
 *
 * The variables passed to the `tgmpa()` function should be:
 * - an array of plugin arrays;
 * - optionally a configuration array.
 * If you are not changing anything in the configuration array, you can remove the array and remove the
 * variable from the function call: `tgmpa( $plugins );`.
 * In that case, the TGMPA default settings will be used.
 *
 * This function is hooked into `tgmpa_register`, which is fired on the WP `init` action on priority 10.
 */
function catch_fse_register_required_plugins() {
	/*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
	$plugins = array(
		// WooCommerce.
		array(
			'name' 			=> 'FSE Pro', // Plugin Name, translation not required.
			'slug' 			=> 'fse-pro',
			'external_url' 	=> 'https://catchthemes.com/fse-pro-plugin/',
			'required' 		=> 'false',
		),
	);

	/*
	 * Array of configuration settings. Amend each line as needed.
	 *
	 * TGMPA will start providing localized text strings soon. If you already have translations of our standard
	 * strings available, please help us make TGMPA even better by giving us access to these translations or by
	 * sending in a pull-request with .po file(s) with the translations.
	 *
	 * Only uncomment the strings in the config array if you want to customize the strings.
	 */
	$config = array(
		'id'           => 'catch-fse',         // Unique ID for hashing notices for multiple instances of TGMPA.
		'default_path' => '',                      // Default absolute path to bundled plugins.
		'menu'         => 'tgmpa-install-plugins', // Menu slug.
		'has_notices'  => true,                    // Show admin notices or not.
		'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
		'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
		'is_automatic' => false,                   // Automatically activate plugins after installation or not.
		'message'      => '',                      // Message to output right before the plugins table.
	);

	tgmpa( $plugins, $config );
}
add_action( 'tgmpa_register', 'catch_fse_register_required_plugins' );

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

// Add block styles
require get_template_directory() . '/inc/block-styles.php';

// Block Filters
require get_template_directory() . '/inc/block-filters.php';

// Svg icons
require get_template_directory() . '/inc/icon-function.php';

require get_template_directory() . '/inc/persist-admin-notices-dismissal.php';

// Theme About Page
require get_template_directory() . '/inc/about.php';

// Include Upgrade Button
require get_template_directory() . '/inc/upgrade-button/class-customize.php';

// Load TGMPA
require get_template_directory() . '/inc/class-tgm-plugin-activation.php';