(this.webpackJsonpshowcase=this.webpackJsonpshowcase||[]).push([[0],{13:function(A,e,c){},15:function(A,e,c){"use strict";c.r(e);var t=c(2),s=c.n(t),i=c(7),a=c.n(i),n=(c(13),c.p+"static/media/logo.4d543a2a.gif"),r=c(0);function l(){return Object(r.jsx)("header",{className:"header",children:Object(r.jsxs)("div",{className:"container header__container",children:[Object(r.jsxs)("a",{href:"//ea-glebov.ru/",target:"_blank",rel:"noreferrer",className:"header__logo",children:[Object(r.jsx)("img",{src:n,alt:"logo"}),Object(r.jsxs)("p",{children:["\u0413\u043b\u0435\u0431\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439",Object(r.jsx)("br",{}),Object(r.jsx)("span",{children:"\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"})]})]}),Object(r.jsx)("p",{className:"header__title",children:"React Showcase"})]})})}var j=c(8),d=c(1),o=c(3);function v(A){var e=A.mainId,c=A.displayName,t=A.displayDescription,s=A.price,i=A.granted,a=A.addToBasket,n=void 0===a?Function.prototype:a,l=s.finalPrice;return Object(r.jsxs)("div",{className:"item",id:e,children:[Object(r.jsx)("div",{className:"item__img",children:Object(r.jsx)("img",{src:i[0].images.background,alt:c})}),Object(r.jsxs)("div",{className:"item__content",children:[Object(r.jsxs)("div",{className:"item__info",children:[Object(r.jsx)("p",{className:"item__title",children:c}),Object(r.jsx)("p",{className:"item__description",children:t})]}),Object(r.jsxs)("div",{className:"item__action",children:[Object(r.jsx)("p",{className:"item__price",children:l}),Object(r.jsx)("button",{className:"item__btn",onClick:function(){return n({mainId:e,displayName:c,itemPrice:l})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})]})}function b(A){var e=A.items,c=void 0===e?[]:e,t=A.addToBasket,s=void 0===t?Function.prototype:t;return c.length?Object(r.jsx)("div",{className:"item__list",children:c.slice(0,15).map((function(A){return Object(r.jsx)(v,Object(d.a)(Object(d.a)({},A),{},{addToBasket:s}),A.mainId)}))}):Object(r.jsx)("h3",{children:"\u041d\u0438\u0447\u0435\u0433\u043e\u0448\u0435\u043d\u044c\u043a\u0438"})}function O(A){var e=A.quantity,c=void 0===e?0:e,t=A.handleBasketShow,s=void 0===t?Function.prototype:t;return Object(r.jsx)("div",{className:"basket",children:Object(r.jsx)("div",{className:"basket__content",onClick:s,children:Object(r.jsxs)("div",{className:"basket__icon",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEJUlEQVR4nO2dTWgWRxjHf3nVpFEURYo9aBX1YjVFBfHgWWz13IMnRa0ieGzv7UkoWCr1A6kSL/VgBS1YaP06KYiCHvwqgvh10KrVaqwSm8QeJsEQk7y7O8/MMzt5fvA/5LC7//3Pzr47z85swDAMwzAMwzAMw/Ex0AncBZ72qwt4O0RPgF+A+To282QO8Jj3wx5Nj7FGEOMw5cIf0DENsznynGoN0AvMVfBbaxpD/m4Bxnnsa6ufHQPgN6r1gIEf5fb4lvOiA3hJ9UZYH99yfnwKnADeUL4BLij4zZYGMG2QAL6meu/IUU+BI0R8DJ8OvAp4QnXV38C8smFWeeJ5jWvtxRW2zZl24CNcbwjOMvSvuBT1pGyQQ8cBRbnYL8OTqg0AsFvMRT6cjHmwNuAR+t0+FfUCS8qG6NMDuoGDHtvnRidwOfZBZwM96F992noFzKoSoE8PAPfC5nfPfeTAd8B9rYOvRv8K1NRDYLJ3ih60ADfRD0JLm3zCq1r7H8oHwEqhfdWJG8AWoE/byDTgX/Svxtj6TCI8KTrRDySmTsvEJscS9EOJpV5gqUxsslxAP5wYOiAVmDTr0A8ntCoPumIwFupD34ilhdxj6AC9wIfACuH9psIjYC3uXXmy5Fwf+lIwp6AcRz8saV0HxkuGFJIc60OfiyYUmNzqQ2dk43mH9I/wYHKpD/UBXwAPtI2UJZf6ULKDriLUvT6U9KCrCHWvD30rH0l86lof+guYEiCP6NS1PrQ5RBga1LE+FG3Q5TsrogjdwK8RjiPJV7hyShbMwM2h176qi2p/mBj0OIR+qEV1HpgYJgYdVqEfahH1AT/hRu/Z0A7cQj/ckfQPcAnYBXwSKANVttM8hDvAJC2DObOIYiss12gZzJkGcJbm4R/SMpg7G2ge/jPcgjZDmAZwm+YNsEXLYO4sp3n454gzAq8F0kE0WyP1H4nMJk4F6QZotlBhH3BV+JjGINaiP8CS1nNcMbEWg7Wl6AcWSl24T/kkTQvwJ/phhdIfclGFYxv6QYVSN2Gn8ojQwK0e0Q4rhN5QgwYAmIlbwKYdmLRqcQsaYCp+HwBMTS+owY/wcKwEfsaVnrvRD7KsngFHgQXSwRiGYRhGaDqAnbgi3Mt+XQV+wL261CZ1f5VpA/bgVk6O9ITRg5uV0Gr+ZGnDLesp+qh3mrgnmbo/b/ZS/nn7R/MnQwejd+vRuvvCseYvxLvZTRX3Ow7YKOxlOFL35801qg/7r5g/f4b7d1dF9WKs+QtxC3qrtG2MY4j7C9EAPt/PvCfmYmSS8heiAXw+YH1CzMXIpO7Pm0VU+1xND3GmfqTuT4RdlD/BneZPjlbgFMVP7iQwwfzJ0oobvo/W3XtwV5bGyaXuT4yFwPe4QUxXv64AO0jjnpq6P8MwDMMwDMMwMuN/Ke1OkETMocoAAAAASUVORK5CYII=",alt:"icon basket"}),c?Object(r.jsx)("div",{className:"basket__quantity",children:c}):null]})})})}function f(A){var e=A.mainId,c=A.displayName,t=A.itemPrice,s=A.quantity,i=A.removeFromBasket,a=void 0===i?Function.prototype:i,n=A.incQuantity,l=void 0===n?Function.prototype:n,j=A.decQuantity,d=void 0===j?Function.prototype:j;return Object(r.jsxs)("div",{className:"basket__item",id:e,children:[Object(r.jsx)("p",{className:"basket__item-title",children:c}),Object(r.jsx)("div",{className:"basket__item-action",onClick:function(){return d(e)},children:"-"}),Object(r.jsxs)("p",{className:"basket__item-quantity",children:["x ",s]}),Object(r.jsx)("div",{className:"basket__item-action",onClick:function(){return l(e)},children:"+"}),Object(r.jsx)("span",{children:"="}),Object(r.jsx)("p",{className:"basket__item-price",children:t*s}),Object(r.jsx)("div",{className:"basket__item-delete",onClick:function(){return a(e)},children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAASFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrhKybAAAAF3RSTlMAGdrn8NaOG8L24IB9OCgQrKpsZUshB7x0KHgAAAFvSURBVFjDnJPbroMgFERB1IJCvXf+/0+PpiFksuUgXW/uuEZgUOXQu59tZ5wznZ39rlUVoR8AZujDU3vyyeYMPz3RxxZZ2rEYsbIuI9Z/9cOiiD3y/ubwALfl/B4P6W/1z4LHLJ8b36ICKxMWVLEU9l99Dhuq2ah/h2rcoRIWP2CTv+In1uhPLZi2D6MBYcbQi9finzWCMe9zqDsg0elz9DZgRloA+1cC+5RAS/DC/6KbOGq+vkzw6mLg1MuPCcmPCbza4ZoFccMogXxxY8PtKPFqTv8VnzKfG8TJUkLyU2O0Bw3GaE5gXxswWu2IUGWSWC2zU4mUkPe5yBmEOHYuRTAri2IC+4xVHQRUHVUq6ZRBMYF9xiiHYgL7jPsrvQ5oAIBhGIbxZ20QJnDp/9YmfUBfoR+xv7EHqUe5l6nXeQOlI61DdWO9i6Wrbcu1630BYxGnIWsxb0FzUbdh+3H/heOV56Xrte/F89X35bv1H7PO3s20ACMhAAAAAElFTkSuQmCC",alt:"close"})})]})}function m(A){var e=A.order,c=void 0===e?[]:e,t=A.handleBasketShow,s=void 0===t?Function.prototype:t,i=A.removeFromBasket,a=void 0===i?Function.prototype:i,n=A.incQuantity,l=void 0===n?Function.prototype:n,j=A.decQuantity,o=void 0===j?Function.prototype:j,v=c.reduce((function(A,e){return A+e.itemPrice*e.quantity}),0);return Object(r.jsxs)("div",{className:"basket__list",children:[Object(r.jsx)("h2",{className:"basket__list-title",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430:"}),c.length?c.map((function(A){return Object(r.jsx)(f,Object(d.a)(Object(d.a)({},A),{},{removeFromBasket:a,incQuantity:l,decQuantity:o}),A.mainId)})):Object(r.jsx)("div",{className:"basket__item-clear",children:"\u0422\u043e\u0432\u0430\u0440\u044b \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b"}),c.length?Object(r.jsxs)("div",{className:"basket__list-info",children:[Object(r.jsx)("h3",{className:"basket__list-total",children:"\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c:"}),Object(r.jsx)("p",{className:"basket__list-currentPrice",children:v}),Object(r.jsx)("div",{className:"basket__list-btn",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435"})]}):null,Object(r.jsx)("img",{className:"basket__list-close",src:"data:image/png;base64,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",alt:"close",onClick:s})]})}function u(){return Object(r.jsxs)("div",{className:"preloader-wrapper small active",children:[Object(r.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]}),Object(r.jsxs)("div",{className:"spinner-layer spinner-red",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]}),Object(r.jsxs)("div",{className:"spinner-layer spinner-yellow",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]}),Object(r.jsxs)("div",{className:"spinner-layer spinner-green",children:[Object(r.jsx)("div",{className:"circle-clipper left",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"gap-patch",children:Object(r.jsx)("div",{className:"circle"})}),Object(r.jsx)("div",{className:"circle-clipper right",children:Object(r.jsx)("div",{className:"circle"})})]})]})}function h(A){var e=A.name,c=void 0===e?"":e,s=A.closeAlert,i=void 0===s?Function.prototype:s;return Object(t.useEffect)((function(){var A=setTimeout(i,1e3);return function(){clearTimeout(A)}}),[c]),Object(r.jsx)("div",{className:"alert",id:"alert",children:Object(r.jsxs)("div",{className:"alert__item",children:[Object(r.jsx)("span",{children:"'"}),c,Object(r.jsx)("span",{children:"'"})," - \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function x(A){var e=Object(t.useState)([]),c=Object(o.a)(e,2),s=c[0],i=c[1],a=Object(t.useState)(!0),n=Object(o.a)(a,2),l=n[0],v=n[1],f=Object(t.useState)([]),x=Object(o.a)(f,2),p=x[0],g=x[1],w=Object(t.useState)(!1),N=Object(o.a)(w,2),D=N[0],B=N[1],P=Object(t.useState)(""),C=Object(o.a)(P,2),Y=C[0],G=C[1],F=function(){B(!D)};return Object(t.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"23453e0c-32194e3b-228834ea-2070cc4e"}}).then((function(A){return A.json()})).then((function(A){A.shop&&i(A.shop),v(!1)}))}),[]),Object(r.jsx)("main",{className:"main",children:Object(r.jsxs)("div",{className:"main__container container",children:[Object(r.jsx)(O,{quantity:p.length,handleBasketShow:F}),l?Object(r.jsx)(u,{}):Object(r.jsx)(b,{items:s,addToBasket:function(A){var e=p.findIndex((function(e){return e.mainId===A.mainId}));if(e<0){var c=Object(d.a)(Object(d.a)({},A),{},{quantity:1});g([].concat(Object(j.a)(p),[c]))}else{var t=p.map((function(A,c){return c===e?Object(d.a)(Object(d.a)({},A),{},{quantity:A.quantity+1}):A}));g(t)}G(A.displayName)}}),D&&Object(r.jsx)(m,{order:p,handleBasketShow:F,removeFromBasket:function(A){var e=p.filter((function(e){return e.mainId!==A}));g(e)},incQuantity:function(A){var e=p.map((function(e){if(e.mainId===A){var c=e.quantity+1;return Object(d.a)(Object(d.a)({},e),{},{quantity:c})}return e}));g(e)},decQuantity:function(A){var e=p.map((function(e){if(e.mainId===A){var c=e.quantity-1;return Object(d.a)(Object(d.a)({},e),{},{quantity:c>=1?c:1})}return e}));g(e)}}),Y&&Object(r.jsx)(h,{name:Y,closeAlert:function(){G("")}})]})})}function p(){return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsxs)("div",{className:"container footer__container",children:[Object(r.jsxs)("p",{children:["\u25cb ",(new Date).getFullYear()," \u0433\u043e\u0434"]}),Object(r.jsx)("a",{href:"//ea-glebov.ru/",target:"_blank",rel:"noreferrer",children:"Repository"})]})})}var g=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)(x,{}),Object(r.jsx)(p,{})]})};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.268095ba.chunk.js.map