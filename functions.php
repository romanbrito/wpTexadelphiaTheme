<?php
/**
 * Texsite functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Texsite
 */

if (!function_exists('texsite_setup')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which
     * runs before the init hook. The init hook is too late for some features, such
     * as indicating support for post thumbnails.
     */
    function texsite_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on Texsite, use a find and replace
         * to change 'texsite' to the name of your theme in all the template files.
         */
        load_theme_textdomain('texsite', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
         */
        add_theme_support('post-thumbnails');

        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(array(
            'menu-1' => esc_html__('Primary', 'texsite'),
            'footer' => esc_html__('footer menu', 'texsite'),
        ));

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption',
        ));

        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('texsite_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => '',
        )));

        // Add theme support for selective refresh for widgets.
        add_theme_support('customize-selective-refresh-widgets');

        /**
         * Add support for core custom logo.
         *
         * @link https://codex.wordpress.org/Theme_Logo
         */
        add_theme_support('custom-logo', array(
            'height' => 56,
            'width' => 231,
            'flex-width' => true,
            'flex-height' => true,
        ));
    }
endif;
add_action('after_setup_theme', 'texsite_setup');

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function texsite_content_width()
{
    $GLOBALS['content_width'] = apply_filters('texsite_content_width', 640);
}

add_action('after_setup_theme', 'texsite_content_width', 0);

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function texsite_widgets_init()
{
    register_sidebar(array(
        'name' => esc_html__('Sidebar', 'texsite'),
        'id' => 'sidebar-1',
        'description' => esc_html__('Add widgets here.', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
    //header sidebar
    register_sidebar(array(
        'name' => esc_html__('header-widget', 'texsite'),
        'id' => 'header-slider',
        'description' => esc_html__('header slide show', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    //front page sidebar
    register_sidebar(array(
        'name' => esc_html__('frontpage-widget', 'texsite'),
        'id' => 'instagram-slider',
        'description' => esc_html__('instagram slide show', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    //locations sidebar
    register_sidebar(array(
        'name' => esc_html__('locations-widget', 'texsite'),
        'id' => 'locations',
        'description' => esc_html__('locations', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    //catering sidebar
    register_sidebar(array(
        'name' => esc_html__('catering-widget', 'texsite'),
        'id' => 'catering',
        'description' => esc_html__('catering', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    //About sidebar
    register_sidebar(array(
        'name' => esc_html__('about-widget', 'texsite'),
        'id' => 'about',
        'description' => esc_html__('about', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    //Texnation sidebar
    register_sidebar(array(
        'name' => esc_html__('texnation-widget', 'texsite'),
        'id' => 'texnation',
        'description' => esc_html__('texnation', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));

    //News sidebar
    register_sidebar(array(
        'name' => esc_html__('news-widget', 'texsite'),
        'id' => 'news',
        'description' => esc_html__('news', 'texsite'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h2 class="widget-title">',
        'after_title' => '</h2>',
    ));
}

add_action('widgets_init', 'texsite_widgets_init');

// adding async defer to googleMaps-api script ///////////////
add_filter('script_loader_tag', function ($tag, $handle) {

    if ('googleMaps-api' !== $handle)
        return $tag;

    return str_replace(' src', ' async defer src', $tag);
}, 10, 2);


/**
 * Enqueue scripts and styles.
 */
function texsite_scripts()
{
    //	bootstrap css and js
    wp_enqueue_style('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
    wp_enqueue_script('bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js', array('jquery'), '20170804', false);
    //

    wp_enqueue_script('texsite-navigation', get_template_directory_uri() . '/all.js', array('jquery'), '20170804', true);

    // location map scripts
    if (!is_page('we-cater') or !is_page('contact-us') or !is_page('franchising') or !is_page('texnation-loyalty-program') or !is_page('about-us')) :
        wp_enqueue_script('last-jquery', 'https://code.jquery.com/jquery-3.2.1.min.js', array(), null, true);
        wp_enqueue_script('googleMaps', get_template_directory_uri() . '/locations.js', array(), 10202017, true);
    endif; // End locations page
    //

    // instagram
    if (is_front_page()) :
        wp_enqueue_script('texsite-instagram', get_template_directory_uri() . '/front.js', array('jquery'), '20170808', true);
    endif; // End frontpage
    //

    // Enqueue Google Fonts
    wp_enqueue_style('texsite-fonts', 'https://fonts.googleapis.com/css?family=Catamaran|Montserrat');

    // Typekit Font
    wp_enqueue_script('typekit-mrsEaves', 'https://use.typekit.net/mgd0hnb.js');
    wp_enqueue_script('typekit-async', get_template_directory_uri() . '/js/typekit.js');

    // <script>try{Typekit.load({ async: true });}catch(e){}</script>
    // Enqueue Font awesome
    wp_enqueue_style('font-awesome','https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

    wp_enqueue_style('texsite-style', get_stylesheet_uri());

    wp_enqueue_script('texsite-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true);

    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}

add_action('wp_enqueue_scripts', 'texsite_scripts');

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if (defined('JETPACK__VERSION')) {
    require get_template_directory() . '/inc/jetpack.php';
}