
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"type":"dark"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"https://nus-cs2113-ay2122s1.github.io/website","title":"Home"}},[_c('span',{staticClass:"badge badge-pill badge-warning }}"},[_c('span',[_c('span',{staticClass:"fas fa-chevron-circle-left",attrs:{"aria-hidden":"true"}})]),_v(" Go to CS2113/T main site")])])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/index.html"}},[_c('span',[_v("Dashboards home")])])]),_v(" "),_c('li',{attrs:{"tags":"m--cs2103 m--cs2113 m--tic2002 m--tic4001 m--tic4002"}},[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/contents/participation.html"}},[_c('span',[_c('strong',[_v("Participation dashboard")])])])]),_v(" "),_c('li',{attrs:{"tags":"m--cs2103 m--cs2113 m--tic4002"}},[_c('a',{staticClass:"nav-link",attrs:{"href":"/dashboards/contents/forum-activities.html"}},[_c('span',[_c('strong',[_v("Forum dashboard")])])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",attrs:{"tags":"m--cs2103 m--cs2113 m--tic4001 m--tic4002"},scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_v("iP dashboards")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/ip-progress.html"}},[_c('span',[_c('span',{staticClass:"fas fa-tasks",attrs:{"aria-hidden":"true"}}),_v(" iP progress")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/ip-comments.html"}},[_c('span',[_c('svg',{staticClass:"octicon octicon-comment",attrs:{"version":"1.1","width":"16","height":"16","viewBox":"0 0 16 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"}})]),_v(" iP comments")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs2113-ay2122s1.github.io/ip-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=java~md~fxml~sh~bat~gradle~txt","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fas fa-chart-area",attrs:{"aria-hidden":"true"}}),_v(" iP Code")])])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",attrs:{"tags":"m--cs2103 m--cs2113 m--tic4001 m--tic4002"},scopedSlots:_u([{key:"header",fn:function(){return [_c('strong',[_v("tP dashboards")])]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/tp-progress.html"}},[_c('span',[_c('span',{staticClass:"fas fa-tasks",attrs:{"aria-hidden":"true"}}),_v(" tP progress")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/dashboards/contents/tp-comments.html"}},[_c('span',[_v("tP comments")])])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs2113-ay2122s1.github.io/tp-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByRepos&breakdown=true&checkedFileTypes=docs~functional-code~test-code~other","target":"_blank"}},[_c('span',[_c('span',{staticClass:"fas fa-chart-area",attrs:{"aria-hidden":"true"}}),_v(" tP Code")])])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"},[_c('overlay-source',{staticClass:"nav nav-pills flex-column my-0 small no-flex-wrap",attrs:{"id":"mb-page-nav","tag-name":"nav","to":"mb-page-nav"}},[_c('a',{staticClass:"nav-link py-1",attrs:{"href":"#tp-comments-dashboard"}},[_v("tP comments dashboard‎")])])],1)])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h1',{staticClass:"display-4",attrs:{"id":"tp-comments-dashboard"}},[_c('span',{staticClass:"anchor",attrs:{"id":"tp-comments-dashboard"}}),_v("tP comments dashboard"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#tp-comments-dashboard","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Sorted based on the number of comments given to "),_c('em',[_v("others'")]),_v(" PRs, but also showing comments on own PRs and other comments given. "),_c('strong',[_v("Updated weekly")]),_v(".")]),_v(" "),_c('div',[_c('p',[_v("[We have not started updating this dashboard yet]")])]),_v(" "),_c('i',{staticClass:"fa fa-arrow-circle-up fa-lg d-print-none",attrs:{"id":"scroll-top-button","onclick":"handleScrollTop()","aria-hidden":"true"}})])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('small',[_v("["),_c('span',[_c('strong',[_v("Powered by")])]),_v(" "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"30"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 3.0.6")]),_v(", generated on Sun, 12 Sept 2021, 0:41:32 GMT+8]")])])])}
}];
  