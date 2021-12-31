<?php

  include_once "include/admin_stp.php";
  

  add_action('wp_ajax_nopriv_get_inc_data', 'my_ajax_query');
  add_action('wp_ajax_get_inc_data', 'my_ajax_query');
  
  function my_ajax_query() {
    include_once "include/ajax.php";
  }
  
  
  function add_theme_scripts() {
    $dr=get_template_directory_uri();
    wp_enqueue_style( 'style', $dr.'/style.css');
    wp_enqueue_script( 'ang-engine',$dr.'/tool/kid_script.js');
    wp_enqueue_script( 'st-player', $dr.'/tool/player.js');
  }
  add_action('wp_enqueue_scripts', 'add_theme_scripts');

  setcookie("inc_get_token", wp_create_nonce('platform_aj'));

  add_action('publish_video',function($id){
    if (!metadata_exists( 'post',$id, 'like_count' ) ) {
      
      add_post_meta($id,'like_count',0);
  }
  if (!metadata_exists( 'post', $id, 'views_count' ) ) {
    add_post_meta($id,'views_count',0);
}
  });
  

     
  add_action( 'pre_get_posts',function ($query) {

    
if($query->is_home() || $query->is_archive()){
    $query->set('post_type','video');
    $query->set('posts_per_page', 12);
    
    if(isset($_GET['page']) && is_numeric($_GET['page']) ){
      $query->set('paged', $_GET['page']);
    }
    
if($query->is_home()){
  $query->set('meta_key', 'views_count');
  $query->set('orderby','meta_value_num');
}


    if($s=$query->get('s')){
      
      $query->set('sr_title', $s);
      
       unset($query->query['s']);
       unset($query->query_vars['s']);
       
    }
   
} 



  return $query;



});



add_action('posts_where',function ($sql){  
  global $wpdb,$wp_query;
  
  if($startswith = $wp_query->get('sr_title')){
    $sql .= $wpdb->prepare(" AND $wpdb->posts.post_title LIKE %s ",(isset($_GET['char'])?"":"%").$startswith.'%' );
    }
  return $sql;
});



