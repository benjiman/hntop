# Bookmarklet to go to the top level Hacker News page

Given a nested comment link, it redirects you to the top level page without having to keep clicking "parent"

[HN Top]<javascript:(function(){var s=document.createElement('script');s.setAttribute('src','https://cdn.rawgit.com/benjiman/hntop/master/hntop.js');document.body.appendChild(s);})();>

