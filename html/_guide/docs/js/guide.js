let GUIDE = {
	init : function(){
		this.tabMenu.init();
		this.tog.init();
		this.gnb.init();
		this.xscroll.init();
	},
	tabMenu: {
		init: function(){
			this.evt();
		},
		evt: function(){
			$wrap = $('.tab_area');
			$menu = $wrap.find('.tab_menu li a');
			$box = $wrap.find('.box');
			$box.first().css({display: 'block'});
			$box.each(function(i){
				$(this).attr('data-tab' , Number(i));
				currentBox = Number($(this).attr('data-tab')); 
			});
			$menu.on("click", function() {
				_this = $(this);
				currentIndex = $(this).closest('li').index();
				_this.parent().addClass('active').siblings().removeClass('active');
				$(this).closest('.tab_area').find('.box[data-tab=' + currentIndex + ']').show().siblings().hide();
			});
		},
		set: function(){}
	},
	tog : {
		init : function(){
			this.evt();	
		},
		evt: function(){
			$(document).on('click', '.tog-btn', function(){
				var _this = $('.tog-btn');
 				var type = $(this).closest("h2").next().attr("data-show");
				if(type == 'hide'){
					$('[data-show]').attr("data-show", "show");
					_this.css({
						transform: "rotate(180deg)"
					})
				}else {
					$('[data-show]').attr("data-show", "hide");
					_this.css({
						transform: "rotate(0deg)"
					})
				};
			});
		}
	},
	gnb : {
		init : function(){
			this.open();
			this.close();
		},
		open : function(){
			$(document).on('click', '.bt.open', function(){
				var _this = $(this);
				_this.next('.gnb').animate({
					right: '0px',
				});
				_this.closest('body').css({
					overflow: 'hidden',
				});
				_this.closest('.gnb-area').addClass('active');
			});
		},
		close : function(){
			$(document).on('click', '.bt.close', function(){
				var _this = $(this);
				_this.closest('.gnb').animate({
					right: '-81%',
				});
				_this.closest('body').css({
					overflow: 'auto',
				});
				_this.closest('.gnb-area').removeClass('active')
			});
		}
	},
	xscroll : {
        init:function(){
            this.scroll();
        },
        scroll : function(){
            let xPosition = $('.xscroll');
            $(window).on('scroll load', function(){
                let allHeight = $(window).scrollTop() / ( $(document).height() - visualViewport.height ) * 100; 
                xPosition.children().width(allHeight + '%' );
            });
        }
    },
};

const waiAriaTab = function waiAriaTab() {
	let tabs = document.querySelectorAll('[role="tab"]');
	let tabLists = document.querySelectorAll('[role="tablist"]');

	tabs.forEach(function (tab) {
		if(tab.getAttribute("aria-selected") == "true") {
			tab.tabIndex = 0;
		}else{
			tab.tabIndex = -1;
		}
		
		tab.addEventListener("click", function (e) {
			let parent = tab.parentNode.tagName === "LI" ? tab.parentNode.parentNode : tab.parentNode;
			let panelWrap = document.querySelector('#' + tab.getAttribute("aria-controls")).parentNode;

			parent.querySelectorAll('[aria-selected="true"]').forEach(function (t) {
				t.setAttribute("aria-selected", false);
				t.tabIndex = -1;
			});

			tab.setAttribute("aria-selected", true);
			tab.tabIndex = 0;
			
			panelWrap.querySelectorAll('[role="tabpanel"]').forEach(function (p) {
				if(document.querySelector('[aria-controls="'+p.id+'"]').getAttribute("aria-selected") !== "true" ){
					p.style.display = "none";
				}
			});

			panelWrap.querySelector('#' + tab.getAttribute("aria-controls")).style.display = "block";
			e.preventDefault();
		});
	});

	tabLists.forEach(function (tabList) {
		tabList.addEventListener("keydown", function (e) {
			// const target = e.target;
			let parent = tabList.parentNode.tagName === "LI" ? tabList.parentNode.parentNode : tabList.parentNode;
			let innerTabs = parent.querySelectorAll('[role="tab"]');
			
			let tabFocus = 0;
			for(let i=0; i < innerTabs.length; i++){
				if(innerTabs[i].getAttribute("aria-selected") == "true") {
					tabFocus = i;
				}
			}
			
			if (e.keyCode === 39 || e.keyCode === 37 || e.keyCode === 36 || e.keyCode === 35) {
				innerTabs[tabFocus].tabIndex = -1;
				if (e.keyCode === 39) {
					// right
					tabFocus++;
					if (tabFocus >= innerTabs.length) {
						tabFocus = 0;
					}
				} else if (e.keyCode === 37) {
					// left
					tabFocus--;
					if (tabFocus < 0) {
						tabFocus = innerTabs.length - 1;
					}
				} else if (e.keyCode === 36) {
					// home
					tabFocus = 0;
				} else if (e.keyCode === 35) {
					// end
					tabFocus = innerTabs.length - 1;
				}
				innerTabs[tabFocus].tabIndex = 0;
				innerTabs[tabFocus].click();
				innerTabs[tabFocus].focus();
				e.preventDefault();
			}
		});
	});
};

$(document).ready(function(){
	GUIDE.init();
	waiAriaTab();

	$(".anchor").click(function(e){
		// Prevents the default action to be triggered.
		e.preventDefault();

		$('html,body').animate({
				scrollTop : $(this.hash).offset().top-60
		}, 500);
	});
});