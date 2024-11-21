<?php
/*
Plugin Name: Custom Steps
Description: Plugin que muestra un archivo HTML con estilos y scripts personalizados, e incluye un shortcode.
Version: 1.0
Author: Jhorman Nieto P
*/

// Evitar acceso directo
if (!defined('ABSPATH')) {
    exit;
}

// Función para cargar CSS y JS
function custom_steps_enqueue_assets() {
    // Cargar el archivo CSS
    wp_enqueue_style('custom-steps-styles', plugin_dir_url(__FILE__) . 'styles.css');
    // Cargar el archivo JS
    wp_enqueue_script('custom-steps-scripts', plugin_dir_url(__FILE__) . 'script.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'custom_steps_enqueue_assets');

// Función para mostrar el contenido del archivo HTML
function custom_steps_render_html() {
    $file_path = plugin_dir_path(__FILE__) . 'index.html';
    if (file_exists($file_path)) {
        // Lee el contenido del archivo HTML
        $content = file_get_contents($file_path);
        // Procesa cualquier shortcode que haya dentro del archivo
        return do_shortcode($content);
    } else {
        return '<p>No se encontró el archivo HTML.</p>';
    }
}

// Shortcode para insertar el HTML en páginas o entradas
add_shortcode('custom_steps_html', 'custom_steps_render_html');