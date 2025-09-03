<?php

namespace WCF_ADDONS;

use Elementor\Plugin;
use WP_Query;


defined( 'ABSPATH' ) || die();

class Ajax_Handler {

	public static function init() {
		add_action( 'wp_ajax_live_search', [ __CLASS__, 'handle_live_search' ] );
		add_action( 'wp_ajax_nopriv_live_search', [ __CLASS__, 'handle_live_search' ] );

		// Mailchimp AJAX handlers
		add_action( 'wp_ajax_mailchimp_api', [ __CLASS__, 'mailchimp_lists' ] );
		add_action( 'wp_ajax_nopriv_mailchimp_api', [ __CLASS__, 'mailchimp_lists' ] );

		add_action( 'wp_ajax_wcf_mailchimp_ajax', [ __CLASS__, 'mailchimp_prepare_ajax' ] );
		add_action( 'wp_ajax_nopriv_wcf_mailchimp_ajax', [ __CLASS__, 'mailchimp_prepare_ajax' ] );
		
		add_action( 'wp_ajax_wcf_mailchimp_list_fields', [ __CLASS__, 'wcf_mailchimp_list_fields' ] );
		add_action( 'wp_ajax_nopriv_wcf_mailchimp_list_fields', [ __CLASS__, 'wcf_mailchimp_list_fields' ] );

		add_action('wp_ajax_wcf_load_popup_content', [__CLASS__, 'wcf__popup_content']);
		add_action('wp_ajax_nopriv_wcf_load_popup_content', [__CLASS__, 'wcf__popup_content']);	
	}

	/**
	 * wcf popup content Ajax call
	 */
	public static function wcf__popup_content()
	{
		if(isset($_REQUEST['nonce']) && !empty($_REQUEST['nonce']) ) {
			$nonce = sanitize_text_field(wp_unslash( $_REQUEST['nonce'] ));
		} else {
			wp_send_json_error('Missing nonce');
		}	

		if (! wp_verify_nonce($nonce, 'wcf-addons-frontend')) {
			exit('No naughty business please');
		}

		$post_id    = isset( $_REQUEST['post_id'] ) ? absint( sanitize_text_field( wp_unslash( $_REQUEST['post_id'] ) ) ) : 0;
		$element_id = isset( $_REQUEST['element_id'] ) ? absint( sanitize_text_field( wp_unslash( $_REQUEST['element_id'] ) ) ) : 0;
		$settings   = wcf_addons_get_widget_settings($post_id, $element_id);
		ob_start();

		if ('template' === $settings['popup_content_type']) {
			echo wp_kses_post( Plugin::$instance->frontend->get_builder_content($settings['popup_elementor_templates']) );
		} else {

			$content = $settings['popup_content'];
			$content = shortcode_unautop($content);
			$content = do_shortcode($content);
			$content = wptexturize($content);

			if ($GLOBALS['wp_embed'] instanceof \WP_Embed) {
				$content = $GLOBALS['wp_embed']->autoembed($content);
			}

			echo wp_kses_post( $content );
		}
		$html = ob_get_contents();
		ob_end_clean();

		wp_send_json(
			array(
				'html'      => $html,
				'widget_attr' => 'test attr',
			)
		);

		die();
	}

