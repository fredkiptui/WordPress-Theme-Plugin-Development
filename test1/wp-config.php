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
define( 'DB_NAME', 'test1' );

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
define( 'AUTH_KEY',         '{Tf>]f*I66P8aR?<!rflaJB)9v.Hiz4U^EQe_VMCmNUc [b7|0^_6Js( C7nHz)/' );
define( 'SECURE_AUTH_KEY',  '%U~hekUl:+I.l,)3Lm.~Z}/z3Klr?a!]#?rv$ 0m<aXXnZCy=-G_bJ9s*GO^Kud/' );
define( 'LOGGED_IN_KEY',    '}NUh%zdW43BJPUgBz%V{Xz%d]P=K%F.[7_H]Aj_{`PpFW}DSp^(e]mj%Zu{{nlvA' );
define( 'NONCE_KEY',        '%;4cd=jLtOEE3.rRsIzFH#:}8R~_U|cWEnL)Gz</*WAn%,xCjy(z5o1<>`U m2@`' );
define( 'AUTH_SALT',        ',J;Mb#j>__(LV.JvO2=QgJiqYPUDgew<jh&l@Ncwma#Q20FB@5g!5Z?gqagAu-nD' );
define( 'SECURE_AUTH_SALT', 'YH;r0qj@Mu8.ck*aEd;vhVN,Qe{YXZ$~3%:Zfe+C|PI|{E4sOb;n/o_}Z49=%#8Y' );
define( 'LOGGED_IN_SALT',   ';XCRV_s4^afG@Pjxv1@3./8FezzlOzDOa5v4vKShZeXbLNsmr9VtjAI`/}8?4c>+' );
define( 'NONCE_SALT',       ';]m,}e?SuH~cQm*xE6VjxB*3~SrDG.~?x:hM;Hj?2L?1MB{#3H))OE l#SWr8h9(' );

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
