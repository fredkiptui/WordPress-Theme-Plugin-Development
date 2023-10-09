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
define( 'DB_NAME', 'zeever' );

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
define( 'AUTH_KEY',         '?=IA} jB)NWP@2ke<{.m]qu$Pe?OCOA; d4I%M?X,7e,fO[<yDCBXvX$rqv+OAUV' );
define( 'SECURE_AUTH_KEY',  '#y^]g8D3m%gfq+B%gE[O3/mDe52,D6H8ZF8J^9X?BC Cb`}toklxYYW=Wd?r {)X' );
define( 'LOGGED_IN_KEY',    'Sfgn:[iVt88gW,Klk{|9~FhSsLH9dg#8x8;|VX1ynOp7f!1GhE>$y+R-XS&wZQrb' );
define( 'NONCE_KEY',        'jVR9Qu9du>;FW{y JxSfS+IA^Ym .AB/^.7=([.><x!%7O<CsP(cSNR#r*{3vF|7' );
define( 'AUTH_SALT',        ',*-9>DOhQf*y2pM9xU B9l!InG~kP/v!E+qNTH=.P$Ty=<vD:@N]%!&&j;nvHOU/' );
define( 'SECURE_AUTH_SALT', 'EIaA@bgUga3;|^@]~5-lYmhi(wjv<bucV$(iS%d-{UC[#d9.Lbc* G{YxlEch_R:' );
define( 'LOGGED_IN_SALT',   '5#1yhvbWC$@-C3(o^?I99//46G3XIgpxc[XA%<RZo92tVdHZ&3 jA}d9@>4!>_AA' );
define( 'NONCE_SALT',       'V.MXVfXTTiAuSc;!Dvt!$[UpD6R?<[;%,hoKsc,?|F~4yu3O1.hx.^PvL^wzeh-D' );

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
