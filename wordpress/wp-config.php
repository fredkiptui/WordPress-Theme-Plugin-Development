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
define( 'DB_NAME', 'customtheme' );

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
define( 'AUTH_KEY',         '/D{D,@`@DO2hC3r%6HF,vQ7m#2Md7I*1C!|iUSSCP8HgV!GidJU=3Ov)Y,FO)$Q9' );
define( 'SECURE_AUTH_KEY',  'GaO2~L7;&0>l(}> s:Bw7rRF!1}6cEnY@ylBjcFSr2)RyT-JRFpS_X-.Ep>c)G8?' );
define( 'LOGGED_IN_KEY',    '@/Q|lsK[8DxK*kBNM]3)H-v6GkaKrCsHTZOY7f`@Tq}ww8-~ijAJH^qNAqYG_u+(' );
define( 'NONCE_KEY',        'P]6{/0BT~e3|jxEs_u8nW9@Z}Jo,ubJz?uJU2op=/hT]*`7kzkiiO1J2XLl@(q}8' );
define( 'AUTH_SALT',        'j/Fbx2gPTaXw*f8E~oRwc0EU=0qOxYl|L1_>Vn=h+Pc(r`Te%#Cl7)L~-^kQUn@K' );
define( 'SECURE_AUTH_SALT', 'gQ:%2@O;.xkkCCtlV<Z87q;<8MejLwODk$->~RQrstfX)rW&E<@{v1LNbsM!c6N>' );
define( 'LOGGED_IN_SALT',   'join<v;irc4Kok9y~1^rrkE/w#B Npi-X*C]}H%w2#]y!@l;z8Q9_y?){[P>~5x3' );
define( 'NONCE_SALT',       'N$x.^_B^t?nBow6m;{UH ;3=#1}L05$ X.0Uq+nTRiM!Jf~WmSY_*&|M$*JkUcN@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'psi_';

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
