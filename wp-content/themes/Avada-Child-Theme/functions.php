<?php
$version = '0.81';
function theme_enqueue_styles() {
    global $version;
    $parent_style = 'avada-parent-style';

    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
// wp_enqueue_style( 'avada-child-style', // get_stylesheet_directory_uri() . '/style.css', // array( $parent_style ), // wp_get_theme()->get('Version') // ); //
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

function my_theme_enqueue_scripts() {
    global $version;
    
    /* JS VARIUOS */
    wp_enqueue_script('js_functions', get_stylesheet_directory_uri() . '/js/jsFunctions.js', array(), $version, true);


}
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_scripts' );

function sapigo_widgets_init() {
    register_sidebar( array(
		'name' =>esc_html__( 'blog carousel', 'sapigo' ),
		'id' => 'blogcarousel',
		'description' => 'Bloggkarusell',
		'before_widget' => '<div id="%1$s" class="widget %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<h3 class="widget-title">',
		'after_title' => '</h3>',
	) );
}
add_action( 'widgets_init', 'sapigo_widgets_init' );

function avada_lang_setup() { 
    $lang = get_stylesheet_directory() . '/languages'; 
    load_child_theme_textdomain( 'Avada', $lang ); 
} 
add_action( 'after_setup_theme', 'avada_lang_setup' );