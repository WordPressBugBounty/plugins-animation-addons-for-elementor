<?php
/**
 * Hook Handlers
 *
 * @package AnimationAddons
 * @phpcs:disable WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedFunctionFound
 */

if (! defined('ABSPATH')) {
    exit;
} // Exit if accessed directly

use Elementor\Plugin;

if (function_exists('wcf_set_postview')) {
   add_action('wp', 'wcf_set_postview');
}

function aae_handle_aae_post_shares_count()
{
    $nonce = isset($_POST['nonce']) ? sanitize_text_field(wp_unslash($_POST['nonce'])) : '';

    if (! $nonce || ! wp_verify_nonce($nonce, 'wcf-addons-frontend')) {
        wp_send_json_error(['message' => esc_html__('Security check failed.', 'animation-addons-for-elementor')], 403);
    }

    if (isset($_POST['post_id'], $_POST['social'])) {
        $post_id = absint(sanitize_text_field(wp_unslash($_POST['post_id'])));
        $social  = sanitize_key(wp_unslash($_POST['social']));

        if (! $post_id || empty($social)) {
            wp_send_json_error(['message' => esc_html__('Invalid post ID or network.', 'animation-addons-for-elementor')]);
        }

        $target_post = get_post($post_id);
        if (! $target_post || 'publish' !== $target_post->post_status) {
            wp_send_json_error(['message' => esc_html__('Invalid post.', 'animation-addons-for-elementor')]);
        }

        // Retrieve current share count, increment it, or set it if it doesn't exist
        $current_shares = get_post_meta($post_id, 'aae_post_shares', true);

        if (! is_array($current_shares)) {
            $current_shares = [];
        }
        if (isset($current_shares[$social])) {
            $current_shares[$social]++;
        } else {
            $current_shares[$social] = 1;
        }

        $shares_count = array_sum(array_values($current_shares));

        foreach ($current_shares as $k => $single) {
            update_post_meta($post_id, 'aae_post_shares_' . sanitize_key($k), absint($single));
        }

        update_post_meta($post_id, 'aae_post_shares_count', $shares_count);
        update_post_meta($post_id, 'aae_post_shares', $current_shares);

        // Return updated share count as a response
        wp_send_json_success(array(
            'share_count' => $shares_count,
            'post_shares' => $current_shares,
        ));

    } else {
        wp_send_json_error(['message' => esc_html__('Invalid request parameters.', 'animation-addons-for-elementor')]);
    }
}
add_action('wp_ajax_aae_post_shares', 'aae_handle_aae_post_shares_count'); // For logged-in users
add_action('wp_ajax_nopriv_aae_post_shares', 'aae_handle_aae_post_shares_count'); // For non-logged-in users

function aaeaddon_disable_comments_for_custom_post_type()
{
    remove_post_type_support('wcf-addons-template', 'comments');
}
add_action('init', 'aaeaddon_disable_comments_for_custom_post_type', 100);

// Post reaction ajax handler
if (!function_exists('aaeaddon_post_lite_reaction_ajax')) {
    function aaeaddon_post_lite_reaction_ajax()
    {
        $nonce = isset($_REQUEST['nonce']) ? sanitize_text_field( wp_unslash($_REQUEST['nonce']) ) : '';

        if ( ! $nonce || ! wp_verify_nonce( $nonce, 'wcf-addons-frontend' ) ) {
            if ( defined('DOING_AJAX') && DOING_AJAX ) {
                wp_send_json_error(['message' => esc_html__('Security check failed.', 'animation-addons-for-elementor')], 403);
            }
            wp_die( esc_html__('Invalid request.', 'animation-addons-for-elementor'), 403 );
        }

        $post_id  = isset($_POST['post_id']) ? absint(sanitize_text_field( wp_unslash( $_POST['post_id'] ) )) : 0;
        $reaction = isset($_POST['reaction']) ? sanitize_key(wp_unslash( $_POST['reaction'] )) : '';

        if (! $post_id || empty($reaction)) {
            wp_send_json_error(['message' => esc_html__('Invalid data.', 'animation-addons-for-elementor')]);
        }

        $target_post = get_post($post_id);
        if (! $target_post || 'publish' !== $target_post->post_status) {
            wp_send_json_error(['message' => esc_html__('Invalid post.', 'animation-addons-for-elementor')]);
        }

        $reactions = get_post_meta($post_id, 'aaeaddon_post_reactions', true);
        if (! is_array($reactions)) {
            $reactions = [];
        }

        if (isset($reactions[$reaction])) {
            $reactions[$reaction]++;
        } else {
            $reactions[$reaction] = 1;
        }

        $reactions_count = array_sum(array_values($reactions));

        foreach ($reactions as $k => $single) {
            update_post_meta( $post_id, 'aaeaddon_post_reactions_' . sanitize_key($k), absint($single));
        }
        update_post_meta($post_id, 'aaeaddon_post_reactions', $reactions);
        update_post_meta($post_id, 'aaeaddon_post_total_reactions', $reactions_count);
        wp_send_json_success($reactions);
    }
    add_action('wp_ajax_nopriv_aaeaddon_post_reaction', 'aaeaddon_post_lite_reaction_ajax');
    add_action('wp_ajax_aaeaddon_post_reaction', 'aaeaddon_post_lite_reaction_ajax');
}
