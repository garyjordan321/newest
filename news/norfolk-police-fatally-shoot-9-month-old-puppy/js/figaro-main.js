var ticking=false;var header=document.querySelector('.c-header-nav');const headerContainer=document.querySelector('.c-header-nav__container');const mainHeaderContainer=document.getElementById('c-header');const headerWrapper=document.querySelector('.c-header__wrapper');const headerEdition=document.querySelector('.c-header-edition')?document.querySelector('.c-header-edition'):0;const mainLogo=document.querySelector('.c-header-nav__logo');let prevScroll=window.pageYOffset;const setHeadContainerWidth=function(){headerContainer.style.width=`${
    document.querySelector('.c-header-title').offsetWidth
  }px`;};window.onscroll=function setHeader(){var currentScroll=window.pageYOffset;var h=header.offsetHeight;let headerEditionPos=0;headerEditionPos=headerEdition!==0?headerEdition.getBoundingClientRect():mainLogo.getBoundingClientRect();mainLogo.style.width='auto';const hasMainNavigation=document.querySelector('.c-header-nav__main__nav')!==null?document.querySelector('.c-header-nav__main__nav').classList.contains('is-open'):false;if(prevScroll>currentScroll){if(headerEditionPos.top+headerWrapper.offsetHeight-10>=currentScroll){header.classList.remove('is-sticky');document.querySelector('.c-header__wrapper').style.paddingBottom=`0px`;}else if(!megaMenu.classList.contains('is-open')&&!hasMainNavigation){header.classList.add('is-sticky');document.querySelector('.c-header__wrapper').style.paddingBottom=`${h}px`;let widthWrapper=document.querySelector('.c-header__wrapper').offsetWidth;setHeadContainerWidth();}}else if(!megaMenu.classList.contains('is-open')&&!hasMainNavigation){header.classList.remove('is-sticky');console.log('Removed sticky');}
prevScroll=currentScroll;};window.onresize=function(){setHeadContainerWidth();};var cancel_search=document.querySelector('.main-content .c-search-form__btn.btn-reset');if(cancel_search){cancel_search.addEventListener('click',function(e){e.preventDefault();var search_input=document.querySelector('.main-content .c-search-form__input');search_input.value='';search_input.focus();});}
const containsActiveClass=function(e,toggleActive,toggleOpen){e.preventDefault();if(toggleActive.classList.contains('is-active')){removeActiveClass(toggleActive,toggleOpen);}else{toggleActive.classList.add('is-active');if(toggleOpen)toggleOpen.classList.add('is-open');}};const removeActiveClass=function(toggleActive,toggleOpen){toggleActive.classList.remove('is-active');toggleOpen.classList.remove('is-open');};const megaMenuButton=document.getElementById('mega-menu-button');const megaMenu=document.getElementById('mega-menu');const megaMenuItem=document.querySelectorAll('.c-mega-menu-nav__item');const megaMenuSubMenus=document.querySelectorAll('.c-mega-menu__sub');const headerSearch=document.getElementById('header-search');const headerSearchForm=document.getElementById('header-search-form');const allModalEl=document.querySelectorAll('#header-search-form, #mega-menu');const mainNavContainer=document.querySelector('.c-header-nav__main');const headerDropdown=document.getElementById('header-dropdown');const overlay=document.getElementById('overlay');const closeAllOther=function(e){const isOpen=document.querySelectorAll('.is-open');if(isOpen){isOpen.forEach(function(el){let targetLink=document.getElementById(el.dataset.link);console.log(targetLink);if(!el.contains(e.target)&&!targetLink.contains(e.target)&&el.classList.contains('is-open')){el.classList.remove('is-open');if(targetLink.classList.contains)
targetLink.classList.remove('is-active');if(overlay.classList.contains('is-active'))
overlay.classList.remove('is-active');headerContainer.style.paddingBottom='0px';}});}};if(megaMenuButton){megaMenuButton.addEventListener('click',function(e){closeAllOther(e);containsActiveClass(e,this,megaMenu);overlay.classList.add('c-overlay--mega-menu');containsActiveClass(e,overlay);});}
if(headerDropdown){headerDropdown.addEventListener('click',function(e){e.preventDefault();closeAllOther(e);containsActiveClass(e,this,menuPrimary);containsActiveClass(e,overlay);});}
if(overlay){overlay.addEventListener('click',function(e){this.classList.remove('is-active');document.querySelectorAll('.is-active, .is-open').forEach(function(el){if(el.classList.contains('is-active'))el.classList.remove('is-active');if(el.classList.contains('is-open'))el.classList.remove('is-open');});});}
if(headerSearch){headerSearch.addEventListener('click',function(e){closeAllOther(e);containsActiveClass(e,this,headerSearchForm);if(mainNavContainer.classList.contains('is-search-open')){mainNavContainer.classList.remove('is-search-open');}else{mainNavContainer.classList.add('is-search-open');headerSearchForm.getElementsByClassName('c-search-form__input')[0].focus();}});}
let maxNumListItems=0;let megaMenuItemHeight=0;megaMenuItem.forEach(function(item){if(maxNumListItems<item.getElementsByTagName('li').length)
maxNumListItems=item.getElementsByTagName('li').length;megaMenuItemHeight=this.offsetHeight;if(window.innerWidth>766){item.addEventListener('mouseover',function(){if(!this.querySelector('.c-mega-menu__sub').classList.contains('c-mega-menu__sub--active')&&document.querySelector('.c-mega-menu__sub--active')){document.querySelector('.c-mega-menu__sub--active').classList.remove('c-mega-menu__sub--active');}
this.querySelector('.c-mega-menu__sub').classList.add('c-mega-menu__sub--active');});}});const megaMenuSubIcon=document.querySelectorAll('.c-mega-menu__link__sub-link');const megaMenuTabs=document.querySelector('.c-menu-tabs');const megaMenuTabsHeight=megaMenuTabs.offsetHeight;let currentTabHeight=0;megaMenuSubIcon.forEach(function(item){item.addEventListener('click',function(e){e.preventDefault();currentTabHeight=this.closest('.c-menu-tabs').offsetHeight;if(!this.closest('.c-menu-tabs').dataset.height)
this.closest('.c-menu-tabs').dataset.height=currentTabHeight;if(window.innerWidth>766){if(!this.parentElement.querySelector('.c-mega-menu__sub').classList.contains('c-mega-menu__sub--active')){document.querySelector('.c-mega-menu__sub--active').classList.remove('c-mega-menu__sub--active');}
this.parentElement.querySelector('.c-mega-menu__sub').classList.add('c-mega-menu__sub--active');}else{if(document.querySelector('.c-mega-menu__sub--active')){document.querySelector('.c-mega-menu__sub--active').closest('.c-menu-tabs').style.height=document.querySelector('.c-mega-menu__sub--active').closest('.c-menu-tabs').getAttribute('data-height')+'px';document.querySelector('.c-mega-menu__sub--active').classList.remove('c-mega-menu__sub--active','c-mega-menu__sub--mob-active');}
this.parentElement.querySelector('.c-mega-menu__sub').classList.add('c-mega-menu__sub--mob-active','c-mega-menu__sub--active');this.closest('.c-menu-tabs').style.height=this.parentElement.querySelector('.c-mega-menu__sub').offsetHeight+
1+'px';console.log(this.parentElement.parentElement.parentElement.classList);if(!this.parentElement.parentElement.parentElement.classList.contains('c-mega-menu__edition')){document.querySelector('.c-header-nav__mega-menu__scroll').scrollTo({top:0,behavior:'smooth'});}}});});const megaMenuSubBack=document.querySelectorAll('.c-mega-menu__sub__back');megaMenuSubBack.forEach(function(item){item.addEventListener('click',function(e){e.preventDefault();this.closest('.c-mega-menu__sub').classList.remove('c-mega-menu__sub--mob-active','c-mega-menu__sub--active');this.closest('.c-menu-tabs').style.height=this.closest('.c-menu-tabs').getAttribute('data-height')+'px';});});const megaMenuScroll=document.querySelector('.c-header-nav__mega-menu__scroll');const menuContainer=document.querySelector('.c-header-nav__main');const menuPrimary=document.querySelector('.c-header-nav__main__nav');const menuPrimaryItems=menuPrimary&&menuPrimary.querySelectorAll('.c-header-nav__main__nav > li:not(.c-load-more)');if(menuPrimary){menuPrimary.insertAdjacentHTML('beforeend',`
    <li class="c-load-more">
        <a id="menuLoadMore" type="button" class="load-more c-header-nav__load-more c-header-nav__main__link c-header-nav__load-more " aria-haspopup="true" aria-expanded="false">
        <span></span> <i class="icon-chevron-down"></i>
        </a>
        <ul class="c-header-nav__secondary__nav">
        ${menuPrimary.innerHTML}
        </ul>
    </li>
    `);const menuSecondary=menuContainer.querySelector('.c-header-nav__secondary__nav');const menuSecondaryItems=menuSecondary.querySelectorAll('li');const menuAllItems=menuContainer.querySelectorAll('li');const menuMoreLi=menuPrimary.querySelector('.c-load-more');const menuMoreBtn=menuMoreLi.querySelector('.c-header-nav__load-more');menuMoreBtn.addEventListener('click',(e)=>{e.preventDefault();closeAllOther(e);menuContainer.classList.toggle('is-open');menuMoreBtn.classList.toggle('is-active');menuMoreBtn.setAttribute('aria-expanded',menuContainer.classList.contains('--show-secondary'));if(menuContainer.classList.contains('is-open')){headerContainer.style.paddingBottom=`${menuSecondary.offsetHeight}px`;}else{headerContainer.style.paddingBottom='0px';}});const doAdapt=()=>{if(screen.width>=1024){let widthMenuContainer=70;headerContainer.querySelectorAll(':scope > div, :scope > a ').forEach((element)=>{if(element.classList.contains('c-header-nav__main'))return;widthMenuContainer+=element.offsetWidth;});const primaryWidth=headerContainer.offsetWidth-widthMenuContainer;menuAllItems.forEach((item)=>{item.classList.remove('is-hidden');});let stopWidth=menuMoreBtn.offsetWidth;let hiddenItems=[];menuPrimaryItems.forEach((item,i)=>{if(primaryWidth>=stopWidth+item.offsetWidth){stopWidth+=item.offsetWidth+10;}else{item.classList.add('is-hidden');hiddenItems.push(i);}});if(!hiddenItems.length){menuMoreLi.classList.add('is-hidden');menuContainer.classList.remove('--show-secondary');menuMoreBtn.setAttribute('aria-expanded',false);}else{mainNavContainer.setAttribute('data-link','menuLoadMore');menuSecondary.style.width=`${
          primaryWidth - menuMoreBtn.offsetWidth
        }px`;menuSecondaryItems.forEach((item,i)=>{if(!hiddenItems.includes(i)){item.classList.add('is-hidden');}});}}};doAdapt();new ResizeObserver(doAdapt).observe(headerWrapper);}
