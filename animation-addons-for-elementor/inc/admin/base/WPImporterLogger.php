<?php

namespace WCF_ADDONS\Admin\Base;

defined( 'ABSPATH' ) || die();
/**
 * Describes a logger instance
 *
 */
class WPImporterLogger {
	
	public $messages = [];
	/**
	 * System is unusable.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function emergency( $message, array $context = array() ) {
		return $this->log( 'emergency', $message, $context );
	}

	/**
	 * Action must be taken immediately.
	 *
	 * Example: Entire website down, database unavailable, etc. This should
	 * trigger the SMS alerts and wake you up.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function alert( $message, array $context = array() ) {
		return $this->log( 'alert', $message, $context );
	}

	/**
	 * Critical conditions.
	 *
	 * Example: Application component unavailable, unexpected exception.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function critical( $message, array $context = array() ) {
		return $this->log( 'critical', $message, $context );
	}

	/**
	 * Runtime errors that do not require immediate action but should typically
	 * be logged and monitored.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function error( $message, array $context = array()) {
		return $this->log( 'error', $message, $context );
	}

	/**
	 * Exceptional occurrences that are not errors.
	 *
	 * Example: Use of deprecated APIs, poor use of an API, undesirable things
	 * that are not necessarily wrong.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function warning( $message, array $context = array() ) {
		return $this->log( 'warning', $message, $context );
	}

	/**
	 * Normal but significant events.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function notice( $message, array $context = array() ) {
		return $this->log( 'notice', $message, $context );
	}

	/**
	 * Interesting events.
	 *
	 * Example: User logs in, SQL logs.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function info( $message, array $context = array() ) {
		return $this->log( 'info', $message, $context );
	}

	/**
	 * Detailed debug information.
	 *
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function debug( $message, array $context = array() ) {
		return $this->log( 'debug', $message, $context );
	}

	/**
	 * Logs with an arbitrary level.
	 *
	 * @param mixed $level
	 * @param string $message
	 * @param array $context
	 * @return null
	 */
	public function log( $level, $message, array $context = array() ) {
		update_option('aaeaddon_template_import_state', (string) $message);
		$this->messages[] = array(
			'timestamp' => time(),
			'level'     => $level,
			'message'   => $message,
			'context'   => $context,
		);
	}
}
