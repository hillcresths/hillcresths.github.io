var numbers = [ "one", "two", "three", "four", "five", "six",
        "seven", "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen", "fifteen",
        "sixteen", "seventeen", "eighteen" ];

$(window).load(function() {
  setTimeout(function() {
    for ( var i=0; i < numbers.length; i++) {
      $("#circle"+numbers[i]).attr("class", "circle");
    }
  }, 5000);
}); 

function callOption(value) {
  if (value == 1) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<center> <p style='font-size:20px; color:#161673;'> <b style='font-size:40px; color:#161673;'> Field Trips: </b> <br> <br> Google <br> NY Auto Show <br> Intrepid <br> Bank of America <br> The Durst Corporation <br> Metropolitan Museum Of Art <br> New York Times <br>  Stony Brook  </p> </center>";
  } else if (value == 2) {
    $('.ui.modal').modal('show');
     document.getElementById("description").innerHTML = "<body id='bodyv2'><h1 style='font-size:30px; color:black; text-align:center;'> Programming Languages </h1><hr><p style='font-size:18px; color:black; text-align:center;'> Students will be introduced to the fundamental elements of any programming language, including loops and conditionals. The students will then deepen their understanding of programming languages by creating their own projects using the programming language they learned. Throughout this three-year course, students will be exposed to the following programming languages. <div class='container'><table style='width:80%' align='center'><tr><td><div class='flip-container' ontouchstart='this.classList.toggle('hover');'><div class='flipper'><div class='front'>HTML</div><div class='back'>Hyper Text Markup Language </div></div></div></td><td><div class='flip-container' ontouchstart='this.classList.toggle('hover');'><div class='flipper'><div class='front'>JavaScript</div><div class='back'>is the programming language of HTML and the Web.</div></div></div></td><td><div class='flip-container' ontouchstart='this.classList.toggle('hover');'><div class='flipper'><div class='front'>Scratch</div><div class='back'>a free programming language and online community where you can create your own interactive stories, games, and animations.</div></div></div></td><td><div class='flip-container' ontouchstart='this.classList.toggle('hover');'><div class='flipper'><div class='front'>Java</div><div class='back'> object-oriented language similar to C++, but simplified to eliminate language features that cause common programming errors.</div></div></div></td></tr></table></div></body>";
  } else if (value == 3) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<h1 style='font-size:30px; color:black; text-align:center;'> Special Programs </h1><hr><p style='color:black; font-size:15px;'></br>The following are some of the programs and hackathons that students in the Software Engineering class have been involved in. </br> <a href='http://girlswhocode.com/'><b>Girls Who Code</b></a><br> A highly competitive summer immersion program that aims to end the gender gap in STEM-related fields by introducing girls to Computer Science and encouraging them to pursue a career in STEM. Girls Who Code has a curriculum focusing on robotics, graphics and animation, mobile applications, data structures and algorithms, etc. while working with programming languages such as JavaScript, HTML, Python, CSS, and jQuery. <br></p><div class='container'><table><tr><td><center>AppNexus 2014</center></td><td><center>Goldman Sachs 2014</center></td></tr><tr><td><img src='https://pbs.twimg.com/media/BtvpTZ6CMAAesTk.jpg' width='304' height='236'></td><td><img src='http://www.goldmansachs.com/what-we-do/engineering/in-the-community/images/girls-who-code-2014-500.jpg' width='304' height='236'></td></tr></table></div><br><a href='https://www.codenow.org/'><b>CodeNow</b></a><br>A coding course that aims to introduce diversity in Computer Science and technology-related fields by providing computer programming training.<img align='left'src='https://tctechcrunch2011.files.wordpress.com/2015/01/e294ace28c90julie-jamora-photography_codenow_2013-11-24_dsc_3806.jpg?w=738' width='304' height='236'>";
  } else if (value == 4) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<center>  <p style='font-size:40px; color:#161673;'> <img src='../assets/images/software.png' align='left' class='roundimg' style= 'width:25%'> Software Engineering</p>  <p style='font-size:20px; color:#161673;'> Software Engineering is class that teaches the aspects and physiology of computer science that allows students to learn the vigors of the field of computer science. Within the 3 years of this program, students will cover the basic programming languages using scratch, html, java, javascript. They will learn the syntax while also gaining the ability of implementing the syntax to other programming language. As their knowledge expands, students will have the ability of using what they have learned and create personal projects using what they have learned. <p> </center>";
  } else if (value == 5) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<h1 style='font-size:30px; color:black; text-align:center;'> Software </h1><hr><p style='font-size:18px; color:black; text-align:center;'> While learning programming languages, students are not tied down to only using one developing platform. These are some that are mainly used in the classroom.</p><div class='container'><table style='width:80%' align='center'><tr><td><div class='flip-container' ontouchstart='this.classList.toggle('hover');'><div class='flipper'><div class='front'>Scratch</div><div class='back'><img src='http://designforeveryone.howest.be/input/images/stories/scratch_mit_lab.jpg' style='width:100%; height:100%;'></div></div></div></td><td><div class='flip-container' ontouchstart='this.classList.toggle('hover');'><div class='flipper'><div class='front'>Eclipse</div><div class='back'><img src='https://3.bp.blogspot.com/-858Tg6Wvr8o/VtFFOaIKVHI/AAAAAAAAE50/ITLthyOCoi8/w1200-h630-p-nu/Eclipse%2BIDE%2Bby%2BVogella.png' style='width:100%; height:100%;'></div></div></div></td><td><div class='flip-container' ontouchstart='this.classList.toggle('hover');'><div class='flipper'><div class='front'>Sublime</div><div class='back'><img src='http://editorconfig.org/logos/sublimetext.png' style='width:100%; height:100%;'></div></div></div></td></tr></table></div>";
  } else if (value == 6) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<center> <p style='font-size:20px; color:#161673;'> <b style='font-size:30px; color:#161673;'> Projects:  </b> <br> Scratch Division using only addition, All about me Website using HTML / CSS, Create game through Eclipse using Java or Javascript to implement their ideas, Graphing quadratic equations, Rock Paper Scissors lizard spock in Javascript </p> </center>";
  } else if (value == 7) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<center> <p style='font-size:20px; color:#161673;'> <b style='font-size:25px; color:#161673;' > Year 2 </b> <br> Students will take part in the creation of applications using javascript and implementing them in HTML. They will take part in the debugging of their applications by assessing their code and improving it to prevent any possible issues. Students will learn and expand their knowledge on the basics of Cyber Security.</p> </center>";
  } else if (value == 8) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<center> <p style='font-size:20px; color:#161673;'> <b style='font-size:25px; color:#161673;' > Year 3 </b> <br> Students will go even more in depth from year one, and focus on the fundamentals of programming and computers. While also creating their own personal website. </p> </center>";
  } else if (value == 9) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<center> <p style='font-size:20px; color:#161673;'> <b style='font-size:25px; color:#161673;' > Year 1 </b> <br> Students will be introduced to logic gates, pseudo code, flowcharts, and binary and hexadecimal code, among other topics. They will learn how to program using a user-friendly code called Scratch, and be introduced to the logical steps the computer takes in assessing a problem. </p> </center><center><img src='http://cs.brown.edu/~tld/publications/books/talking/web/figures/fig-arch-gates.png' width='304' height='236' ><img src='http://transmissionsmedia.com/wp-content/uploads/2013/01/206868-binary-code-hacking.jpg' width='304' height='236' > </center>";
  } else if (value == 10) {
    $('.ui.modal').modal('show');
    document.getElementById("description").innerHTML = "<center> <p style='font-size:25px; color:#161673;'> <b style='font-size:30px; color:#161673;'> Internships </b> </p> <br> <img src='../assets/images/interships.png' > </center>";
  } 
}

