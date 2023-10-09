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
define( 'DB_NAME', 'blockpress' );

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
define( 'AUTH_KEY',         '14tLVxo_$v-$ffS&Bmw|;GBooqDUJ0hZMh%1PaP^gInVOzW.pX8-Jn<!?3.vwo<a' );
define( 'SECURE_AUTH_KEY',  'P,X)z/UL4M}5G|~;d>#k>67ON6ZaoL3TcIES:Pi5J]7/RJ_HnsoQQwhE:-f1tVu$' );
define( 'LOGGED_IN_KEY',    'Z5ai$Q~MMhKH(?|Y,Fi*]7nLbX:a%GdXuLb3W C/0{A`UgM!(AlH/|aE`+Th2l>(' );
define( 'NONCE_KEY',        'PavdA0| .`7!sq-J`JH+Z DJBO[,//E?Ui<q5Q)aTu,kN!<%O!OS!)e$Og>+h-k2' );
define( 'AUTH_SALT',        'A,:9_`ZaMTj<ISrC_~+k~(K8]glG|.egu2*M:vj@1,]L!E/bP^^+Tl/eXVh=A/4]' );
define( 'SECURE_AUTH_SALT', 'EZ&;}|),l$$RVxrZP_BV%ZJo5At<e10$.L.a%8%f5j`zH3?>8l:D=);)IG^KT+D(' );
define( 'LOGGED_IN_SALT',   '3G,Mi=G;Q72Gw|Z{ypD}h6e?9R-^(89GODWFbXX,!K8bm2( tKnhn?N(I.Z`%q[b' );
define( 'NONCE_SALT',       'M+(<v!Lw$k7ANTw*+ooePnK}=>TyPMu./R.2p<2aiuimy%1g &d#NjWB_O2vv@oE' );

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
