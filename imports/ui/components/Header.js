import React from 'react'

//set animation timing
var animationDelay = 3500,
//loading bar effect
barAnimationDelay = 3800,
barWaiting = barAnimationDelay - 3000, //3000 is the duration of the transition on the loading bar - set in the scss/css file
//letters effect
lettersDelay = 50,
//type effect
typeLettersDelay = 150,
selectionDuration = 500,
typeAnimationDelay = selectionDuration + 800,
//clip effect
revealDuration = 600,
revealAnimationDelay = 2500;

export default class Header extends React.Component{
  constructor(){
    super();
    //this.initHeadline();
  }

  initHeadline() {
    //insert <i> element for each letter of a changing word
    this.singleLetters($('.cd-headline.letters').find('b'));
    //initialise headline animation
    this.animateHeadline($('.cd-headline'));
  }

  singleLetters($words) {
          $words.each(function(){
              var word = $(this),
                  letters = word.text().split(''),
                  selected = word.hasClass('is-visible');
              for (var i in letters) {
                  if(word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>';
                  letters[i] = (selected) ? '<i class="in">' + letters[i] + '</i>': '<i>' + letters[i] + '</i>';
              }
              var newLetters = letters.join('');
              word.html(newLetters).css('opacity', 1);
          });
    }


    hideWord($word) {
            var nextWord = this.takeNext($word);

            if($word.parents('.cd-headline').hasClass('type')) {
                var parentSpan = $word.parent('.cd-words-wrapper');
                parentSpan.addClass('selected').removeClass('waiting');
                setTimeout(function(){
                    parentSpan.removeClass('selected');
                    $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out');
                }, selectionDuration);
                setTimeout(function(){ showWord(nextWord, typeLettersDelay) }, typeAnimationDelay);

            } else if($word.parents('.cd-headline').hasClass('letters')) {
                var bool = ($word.children('i').length >= nextWord.children('i').length) ? true : false;
                hideLetter($word.find('i').eq(0), $word, bool, lettersDelay);
                showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay);

            }  else if($word.parents('.cd-headline').hasClass('clip')) {
                $word.parents('.cd-words-wrapper').animate({ width : '2px' }, revealDuration, function(){
                    this.switchWord($word, nextWord);
                    this.showWord(nextWord);
                });

            } else if ($word.parents('.cd-headline').hasClass('loading-bar')){
                $word.parents('.cd-words-wrapper').removeClass('is-loading');
                this.switchWord($word, nextWord);
                setTimeout(function(){ hideWord(nextWord) }, barAnimationDelay);
                setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);

            } else {
                this.switchWord($word, nextWord);
                self = this
                setTimeout(function(){ self.hideWord(nextWord) }, animationDelay);
            }
    }

    showWord($word, $duration) {
            if($word.parents('.cd-headline').hasClass('type')) {
                this.showLetter($word.find('i').eq(0), $word, false, $duration);
                $word.addClass('is-visible').removeClass('is-hidden');

            }  else if($word.parents('.cd-headline').hasClass('clip')) {
                $word.parents('.cd-words-wrapper').animate({ 'width' : $word.width() + 10 }, revealDuration, function(){
                    setTimeout(function(){ this.hideWord($word) }, revealAnimationDelay);
                });
            }
    }

    hideLetter($letter, $word, $bool, $duration) {
            $letter.removeClass('in').addClass('out');

            if(!$letter.is(':last-child')) {
                setTimeout(function(){ this.hideLetter($letter.next(), $word, $bool, $duration); }, $duration);
            } else if($bool) {
                setTimeout(function(){ this.hideWord(takeNext($word)) }, animationDelay);
            }

            if($letter.is(':last-child') && $('html').hasClass('no-csstransitions')) {
                var nextWord = this.takeNext($word);
                this.switchWord($word, nextWord);
            }
    }

    showLetter($letter, $word, $bool, $duration) {
            $letter.addClass('in').removeClass('out');

            if(!$letter.is(':last-child')) {
                setTimeout(function(){ this.showLetter($letter.next(), $word, $bool, $duration); }, $duration);
            } else {
                if($word.parents('.cd-headline').hasClass('type')) { setTimeout(function(){ $word.parents('.cd-words-wrapper').addClass('waiting'); }, 200);}
                if(!$bool) { setTimeout(function(){ hideWord($word) }, animationDelay) }
            }
    }

    takeNext($word) {
            return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
    }

    takePrev($word) {
            return (!$word.is(':first-child')) ? $word.prev() : $word.parent().children().last();
    }

    switchWord($oldWord, $newWord) {
            $oldWord.removeClass('is-visible').addClass('is-hidden');
            $newWord.removeClass('is-hidden').addClass('is-visible');
    }

    animateHeadline($headlines) {
          var duration = animationDelay;
          self= this
          $headlines.each(function(){
              var headline = $(this);

              if(headline.hasClass('loading-bar')) {
                  duration = barAnimationDelay;
                  setTimeout(function(){ headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
              } else if (headline.hasClass('clip')){
                  var spanWrapper = headline.find('.cd-words-wrapper'),
                      newWidth = spanWrapper.width() + 10
                  spanWrapper.css('width', newWidth);
              } else if (!headline.hasClass('type') ) {
                  //assign to .cd-words-wrapper the width of its longest word
                  var words = headline.find('.cd-words-wrapper b'),
                      width = 0;
                  words.each(function(){
                      var wordWidth = $(this).width();
                      if (wordWidth > width) width = wordWidth;
                  });
                  headline.find('.cd-words-wrapper').css('width', width);
              };
              //trigger animation
              setTimeout(function(){ self.hideWord( headline.find('.is-visible').eq(0) ) }, duration);
          });
      }
  render(){
    return(
      <header>
         <section id="top-navigation" className="container-fluid nopadding">
            <div className="row nopadding ident ui-bg-color01">
               <a href="#!">
                  <div className="col-md-5 col-lg-4 vc-photo">&nbsp;</div>
               </a>
               <div className="col-md-7 col-lg-8 vc-name nopadding">
                  <div className="row nopadding name">
                     <div className="col-md-10 name-title"><h2 className="font-accident-two-light uppercase">Camilo Pestana</h2></div>
                     <div className="col-md-2 nopadding name-pdf">
                        <a href="files/CamiloPestana-Resume.pdf" download className="hvr-sweep-to-right"><i className="flaticon-download149" title="Download CV.pdf"></i></a>
                     </div>
                  </div>
                  <div className="row nopadding position">
                     <div className="col-md-10 position-title">

                       <section className="cd-intro">
                          <h4 className="cd-headline clip is-full-width font-accident-two-normal uppercase">
                            <span>Web App Developer</span>
                      </h4>
                      </section>

                     </div>
                     <div className="col-md-2 nopadding pdf">
                        <a href="https://github.com/elcronos" className="hvr-sweep-to-right"><i className="fa fa-github fa-5x" title="My Github Portfolio" aria-hidden="true"></i></a>
                     </div>
                  </div>

                  <ul id="nav" className="row nopadding cd-side-navigation">
                     <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color01">
                        <a href="/" className="hvr-sweep-to-bottom"><i className="flaticon-insignia"></i><span>home</span></a>
                     </li>
                     <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color02">
                        <a href="/resume" className="hvr-sweep-to-bottom"><i className="flaticon-graduation61"></i><span>resume</span></a>
                     </li>
                     <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color03">
                        <a href="/portfolio" className="hvr-sweep-to-bottom"><i className="flaticon-book-bag2"></i><span>portfolio</span></a>
                     </li>
                     <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color04">
                        <a href="/contacts" className="hvr-sweep-to-bottom"><i className="flaticon-placeholders4"></i><span>contacts</span></a>
                     </li>
                     <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color05">
                        <a href="/feedback" className="hvr-sweep-to-bottom"><i className="flaticon-earphones18"></i><span>feedback</span></a>
                     </li>
                     <li className="col-xs-4 col-sm-2 nopadding menuitem ui-menu-color06">
                        <a href="/blog" className="hvr-sweep-to-bottom"><i className="flaticon-pens15"></i><span>blog</span></a>
                     </li>
                  </ul>

               </div>
            </div>
         </section>
      </header>
    )
  }
}
