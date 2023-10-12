<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'gutenify-hustle-capital-sync' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
// define( 'AUTH_KEY',         'u4$cin [J@1+#.Le5x!m,#T/6<Lv}Y[cdyzg@mZ_:6[ZV-?Vj+fQ9avlv<~{df{Y' );
// define( 'SECURE_AUTH_KEY',  'n7aOSTxZRV5I:X(;FG8M?~7TQ.2|0:OopQvpln7mX#x^LaR#yD{y&7Ud`/VN7]@R' );
// define( 'LOGGED_IN_KEY',    '<a!%1Yja:sYMwx~*d~x=8;#&`pKo&u0]-Bp0&8<fgmbq}qe_`i35A!ifV=${~hQ<' );
// define( 'NONCE_KEY',        '_pRP}y5Fmh?CuLeRGCgRw]WKkS)=!iqbh@.vrC??o3d_<0=FA5#b&{OgB1BS3(r_' );
// define( 'AUTH_SALT',        '7dk.HQ.azwa(^`]Ir,8X7pPbpAw6>i>[IOpJ!S4 q$jvcY%5|rCBrH-g&,)0qDeM' );
// define( 'SECURE_AUTH_SALT', '/9PN&C;)$YPrm}=@g&%+:RZ%YIXrx}S,8pm*Yk{hZr;~L<h{sPP2TfojF:o{.MM(' );
// define( 'LOGGED_IN_SALT',   '::r~XJAm&ps0;k_9f88|?bQ4]4mN^8W$]UD%ohV]/tf~+hENaees8,:tGX#eUJxR' );
// define( 'NONCE_SALT',       't6>F0nYj9by&oK  JNsUubg:=Cq@tMy_`,Zo69BmPuH]=}/@yinST:Hf|0V%o%Jo' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
