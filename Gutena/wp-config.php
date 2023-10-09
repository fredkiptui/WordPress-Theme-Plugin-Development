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
define( 'DB_NAME', 'Gutena' );

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
define( 'AUTH_KEY',         ']]`t/^cAPx2Dr2xYSa3.p]buG&d|T}Gijol(}1AzmS@eN|NormKiv+jAKzHoI%nf' );
define( 'SECURE_AUTH_KEY',  'dX}27#0.j9,NDT$bau_WRF/}Sk`LnK:IZ{o#Q.!A8a,kfPjZhs|M]lfq3eMqMu+Z' );
define( 'LOGGED_IN_KEY',    'IH%Oh&{sysGad)PY$@{hJ/Uz;x#o)VBvKYk,+EpJO_Vi*4BI*{OkUK.W.?Ay,4yx' );
define( 'NONCE_KEY',        'Zv>ym]Mlu0X>|?c(>Pdu@,EbpUx=rN-|C+.[g`^dh`@;Ug]g^fKP}oR<J~P5`:~k' );
define( 'AUTH_SALT',        'M/M8gF~1$PS``,ZrZ{I;,Z$Gvr9z&3Ue+$CkPJ31[TaO~}]1h[CI&]JlI,Gp23i:' );
define( 'SECURE_AUTH_SALT', '+3bkWvwsb>$=i%iP.v_qd]/H?L7VK&lAqaW[?<8hkIV@~ Yl<%0figJbZDe!4i*4' );
define( 'LOGGED_IN_SALT',   '>X):))8YaT;-]v<4.!BF-X!*l<)-5b<{Z@W<DP-N-[#XbnG*Wf;ieJQIn0QSKN0}' );
define( 'NONCE_SALT',       'Q*HV]`n%z!e,JW6 SYA)};_^/-m(GT.%f%QLs?R/U gR;6=2x5DkPk|t~!w0lmbW' );

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
