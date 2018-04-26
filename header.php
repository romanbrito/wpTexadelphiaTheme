<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Texsite
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">

<!--    meta description -->
    <meta name="description" content="Home of the original texas cheesesteak, with locations in Texas and Oklahoma offering catering and delicious sandwiches with a texas twist"/>

<!--    meta keywords-->
    <meta name="keywords" content="Catering, Office Party, Events, Cheesesteaks, Sandwich, Texas Destination, Oklahoma Destination" />

    <?php wp_head(); ?>

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-64930122-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-64930122-2');
    </script>

</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'texsite'); ?></a>

    <header id="masthead" class="site-header">
        <nav id="site-navigation" class="navbar nav-pad">

            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse"
                        data-target="#main-nav">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <?php
                the_custom_logo();


                $description = get_bloginfo('description', 'display');
                if ($description || is_customize_preview()) : ?>
                    <p class="site-description"><?php echo $description; /* WPCS: xss ok. */ ?></p>
                    <?php
                endif; ?>
            </div><!-- .site-branding -->

            <?php
            wp_nav_menu(array(
                'theme_location' => 'menu-1',
                'menu_id' => 'primary-menu',
                // bootstrap class
                'menu_class' => 'nav navbar-nav navbar-right',
                'container_class' => 'collapse navbar-collapse',
                'container_id' => 'main-nav',
            ));
            ?>
        </nav><!-- #site-navigation -->

        <?php if ( is_front_page() ) : ?>
            <figure class="header-image">
                <!--header slider-->
                <!--will call sidebar-header if not sidebar-->
                <?php get_sidebar('header'); ?>
            </figure>

        <?php endif; // End header front image ?>

    </header><!-- #masthead -->

    <div id="content" class="site-content">
