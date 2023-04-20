"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[222],{8222:(f,c,r)=>{r.r(c),r.d(c,{MessgaesModule:()=>U});var i=r(6895),u=r(8635),e=r(8274),a=r(2340),l=r(529);let d=(()=>{class s{constructor(t){this.http=t,this.msgApi=a.N.apiUrl+"students/messages"}getMessages(){return this.http.get(this.msgApi)}getMsg(t){return this.http.get(`${this.msgApi}/${t}`)}deleteMsg(t){this.http.delete(`${this.msgApi}/${t}`)}setRead(t){return this.http.post(`${a.N.apiUrl}students/read/${t}`,{read:!0})}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(l.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),v=(()=>{class s{transform(t,...o){if(t){const p=Math.floor((+new Date-+new Date(t))/1e3);if(p<29)return"Just now";const h={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};let g;for(const m in h)if(g=Math.floor(p/h[m]),g>0)return 1===g?g+" "+m+" ago":g+" "+m+"s ago"}return t}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275pipe=e.Yjl({name:"dateAgo",type:s,pure:!0}),s})();function x(s,n){if(1&s&&(e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4),e._UZ(4,"div",5),e.TgZ(5,"div",6),e._uU(6),e.qZA()(),e.TgZ(7,"div",7)(8,"div",8),e._uU(9),e.ALo(10,"dateAgo"),e.qZA()()(),e.TgZ(11,"div",9)(12,"div",10),e._uU(13),e.qZA()(),e.TgZ(14,"div")(15,"div",11)(16,"div",12)(17,"div",13),e.O4$(),e.TgZ(18,"svg",14),e._UZ(19,"path",15),e.qZA(),e.kcU(),e.TgZ(20,"span"),e._uU(21,"0"),e.qZA()(),e.TgZ(22,"div",13),e.O4$(),e.TgZ(23,"svg",14),e._UZ(24,"path",16),e.qZA(),e.kcU(),e.TgZ(25,"span"),e._uU(26,"0"),e.qZA()()()()()()()),2&s){const t=e.oxw();e.xp6(6),e.Oqu(t.message.name),e.xp6(3),e.Oqu(e.lcZ(10,3,t.message.created_at)),e.xp6(4),e.hij(" ",t.message.message," ")}}let M=(()=>{class s{constructor(t,o){this.route=t,this.msgService=o}ngOnInit(){this.route.params.subscribe(t=>{let o="";t.id&&(o=t.id,this.setread(o))})}getMsg(t){this.msgService.getMsg(t).subscribe(o=>{this.message=o})}setread(t){this.msgService.setRead(t).subscribe(o=>{this.message=o})}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(u.gz),e.Y36(d))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-message-detail"]],decls:1,vars:1,consts:[["class","flex items-center justify-center min-h-screen",4,"ngIf"],[1,"flex","items-center","justify-center","min-h-screen"],[1,"rounded-xl","border","p-5","shadow-md","w-9/12","bg-white"],[1,"flex","w-full","items-center","justify-between","border-b","pb-3"],[1,"flex","items-center","space-x-3"],[1,"h-8","w-8","rounded-full","bg-slate-400"],[1,"text-lg","font-bold","text-slate-700"],[1,"flex","items-center","space-x-8"],[1,"text-xs","text-neutral-500"],[1,"mt-4","mb-6"],[1,"text-sm","text-neutral-600"],[1,"flex","items-center","justify-between","text-slate-500"],[1,"flex","space-x-4","md:space-x-8"],[1,"flex","cursor-pointer","items-center","transition","hover:text-slate-600"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke","currentColor","stroke-width","2",1,"mr-1.5","h-5","w-5"],["stroke-linecap","round","stroke-linejoin","round","d","M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"],["stroke-linecap","round","stroke-linejoin","round","d","M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"]],template:function(t,o){1&t&&e.YNc(0,x,27,5,"div",0),2&t&&e.Q6J("ngIf",o.message)},dependencies:[i.O5,v]}),s})();var Z=r(4571);const y=function(s){return["detail",s]};function A(s,n){if(1&s&&(e.TgZ(0,"li",6)(1,"span"),e._uU(2),e.ALo(3,"excerpt"),e.qZA(),e.TgZ(4,"div",7)(5,"span"),e._uU(6),e.qZA(),e._uU(7,", "),e.TgZ(8,"span",8),e._uU(9),e.ALo(10,"date"),e.qZA()()()),2&s){const t=n.$implicit;e.Q6J("routerLink",e.VKq(10,y,t.id))("ngClass",t.read?"bg-white hover:bg-sky-100":"bg-green-400 hover:bg-green-300"),e.xp6(2),e.Oqu(e.xi3(3,5,t.message,50)),e.xp6(4),e.Oqu(t.name),e.xp6(3),e.Oqu(e.lcZ(10,8,t.created_at))}}const b=[{path:"",component:(()=>{class s{constructor(t){this.mesService=t}ngOnInit(){this.getMessages()}getMessages(){this.messages=this.mesService.getMessages()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(d))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-messgaes"]],decls:9,vars:3,consts:[[1,"mt-32"],[1,"px-4","sm:px-8","max-w-5xl","m-auto"],[1,"text-center","font-semibold","text-sm"],[1,"mt-2","text-center","text-xs","mb-4","text-gray-500"],[1,"border","border-gray-200","rounded","overflow-hidden","shadow-md"],["class","flex cursor-pointer justify-between px-4 py-2 bg-white hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out",3,"routerLink","ngClass",4,"ngFor","ngForOf"],[1,"flex","cursor-pointer","justify-between","px-4","py-2","bg-white","hover:text-sky-900","border-b","last:border-none","border-gray-200","transition-all","duration-300","ease-in-out",3,"routerLink","ngClass"],[1,"flex","justify-end"],[1,"mx-2"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),e._uU(3,"\u0627\u0644\u0631\u0633\u0627\u0626\u0644"),e.qZA(),e.TgZ(4,"p",3),e._uU(5,"\u0644\u0627\u0626\u062d\u0629 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 "),e.qZA(),e.TgZ(6,"ul",4),e.YNc(7,A,11,12,"li",5),e.ALo(8,"async"),e.qZA()()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",e.lcZ(8,1,o.messages)))},dependencies:[i.mk,i.sg,u.rH,i.Ov,i.uU,Z.x]}),s})()},{path:"detail/:id",component:M}];let w=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.Bz.forChild(b),u.Bz]}),s})();var T=r(4466);let U=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[i.ez,w,T.m]}),s})()},4466:(f,c,r)=>{r.d(c,{m:()=>e});var i=r(6895),u=r(8274);let e=(()=>{class a{}return a.\u0275fac=function(d){return new(d||a)},a.\u0275mod=u.oAB({type:a}),a.\u0275inj=u.cJS({imports:[i.ez]}),a})()}}]);