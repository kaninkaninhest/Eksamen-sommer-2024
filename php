function enqueue_custom_dark_mode_script() {
    wp_enqueue_script('custom-dark-mode', get_stylesheet_directory_uri() . '/js/custom-dark-mode.js', array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_dark_mode_script');
