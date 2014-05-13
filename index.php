
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
<script src="com/js/mustache.js"></script>    
</head>
<body>
    <div role="main">
        <header id="header">
            <nav>
                <h1 id="name"><a href="#biography">Portfolio Site of Elan Trybuch, New York, NY</a></h1>
                <ul id="social">
                    <li class="social"><a id="twitter"  href="http://twitter.com/home?status=@elaniobro%20I%20saw%20your%20site%20and%20would%20like%20to%20connect.%20%23WebDeveloper%20#Frontend%20#HTML%20#CSS%20#javaScript%20" title="Read the most recent tweets"></a></li>
                    <li class="social"><a id="linkedin"  title="Become a part of my professional circle" href="http://www.linkedin.com/in/elantrybuch" target="_blank"></a></li>
                    <li class="social"><a id="github"  title="Collobrate on open source projects with me" href="https://github.com/Elaniobro" target="_blank"></a></li>
                    <li class="social"><a id="skype" title="Save on long distance calls" href="skype:elaniobro?call"></a></li>
                    <?php #<a class="social" id="facebook" title="like this page on facebook"></a>?></li>
                    <li class="social"><a id="googleplus" title="Interact with me on +google" href="https://plus.google.com/115362919020637883393/"></a></li>
                </ul>
            </nav><!-- /nav -->   
            <div id="test"></div>         
        </header><!-- /header -->
        <section id="content">
            <!-- Article content goes here via json feed -->
           <script id="template" type="text/x-mustache">
                {{#.}}
                <article id='{{gsx$tag.$t}}' class='clr'>
                    <div>
                        <figure class='thumb' style='background-position-y:{{gsx$thumbpos.$t}}'>
                            {{gsx$company.$t}} : {{gsx$project.$t}} 
                         </figure>
                         <figcaption>
                            {{gsx$company.$t}} 
                            {{#gsx$active.$t}}
                             <a href='{{gsx$pURL.$t}}' target='_blank'>"{{gsx$project.$t}}"</a>                             
                            {{/gsx$active.$t}}                            

                            {{^gsx$active.$t}}
                            <div>"{{gsx$project.$t}}"</div>
                            {{/gsx$active.$t}}                            
                        </figcaption>
                    </div>
                </article>
                {{/.}}
            </script>
        </section><!-- /section -->
        <footer id="footer">
            <nav>
              <span id="copy">&copy; 2013 &bull; All Rights Reserved &bull; <a href="elan_trybuch_resume.pdf">download resume</a> &bull; <a href="http://news.trybuch.com">News</a></span>
            </nav><!-- /nav -->
            <div class="clr"></div>
        </footer><!-- /footer -->
    </div><!-- /main -->
    <script>
        (function() {
            res = document.createElement('script');
            res.type = 'text/javascript';
            res.src = 'https://spreadsheets.google.com/feeds/list/0AipUB_CfF40ldHQ1X2N6VUl3a2NoUTViUnpOWHlEM3c/od6/public/values?alt=json-in-script&callback=site';
            document.head.appendChild(res);

            //Callback JSON(p)
            site = function (res){
                if (!res){
                    return;
                }else{
                    console.log(res.feed.entry[3]);
                    data = res.feed.entry,
                    //get a reference to our HTML template
                    template = document.getElementById('template').innerHTML,
                    //tell Mustache.js to iterate through the JSON and insert the data into the HTML template
                    output = Mustache.render(template, data);
                    //append the HTML template to the DOM
                    document.getElementById('content').innerHTML = output;
                }
            }            
        })();            

    </script>
    

</body>   
</html>
