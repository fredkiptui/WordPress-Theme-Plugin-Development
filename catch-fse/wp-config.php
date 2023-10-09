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
define( 'DB_NAME', 'catch-fse' );

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
define( 'AUTH_KEY',         '%Yi:Q[sTq]7-v)ghA_5pmr3W78N!+k:p~&{6-l$FhBJAl4[T.#&7JG$)pisNo0ic' );
define( 'SECURE_AUTH_KEY',  'abD6kUL*N.}Hn~%:^Dr;0N3Q=[f?D#rfCK=uTmyEUkl),s/2M}$-@s-+9I6K6zwC' );
define( 'LOGGED_IN_KEY',    '%5MWZH%l<{*UaMo:e(Ktf9g7P`s4_!hF =rSPg}TAQf?~FLov`X@(+1ti/C)B3-X' );
define( 'NONCE_KEY',        '6gvSQHx+ {{Tnx|hL-^[Gqff4N$7GJKaR3<_=*1f!7C (|A`  v&e^/!^EZ2/%F0' );
define( 'AUTH_SALT',        'h9zge^(PA[gz@AnD^xH~zg`JS;k(v}%:R/l5L:&HY_bSp^r(YdID@,%Na8kFUu)B' );
define( 'SECURE_AUTH_SALT', '%!BKF{?gTQq-42>(/(%4[P{@+I0})?[XXfAF!ei`ctBSH1uXuwIo=u@ !+b/i S9' );
define( 'LOGGED_IN_SALT',   'kP{*z(X$;1`wZ>t23Z((h`?x*-c@2DpfBE#(B6y1EzP$A?(m<G0`AUOi.C|OHdz7' );
define( 'NONCE_SALT',       '(6hU:3gb^%l6OcO=,$|G&rUV,C+ZW#bTL9%b4K)U<@=6d.@d+L{b[k<3>R?a%[U/' );

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
