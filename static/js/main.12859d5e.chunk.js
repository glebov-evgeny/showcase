(this.webpackJsonpshowcase=this.webpackJsonpshowcase||[]).push([[0],{13:function(e,c,s){},15:function(e,c,s){"use strict";s.r(c);var t=s(1),i=s.n(t),a=s(7),n=s.n(a),r=(s(13),s.p+"static/media/logo.4d543a2a.gif"),l=s(0);function j(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("div",{className:"container header__container",children:[Object(l.jsxs)("a",{href:"//ea-glebov.ru/",target:"_blank",rel:"noreferrer",className:"header__logo",children:[Object(l.jsx)("img",{src:r,alt:"logo"}),Object(l.jsxs)("p",{children:["\u0413\u043b\u0435\u0431\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439",Object(l.jsx)("br",{}),Object(l.jsx)("span",{children:"\u0444\u0440\u043e\u043d\u0442\u0435\u043d\u0434-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"})]})]}),Object(l.jsx)("p",{className:"header__title",children:"React Showcase"})]})})}var d=s(8),b=s(2),m=s(5);function O(e){var c=e.mainId,s=e.displayName,t=e.displayDescription,i=e.price,a=e.granted,n=e.addToBasket,r=void 0===n?Function.prototype:n;return Object(l.jsxs)("div",{className:"item",id:c,children:[Object(l.jsx)("div",{className:"item__img",children:Object(l.jsx)("img",{src:a[0].images.background,alt:s})}),Object(l.jsxs)("div",{className:"item__content",children:[Object(l.jsxs)("div",{className:"item__info",children:[Object(l.jsx)("p",{className:"item__title",children:s}),Object(l.jsx)("p",{className:"item__description",children:t})]}),Object(l.jsxs)("div",{className:"item__action",children:[Object(l.jsx)("p",{className:"item__price",children:i.finalPrice}),Object(l.jsx)("button",{className:"item__btn",onClick:function(){return r({mainId:c})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})]})}function o(e){var c=e.items,s=void 0===c?[]:c,t=e.addToBasket,i=void 0===t?Function.prototype:t;return s.length?Object(l.jsx)("div",{className:"item__list",children:s.map((function(e){return Object(l.jsx)(O,Object(b.a)(Object(b.a)({},e),{},{addToBasket:i}),e.mainId)}))}):Object(l.jsx)("h3",{children:"\u041d\u0438\u0447\u0435\u0433\u043e\u0448\u0435\u043d\u044c\u043a\u0438"})}function h(e){var c=e.quantity,s=void 0===c?0:c;return Object(l.jsx)("div",{className:"basket",children:Object(l.jsx)("div",{className:"basket__content",children:Object(l.jsxs)("div",{className:"basket__icon",children:[Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEJUlEQVR4nO2dTWgWRxjHf3nVpFEURYo9aBX1YjVFBfHgWWz13IMnRa0ieGzv7UkoWCr1A6kSL/VgBS1YaP06KYiCHvwqgvh10KrVaqwSm8QeJsEQk7y7O8/MMzt5fvA/5LC7//3Pzr47z85swDAMwzAMwzAMw/Ex0AncBZ72qwt4O0RPgF+A+To282QO8Jj3wx5Nj7FGEOMw5cIf0DENsznynGoN0AvMVfBbaxpD/m4Bxnnsa6ufHQPgN6r1gIEf5fb4lvOiA3hJ9UZYH99yfnwKnADeUL4BLij4zZYGMG2QAL6meu/IUU+BI0R8DJ8OvAp4QnXV38C8smFWeeJ5jWvtxRW2zZl24CNcbwjOMvSvuBT1pGyQQ8cBRbnYL8OTqg0AsFvMRT6cjHmwNuAR+t0+FfUCS8qG6NMDuoGDHtvnRidwOfZBZwM96F992noFzKoSoE8PAPfC5nfPfeTAd8B9rYOvRv8K1NRDYLJ3ih60ADfRD0JLm3zCq1r7H8oHwEqhfdWJG8AWoE/byDTgX/Svxtj6TCI8KTrRDySmTsvEJscS9EOJpV5gqUxsslxAP5wYOiAVmDTr0A8ntCoPumIwFupD34ilhdxj6AC9wIfACuH9psIjYC3uXXmy5Fwf+lIwp6AcRz8saV0HxkuGFJIc60OfiyYUmNzqQ2dk43mH9I/wYHKpD/UBXwAPtI2UJZf6ULKDriLUvT6U9KCrCHWvD30rH0l86lof+guYEiCP6NS1PrQ5RBga1LE+FG3Q5TsrogjdwK8RjiPJV7hyShbMwM2h176qi2p/mBj0OIR+qEV1HpgYJgYdVqEfahH1AT/hRu/Z0A7cQj/ckfQPcAnYBXwSKANVttM8hDvAJC2DObOIYiss12gZzJkGcJbm4R/SMpg7G2ge/jPcgjZDmAZwm+YNsEXLYO4sp3n454gzAq8F0kE0WyP1H4nMJk4F6QZotlBhH3BV+JjGINaiP8CS1nNcMbEWg7Wl6AcWSl24T/kkTQvwJ/phhdIfclGFYxv6QYVSN2Gn8ojQwK0e0Q4rhN5QgwYAmIlbwKYdmLRqcQsaYCp+HwBMTS+owY/wcKwEfsaVnrvRD7KsngFHgQXSwRiGYRhGaDqAnbgi3Mt+XQV+wL261CZ1f5VpA/bgVk6O9ITRg5uV0Gr+ZGnDLesp+qh3mrgnmbo/b/ZS/nn7R/MnQwejd+vRuvvCseYvxLvZTRX3Ow7YKOxlOFL35801qg/7r5g/f4b7d1dF9WKs+QtxC3qrtG2MY4j7C9EAPt/PvCfmYmSS8heiAXw+YH1CzMXIpO7Pm0VU+1xND3GmfqTuT4RdlD/BneZPjlbgFMVP7iQwwfzJ0oobvo/W3XtwV5bGyaXuT4yFwPe4QUxXv64AO0jjnpq6P8MwDMMwDMMwMuN/Ke1OkETMocoAAAAASUVORK5CYII=",alt:"icon basket"}),s?Object(l.jsx)("div",{className:"basket__quantity",children:s}):null]})})})}function v(){return Object(l.jsxs)("div",{className:"preloader-wrapper small active",children:[Object(l.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(l.jsx)("div",{className:"circle-clipper left",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"gap-patch",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"circle-clipper right",children:Object(l.jsx)("div",{className:"circle"})})]}),Object(l.jsxs)("div",{className:"spinner-layer spinner-red",children:[Object(l.jsx)("div",{className:"circle-clipper left",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"gap-patch",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"circle-clipper right",children:Object(l.jsx)("div",{className:"circle"})})]}),Object(l.jsxs)("div",{className:"spinner-layer spinner-yellow",children:[Object(l.jsx)("div",{className:"circle-clipper left",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"gap-patch",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"circle-clipper right",children:Object(l.jsx)("div",{className:"circle"})})]}),Object(l.jsxs)("div",{className:"spinner-layer spinner-green",children:[Object(l.jsx)("div",{className:"circle-clipper left",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"gap-patch",children:Object(l.jsx)("div",{className:"circle"})}),Object(l.jsx)("div",{className:"circle-clipper right",children:Object(l.jsx)("div",{className:"circle"})})]})]})}function x(e){var c=Object(t.useState)([]),s=Object(m.a)(c,2),i=s[0],a=s[1],n=Object(t.useState)(!0),r=Object(m.a)(n,2),j=r[0],O=r[1],x=Object(t.useState)([]),p=Object(m.a)(x,2),u=p[0],N=p[1];return Object(t.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"23453e0c-32194e3b-228834ea-2070cc4e"}}).then((function(e){return e.json()})).then((function(e){e.shop&&a(e.shop),O(!1)}))}),[]),Object(l.jsx)("main",{className:"main",children:Object(l.jsxs)("div",{className:"main__container container",children:[Object(l.jsx)(h,{quantity:u.length}),j?Object(l.jsx)(v,{}):Object(l.jsx)(o,{items:i,addToBasket:function(e){var c=u.findIndex((function(c){return c.mainId===e.mainId}));if(c<0){var s=Object(b.a)(Object(b.a)({},e),{},{quantity:1});N([].concat(Object(d.a)(u),[s]))}else{var t=u.map((function(e,s){return s===c?Object(b.a)(Object(b.a)({},e),{},{quantity:e.quantity+1}):e}));N(t)}}})]})})}function p(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("div",{className:"container footer__container",children:[Object(l.jsxs)("p",{children:["\u25cb ",(new Date).getFullYear()," \u0433\u043e\u0434"]}),Object(l.jsx)("a",{href:"//ea-glebov.ru/",target:"_blank",rel:"noreferrer",children:"Repository"})]})})}var u=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(x,{}),Object(l.jsx)(p,{})]})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.12859d5e.chunk.js.map