<?php
// print_r($comments);

?>



z.b({com_form:function(p){
    
return {
                        d: [{form:[

                        <?php if(!$user_ID) : ?>  {p:'Your email address will not be published. Required fields are marked *'}, <?php endif; ?>  

                            {textarea:'',placeholder:'Add a public comment...',name:'comment',e:{focus:function(){
                                this.y().minHeight='150px'
                            }},c:28,spellcheck:false}

                            <?php if(!$user_ID) : ?>
                            ,{p:[{label:[{span:'Name *'},{input:'',type:'text',name:'author',value:'<?php  echo esc_attr( $commenter['comment_author'] ) ?>',spellcheck:false}]}]},
                            {p:[{label:[{span:'Email *'},{input:'',type:'email',name:'email',value:'<?php echo   esc_attr( $commenter['comment_author_email'] ) ?>',spellcheck:false}]}]},
                            {p:[{label:[{span:'Website'},{input:'',type:'text',name:'url',value:'<?php  echo esc_attr( $commenter['comment_author_url'] ) ?>',spellcheck:false}]}]}
                            <?php endif; ?>  
                           
                           
                            ,{input:'',for:[{name:'comment_post_ID',value:group.post['ID']},{name:'comment_parent',value:p}],type:'hidden'},
                            <?php if(!$user_ID) : ?>
                            {p:[{label:[{input:'',type:'checkbox',name:'wp-comment-cookies-consent',value:'yes'},{span:' Save my name, email, and website in this browser for the next time I comment.'}]}]},
                            <?php endif; ?>  


                            {button:'Post Comment'}
                            
                        ],action:'/wp-comments-post.php',method:'post'}],e:{focusout:function(){
                            this.q('textarea').y().minHeight='100px'
                            
                            }},c:43,b:0
                    };
}})

z.i([group.com_form(0),{d:[{ul:'',l:function(z){

                        

var coom=<?php 
 
     $av=[];
        echo json_encode(array_map(function($ar){
            
            $ar->avatar = $av[$ar->user_id]?$av[$ar->user_id]:$av[$ar->user_id]=get_avatar_data($ar->user_id)['url'];;

            return array_filter((array)$ar, function ($key) {                
                return in_array($key, array('comment_ID','comment_author', 'comment_date', 'comment_content', 'comment_parent','avatar'));
            }, ARRAY_FILTER_USE_KEY);

        },$comments));
        
        ?>;
        
        kid_dom[5](z,coom)


           

            
}}],c:46}
<!-- ,{d:'Show More Comments',c:55} -->
])
