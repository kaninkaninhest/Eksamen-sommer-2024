function enqueue_dark_mode() {
    wp_enqueue_script('dark-mode', get_stylesheet_directory_uri(), array('jquery'), null, true);
}
add_action('wp_enqueue_scripts', 'enqueue_dark_mode');
