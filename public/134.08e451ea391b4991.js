"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[134],{4134:(L,u,n)=>{n.r(u),n.d(u,{CoursesListModule:()=>v});var i=n(6895),l=n(2019),t=n(8256),c=n(1481),a=n(2672),m=n(4984),d=n(667);function p(e,s){1&e&&t._UZ(0,"app-spinner",3)}const f=function(e){return["course",e]};function x(e,s){if(1&e&&(t.TgZ(0,"div",6)(1,"div",7),t._UZ(2,"img",8),t.qZA(),t.TgZ(3,"div",9)(4,"h2",10),t._uU(5),t.qZA(),t.TgZ(6,"p",11),t._uU(7),t.ALo(8,"excerpt"),t.qZA(),t.TgZ(9,"a",12),t._uU(10,"\u0627\u0644\u0645\u0632\u064a\u062f "),t.O4$(),t.TgZ(11,"svg",13),t._UZ(12,"path",14),t.qZA()()()()),2&e){const o=s.$implicit,r=s.index;t.xp6(1),t.Q6J("ngClass",r%2==1?"sm:order-1 order-first sm:mr-10":"sm:ml-10 order-2"),t.xp6(1),t.s9C("alt",o.name),t.Q6J("src",o.image,t.LSH),t.xp6(1),t.Q6J("ngClass",r%2==1?"sm:order-2 order-first sm:mr-10":"sm:ml-10 order-1"),t.xp6(2),t.Oqu(o.name),t.xp6(2),t.hij(" ",t.xi3(8,7,o.description,300)," "),t.xp6(2),t.Q6J("routerLink",t.VKq(10,f,o.id))}}function g(e,s){if(1&e&&(t.TgZ(0,"div",4),t.YNc(1,x,13,12,"div",5),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.courses)}}const C=[{path:"",component:(()=>{class e{constructor(o,r){this.title=o,this.localApi=r}ngOnInit(){this.getCourses(),this.title.setTitle("\u062f\u0648\u0631\u0627\u062a \u062a\u0639\u0644\u064a\u0645\u064a\u0629 \u0645\u062a\u0648\u0641\u0631\u0629 \u0627\u0644\u0622\u0646 | \u062a\u062f\u0631\u064a\u0633")}getCourses(){this.courses=this.localApi.getResource("courses").data}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(c.Dx),t.Y36(a.N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-courses-list"]],decls:3,vars:2,consts:[[1,"text-gray-600","body-font"],["size","32","class","container flex justify-center px-5 py-24 mx-auto",4,"ngIf"],["class","container px-5 py-24 mx-auto",4,"ngIf"],["size","32",1,"container","flex","justify-center","px-5","py-24","mx-auto"],[1,"container","px-5","py-24","mx-auto"],["class","flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col",4,"ngFor","ngForOf"],[1,"flex","items-center","lg:w-3/5","mx-auto","border-b","pb-10","mb-10","border-gray-200","sm:flex-row","flex-col"],[1,"sm:w-32","sm:h-32","h-20","w-20","inline-flex","items-center","justify-center","rounded-full","bg-indigo-100","text-indigo-500","flex-shrink-0",3,"ngClass"],[1,"w-full","h-full","rounded-full",3,"src","alt"],[1,"flex-grow","sm:text-right","text-center","mt-6","sm:mt-0",3,"ngClass"],[1,"text-gray-900","text-lg","title-font","font-medium","mb-2"],[1,"leading-relaxed","text-base"],[1,"mt-3","text-indigo-500","inline-flex","items-center",3,"routerLink"],["fill","none","stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","viewBox","0 0 24 24",1,"w-4","h-4","ml-2","rotate-180"],["d","M5 12h14M12 5l7 7-7 7"]],template:function(o,r){1&o&&(t.TgZ(0,"section",0),t.YNc(1,p,1,0,"app-spinner",1),t.YNc(2,g,2,1,"div",2),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",!r.courses),t.xp6(1),t.Q6J("ngIf",r.courses))},dependencies:[i.mk,i.sg,i.O5,l.yS,m.O,d.x],styles:["section[_ngcontent-%COMP%]{justify-content:center;align-items:center;gap:12px;border-bottom:1px solid black;display:flex;text-align:center;padding:8px 32px}.course-text[_ngcontent-%COMP%], .actions[_ngcontent-%COMP%]{padding:64px 0;font-size:1.5rem;flex:1}.pair[_ngcontent-%COMP%]{background-color:#fbfbfb}td-button[_ngcontent-%COMP%]{margin:6px 12px}"]}),e})()},{path:"course/:id",loadChildren:()=>Promise.all([n.e(592),n.e(107)]).then(n.bind(n,107)).then(e=>e.CourseDetailModule)}];let h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.Bz.forChild(C),l.Bz]}),e})();var y=n(4466);let v=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[i.ez,h,y.m]}),e})()}}]);