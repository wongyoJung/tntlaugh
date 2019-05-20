<!DOCTYPE HTML>
<html>
  <head>
    <title> Try not to laugh challenge </title>
      <link rel="stylesheet" type="text/css" href="style.css">
    <script type="text/javascript" src="catchAudio.js"></script>
    <script type="text/javascript" src="ytplayerAPI.js"></script>

    <h1 id="HeadTitle"> Try not to laugh challenge </h1>
  </head>

  <body>

    <iframe id="video" width="853" height="505" src=
    <?php
    $file_lines = file('videoSources\links.txt');
    $leng = sizeof($file_lines);
    $num = rand(0,$leng-1);
    $link = $file_lines[$num];
    $link=str_replace("\r\n","",$link);
    $link=$link."?rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0&feature=oembed&enablejsapi=1&autoplay=0";
    echo $link;
    ?>
     frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen ></iframe>
 <!-- youtube player can be embeded as the link url, and if you assign some parameter (such as autoplay=0) you can manipulate some features of the player.
 I added the link from the videoSources/links.txt randomly, and add to the url of the link -->
  </body>

</html>
