<?php
get_header();?>


<script>
    console.time();
(function(t,map,c,style,xhr,group){
    
var  posts= <?php 
echo json_encode(array_map(function($v){
    return array($v->post_title,get_permalink($v),get_the_post_thumbnail_url($v, 'posttum'),$v->post_date,get_post_meta($v->ID, "like_count", true),get_post_meta($v->ID, "dis_count", true),get_post_meta($v->ID, "views_count", true));
}, $posts));

?>

,nes=<?php

$query = new WP_Query(array(
    'post_type' => 'video',
    'post_status' => 'publish',
    'posts_per_page' => 10
));
echo json_encode(array_map(function($v){

    return array($v->post_title,get_permalink($v),get_the_post_thumbnail_url($v, 'mintum'),wp_specialchars_decode($v->post_content));
    
},$query->posts));
 ?>;


var z=t(document.body,[kid_dom[6](),kid_dom[7],{d:[

    {d:0,c:[59,'player'],b:0,
        l:function(){
            if(nes[0][3]){
                var pl = JSON.parse(nes[0][3].replace(/<!--(.*?)-->/g, ""));
            pl.sources[0].files.length>0?ninjaGo(pl):0;
            }
            
        }},

    {d:[{d:0,
        l:function(z){
        
        map(nes,function(f){

    t(z,[{d:[{a:[{img:0,alt:f[0],src:f[2]}],href:f[1],c:64},

    {a:f[0],href:f[1],c:65}],c:63,e:{click:function(e){
        e.preventDefault();
        group[0].i(' ')
        f[3]?ninjaGo(JSON.parse(f[3].replace(/<!--(.*?)-->/g, ""))):0;
    }}}])

    })

    },c:95}],c:[28,60]}
],c:58},kid_dom[10](1),
{d:0,c:1,b:2},
<?php 
$query = new WP_Query(array(
    'post_type' => 'video',
    'post_status' => 'publish',
    'posts_per_page' => 6,
    'meta_key'=> 'like_count',
    'orderby'=> 'meta_value_num'
));
if($query->max_num_pages>1):?>
kid_dom[11]('like'),
<?php 

    endif;
    ?>
kid_dom[10](),
{d:0,c:1,b:1}
<?php if($wp_query->max_num_pages>1):?>
    ,
kid_dom[11]('view')
    <?php 
    endif;
    ?>]).z
    
    
kid_post(group[2],<?php 



echo json_encode(array_map(function($v){
    return array($v->post_title,get_permalink($v),get_the_post_thumbnail_url($v, 'posttum'),$v->post_date,get_post_meta($v->ID, "like_count", true),get_post_meta($v->ID, "dis_count", true),get_post_meta($v->ID, "views_count", true));
}, $query->posts));

?>,2)

 kid_post(group[1],posts,2)

 
})(kid_t,kid_map,kid_c,kid_style,kid_xhr,kid_group)
console.timeEnd();
</script>
<?php 
get_footer();
 ?>
    