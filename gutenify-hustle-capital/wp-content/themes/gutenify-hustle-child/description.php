
<!-- .........................................................
.................................................... -->
<!-- FUNCTIONS.PHP FILE -->
<?php
/**
 * Gutenify Hustle functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Gutenify Hustle
 */

if ( ! defined( 'GUTENIFY_HUSTLE_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( 'GUTENIFY_HUSTLE_VERSION', wp_get_theme()->get( 'Version' ) );
}

if ( ! function_exists( 'gutenify_hustle_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function gutenify_hustle_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Gutenify Hustle, use a find and replace
		 * to change 'gutenify-hustle' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'gutenify-hustle', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		add_theme_support( 'align-wide' );

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		// add_editor_style( 'style.css' );

		// Add support for core custom logo.
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 192,
				'width'       => 192,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);

		// Experimental support for adding blocks inside nav menus
		add_theme_support( 'block-nav-menus' );

		// Add support for experimental link color control.
		add_theme_support( 'experimental-link-color' );
	}
endif;
add_action( 'after_setup_theme', 'gutenify_hustle_setup' );

/**
 * Theme default options.
 *
 * @return array
 */
function gutenify_hustle_default_options() {
	return array(
		'site_primary_color'     => '#2196f3',
		'global_primary_font'    => 'lato-helvetica',
	);
}

if ( ! function_exists( 'gutenify_hustle_fonts_url' ) ) :
	/**
	 * Register Google fonts for Gutenify Hustle
	 *
	 * Create your own gutenify_hustle_fonts_url() function to override in a child theme.
	 *
	 * @since 1.0
	 *
	 * @return string Google fonts URL for the theme.
	 */
	function gutenify_hustle_fonts_url() {
		$fonts_url = '';

		/* Translators: If there are characters in your language that are not
		* supported by Poppins, translate this to 'off'. Do not translate
		* into your own language.
		*/
		$font_families = array( 'Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400', 'Sen:wght@400;700;800&display=swap' );

		if ( ! empty( $font_families ) ) {

			$query_args = array(
				'family' => implode( '&family=', $font_families ), //urlencode( implode( '|', $font_families ) ),
				// 'subset' => urlencode( 'latin,latin-ext' ),
				'display' => 'swap',
			);

			$fonts_url = add_query_arg( $query_args, 'https://fonts.googleapis.com/css2' );
		}

		if ( ! class_exists( 'WPTT_WebFont_Loader' ) ) {
			// Load Google fonts from Local.
			require_once get_theme_file_path( 'inc/wptt-webfont-loader.php' );
		}

		return esc_url( wptt_get_webfont_url( $fonts_url ) );
	}
endif;

/**
 * Enqueue scripts and styles.
 */
function gutenify_hustle_scripts() {
	$min  = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	// Register theme stylesheet.
	$theme_version = wp_get_theme()->get( 'Version' );



	// FontAwesome.
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome/css/all' . $min . '.css', array(), '5.15.3', 'all' );
	wp_enqueue_style( 'gutenify-animate', get_template_directory_uri() . '/css/animate.css', array(), filemtime( get_theme_file_path( '/css/animate.css' ) ), 'all' );
	wp_enqueue_style( 'gutenify-hustle-fonts', gutenify_hustle_fonts_url(), array(), null );

	$deps = array( 'font-awesome', 'gutenify-animate' );
	global $wp_styles;
	if ( in_array( 'wc-blocks-vendors-style', $wp_styles->queue ) ) {
		$deps[] = 'wc-blocks-vendors-style';
	}

	wp_enqueue_style( 'gutenify-hustle-style', get_stylesheet_uri(), $deps, date( 'Ymd-Gis', filemtime( get_theme_file_path( 'style.css' ) ) ) );
	wp_style_add_data( 'gutenify-hustle-style', 'rtl', 'replace' );

	$deps = array( 'jquery' );
	wp_enqueue_script( 'gutenify-hustle-animate', get_template_directory_uri() . '/js/animate' . $min . '.js', $deps, date( 'Ymd-Gis', filemtime( get_theme_file_path( 'style.css' ) ) ) );

	if ( file_exists( get_template_directory() . '/css/theme-style.css' ) ) {
		wp_enqueue_style( 'gutenify-hustle-theme-style', get_template_directory_uri() . '/css/theme-style.css',  array(), date( 'Ymd-Gis', filemtime( get_theme_file_path( 'style.css' ) ) ) );
	}

}
add_action( 'wp_enqueue_scripts', 'gutenify_hustle_scripts' );

/**
 * Enqueue admin scripts and styles.
 */
function gutenify_hustle_admin_scripts() {
	$min  = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	// Register theme stylesheet.
	$theme_version = wp_get_theme()->get( 'Version' );

	$deps = array();

	// FontAwesome.
	wp_register_style( 'gutenify-hustle-admin-style', get_stylesheet_directory_uri() . '/css/admin-style.css', $deps, date( 'Ymd-Gis', filemtime( get_theme_file_path( 'style.css' ) ) ) );

	$deps = array( 'wp-api-fetch' );
	$handle = 'gutenify-hustle-admin';
	wp_register_script( $handle, get_template_directory_uri() . '/js/admin' . $min . '.js', $deps, date( 'Ymd-Gis', filemtime( get_theme_file_path( 'js/admin.js' ) ) ) );

	wp_localize_script( $handle, 'gutenify_hustle',
        array(
            'gutenify_kit_gallery' => esc_url( admin_url( 'admin.php?page=gutenify-template-kits' ) ),
            'gutenify_hustle_nonce' => wp_create_nonce( "gutenify_hustle-nonce" ),
        )
    );

}
add_action( 'admin_enqueue_scripts', 'gutenify_hustle_admin_scripts' );

function gutenify_hustle_block_assets() {
	$min = '';
	// FontAwesome.
	wp_enqueue_style( 'font-awesome', get_template_directory_uri() . '/css/font-awesome/css/all' . $min . '.css', array(), '5.15.3', 'all' );
}
add_action( 'enqueue_block_assets', 'gutenify_hustle_block_assets' );

/**
 *
 * Enqueue scripts and styles.
 */
function gutenify_hustle_editor_styles() {
	// Enqueue editor styles.
	add_editor_style(
		array(
			gutenify_hustle_fonts_url(),
		)
	);
}
add_action( 'admin_init', 'gutenify_hustle_editor_styles' );

/**
 * Load core file.
 */
require_once get_template_directory() . '/inc/core/bootstrap.php';
