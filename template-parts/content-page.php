<?php
/**
 * Template part for displaying page content in page.php
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package Texsite
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php
        // do not show title anywhere (on locations and menu page, About us and Franchising)
        // if (!is_front_page() and !is_page('locations-menu') and !is_page('about-us') and !is_page('we-cater') and !is_page('franchising') and !is_page('texnation-loyalty-program') and !is_page('contact-us')):
        // the_title('<h1 class="entry-title">', '</h1>');
        // endif;

        ?>
    </header><!-- .entry-header -->

    <div class="entry-content">
        <?php
        the_content();

        wp_link_pages(array(
            'before' => '<div class="page-links">' . esc_html__('Pages:', 'texsite'),
            'after' => '</div>',
        ));
        ?>
    </div><!-- .entry-content -->

    <!-- custom sidebars-->
    <!-- display only in locations-menu-->
    <?php if (is_page('locations-menu')) : ?>
        <?php get_sidebar('locations'); ?>
    <?php endif; // End locations page ?>

    <!-- display only in catering-->
    <?php if (is_page('we-cater')) : ?>
        <?php get_sidebar('catering'); ?>
    <?php endif; // End locations page ?>

    <?php if (is_front_page()) : ?>
        <figure class="instagram-gallery">
            <?php get_sidebar('frontpage'); ?>
        </figure>
    <?php endif; // End instagram front image ?>
    <!-- -->

    <!-- display only in about-->
    <?php if (is_page('about-us')) : ?>
        <?php get_sidebar('about'); ?>
    <?php endif; // End about page ?>
    <!-- -->

    <!-- display only in texnation-->
    <?php if (is_page('texnation-loyalty-program')) : ?>
        <?php get_sidebar('texnation'); ?>
    <?php endif; // End about page ?>
    <!-- -->

    <!-- display only in news-->
    <?php if (is_page('news')) : ?>
        <?php get_sidebar('news'); ?>
    <?php endif; // End about page ?>
    <!-- -->

    <?php if (get_edit_post_link()) : ?>
        <footer class="entry-footer">
            <?php
            edit_post_link(
                sprintf(
                    wp_kses(
                    /* translators: %s: Name of current post. Only visible to screen readers */
                        __('Edit <span class="screen-reader-text">%s</span>', 'texsite'),
                        array(
                            'span' => array(
                                'class' => array(),
                            ),
                        )
                    ),
                    get_the_title()
                ),
                '<span class="edit-link">',
                '</span>'
            );
            ?>
        </footer><!-- .entry-footer -->
    <?php endif; ?>
</article><!-- #post-<?php the_ID(); ?> -->
