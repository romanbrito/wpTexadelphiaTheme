<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Texsite
 */

if ( ! is_active_sidebar( 'instagram-slider' ) ) {
	return;
}
?>

<aside id="page-secondary" class="widget-area">
	<?php dynamic_sidebar( 'instagram-slider' ); ?>
</aside><!-- #secondary -->
