<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php wp_title("|", true, "right");bloginfo("name"); ?></title>
    <?php 
    wp_head();
     ?>
</head>
<body>

<div class="header">
<?php
print_r(get_custom_logo(0));
            // the_custom_logo();
            wp_nav_menu(array(	
				'menu_class'      => 'o gg',
                'container' => 'ul' ,
                'link_before' => '<span>',
                'link_after' => '</span><svg  onload="kid_dom[8](this)" style="display: none;"></svg><div>*</div>',
                
	
   ));?>
   <div class="b" onclick="kid_dom[9](this)">
   <svg class="ham hamRotate ham4" viewBox="0 0 100 100" onclick="this.classList.toggle('active')"><path class="line top" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"></path><path class="line middle" d="m 70,50 h -40"></path><path class="line bottom" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"></path></svg>
   </div>
</div>
   