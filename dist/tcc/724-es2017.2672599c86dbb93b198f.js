(self.webpackChunktcc=self.webpackChunktcc||[]).push([[724],{4724:function(t,i,r){"use strict";r.r(i),r.d(i,{MaquinaModule:function(){return V}});var e=r(2133),o=r(1116),n=r(1462);class a{}class s{}var l=r(7368),u=r(1483),c=r(611),m=r(529),d=r(2693);let g=(()=>{class t{constructor(t){this.http=t,this.API=`${m.N.API}setor`}list(){return this.http.get(this.API).pipe((0,c.q)(1))}salvarSetor(t){return this.http.post(this.API,JSON.stringify(t),{headers:(new d.WM).set("Content-Type","application/json"),responseType:"text"}).pipe((0,c.q)(1))}}return t.\u0275fac=function(i){return new(i||t)(l.LFG(d.eN))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h=function(t){return{"is-invalid":t}};let p=(()=>{class t{constructor(t,i,r,e){this.formBuilder=t,this.modalService=i,this.setorservice=r,this.bsModalRef=e,this.submitted=!1,this.config={keyboard:!0}}ngOnInit(){this.formulario=this.formBuilder.group({nome:[null,[n.kI.required,n.kI.minLength(3)]],ramal:[null,[n.kI.required,n.kI.minLength(4)]]})}onSubmit(){if(this.submitted=!0,this.formulario.valid){let t=new s;t.nome=this.formulario.value.nome,t.ramal=this.formulario.value.ramal,this.setorservice.salvarSetor(t).subscribe(t=>{this.bsModalRef.hide()},t=>{console.log("4"),console.log(t)})}}hasError(t){var i;return null===(i=this.formulario.get(t))||void 0===i?void 0:i.errors}}return t.\u0275fac=function(i){return new(i||t)(l.Y36(n.qu),l.Y36(u.tT),l.Y36(g),l.Y36(u.UZ))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-setor"]],decls:26,vars:7,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","btn-close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"row","md-6"],["for","nome",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nome",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],["for","ramal",1,"col-sm-3","col-form-label"],["type","number","formControlName","ramal",1,"form-control",2,"margin","5px",3,"ngClass"],["type","submit",1,"btn","btn-primary"]],template:function(t,i){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"h4",1),l._uU(2,"Novo Setor"),l.qZA(),l.TgZ(3,"button",2),l.NdJ("click",function(){return i.bsModalRef.hide()}),l.TgZ(4,"span",3),l._uU(5,"\xd7"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"div",4),l.TgZ(7,"form",5),l.NdJ("ngSubmit",function(){return i.onSubmit()}),l.TgZ(8,"legend"),l._uU(9,"Cadastro de Setor"),l.qZA(),l.TgZ(10,"div",6),l.TgZ(11,"label",7),l._uU(12,"Nome:"),l.qZA(),l.TgZ(13,"div",8),l._UZ(14,"input",9),l.TgZ(15,"div",10),l._uU(16,"Digite o nome do setor"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(17,"div",6),l.TgZ(18,"label",11),l._uU(19,"Ramal:"),l.qZA(),l.TgZ(20,"div",8),l._UZ(21,"input",12),l.TgZ(22,"div",10),l._uU(23,"Digite numero do ramal"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(24,"button",13),l._uU(25,"Salvar"),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(7),l.Q6J("formGroup",i.formulario),l.xp6(7),l.Q6J("ngClass",l.VKq(3,h,i.submitted&&i.hasError("nome"))),l.xp6(7),l.Q6J("ngClass",l.VKq(5,h,i.submitted&&i.hasError("ramal"))))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,o.mk,n.wV],styles:[""]}),t})();class f{}var Z=r(2623);let b=(()=>{class t{constructor(t){this.http=t,this.API=`${m.N.API}fabricante`}list(){return this.http.get(this.API).pipe((0,c.q)(1))}salvarFabricante(t){return this.http.post(this.API,JSON.stringify(t),{headers:(new d.WM).set("Content-Type","application/json"),responseType:"text"}).pipe((0,c.q)(1))}}return t.\u0275fac=function(i){return new(i||t)(l.LFG(d.eN))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const v=function(t){return{"is-invalid":t}};let q=(()=>{class t{constructor(t,i,r,e){this.formBuilder=t,this.modalService=i,this.fabricanteService=r,this.bsModalRef=e,this.submitted=!1,this.config={keyboard:!0}}ngOnInit(){this.formulario=this.formBuilder.group({nome:[null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(10)]]})}onSubmit(){if(this.submitted=!0,this.formulario.valid){this.fabricante=new f;let t=new Z.Z;this.fabricante.pessoa=t,this.fabricante.pessoa.nome=this.formulario.value.nome,console.log(this.fabricante),this.fabricanteService.salvarFabricante(this.fabricante).subscribe(t=>{this.bsModalRef.hide()},t=>{console.log(t)})}}hasError(t){var i;return null===(i=this.formulario.get(t))||void 0===i?void 0:i.errors}}return t.\u0275fac=function(i){return new(i||t)(l.Y36(n.qu),l.Y36(u.tT),l.Y36(b),l.Y36(u.UZ))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-fabricante"]],decls:19,vars:4,consts:[[1,"modal-header"],[1,"modal-title","pull-left"],["type","button","aria-label","Close",1,"close","btn-close","pull-right",3,"click"],["aria-hidden","true",1,"visually-hidden"],[1,"modal-body"],[3,"formGroup","ngSubmit"],[1,"row","md-6"],["for","nome",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nome",1,"form-control",2,"margin","5px",3,"ngClass"],[1,"invalid-feedback"],["type","submit",1,"btn","btn-primary"]],template:function(t,i){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"h4",1),l._uU(2,"Novo Fabricante"),l.qZA(),l.TgZ(3,"button",2),l.NdJ("click",function(){return i.bsModalRef.hide()}),l.TgZ(4,"span",3),l._uU(5,"\xd7"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(6,"div",4),l.TgZ(7,"form",5),l.NdJ("ngSubmit",function(){return i.onSubmit()}),l.TgZ(8,"legend"),l._uU(9,"Cadastro de Fabricante"),l.qZA(),l.TgZ(10,"div",6),l.TgZ(11,"label",7),l._uU(12,"Nome:"),l.qZA(),l.TgZ(13,"div",8),l._UZ(14,"input",9),l.TgZ(15,"div",10),l._uU(16,"Digite o nome do Fabricante"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(17,"button",11),l._uU(18,"Salvar"),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(7),l.Q6J("formGroup",i.formulario),l.xp6(7),l.Q6J("ngClass",l.VKq(2,v,i.submitted&&i.hasError("nome"))))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,o.mk],styles:[""]}),t})();var A=r(1279),U=r(1423);function _(t,i){if(1&t&&(l.TgZ(0,"option",19),l._uU(1),l.qZA()),2&t){const t=i.$implicit;l.Q6J("ngValue",t),l.xp6(1),l.AsE(" ",t.id," - ",t.pessoa.nome," ")}}function T(t,i){if(1&t&&(l.TgZ(0,"option",19),l._uU(1),l.qZA()),2&t){const t=i.$implicit;l.Q6J("ngValue",t),l.xp6(1),l.AsE(" ",t.id," - ",t.nome," ")}}function y(t,i){1&t&&(l.TgZ(0,"div",20),l.TgZ(1,"span",21),l._uU(2,"Loading..."),l.qZA(),l.qZA())}const S=function(t){return{"is-invalid":t}};let C=(()=>{class t{constructor(t,i,r,e,o,n,s){this.formBuilder=t,this.route=i,this.router=r,this.maquinaService=e,this.setorService=o,this.fabricanteService=n,this.modalService=s,this.submitted=!1,this.novo=!1,this.inscricao=this.route.params.subscribe(t=>{let i=t.sigla;null==i?(this.novo=!0,this.maquina=new a):this.maquinaService.getMaquina(i).subscribe(t=>{this.maquina=t,t&&this.povoar()})})}ngOnInit(){this.formulario=this.formBuilder.group({sigla:[null,[n.kI.required,n.kI.minLength(3),n.kI.maxLength(3)]],dataCompra:[null,n.kI.required],fabricante:[null,n.kI.required],setor:[null,n.kI.required]}),this.onRefresh()}onRefresh(){this.setor$=this.setorService.list().pipe(),this.fabricante$=this.fabricanteService.list().pipe()}povoar(){var t,i,r,e;this.onRefresh(),null===(t=this.formulario.get("sigla"))||void 0===t||t.setValue(this.maquina.sigla),null===(i=this.formulario.get("dataCompra"))||void 0===i||i.setValue(this.maquina.dataCompra),null===(r=this.formulario.get("fabricante"))||void 0===r||r.setValue(this.maquina.fabricante),null===(e=this.formulario.get("setor"))||void 0===e||e.setValue(this.maquina.setor)}onSubmit(){this.submitted=!0,this.formulario.valid&&(this.maquina.sigla=this.formulario.value.sigla,this.maquina.dataCompra=this.formulario.value.dataCompra,this.maquina.setor=this.formulario.value.setor,this.maquina.fabricante=this.formulario.value.fabricante,this.maquina.status="A",this.maquinaService.salvarMaquina(this.maquina).subscribe(t=>{this.formulario.reset(),this.router.navigate(["/maquina"])},t=>{console.log(t)}))}addSetor(){this.bsModalRef=this.modalService.show(p)}comparar(t,i){return t&&i?t.id===i.id:t===i}addFabricante(){this.bsModalRef=this.modalService.show(q)}hasError(t){var i;return null===(i=this.formulario.get(t))||void 0===i?void 0:i.errors}}return t.\u0275fac=function(i){return new(i||t)(l.Y36(n.qu),l.Y36(A.gz),l.Y36(A.F0),l.Y36(U.P),l.Y36(g),l.Y36(b),l.Y36(u.tT))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-maquina-cadastro"]],decls:46,vars:21,consts:[[3,"formGroup","ngSubmit"],[1,"form-group","row"],["for","sigla",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","autocomplete","off","placeholder","Digite uma Sigla","formControlName","sigla","id","siglaNova",1,"form-control",3,"ngClass"],[1,"invalid-feedback"],["for","dataCompra",1,"col-sm-3","col-form-label"],["type","date","autocomplete","off","formControlName","dataCompra","id","dataCompra",1,"form-control",3,"ngClass"],["for","fabricante",1,"col-sm-3","col-form-label"],[1,"col-sm-8"],["id","fabricante","formControlName","fabricante",1,"form-control",2,"margin","5px",3,"compareWith","ngClass"],[3,"ngValue",4,"ngFor","ngForOf"],[1,"col-sm-1"],["tooltip","adicionar novo Fabricante",1,"bi","bi-plus-circle-fill",2,"font-size","2rem","color","rgb(30, 126, 11)",3,"click"],["for","setor",1,"col-sm-3","col-form-label"],["id","setor","formControlName","setor",1,"form-control",2,"margin","5px",3,"compareWith","ngClass"],["tooltip","adicionar novo setor",1,"bi","bi-plus-circle-fill",2,"font-size","2rem","color","rgb(30, 126, 11)",3,"click"],["type","submit",1,"btn","btn-primary"],["novoFabricante",""],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(t,i){1&t&&(l.TgZ(0,"form",0),l.NdJ("ngSubmit",function(){return i.onSubmit()}),l.TgZ(1,"legend"),l._uU(2,"Cadastro Maquina"),l.qZA(),l._UZ(3,"br"),l.TgZ(4,"div",1),l.TgZ(5,"label",2),l._uU(6,"Sigla:"),l.qZA(),l.TgZ(7,"div",3),l._UZ(8,"input",4),l.TgZ(9,"div",5),l._uU(10,"Digite a sigla"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(11,"div",1),l.TgZ(12,"label",6),l._uU(13,"Data Compra:"),l.qZA(),l.TgZ(14,"div",3),l._UZ(15,"input",7),l.TgZ(16,"div",5),l._uU(17,"Digite a Data da compra"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(18,"div",1),l.TgZ(19,"label",8),l._uU(20,"Fabricante:"),l.qZA(),l.TgZ(21,"div",9),l.TgZ(22,"select",10),l.YNc(23,_,2,3,"option",11),l.ALo(24,"async"),l.qZA(),l.TgZ(25,"div",5),l._uU(26,"Selecione um Fabricante"),l.qZA(),l.qZA(),l.TgZ(27,"div",12),l.TgZ(28,"i",13),l.NdJ("click",function(){return i.addFabricante()}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(29,"div",1),l.TgZ(30,"label",14),l._uU(31,"Setor:"),l.qZA(),l.TgZ(32,"div",9),l.TgZ(33,"select",15),l.YNc(34,T,2,3,"option",11),l.ALo(35,"async"),l.qZA(),l.TgZ(36,"div",5),l._uU(37,"Selecione um Setor"),l.qZA(),l.qZA(),l.TgZ(38,"div",12),l.TgZ(39,"i",16),l.NdJ("click",function(){return i.addSetor()}),l.qZA(),l.qZA(),l.qZA(),l.TgZ(40,"div",1),l.TgZ(41,"div",3),l.TgZ(42,"button",17),l._uU(43,"Salvar"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.YNc(44,y,3,0,"ng-template",null,18,l.W1O)),2&t&&(l.Q6J("formGroup",i.formulario),l.xp6(8),l.Q6J("ngClass",l.VKq(13,S,i.submitted&&i.hasError("sigla"))),l.xp6(7),l.Q6J("ngClass",l.VKq(15,S,i.submitted&&i.hasError("dataCompra"))),l.xp6(7),l.Q6J("compareWith",i.comparar)("ngClass",l.VKq(17,S,i.submitted&&i.hasError("fabricante"))),l.xp6(1),l.Q6J("ngForOf",l.lcZ(24,9,i.fabricante$)),l.xp6(10),l.Q6J("compareWith",i.comparar)("ngClass",l.VKq(19,S,i.submitted&&i.hasError("setor"))),l.xp6(1),l.Q6J("ngForOf",l.lcZ(35,11,i.setor$)))},directives:[n._Y,n.JL,n.sg,n.Fj,n.JJ,n.u,o.mk,n.EJ,o.sg,e.i9,n.YN,n.Kr],pipes:[o.Ov],styles:[""]}),t})();var k=r(9996),J=r(7701),N=r(8720),x=r(6599),I=r(7727),F=r(653),Y=r(3193),w=r(9479);function E(t,i){1&t&&(l.TgZ(0,"button",8),l._uU(1,"\n        Novo\n      "),l.qZA()),2&t&&l.Q6J("routerLink","cadastrar")}function M(t,i){if(1&t){const t=l.EpF();l.TgZ(0,"tr"),l._uU(1,"\n          "),l.TgZ(2,"td"),l._uU(3),l.qZA(),l._uU(4,"\n          "),l.TgZ(5,"td"),l._uU(6),l.qZA(),l._uU(7,"\n          "),l.TgZ(8,"td"),l._uU(9),l.qZA(),l._uU(10,"\n          "),l.TgZ(11,"td"),l._uU(12),l.qZA(),l._uU(13,"\n          "),l.TgZ(14,"td"),l._uU(15,"\n            "),l.TgZ(16,"span",11),l._uU(17,"\n              "),l.TgZ(18,"button",12),l._uU(19,"\n                Atualizar\n              "),l.qZA(),l._uU(20,"\n\n              "),l.TgZ(21,"button",13),l.NdJ("click",function(){const i=l.CHM(t).$implicit;return l.oxw(2).previsao(i.sigla)}),l._uU(22,"\n                Previs\xf5es de quebra\n              "),l.qZA(),l._uU(23,"\n\n              "),l.TgZ(24,"button",14),l.NdJ("click",function(){const i=l.CHM(t).$implicit;return l.oxw(2).onDelete(i)}),l._uU(25,"\n                Remover\n              "),l.qZA(),l._uU(26,"\n            "),l.qZA(),l._uU(27,"\n          "),l.qZA(),l._uU(28,"\n        "),l.qZA()}if(2&t){const t=i.$implicit;l.xp6(3),l.Oqu(t.sigla),l.xp6(3),l.Oqu(t.fabricante.pessoa.nome),l.xp6(3),l.Oqu(t.setor.nome),l.xp6(3),l.Oqu(t.dataCompra),l.xp6(6),l.Q6J("routerLink","atualizar/"+t.sigla)}}function L(t,i){if(1&t&&(l.TgZ(0,"table",9),l._uU(1,"\n      "),l.TgZ(2,"thead"),l._uU(3,"\n        "),l.TgZ(4,"tr"),l._uU(5,"\n          "),l.TgZ(6,"th"),l._uU(7,"Sigla"),l.qZA(),l._uU(8,"\n          "),l.TgZ(9,"th"),l._uU(10,"Fabricante"),l.qZA(),l._uU(11,"\n          "),l.TgZ(12,"th"),l._uU(13,"Setor"),l.qZA(),l._uU(14,"\n          "),l.TgZ(15,"th"),l._uU(16,"data"),l.qZA(),l._uU(17,"\n          "),l._UZ(18,"th"),l._uU(19,"\n        "),l.qZA(),l._uU(20,"\n      "),l.qZA(),l._uU(21,"\n      "),l.TgZ(22,"tbody"),l._uU(23,"\n        "),l.YNc(24,M,29,5,"tr",10),l._uU(25,"\n      "),l.qZA(),l._uU(26,"\n    "),l.qZA()),2&t){const t=i.ngIf;l.xp6(24),l.Q6J("ngForOf",t)}}function O(t,i){1&t&&(l._uU(0,"\n  "),l.TgZ(1,"div",15),l._uU(2,"\n    "),l.TgZ(3,"span",16),l._uU(4,"Loading..."),l.qZA(),l._uU(5,"\n  "),l.qZA(),l._uU(6,"\n"))}const Q=[{path:"",component:(()=>{class t{constructor(t,i,r){this.service=t,this.modalService=i,this.authService=r,this.permissao=0,this.queryField=new n.NI}ngOnInit(){this.permissao=this.authService.usuario.permissao,this.consulta(""),this.queryField.valueChanges.pipe((0,k.U)(t=>t.trim()),(0,J.b)(300),(0,N.x)(),(0,x.b)(t=>this.consulta(t))).subscribe()}consulta(t){this.maquina$=t.length>0?this.service.busca(t).pipe((0,I.K)(t=>(this.handleError("Erro ao carregar"),(0,F.c)()))):this.service.list().pipe((0,I.K)(t=>(this.handleError("Erro ao carregar"),(0,F.c)())))}previsao(t){this.service.getArquivo(t)}onDelete(t){this.service.delete(t).subscribe(t=>{this.handleError("Maquina Deletado"),this.ngOnInit()},t=>{this.handleError("Erro ao Deletar")})}buscar(){var t;(null===(t=this.queryField.value)||void 0===t?void 0:t.length)>1&&(this.maquina$=this.service.busca(this.queryField.value).pipe((0,I.K)(t=>(this.handleError("Erro ao carregar"),(0,F.c)()))))}handleError(t){this.bsModalRef=this.modalService.show(Y.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message=t}}return t.\u0275fac=function(i){return new(i||t)(l.Y36(U.P),l.Y36(u.tT),l.Y36(w.e))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-maquina"]],decls:28,vars:6,consts:[[1,"container"],[1,"navbar","navbar-light","bg-light"],[1,"form-inline"],["type","search","placeholder","Busca por Sigla","aria-label","Search",1,"form-control","mr-sm-2",3,"formControl"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"click"],["class","btn btn-outline-success my-2 my-sm-0",3,"routerLink",4,"ngIf"],["class","table table-hover",4,"ngIf","ngIfElse"],["loading",""],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"routerLink"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"float-end"],[1,"btn","btn-outline-warning","mb-1","btn-sm",3,"routerLink"],[1,"btn","btn-outline-warning","mb-1","btn-sm",3,"click"],[1,"btn","btn-outline-danger","mb-1","btn-sm",3,"click"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(t,i){if(1&t&&(l.TgZ(0,"div",0),l._uU(1,"\n  "),l.TgZ(2,"legend"),l._uU(3,"Maquinas"),l.qZA(),l._UZ(4,"br"),l._uU(5,"\n  "),l.TgZ(6,"nav",1),l._uU(7,"\n    "),l.TgZ(8,"div",2),l._uU(9,"\n      "),l._UZ(10,"input",3),l._uU(11,"\n\n      "),l.TgZ(12,"button",4),l.NdJ("click",function(){return i.buscar()}),l._uU(13,"Procurar"),l.qZA(),l._uU(14,"\n      "),l.YNc(15,E,2,1,"button",5),l._uU(16,"\n    "),l.qZA(),l._uU(17,"\n  "),l.qZA(),l._uU(18,"\n\n  "),l.TgZ(19,"div",0),l._uU(20,"\n    "),l.YNc(21,L,27,1,"table",6),l.ALo(22,"async"),l._uU(23,"\n  "),l.qZA(),l._uU(24,"\n"),l.qZA(),l._uU(25,"\n\n"),l.YNc(26,O,7,0,"ng-template",null,7,l.W1O)),2&t){const t=l.MAs(27);l.xp6(10),l.Q6J("formControl",i.queryField),l.xp6(5),l.Q6J("ngIf",i.permissao>2),l.xp6(6),l.Q6J("ngIf",l.lcZ(22,4,i.maquina$))("ngIfElse",t)}},directives:[n.Fj,n.JJ,n.oH,o.O5,A.rH,o.sg],pipes:[o.Ov],styles:[""]}),t})()},{path:"cadastrar",component:C},{path:"atualizar/:sigla",component:C}];let R=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[A.Bz.forChild(Q)],A.Bz]}),t})(),V=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,R,n.u5,n.UX,e.z8]]}),t})()}}]);