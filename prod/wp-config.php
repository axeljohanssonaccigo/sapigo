<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sapigo_com');

/** MySQL database username */
define('DB_USER', 'sapigo@s154786');

/** MySQL database password */
define('DB_PASSWORD', 'Yr5y\)6C@Y');

/** MySQL hostname */
define('DB_HOST', 'mysql246.loopia.se');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
 define('AUTH_KEY',         '7a4wFqWeq#vIlqtQ0rPwhg]E>dL&69~[T{Hj%u],Vuu54<+$/!8.sc95^^SE3P(!');
 define('SECURE_AUTH_KEY',  'y^4jH([>O7~ZAAEhJ.RD&I8j,IQ[ZSC!%wwN{T|lio@dm<#Ze=O`h4#+y^mnc~z%');
 define('LOGGED_IN_KEY',    '!a+7G U)2E~HZkxV `eu|iwg2D^y|WF3/[WQ,r3<D*4P.P=l($NDk3Iv*xU$TXHZ');
 define('NONCE_KEY',        'rUnG]0-B]`d>7y2+|XwnM[X@cS4#3EI.FTzuF-zz?.bjdRN{iF-=glcmR`Ej=X0E');
 define('AUTH_SALT',        ',f6E0f9_.]Qky(&aSBq3e/AAm(qYn!Y]J95-dY0!P:-@G25Mg!V*iD4`bDE0Ai|}');
 define('SECURE_AUTH_SALT', 'n7MxPVETDAGD*3$ynrIA,_K?4W_C]b}OZk/+^<.$mGiL6E$J-PMdu+$/I75#-kn5');
 define('LOGGED_IN_SALT',   'NRyzj$%CI|ryE uxp3)<{;DMAnVHBb6?)Cd,ANbe%p-/<izo7/E0K==O91Xpt`pg');
 define('NONCE_SALT',       '^S=w=Rf%K1@g~ow!q:.*`k(FvB5WG;r`KQ|l@|-AYu2k|pJN3dkM{,!}&xz19A5o');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
