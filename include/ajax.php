<?php
defined('ABSPATH') or die('YOU ARE NOT ADMIN');

if(wp_verify_nonce($_POST['inc_get_token'],'platform_aj')){
      
    $arg=array(
'post_type' => 'video',
'post_status' => 'publish',
'posts_per_page' => 12
);
if(isset($_POST['paged']) && is_numeric($_POST['paged'])){
  $arg['paged']=$_POST['paged'];
}
if(isset($_POST['s'])){
  $arg['sr_title']=$_POST['s'];
}else if(isset($_POST['method'])){
  if($_POST['method']=='like'){
    $arg['meta_key']='like_count';
    $arg['orderby']='meta_value_num';
  }elseif($_POST['method']=='view'){
    $arg['meta_key']='views_count';
    $arg['orderby']='meta_value_num';
  }elseif($_POST['method']=='random' && is_numeric($_POST['id'])){
    
    $arg['orderby']="rand(".$_POST['id'].")";
    
  }
  $arg['sr_title']=$_POST['s'];
}
    $query = new WP_Query($arg);
    
  wp_send_json_success(array(array_map(function($v){
    return array($v->post_title,get_permalink($v),get_the_post_thumbnail_url($v, 'posttum'));
        },$query->posts), $query->max_num_pages));

  }else{
    wp_send_json_error();
  }
  