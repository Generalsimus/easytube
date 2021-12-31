<?php
get_header();?>
<body>

<script>
(function(t,map,c,style,xhr,group){

    t(document.body,[kid_dom[6](),kid_dom[7],{d:0,l:function(z){
        kid_post(z,<?php 
echo have_posts()?json_encode(array_map(function($v){
    return array($v->post_title,get_permalink($v),get_the_post_thumbnail_url($v, 'posttum'),$v->post_date,get_post_meta($v->ID, "like_count", true),get_post_meta($v->ID, "dis_count", true),get_post_meta($v->ID, "views_count", true));
}, $posts)):'[]';

?>,2)

    },c:1},{d:[kid_dom[12](<?php echo $wp_query->max_num_pages;?>,<?php echo $wp_query->paged;?>)]}])


})(kid_t,kid_map,kid_c,kid_style,kid_xhr,kid_group)

</script>
</body>
</html>
<?php 
 wp_footer();
 ?>