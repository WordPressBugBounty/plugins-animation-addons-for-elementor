<?php

namespace WCF_ADDONS\Admin\Base;

defined( 'ABSPATH' ) || die();

class WXRImportInfo {
	public $home;
	public $siteurl;
	public $title;
	public $users = array();
	public $post_count = 0;
	public $media_count = 0;
	public $comment_count = 0;
	public $term_count = 0;
	public $generator = '';
	public $version;
}