	public static function handle_live_search() {
		// Check if nonce is set
		if ( ! isset( $_POST['nonce'] ) || empty( $_POST['nonce'] ) ) {
			wp_send_json_error( 'Missing nonce' );
		}

		$nonce = sanitize_text_field( wp_unslash( $_POST['nonce'] ) );

		// Verify nonce
		if ( ! wp_verify_nonce( $nonce, 'wcf-addons-frontend' ) ) {
			exit( 'No naughty business please' );
		}

		$keyword    = isset( $_POST['keyword'] ) ? sanitize_text_field( wp_unslash( $_POST['keyword'] ) ) : '';
		$from_date  = isset( $_POST['from_date'] ) ? sanitize_text_field( wp_unslash( $_POST['from_date'] ) ) : '';
		$to_date    = isset( $_POST['to_date'] ) ? sanitize_text_field( wp_unslash( $_POST['to_date'] ) ) : '';
		$categories = isset( $_POST['category'] ) ? array_map( 'intval', wp_unslash( $_POST['category'] ) ) : [];

		$args = [
			'post_type'      => 'post',
			's'              => $keyword,
			'posts_per_page' => 10,
		];

		// Apply date filter if both dates provided
		if ( ! empty( $from_date ) && ! empty( $to_date ) ) {
			$args['date_query'] = [
				[
					'after'     => $from_date,
					'before'    => $to_date,
					'inclusive' => true,
				],
			];
		}

		//Apply category filter only if category array is not empty
		if ( ! empty( $categories ) && ! in_array( '0', $categories ) ) {
			$args['category__in'] = array_map( 'intval', $categories );
		}

		$query = new WP_Query( $args );

		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();

				$title = get_the_title();
				$thumb = get_the_post_thumbnail_url( get_the_ID(), 'full' );
			
				$date  = get_the_date();
				?>
                <div class="search-item">
					<?php if ( $thumb !='' ) { ?>
                    <div class="thumb AAE-no-image">
                        <img src="<?php echo esc_url( $thumb ); ?>" alt="<?php echo esc_attr( $title ); ?>">
                    </div>
					<?php } ?>
                    <div class="content">
                        <a class="title" href="<?php echo esc_url( get_permalink() ); ?>"><?php echo esc_html( $title ); ?></a>
                        <div class="date"><?php echo esc_html( $date ); ?></div>
                    </div>
                </div>
				<?php
			}
			wp_reset_postdata();
		} else {
			echo '<div class="search-no-result">No results found.</div>';
		}

		wp_die();
	}

	/**
	 * Mailchimp subscriber all list handler Ajax call
	 */
	public static function mailchimp_lists() {
	
		if ( ! isset( $_REQUEST['nonce'] ) || empty( $_REQUEST['nonce'] ) ) {
			wp_send_json_error( 'Missing nonce' );
		}

		// Verify nonce

		$nonce = sanitize_text_field( wp_unslash( $_REQUEST['nonce'] ) );

		if ( ! wp_verify_nonce( $nonce , 'wcf-addons-editor' ) ) {
			exit( 'No naughty business please' );
		}	
		$api = isset($_REQUEST['api']) ? sanitize_text_field( wp_unslash( $_REQUEST['api']) ) : '';		
		update_option('aae_mailchimp_api', $api);
		$response = \WCF_ADDONS\Widgets\Mailchimp\Mailchimp_Api::get_mailchimp_lists( $api );

		wp_send_json( $response );
	}
	
	public static function wcf_mailchimp_list_fields() {
		
		if ( ! isset( $_REQUEST['nonce'] ) || empty( $_REQUEST['nonce'] ) ) {
			wp_send_json_error( 'Missing nonce' );
		}
		// Verify nonce
		$nonce = sanitize_text_field( wp_unslash( $_REQUEST['nonce'] ) );

		if ( ! wp_verify_nonce( $nonce , 'wcf-addons-editor' ) ) {
			exit( 'No naughty business please' );
		}		
		$api = isset($_REQUEST['api']) ? sanitize_text_field( wp_unslash( $_REQUEST['api'] ) ) : '';		
		$list_id = ! empty( $_REQUEST['list_id'] ) ? sanitize_text_field( wp_unslash($_REQUEST['list_id']) ) : '';	

		$response = \WCF_ADDONS\Widgets\Mailchimp\Mailchimp_Api::get_form_fields( $api, $list_id );

		wp_send_json( $response );
	}

	/**
	 * Mailchimp subscriber handler Ajax call
	 */
	public static function mailchimp_prepare_ajax() {

		if ( ! isset( $_REQUEST['nonce'] ) || empty( $_REQUEST['nonce'] ) ) {
			wp_send_json_error( 'Missing nonce' );
		}

		$nonce = sanitize_text_field( wp_unslash( $_REQUEST['nonce'] ) );

		if ( ! wp_verify_nonce( $nonce , 'wcf-addons-frontend' ) ) {
			exit( 'No naughty business please' );
		}
	
		$query = isset( $_POST['subscriber_info'] ) ? wp_kses_post( wp_unslash($_POST['subscriber_info'] ) ) : '';
		$subscriber_info = html_entity_decode($query);
		parse_str($subscriber_info, $subscriber);		
		$response = \WCF_ADDONS\Widgets\Mailchimp\Mailchimp_Api::insert_subscriber_to_mailchimp( $subscriber );

		wp_send_json( $response );
	}

}

Ajax_Handler::init();