const loadTab=function(el){const pos=this.dataset.position;const panel=document.getElementById(`tab-panel-${pos}`);document.querySelectorAll('.c-tabs-nav__link.is-active').forEach((el)=>el.classList.remove('is-active'));this.classList.add('is-active');document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-visible');setTimeout(function(){document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-active');panel.classList.add('is-active');},300);setTimeout(function(){panel.classList.add('is-visible');},400);};const tabsPrev=document.querySelector('.c-tabs-nav__previous');const tabsNext=document.querySelector('.c-tabs-nav__next');const tabsPagi=document.querySelectorAll('.show-more-authors-button');const tabs=document.querySelectorAll('.c-tabs-nav__link');if(tabs){tabs.forEach((tab)=>{tab.addEventListener('click',function(e){e.preventDefault();if(this.classList.contains('is-disabled'))return;const pos=this.dataset.position;const panel=document.getElementById(`tab-panel-${pos}`);document.querySelectorAll('.c-tabs-nav__link.is-active').forEach((el)=>el.classList.remove('is-active'));this.classList.add('is-active');document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-visible');setTimeout(function(){document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-active');panel.classList.add('is-active');},300);setTimeout(function(){panel.classList.add('is-visible');},400);if(tabsNext&&tabsPrev){if(document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) - 1}"]`)){tabsPrev.dataset.position=Number(pos)-1;tabsPrev.innerText=document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) - 1}"]`).innerText;}else{tabsPrev.dataset.position='is-hidden';}
if(document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) + 1}"]`)){tabsNext.dataset.position=Number(pos)+1;tabsNext.innerText=document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) + 1}"]`).innerText;}else{tabsNext.dataset.position='is-hidden';}}});});if(tabsPrev){tabsPrev.addEventListener('click',function(e){e.preventDefault();const pos=this.dataset.position;const panel=document.getElementById(`tab-panel-${pos}`);document.querySelectorAll('.c-tabs-nav__link.is-active').forEach((el)=>el.classList.remove('is-active'));document.querySelector(`.c-tabs-nav__link[data-position="${pos}"]`).classList.add('is-active');document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-visible');setTimeout(function(){document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-active');panel.classList.add('is-active');},300);setTimeout(function(){panel.classList.add('is-visible');},400);tabsNext.dataset.position=Number(pos)+1;tabsNext.innerText=document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) + 1}"]`).innerText;if(document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) - 1}"]`)){this.dataset.position=Number(pos)-1;this.innerText=document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) - 1}"]`).innerText;}else{this.dataset.position='is-hidden';}});}
if(tabsNext){tabsNext.addEventListener('click',function(e){e.preventDefault();const pos=Number(this.dataset.position);const panel=document.getElementById(`tab-panel-${pos}`);document.querySelectorAll('.c-tabs-nav__link.is-active').forEach((el)=>el.classList.remove('is-active'));document.querySelector(`.c-tabs-nav__link[data-position="${pos}"]`).classList.add('is-active');document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-visible');setTimeout(function(){document.querySelector('.c-tabs-content__panel.is-active').classList.remove('is-active');panel.classList.add('is-active');},300);setTimeout(function(){panel.classList.add('is-visible');},400);if(document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) + 1}"]`)){tabsNext.dataset.position=Number(pos)+1;tabsNext.innerText=document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) + 1}"]`).innerText;}else{tabsNext.dataset.position='is-hidden';}
tabsPrev.dataset.position=Number(pos)-1;tabsPrev.innerText=document.querySelector(`.c-tabs-nav__link[data-position="${Number(pos) - 1}"]`).innerText;});}
if(tabsPagi){tabsPagi.forEach((pagiBtn)=>{pagiBtn.addEventListener('click',function(e){e.preventDefault();document.querySelectorAll('.c-tabs-content__panel.is-active .c-card').forEach((el)=>el.classList.remove('is-hidden'));e.target.style.visibility='hidden';});});}}
document.addEventListener('click',function(e){const isOpen=document.querySelectorAll('.is-open');if(megaMenuButton.contains(e.target)||overlay.contains(e.target)||(headerDropdown&&headerDropdown.contains(e.target))){return;}
if(document.querySelector('.c-header-nav__load-more')){if(document.querySelector('.c-header-nav__load-more').contains(e.target))
return;}
if(isOpen){isOpen.forEach(function(el){let targetLink=document.getElementById(el.dataset.link);if(!el.contains(e.target)&&!targetLink.contains(e.target)&&el.classList.contains('is-open')){el.classList.remove('is-open');targetLink.classList.remove('is-active');if(overlay.classList.contains('is-active'))
overlay.classList.remove('is-active');headerContainer.style.paddingBottom='0px';if(e.target==megaMenuButton){console.log('Clicked megaMenuButton');}}});}});var search_button=document.getElementById('search_button');if(search_button){search_button.addEventListener('click',function(e){console.log('search click');var searchScriptID='elasticSearch';var searchScript=document.getElementById(searchScriptID);if(searchScript){return;}
var htmlStyle=document.createElement('script');htmlStyle.id=searchScriptID;htmlStyle.type='text/javascript';htmlStyle.src=crb_site_utils.themedir+'/assets/dist/js/elasticSearch.js?ver=1.2';htmlStyle.media='all';document.getElementsByTagName('head')[0].appendChild(htmlStyle);});}
window.addEventListener('load',(event)=>{googletag.cmd.push(function(){googletag.display('Unit1');});googletag.cmd.push(function(){googletag.display('Unit2');});});const ajaxLoadContent=function(){};const pagiButton=document.getElementById('load-more-archives');if(pagiButton){pagiButton.addEventListener('click',ajaxLoadContent());}
const relatedArticles=document.getElementById('relatedArticles');if(relatedArticles){const sidebar=document.getElementById('sidebar-container');const sidebarAuthor=sidebar?sidebar.querySelectorAll('.c-author'):'';const articleContent=document.getElementsByClassName('c-article-content__container');const articleParagraphs=document.getElementsByClassName('c-article-content__container')[0].querySelectorAll('p');if(sidebarAuthor.length!==0){sidebarAuthor[sidebarAuthor.length-1].classList.add('c-author--last');}
const relatedArticlesMove=(entries)=>{for(let entry of entries){const cr=entry.contentRect;if(window.screen.width>=1025){sidebar.insertAdjacentElement('beforeend',relatedArticles);}else{if(articleParagraphs[relatedArticles.dataset.position-1].contains(relatedArticles)){return;}
articleParagraphs[relatedArticles.dataset.position-1].insertAdjacentElement('afterend',relatedArticles);}}};new ResizeObserver(relatedArticlesMove).observe(articleContent[0]);}
console.log(window.screen.width);const swiper=new Swiper('.swiper-container',{loop:true,observer:true,observeParents:true,pagination:{el:'.swiper-pagination',},navigation:{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',},scrollbar:{el:'.swiper-scrollbar',},});