<?php

namespace WCF_ADDONS\Widgets;

use Elementor\Controls_Manager;
use Elementor\Utils;
use Elementor\Group_Control_Text_Stroke;
use Elementor\Group_Control_Typography;
use Elementor\Group_Control_Text_Shadow;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;   // Exit if accessed directly.
}

class Search_Query extends Widget_Base {

	public function get_name() {
		return 'wcf--blog--search--query';
	}

	public function get_title() {
		return esc_html__( 'Search Query', 'animation-addons-for-elementor' );
	}

	public function get_icon() {
		return 'wcf eicon-search';
	}

	public function get_categories() {
		return [ 'wcf-search-addon' ];
	}

	public function get_keywords() {
		return [ 'search query', 'query' ];
	}

	protected function register_controls() {
		$this->start_controls_section(
			'section_content',
			[
				'label' => esc_html__( 'Content', 'animation-addons-for-elementor' ),
			]
		);

		$this->add_control(
			'header_size',
			[
				'label'   => esc_html__( 'HTML Tag', 'animation-addons-for-elementor' ),
				'type'    => Controls_Manager::SELECT,
				'options' => [
					'h1'   => 'H1',
					'h2'   => 'H2',
					'h3'   => 'H3',
					'h4'   => 'H4',
					'h5'   => 'H5',
					'h6'   => 'H6',
					'div'  => 'div',
					'span' => 'span',
					'p'    => 'p',
				],
				'default' => 'h2',
			]
		);

		$this->add_control(
			'search_text',
			[
				'label'   => esc_html__( 'Search Text', 'animation-addons-for-elementor' ),
				'type'    => Controls_Manager::TEXT,
				'default' => 'Search Results for:',
				'ai'      => [
					'active' => false,
				],
				'dynamic' => [
					'active' => false,
				],
			]
		);

		$this->add_responsive_control(
			'align',
			[
				'label'     => esc_html__( 'Alignment', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::CHOOSE,
				'options'   => [
					'left'    => [
						'title' => esc_html__( 'Left', 'animation-addons-for-elementor' ),
						'icon'  => 'eicon-text-align-left',
					],
					'center'  => [
						'title' => esc_html__( 'Center', 'animation-addons-for-elementor' ),
						'icon'  => 'eicon-text-align-center',
					],
					'right'   => [
						'title' => esc_html__( 'Right', 'animation-addons-for-elementor' ),
						'icon'  => 'eicon-text-align-right',
					],
					'justify' => [
						'title' => esc_html__( 'Justified', 'animation-addons-for-elementor' ),
						'icon'  => 'eicon-text-align-justify',
					],
				],
				'default'   => '',
				'separator' => 'before',
				'selectors' => [
					'{{WRAPPER}}' => 'text-align: {{VALUE}};',
				],
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_style',
			[
				'label' => esc_html__( 'Style', 'animation-addons-for-elementor' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'title_color',
			[
				'label'     => esc_html__( 'Text Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .default-search-title' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'typography',
				'selector' => '{{WRAPPER}} .default-search-title',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Stroke::get_type(),
			[
				'name'     => 'text_stroke',
				'selector' => '{{WRAPPER}} .default-search-title',
			]
		);

		$this->add_group_control(
			Group_Control_Text_Shadow::get_type(),
			[
				'name'     => 'text_shadow',
				'selector' => '{{WRAPPER}} .default-search-title',
			]
		);

		$this->add_control(
			'blend_mode',
			[
				'label'     => esc_html__( 'Blend Mode', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::SELECT,
				'options'   => [
					''            => esc_html__( 'Normal', 'animation-addons-for-elementor' ),
					'multiply'    => 'Multiply',
					'screen'      => 'Screen',
					'overlay'     => 'Overlay',
					'darken'      => 'Darken',
					'lighten'     => 'Lighten',
					'color-dodge' => 'Color Dodge',
					'saturation'  => 'Saturation',
					'color'       => 'Color',
					'difference'  => 'Difference',
					'exclusion'   => 'Exclusion',
					'hue'         => 'Hue',
					'luminosity'  => 'Luminosity',
				],
				'selectors' => [
					'{{WRAPPER}} .default-search-title' => 'mix-blend-mode: {{VALUE}}',
				],
				'separator' => 'none',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'section_query_style',
			[
				'label' => esc_html__( 'Query Text Style', 'animation-addons-for-elementor' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'title_q_color',
			[
				'label'     => esc_html__( 'Text Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .default-search-title span' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'q_typography',
				'selector' => '{{WRAPPER}} .default-search-title span',
			]
		);

		$this->end_controls_section();

		$this->start_controls_section(
			'style_filter',
			[
				'label' => esc_html__( 'Filter Text', 'animation-addons-for-elementor' ),
				'tab'   => Controls_Manager::TAB_STYLE,
			]
		);

		$this->add_control(
			'filter_text_color',
			[
				'label'     => esc_html__( 'Color', 'animation-addons-for-elementor' ),
				'type'      => Controls_Manager::COLOR,
				'selectors' => [
					'{{WRAPPER}} .post-filter-result' => 'color: {{VALUE}};',
				],
			]
		);

		$this->add_group_control(
			Group_Control_Typography::get_type(),
			[
				'name'     => 'filter_text_typo',
				'selector' => '{{WRAPPER}} .post-filter-result',
			]
		);

		$this->add_responsive_control(
			'filter_margin',
			[
				'label'      => esc_html__( 'Margin', 'animation-addons-for-elementor' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => [ 'px', '%', 'em', 'rem', 'custom' ],
				'selectors'  => [
					'{{WRAPPER}} .post-filter-result.cat' => 'margin: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
				],
			]
		);

		$this->end_controls_section();
	}

	protected function render() {
		$settings = $this->get_settings_for_display();

		$from_date  = sanitize_text_field( isset( $_GET['from_date'] ) ? wp_unslash( $_GET['from_date'] ) : '');
		$to_date    = sanitize_text_field( isset( $_GET['to_date'] ) ? wp_unslash($_GET['to_date']) : '' );
		$categories = isset( $_GET['category'] ) && is_array( $_GET['category'] ) ?  array_map( 'sanitize_text_field', wp_unslash( $_GET['category'] ) ) : [];
		$cat_filter = [];

		foreach ( $categories as $cat_id ) {
			$category = get_category( $cat_id );

			if ( ! is_wp_error( $category ) && isset( $category->name ) ) {
				$cat_filter[] = $category->name;
			}
		}

		if ( $from_date && $to_date ) {
			$date_filter = '<div class="post-filter-result">Date: From ' . $from_date . ' to ' . $to_date . '</div>';
		} elseif ( $from_date ) {
			$date_filter = '<div class="post-filter-result">Date: From ' . $from_date . '</div>';
		} elseif ( $to_date ) {
			$date_filter = '<div class="post-filter-result">Date: To ' . $to_date . '</div>';
		} else {
			$date_filter = '';
		}

		$cat_list = implode( ', ', $cat_filter );
		if ( ! empty( $cat_list ) ) {
			$cat_list = '<div class="post-filter-result cat"> Category: ' . $cat_list . '</div>';
		}

		if ( \Elementor\Plugin::$instance->editor->is_edit_mode() || \Elementor\Plugin::$instance->preview->is_preview_mode() || ( isset( $_GET['preview_id'] ) && isset( $_GET['preview_nonce'] ) ) ) {
			$search_found_title = $settings['search_text'] . '<span> Hello World </span>';
		} else {
			$search_found_title = $settings['search_text'] . '<span>' . get_search_query() . '</span>';
		}
		$this->add_render_attribute( 'title', 'class', 'default-search-title' );

		$title_html = sprintf( '<%1$s %2$s>%3$s%4$s%5$s</%1$s>', Utils::validate_html_tag( $settings['header_size'] ), $this->get_render_attribute_string( 'title' ), $search_found_title, $cat_list, $date_filter );

		echo wp_kses_post( $title_html );
	}
}
