<?php


function add_count_meta($ID,$m,$in) {
    $current = get_post_meta($ID, $m, true);
       if(!isset($current) OR empty($current) OR $current<0) {
          $current = 0;
       }
  
       $in? $current--:$current++;
       
       update_post_meta($ID,$m, $current);
       return $current;
  }
  if(isset($_POST['method'],$_POST['v'])){
     
    
    if($_POST['method']==1 || $_POST['method']==2){
        add_count_meta($_POST['post'],$_POST['v']=='l'?'like_count':'dis_count',0);
    }
    if($_POST['method']==2){
        add_count_meta($_POST['post'],$_POST['v']=='d'?'like_count':'dis_count',1);
    }
    if($_POST['method']==0){
        add_count_meta($_POST['post'],$_POST['v']=='l'?'like_count':'dis_count',1);
    }
  
  print_r(json_encode($_POST));
    exit;
  }
  

    










get_header();


?>

<script>

(function (t, map, c, style, xhr, group) {





t(document.body, [kid_dom[6](),{
    d: <?php
    if (post_password_required()): ?> kid_dom[4] <?php
    else : ?> [{
        d: [{
                    d: [{d:"",
                     c:['player',62],
                    //  b:5,
                    b:[2,{
                        post: <?php
                        // add_post_meta($post->ID,'view_count',400);
                        
                        echo wp_specialchars_decode(json_encode(array_filter((array) $post, function ($key) {
                            return in_array($key, array('ID','post_title', 'post_date', 'post_content', 'comment_count'));
                        }, ARRAY_FILTER_USE_KEY))); ?> ,

                        post_author : ['<?php echo the_author_meta( 'display_name' ,$post->post_author);?>', 
                        '<?php echo get_avatar_data($post->post_author)['url']?>'
                        ],post_meta:[<?php echo add_count_meta($post->ID, "views_count",0).','.get_post_meta($post->ID, "like_count", true).','.get_post_meta($post->ID, "dis_count", true)?>]
                    }]},
                    {d:0,b:3,e:{
                        dblclick :function(){

this.m([['style','']]);
console.log(group)
group[4].classList.remove('active');

                            } },c:61}
                ],
                    c:16
                },
                {
                    d: [{
                        d: 'New Videos',
                        c: 18
                    }, {
                        d: [{d:0,
                        l: function (z) {
                            
                            

map(<?php

$query = new WP_Query(array(
    'post_type' => 'video',
    'post_status' => 'publish',
    // 'orderby'        => 'rand',
    'posts_per_page' => 10
));

echo json_encode(array_map(function($v){
    return array($v->post_title,get_permalink($v),get_the_post_thumbnail_url($v, 'mintum'),$v->post_date,get_post_meta($v->ID, "like_count", true),get_post_meta($v->ID, "dis_count", true),get_post_meta($v->ID, "views_count", true));
}, $query->posts));

?>, function (v) {

                                t(z, kid_dom[1](v))
                            })
                            
                            
                            
                            // try {
                                ninjaGo(JSON.parse(group.post.post_content.replace(/<!--(.*?)-->/g, "")))
                                // <!-- /wp:(.*?) -->
                            // } catch (e) {
                                
                            //     console.log(group[2][0].i([{d:'video empty',c:66}]))
                            // }
                            

t(group[2][0], kid_dom[2]());



                        },c:95}],
                        c: [26,28]
                    }],
                    b: 1,
                    

                    c: [17,53]
                }
            ]

            ,
        c: 15
    }, {
        d: [{
                d: kid_dom[3](group),
                l:function(z){
                    <?php if(comments_open()):
                        comments_template();
                         else:?>z.i([{p:'Comments Closed',c:48}])<?php endif;?>
                },
                c: 16
            }

            , {
                d: [{
                    d: 'Popular Videos',
                    c: [18, 25]
                },{
                    d: 0,
                    l: function (z) {
                    
                    
                    kid_post(z, <?php
                    $query = new WP_Query(array(
                            'post_type' => 'video',
                            'post_status' => 'publish',
                            'posts_per_page' => 10,                            
                            'orderby' => "rand($post->ID)",
                        ));
                        echo json_encode(array_map(function($v){
                            return array($v->post_title,get_permalink($v),get_the_post_thumbnail_url($v, 'posttum'),$v->post_date,get_post_meta($v->ID, "like_count", true),get_post_meta($v->ID, "dis_count", true),get_post_meta($v->ID, "views_count", true));
                        }, $query->posts));
                        ?>)
                        
                          console.log('popular video ramsimaglecaaa is simagle mianiche comentarebis svets max-heigze')
                          
                },c:94
                }
                <?php if($query->max_num_pages>1):?>
                    ,kid_dom[11]('random')
    <?php 
    endif;
    ?>
            
            ],
                
                c: 17
            }
        ],
        c: 15
    }] <?php endif; ?> 
    ,
    c : 1
}])


console.log(group)

})(kid_t, kid_map, kid_c, kid_style, kid_xhr, kid_group)

</script>
<?php 
 wp_footer();
 ?>