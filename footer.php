<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Texsite
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">

        <nav id="footer-navegation" class="navbar">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'footer',
                'menu_id' => 'footer-menu',
                // bootstrap classes
                  // div
                'container_class' => 'collapse navbar-collapse',
                'container_id' => 'footer-nav',
                  // <ul> class
                'menu_class' => 'nav navbar-nav footer-nav',
            ));
            ?>
        </nav>


	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
