<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Texsite
 */

if ( ! is_active_sidebar( 'header-slider' ) ) {
	return;
}
?>

<aside id="header-secondary" class="widget-area">
	<?php dynamic_sidebar( 'header-slider' ); ?>
</aside><!-- #secondary -->
