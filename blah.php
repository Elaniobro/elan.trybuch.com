
<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="author" content="Elan Trybuch"/>
  <meta name="viewport" content="user-scalable=yes, width=device-width"/> 
  <title>Elan Trybuch | Front End Engineer | Portfolio</title>
  <meta name="keywords" content="Elan, Elan Trybuch, Trybuch, Frontend, Front End, Engineer, Developer, Designer, javascript, HTML, css, css3, HTML5, jQuery, digital, Digital marketing, advertising, media planning, SEM, Search engine marketing, search engine optimization, SEO, Internet marketing, communications, Cost-effective, brand awareness, viral campaign, online market">
  <meta name="description" content="Elan Trybuch is a well versed Front End engineer, working on client side websites and projects with over 5+ years of experience. Elan Trybuch is an affordable, honest businessman who is easily accesible and great to work with.">
  <link rel="stylesheet" href="com/css/styles.css" type="text/css" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.js"></script>
</head>
<body>
    <div role="main">
        <header id="header">
            <nav>
                <h1 id="name"><a href="#biography">Portfolio Site of Elan Trybuch, New York, NY</a></h1>
                <div>
                    <a class="social" id="twitter"  href="#" title="Read the most recent tweets"></a>
                    <a class="social" id="linkedin"  title="Become a part of my professional circle" href="http://www.linkedin.com/in/elantrybuch" target="_blank"></a>
                    <a class="social" id="skype" title="Save on long distance calls" href="skype:elaniobro?call"></a>
                    <a class="social" id="facebook" title="like this page on facebook"></a>
                    <a class="social" id="googleplus" title="like this page on +google"></a>
                </div>
            </nav><!-- /nav -->            
        </header><!-- /header -->
        <section>
            <article>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>
                <div class="thumb"><a href="#"></a></div>

            </article>
        </section><!-- /section -->
        <footer id="footer">
            <nav>
              <span id="copy">&copy; 2013 &bull; All Rights Reserved &bull; <a href="elan_trybuch_resume.pdf">download resume</a> &bull; <a href="http://news.trybuch.com">News</a></span>
            </nav><!-- /nav -->
            <div class="clr"></div>
        </footer><!-- /footer -->
    </div><!-- /main -->
    <script>
        $(function() {
            var $header = $('header').height();
            $('section').css({'margin-top': $header});
            

            window.onresize=function(){
                var $doc = $(document).width();
                var $thumb = 200;
                var $count = Math.floor($doc/$thumb)*2;
                var $columns = Math.floor($doc/$thumb);
                var $remainder = ($columns * $thumb) - $doc;
                var $margin = Math.floor(-1*(($remainder/$count)/2));
                console.log("count: " + $count)
                console.log("remainder: " + $remainder);
                console.log("margin: " + $margin)
                //$('.thumb').css({'margin-left' : $margin, 'margin-right' : $margin});
                
            }
        })
    </script>
</body>   
</html>
