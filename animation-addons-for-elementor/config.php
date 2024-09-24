<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$config = [
	'widgets'    => [
		'general-elements' => [
			'title'    => esc_html__( 'General Widgets', 'animation-addons-for-elementor' ),
			'elements' => [
				'image-box'         => [
					'label'        => esc_html__( 'Image Box', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-image-box/',
					'youtube_url'  => '',
				],
				'image-box-slider'  => [
					'label'        => esc_html__( 'Image Box Slider', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-image-box-slider/',
					'youtube_url'  => '',
				],
				'typewriter'        => [
					'label'        => esc_html__( 'Typewriter', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-typewriter/',
					'youtube_url'  => '',
				],
				'animated-title'    => [
					'label'        => esc_html__( 'Animated Title', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-animated-title/',
					'youtube_url'  => '',
				],
				'animated-text'     => [
					'label'        => esc_html__( 'Animated Text', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-animated-text/',
					'youtube_url'  => '',
				],
				'social-icons'      => [
					'label'        => esc_html__( 'Social Icons', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-social-icons/',
					'youtube_url'  => '',
				],
				'image'             => [
					'label'        => esc_html__( 'Image', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-image/',
					'youtube_url'  => '',
				],
				'image-gallery'     => [
					'label'        => esc_html__( 'Image Gallery', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-image-gallery/',
					'youtube_url'  => '',
				],
				'text-hover-image'  => [
					'label'        => esc_html__( 'Text Hover Image', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-text-hover-image/',
					'youtube_url'  => '',
				],
				'brand-slider'      => [
					'label'        => esc_html__( 'Brand Slider', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-brand-slider/',
					'youtube_url'  => '',
				],
				'counter'           => [
					'label'        => esc_html__( 'Counter', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-counter/',
					'youtube_url'  => '',
				],
				'icon-box'          => [
					'label'        => esc_html__( 'Icon Box', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-icon-box/',
					'youtube_url'  => '',
				],
				'testimonial'       => [
					'label'        => esc_html__( 'Testimonial', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-testimonial/',
					'youtube_url'  => '',
				],
				'testimonial2'      => [
					'label'        => esc_html__( 'Testimonial 2', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-testimonial-2/',
					'youtube_url'  => '',
				],
				'testimonial3'      => [
					'label'        => esc_html__( 'Testimonial 3', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-testimonial-3/',
					'youtube_url'  => '',
				],
				'button'            => [
					'label'        => esc_html__( 'Button', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-button/',
					'youtube_url'  => '',
				],
				'image-compare'     => [
					'label'        => esc_html__( 'Image Compare', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-image-compare/',
					'youtube_url'  => '',
				],
				'progressbar'       => [
					'label'        => esc_html__( 'Progressbar', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-progressbar/',
					'youtube_url'  => '',
				],
				'team'              => [
					'label'        => esc_html__( 'Team', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-team/',
					'youtube_url'  => '',
				],
				'one-page-nav'      => [
					'label'        => esc_html__( 'One Page Nav', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-one-page-nav/',
					'youtube_url'  => '',
				],
				'timeline'          => [
					'label'        => esc_html__( 'Timeline', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-timeline/',
					'youtube_url'  => '',
				],
				'tabs'              => [
					'label'        => esc_html__( 'Tabs', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-tabs/',
					'youtube_url'  => '',
				],
				'services-tab'      => [
					'label'        => esc_html__( 'Services Tabs', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-services-tab/',
					'youtube_url'  => '',
				],
				'floating-elements' => [
					'label'        => esc_html__( 'Floating Elements', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-floating-elements/',
					'youtube_url'  => '',
				],
				'event-slider'      => [
					'label'        => esc_html__( 'Event Slider', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-event-slider/',
					'youtube_url'  => '',
				],
				'content-slider'    => [
					'label'        => esc_html__( 'Content Slider', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-content-slider/',
					'youtube_url'  => '',
				],
				'countdown'         => [
					'label'        => esc_html__( 'Countdown', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-countdown/',
					'youtube_url'  => '',
				],
				'animated-heading'  => [
					'label'       => esc_html__( 'Animated Heading', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-animated-heading/',
					'youtube_url'  => '',
				],
			]
		],
		'hf-elements'      => [
			'title'    => esc_html__( 'Header/Footer Widgets', 'animation-addons-for-elementor' ),
			'elements' => [
				'site-logo' => [
					'label'        => esc_html__( 'Site Logo', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'nav-menu'  => [
					'label'        => esc_html__( 'Nav Menu', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
			]
		],
		'dynamic-elements' => [
			'title'    => esc_html__( 'Dynamic Widgets', 'animation-addons-for-elementor' ),
			'elements' => [
				'post-title'         => [
					'label'        => esc_html__( 'Post Title', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'post-feature-image' => [
					'label'        => esc_html__( 'Post Feature Image', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'post-excerpt'       => [
					'label'        => esc_html__( 'Post Excerpt', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'post-content'       => [
					'label'        => esc_html__( 'Post Content', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'post-comment'       => [
					'label'        => esc_html__( 'Post Comment', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'post-meta-info'     => [
					'label'        => esc_html__( 'Post Meta Info', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'post-paginate'      => [
					'label'        => esc_html__( 'Post Paginate', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'post-social-share'  => [
					'label'        => esc_html__( 'Post Social Share', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'posts'              => [
					'label'        => esc_html__( 'Posts', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-posts/',
					'youtube_url'  => '',
				],
				'archive-title'      => [
					'label'        => esc_html__( 'Archive Title', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'portfolio'          => [
					'label'        => esc_html__( 'Portfolio', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-portfolio/',
					'youtube_url'  => '',
				],
				'search-form'        => [
					'label'        => esc_html__( 'Search Form', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'search-query'       => [
					'label'        => esc_html__( 'Search Query', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
				'search-no-result'   => [
					'label'        => esc_html__( 'Search No Result', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => '',
					'youtube_url'  => '',
				],
			]
		],
		'form-elements'    => [
			'title'    => esc_html__( 'Form Widgets', 'animation-addons-for-elementor' ),
			'elements' => [
				'contact-form-7' => [
					'label'        => esc_html__( 'Contact Form 7', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-contact-form-7/',
					'youtube_url'  => '',
				],
				'mailchimp'      => [
					'label'        => esc_html__( 'Mailchimp', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-mailchimp/',
					'youtube_url'  => '',
				],
			]
		],
		'video-elements'   => [
			'title'    => esc_html__( 'Video Widgets', 'animation-addons-for-elementor' ),
			'elements' => [
				'video-popup'      => [
					'label'        => esc_html__( 'Video Popup', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-video-popup/',
					'youtube_url'  => '',
				],
				'video-box'        => [
					'label'        => esc_html__( 'Video Box', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-video-box/',
					'youtube_url'  => '',
				],
				'video-box-slider' => [
					'label'        => esc_html__( 'Video Box Slider', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-video-box-slider/',
					'youtube_url'  => '',
				],
				'video-mask'       => [
					'label'        => esc_html__( 'Video Mask', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/widgets/wcf-widgets/wcf-video-mask/',
					'youtube_url'  => '',
				],
			]
		],
	],
	'extensions' => [
		'general-extensions' => [
			'title'    => esc_html__( 'General Extension', 'animation-addons-for-elementor' ),
			'elements' => [
				'custom-css' => [
					'label'        => esc_html__( 'Custom CSS', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => false,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/advanced-settings/advanced-settings/wcf-custom-css/',
					'youtube_url'  => '',
				],
				'popup'      => [
					'label'        => esc_html__( 'Popup', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/advanced-settings/advanced-settings/wcf-popup/',
					'youtube_url'  => '',
				],
			]
		],
		'gsap-extensions'    => [
			'title'    => esc_html__( 'Gsap Extension', 'animation-addons-for-elementor' ),
			'elements' => [
				'animation-effects'       => [
					'label'        => esc_html__( 'Animation', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/advanced-settings/advanced-settings/wcf-animation/',
					'youtube_url'  => '',
				],
				'pin-element'             => [
					'label'        => esc_html__( 'Pin Element', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/advanced-settings/advanced-settings/pin-element/',
					'youtube_url'  => '',
				],
				'text-animation-effects'  => [
					'label'        => esc_html__( 'Text Animation', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/animation/animation/text-animation/',
					'youtube_url'  => '',
				],
				'image-animation-effects' => [
					'label'        => esc_html__( 'Image Animation', 'animation-addons-for-elementor' ),
					'is_pro'       => false,
					'is_extension' => true,
					'is_upcoming'  => false,
					'demo_url'     => '',
					'doc_url'      => 'https://support.crowdytheme.com/docs/animation/animation/image-animation/',
					'youtube_url'  => '',
				],
			]
		],
	],
];

$GLOBALS['wcf_addons_config'] = $config;
