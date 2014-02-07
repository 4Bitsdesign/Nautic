<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package _s
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
	<?php do_action( 'before' ); ?>
	<header id="masthead" class="site-header inicio" role="banner">
		<div class="site-branding">
			<figure class="logo">
				<img src="images/Logo-Basico-Movil.png" alt="Nautic">
			</figure>
			<p class="site-description lema"><?php bloginfo( 'description' ); ?></p>
			</p>
			<address>
				<a class="direccion" href="#">
					Puerto Deportivo Marina Internacional
					03181 Alicante
				</a>
				<a href="#" class="telefono">
					966 70 10 74
				</a>
			</address>
		</div>

	</header><!-- #masthead -->

	<div id="content" class="site-content">
