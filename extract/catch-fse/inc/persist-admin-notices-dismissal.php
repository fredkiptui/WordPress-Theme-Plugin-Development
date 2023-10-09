<?php 
/**
 * Persist Admin notices Dismissal
 *
 * Copyright (C) 2016 Collins Agbonghama <https://w3guy.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @package Persist Admin notices Dismissal
 * @author  Collins Agbonghama, Andy Fragen
 * @license http://www.gnu.org/licenses GNU General Public License
 */

/**
 * Exit if called directly.
 */
if ( ! defined( 'ABSPATH' ) ) { 
	die;
}

if ( ! class_exists( 'PAnD' ) ) {
	/**
	 * Class PAnD
	 */
	class PAnD {  

		/**
		 * Init hooks.
		 */
		public static function init() {  
			add_action( 'wp_ajax_catch_fse_dismiss_admin_notice', array( __CLASS__, 'catch_fse_dismiss_admin_notice' ) );
		}

		/**
		 * Handles Ajax request to persist notices dismissal.
		 * Uses check_ajax_referer to verify nonce.
		 */
		public static function catch_fse_dismiss_admin_notice() { 
			$option_name        = isset( $_POST['option_name'] ) ? sanitize_text_field( wp_unslash( $_POST['option_name'] ) ) : '';
			$dismissible_length = isset( $_POST['dismissible_length'] ) ? sanitize_text_field( wp_unslash( $_POST['dismissible_length'] ) ) : 0;

			if ( 'forever' !== $dismissible_length ) {
				// If $dismissible_length is not an integer default to 1.
				$dismissible_length = ( 0 === absint( $dismissible_length ) ) ? 1 : $dismissible_length;
				$dismissible_length = strtotime( absint( $dismissible_length ) . ' days' );
			}

			check_ajax_referer( 'dismissible-notice', 'nonce' );
			self::catch_fse_set_admin_notice_cache( $option_name, $dismissible_length );
			wp_die();
		}

		/**
		 * Is admin notice active?
		 *
		 * @param string $arg data-dismissible content of notice.
		 *
		 * @return bool
		 */
		public static function catch_fse_is_admin_notice_active( $arg ) {
			$array       = explode( '-', $arg );
			$length      = array_pop( $array );
			$option_name = implode( '-', $array );
			$db_record   = self::catch_fse_get_admin_notice_cache( $option_name );

			if ( 'forever' === $db_record ) {
				return false;
			} elseif ( absint( $db_record ) >= time() ) {
				return false;
			} else {
				return true;
			}
		}

		/**
		 * Returns admin notice cached timeout.
		 *
		 * @access public
		 *
		 * @param string|bool $id admin notice name or false.
		 *
		 * @return array|bool The timeout. False if expired.
		 */
		public static function catch_fse_get_admin_notice_cache( $id = false ) {
			if ( ! $id ) {
				return false;
			}
			$cache_key = 'pand-' . md5( $id );
			$timeout   = get_site_option( $cache_key );
			$timeout   = 'forever' === $timeout ? time() + 60 : $timeout;

			if ( empty( $timeout ) || time() > $timeout ) {
				return false;
			}

			return $timeout;
		}

		/**
		 * Sets admin notice timeout in site option.
		 *
		 * @access public
		 *
		 * @param string      $id       Data Identifier.
		 * @param string|bool $timeout  Timeout for admin notice.
		 *
		 * @return bool
		 */
		public static function catch_fse_set_admin_notice_cache( $id, $timeout ) {
			$cache_key = 'pand-' . md5( $id );
			update_site_option( $cache_key, $timeout );

			return true;
		}

	}

}
