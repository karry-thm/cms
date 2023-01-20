<?php
/*
Plugin Name: Demo for THM: CMS
Plugin URI: http://www.thm.de/mni/
Description: Demo for THM: CMS
Author: Karry, Martin
Version: 1.0.0
Author URI: http://www.thm.de/mni/
*/

function titleToHelloWorld($title) {
	return "Hello World (".$title.")";
};

add_filter('the_title', 'titleToHelloWorld');