function resize() {
  //Height and Width of Each Circle
  var parent = Math.floor($(document).height() * .52);
  var circleonesize = Math.floor($(document).height() * .22);
  var circletwosize = Math.floor($(document).height() * .37);
  var circlethreesize = Math.floor($(document).height() * .26);
  var circlefoursize = Math.floor($(document).height() * .45);
  var circlefivesize = Math.floor($(document).height() * .19);
  var circlesixsize = Math.floor($(document).height() * .23);
  var circlesevensize = Math.floor($(document).height() * .32);
  var circleeightsize = Math.floor($(document).height() * .31);
  var circleninesize = Math.floor($(document).height() * .24);
  var circletensize = Math.floor($(document).height() * .30);
  var circlelevensize = Math.floor($(document).height() * .20);
  var circletwelvesize = Math.floor($(document).height() * .31);
  var circlethirteensize = Math.floor($(document).height() * .13);
  var circlefourteensize = Math.floor($(document).height() * .08);
  var circlefifteensize = Math.floor($(document).height() * .09);
  var circlesixteensize = Math.floor($(document).height() * .14);
  var circleseventeensize = Math.floor($(document).height() * .18);
  var circleeighteensize = Math.floor($(document).height() * .08);

  //Setting Height and Width of Each Circle
  document.getElementById("parent").style.width = parent + 'px';

  document.getElementById("circleone").style.height = circleonesize + 'px';
  document.getElementById("circleone").style.width = circleonesize + 'px';
  document.getElementById("circleone").style.marginLeft = circleonesize/(-2) - 280 + 'px';
  document.getElementById("circleone").style.marginTop = circleonesize/(-2) - 110 + 'px';
  document.getElementById("textone").style.lineHeight = circleonesize + 'px';
  document.getElementById("textone").style.verticalAlign = "middle";
  document.getElementById("textone").style.fontSize = circleonesize / 10 + 'px';

  document.getElementById("circletwo").style.height = circletwosize + 'px';
  document.getElementById("circletwo").style.width = circletwosize + 'px';
  document.getElementById("circletwo").style.marginLeft = circletwosize/(-2) - 70 + 'px';
  document.getElementById("circletwo").style.marginTop = circletwosize/(-2) - 215 + 'px';
  document.getElementById("texttwo").style.lineHeight = circletwosize + 'px';
  document.getElementById("texttwo").style.marginTop = "-25%";
  document.getElementById("texttwo").style.fontSize = circletwosize / 10 + 'px';

  document.getElementById("circlethree").style.height = circlethreesize + 'px';
  document.getElementById("circlethree").style.width = circlethreesize + 'px';
  document.getElementById("circlethree").style.marginLeft = circlethreesize/(-2) + 130 + 'px';
  document.getElementById("circlethree").style.marginTop = circlethreesize/(-2) - 180 + 'px';
  document.getElementById("textthree").style.lineHeight = circlethreesize + 'px';
  document.getElementById("textthree").style.marginTop = "-25%";
  document.getElementById("textthree").style.fontSize = circlethreesize / 15 + 'px';

  document.getElementById("circlefour").style.height = circlefoursize + 'px';
  document.getElementById("circlefour").style.width = circlefoursize + 'px';
  document.getElementById("circlefour").style.margin = circlefoursize/(-2) + 'px';
  document.getElementById("textfour").style.lineHeight = circlefoursize + 'px';
  document.getElementById("textfour").style.verticalAlign = "middle";
  document.getElementById("textfour").style.fontSize = circlefoursize / 10 + 'px';

  document.getElementById("circlefive").style.height = circlefivesize + 'px';
  document.getElementById("circlefive").style.width = circlefivesize + 'px';
  document.getElementById("circlefive").style.marginLeft = circlefivesize/(-2) - 275 + 'px';
  document.getElementById("circlefive").style.marginTop = circlefivesize/(-2) + 35 + 'px';
  document.getElementById("textfive").style.lineHeight = circlefivesize + 'px';
  document.getElementById("textfive").style.verticalAlign = "middle";
  document.getElementById("textfive").style.fontSize = circlefivesize / 10 + 'px';

  document.getElementById("circlesix").style.height = circlesixsize + 'px';
  document.getElementById("circlesix").style.width = circlesixsize + 'px';
  document.getElementById("circlesix").style.marginLeft = circlesixsize/(-2) + 260 + 'px';
  document.getElementById("circlesix").style.marginTop = circlesixsize/(-2) - 60 + 'px';
  document.getElementById("textsix").style.lineHeight = circlesixsize + 'px';
  document.getElementById("textsix").style.verticalAlign = "middle";
  document.getElementById("textsix").style.fontSize = circlesixsize / 10 + 'px';

  document.getElementById("circleseven").style.height = circlesevensize + 'px';
  document.getElementById("circleseven").style.width = circlesevensize + 'px';
  document.getElementById("circleseven").style.marginLeft = circlesevensize/(-2) + 25 + 'px';
  document.getElementById("circleseven").style.marginTop = circlesevensize/(-2) + 270 + 'px';
  document.getElementById("textseven").style.lineHeight = circlesevensize + 'px';
  document.getElementById("textseven").style.verticalAlign = "middle";
  document.getElementById("textseven").style.fontSize = circlesevensize / 10 + 'px';

  document.getElementById("circleeight").style.height = circleeightsize + 'px';
  document.getElementById("circleeight").style.width = circleeightsize + 'px';
  document.getElementById("circleeight").style.marginLeft = circleeightsize/(-2) + 225 + 'px';
  document.getElementById("circleeight").style.marginTop = circleeightsize/(-2) + 165 + 'px';
  document.getElementById("texteight").style.lineHeight = circlesevensize + 'px';
  document.getElementById("texteight").style.verticalAlign = "middle";
  document.getElementById("texteight").style.fontSize = circleeightsize / 10 + 'px';

  document.getElementById("circlenine").style.height = circleninesize + 'px';
  document.getElementById("circlenine").style.width = circleninesize + 'px';
  document.getElementById("circlenine").style.marginLeft = circleninesize/(-2) - 150 + 'px';
  document.getElementById("circlenine").style.marginTop = circleninesize/(-2) + 335 + 'px';
  document.getElementById("textnine").style.lineHeight = circleninesize + 'px';
  document.getElementById("textnine").style.verticalAlign = "middle";
  document.getElementById("textnine").style.fontSize = circleninesize / 10 + 'px';

  document.getElementById("circleten").style.height = circletensize + 'px';
  document.getElementById("circleten").style.width = circletensize + 'px';
  document.getElementById("circleten").style.marginLeft = circletensize/(-2) - 220 + 'px';
  document.getElementById("circleten").style.marginTop = circletensize/(-2) + 190 + 'px';
  document.getElementById("textten").style.lineHeight = circletensize + 'px';
  document.getElementById("textten").style.verticalAlign = "middle";
  document.getElementById("textten").style.fontSize = circletensize / 10 + 'px';

  document.getElementById("circleeleven").style.height = circlelevensize + 'px';
  document.getElementById("circleeleven").style.width = circlelevensize + 'px';
  document.getElementById("circleeleven").style.marginLeft = circlelevensize/(-2) - 410 + 'px';
  document.getElementById("circleeleven").style.marginTop = circlelevensize/(-2) + 190 + 'px';

  document.getElementById("circletwelve").style.height = circletwelvesize + 'px';
  document.getElementById("circletwelve").style.width = circletwelvesize + 'px';
  document.getElementById("circletwelve").style.marginLeft = circletwelvesize/(-2) + 265 + 'px';
  document.getElementById("circletwelve").style.marginTop = circletwelvesize/(-2) - 310 + 'px';

  document.getElementById("circlethirteen").style.height = circlethirteensize + 'px';
  document.getElementById("circlethirteen").style.width = circlethirteensize + 'px';
  document.getElementById("circlethirteen").style.marginLeft = circlethirteensize/(-2) - 330 + 'px';
  document.getElementById("circlethirteen").style.marginTop = circlethirteensize/(-2) + 340 + 'px';

  document.getElementById("circlefourteen").style.height = circlefourteensize + 'px';
  document.getElementById("circlefourteen").style.width = circlefourteensize + 'px';
  document.getElementById("circlefourteen").style.marginLeft = circlefourteensize/(-2) - 440 + 'px';
  document.getElementById("circlefourteen").style.marginTop = circlefourteensize/(-2) + 380 + 'px';

  document.getElementById("circlefifteen").style.height = circlefifteensize + 'px';
  document.getElementById("circlefifteen").style.width = circlefifteensize + 'px';
  document.getElementById("circlefifteen").style.marginLeft = circlefifteensize/(-2) + 390 + 'px';
  document.getElementById("circlefifteen").style.marginTop = circlefifteensize/(-2) - 70 + 'px';

  document.getElementById("circlesixteen").style.height = circlesixteensize + 'px';
  document.getElementById("circlesixteen").style.width = circlesixteensize + 'px';
  document.getElementById("circlesixteen").style.marginLeft = circlesixteensize/(-2) + 370 + 'px';
  document.getElementById("circlesixteen").style.marginTop = circlesixteensize/(-2) - 180 + 'px';

  document.getElementById("circleseventeen").style.height = circleseventeensize + 'px';
  document.getElementById("circleseventeen").style.width = circleseventeensize + 'px';
  document.getElementById("circleseventeen").style.marginLeft = circleseventeensize/(-2) + 450 + 'px';
  document.getElementById("circleseventeen").style.marginTop = circleseventeensize/(-2) - 350 + 'px';

  document.getElementById("circleeighteen").style.height = circleeighteensize + 'px';
  document.getElementById("circleeighteen").style.width = circleeighteensize + 'px';
  document.getElementById("circleeighteen").style.marginLeft = circleeighteensize/(-2) + 450 + 'px';
  document.getElementById("circleeighteen").style.marginTop = circleeighteensize/(-2) - 215 + 'px';
}

$( window ).resize(function() {
  resize();
});
