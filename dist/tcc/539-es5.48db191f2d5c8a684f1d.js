!function(){function n(n,o){for(var i=0;i<o.length;i++){var r=o[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function o(o,i,r){return i&&n(o.prototype,i),r&&n(o,r),o}function i(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}(self.webpackChunktcc=self.webpackChunktcc||[]).push([[539],{4539:function(n,r,t){"use strict";t.r(r),t.d(r,{FuncionarioModule:function(){return I}});var u=t(1462),a=t(1116),e=t(2623),c=function n(){i(this,n)},l=t(7368),s=t(1279),f=t(5522);function m(n,o){1&n&&(l.TgZ(0,"div",5),l.TgZ(1,"label",17),l._uU(2,"Matricula:"),l.qZA(),l.TgZ(3,"div",18),l._UZ(4,"input",19),l.qZA(),l.qZA())}function g(n,o){if(1&n&&(l.TgZ(0,"option",20),l._uU(1),l.qZA()),2&n){var i=o.$implicit;l.Q6J("ngValue",i),l.xp6(1),l.Oqu(i.funcao)}}function d(n,o){if(1&n){var i=l.EpF();l.TgZ(0,"form",3),l.NdJ("ngSubmit",function(){return l.CHM(i),l.oxw().onSubmit()}),l.TgZ(1,"legend"),l._uU(2,"Cadastro do funcionario"),l.qZA(),l.YNc(3,m,5,0,"div",4),l.TgZ(4,"div",5),l.TgZ(5,"label",6),l._uU(6,"Nome:"),l.qZA(),l.TgZ(7,"div",7),l._UZ(8,"input",8),l.qZA(),l.qZA(),l.TgZ(9,"div",5),l.TgZ(10,"label",6),l._uU(11,"Data Adm:"),l.qZA(),l.TgZ(12,"div",7),l._UZ(13,"input",9),l.qZA(),l.qZA(),l.TgZ(14,"div",5),l.TgZ(15,"label",10),l._uU(16,"Fun\xe7\xe3o:"),l.qZA(),l.TgZ(17,"div",7),l.TgZ(18,"select",11),l.YNc(19,g,2,2,"option",12),l.qZA(),l.qZA(),l.qZA(),l.TgZ(20,"div",5),l.TgZ(21,"label",13),l._uU(22,"Manutentor:"),l.qZA(),l.TgZ(23,"div",14),l._UZ(24,"input",15),l.qZA(),l.qZA(),l.TgZ(25,"button",16),l._uU(26,"Salvar"),l.qZA(),l.qZA()}if(2&n){var r=o.ngIf,t=l.oxw();l.Q6J("formGroup",t.formulario),l.xp6(3),l.Q6J("ngIf",!t.novo),l.xp6(15),l.Q6J("compareWith",t.comparar),l.xp6(1),l.Q6J("ngForOf",r)}}function h(n,o){1&n&&(l.TgZ(0,"div",21),l.TgZ(1,"span",22),l._uU(2,"Loading..."),l.qZA(),l.qZA())}var v=function(){var n=function(){function n(o,r,t,u){var a=this;i(this,n),this.formBuilder=o,this.route=r,this.router=t,this.funcionarioService=u,this.novo=!1,this.inscricao=this.route.params.subscribe(function(n){var o=n.id;null==o?a.novo=!0:a.funcionarioService.getFuncionario(o).subscribe(function(n){a.funcionario=n,n&&a.povoar()})})}return o(n,[{key:"ngOnInit",value:function(){this.funcao$=this.funcionarioService.listFuncao().pipe(),this.formulario=this.formBuilder.group({matricula:[null],nome:[null,[u.kI.required,u.kI.minLength(3)]],funcao:[null,u.kI.required],dataAdm:[null,u.kI.required],manutentor:[null,u.kI.required]})}},{key:"povoar",value:function(){var n,o,i,r,t;null===(n=this.formulario.get("matricula"))||void 0===n||n.setValue(this.funcionario.matricula),null===(o=this.formulario.get("nome"))||void 0===o||o.setValue(this.funcionario.pessoa.nome),null===(i=this.formulario.get("funcao"))||void 0===i||i.setValue(this.funcionario.funcao),null===(r=this.formulario.get("dataAdm"))||void 0===r||r.setValue(this.funcionario.dataAdm),"Sim"==this.funcionario.manutentor&&(null===(t=this.formulario.get("manutentor"))||void 0===t||t.setValue(!0))}},{key:"onSubmit",value:function(){var n=this;if(this.formulario.valid)if(this.novo){this.funcionario=new c;var o=new e.Z;this.funcionario.pessoa=o,this.funcionario.pessoa.nome=this.formulario.value.nome,this.funcionario.funcao=this.formulario.value.funcao,this.funcionario.dataAdm=this.formulario.value.dataAdm,this.funcionario.status="A",this.funcionario.manutentor=this.formulario.value.manutentor?"Sim":"N\xe3o",this.funcionarioService.salvarFuncionario(this.funcionario).subscribe(function(o){n.formulario.reset(),n.router.navigate(["funcionario"])},function(n){})}else this.funcionario.pessoa.nome=this.formulario.value.nome,this.funcionario.funcao=this.formulario.value.funcao,this.funcionario.dataAdm=this.formulario.value.dataAdm,this.funcionario.manutentor=this.formulario.value.manutentor?"Sim":"Nao",this.funcionarioService.atualizarFuncionario(this.funcionario).subscribe(function(o){n.formulario.reset(),n.router.navigate(["funcionario"])},function(n){})}},{key:"comparar",value:function(n,o){return n&&o?n.funcao===o.funcao:n===o}},{key:"hasError",value:function(n){var o;return null===(o=this.formulario.get(n))||void 0===o?void 0:o.errors}}]),n}();return n.\u0275fac=function(o){return new(o||n)(l.Y36(u.qu),l.Y36(s.gz),l.Y36(s.F0),l.Y36(f.w))},n.\u0275cmp=l.Xpm({type:n,selectors:[["app-funcionario-cadastro"]],decls:5,vars:4,consts:[[1,"container",2,"padding-top","10px","width","60%"],[3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],["class","row md-6",4,"ngIf"],[1,"row","md-6"],["for","nome",1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","nome",1,"form-control",2,"margin","5px"],["type","date","formControlName","dataAdm",1,"form-control",2,"margin","5px"],["for","funcao",1,"col-sm-3","col-form-label"],["id","funcao","formControlName","funcao",1,"form-control",2,"margin","5px",3,"compareWith"],[3,"ngValue",4,"ngFor","ngForOf"],["for","manutentor",1,"col-sm-3","col-form-label"],[1,"col-sm-1"],["type","checkbox","formControlName","manutentor",1,"form-control",2,"margin","5px"],["type","submit",1,"btn","btn-primary"],["for","matricula",1,"col-sm-3","col-form-label"],[1,"col-sm-4"],["id","matricula","type","text","value","1234","formControlName","matricula","readonly","",1,"form-control-plaintext",2,"margin","5px"],[3,"ngValue"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(n,o){if(1&n&&(l.TgZ(0,"div",0),l.YNc(1,d,27,4,"form",1),l.ALo(2,"async"),l.qZA(),l.YNc(3,h,3,0,"ng-template",null,2,l.W1O)),2&n){var i=l.MAs(4);l.xp6(1),l.Q6J("ngIf",l.lcZ(2,2,o.funcao$))("ngIfElse",i)}},directives:[a.O5,u._Y,u.JL,u.sg,u.Fj,u.JJ,u.u,u.EJ,a.sg,u.Wl,u.YN,u.Kr],pipes:[a.Ov],styles:[""]}),n}(),p=t(653),Z=t(9996),b=t(7701),U=t(8720),_=t(6599),A=t(7727),q=t(3193),T=t(1483),y=function(n){return[n]};function k(n,o){if(1&n){var i=l.EpF();l.TgZ(0,"tr"),l._uU(1,"\n        "),l.TgZ(2,"td"),l._uU(3),l.qZA(),l._uU(4,"\n        "),l.TgZ(5,"td"),l._uU(6),l.qZA(),l._uU(7,"\n        "),l.TgZ(8,"td"),l._uU(9),l.qZA(),l._uU(10,"\n        "),l.TgZ(11,"td"),l._uU(12),l.qZA(),l._uU(13,"\n        "),l.TgZ(14,"td"),l._uU(15),l.qZA(),l._uU(16,"\n        "),l.TgZ(17,"td"),l._uU(18,"\n          "),l.TgZ(19,"span",11),l._uU(20,"\n            "),l.TgZ(21,"button",12),l._uU(22,"\n              Atualizar\n            "),l.qZA(),l._uU(23,"\n\n            "),l.TgZ(24,"button",13),l.NdJ("click",function(){var n=l.CHM(i).$implicit;return l.oxw(2).onDelete(n)}),l._uU(25,"\n              Remover\n            "),l.qZA(),l._uU(26,"\n          "),l.qZA(),l._uU(27,"\n        "),l.qZA(),l._uU(28,"\n      "),l.qZA()}if(2&n){var r=o.$implicit;l.xp6(3),l.Oqu(r.matricula),l.xp6(3),l.Oqu(r.pessoa.nome),l.xp6(3),l.Oqu(r.funcao.funcao),l.xp6(3),l.Oqu(r.manutentor),l.xp6(3),l.Oqu(r.dataAdm),l.xp6(6),l.Q6J("routerLink","atualizar/"+l.VKq(6,y,r.matricula))}}function x(n,o){if(1&n&&(l.TgZ(0,"table",9),l._uU(1,"\n    "),l.TgZ(2,"thead"),l._uU(3,"\n      "),l.TgZ(4,"tr"),l._uU(5,"\n        "),l.TgZ(6,"th"),l._uU(7,"Matricula"),l.qZA(),l._uU(8,"\n        "),l.TgZ(9,"th"),l._uU(10,"Nome"),l.qZA(),l._uU(11,"\n        "),l.TgZ(12,"th"),l._uU(13,"Fun\xe7\xe3o"),l.qZA(),l._uU(14,"\n        "),l.TgZ(15,"th"),l._uU(16,"Manutentor"),l.qZA(),l._uU(17,"\n        "),l.TgZ(18,"th"),l._uU(19,"DataAdm"),l.qZA(),l._uU(20,"\n        "),l._UZ(21,"th"),l._uU(22,"\n      "),l.qZA(),l._uU(23,"\n    "),l.qZA(),l._uU(24,"\n    "),l.TgZ(25,"tbody"),l._uU(26,"\n      "),l.YNc(27,k,29,8,"tr",10),l._uU(28,"\n    "),l.qZA(),l._uU(29,"\n  "),l.qZA()),2&n){var i=o.ngIf;l.xp6(27),l.Q6J("ngForOf",i)}}function F(n,o){1&n&&(l._uU(0,"\n  "),l.TgZ(1,"div",14),l._uU(2,"\n    "),l.TgZ(3,"span",15),l._uU(4,"Loading..."),l.qZA(),l._uU(5,"\n  "),l.qZA(),l._uU(6,"\n"))}var S,w,J=[{path:"",component:(S=function(){function n(o,r){i(this,n),this.funcionarioService=o,this.modalService=r,this.queryField=new u.NI}return o(n,[{key:"ngOnInit",value:function(){var n=this;this.onRefresh(),this.queryField.valueChanges.pipe((0,Z.U)(function(n){return n.trim()}),(0,b.b)(300),(0,U.x)(),(0,_.b)(function(o){return n.consulta(o)})).subscribe()}},{key:"consulta",value:function(n){var o=this;n.length>0?this.funcionarios$=this.funcionarioService.busca(n).pipe((0,A.K)(function(n){return o.handleError("Erro ao carregar"),(0,p.c)()})):this.onRefresh()}},{key:"onRefresh",value:function(){var n=this;this.funcionarios$=this.funcionarioService.list().pipe((0,A.K)(function(o){return n.handleError("Erro ao carregar"),(0,p.c)()}))}},{key:"onEdit",value:function(n){}},{key:"onDelete",value:function(n){var o=this;this.funcionarioService.delete(n).subscribe(function(n){o.handleError("Funcionario Deletado"),o.ngOnInit()},function(n){o.handleError("Erro ao Deletar")})}},{key:"handleError",value:function(n){this.bsModalRef=this.modalService.show(q.F),this.bsModalRef.content.type="danger",this.bsModalRef.content.message=n}},{key:"buscar",value:function(){var n,o=this;(null===(n=this.queryField.value)||void 0===n?void 0:n.length)>1&&(this.funcionarios$=this.funcionarioService.busca(this.queryField.value).pipe((0,A.K)(function(n){return o.handleError("Erro ao carregar"),(0,p.c)()})))}}]),n}(),S.\u0275fac=function(n){return new(n||S)(l.Y36(f.w),l.Y36(T.tT))},S.\u0275cmp=l.Xpm({type:S,selectors:[["app-funcionario"]],decls:31,vars:6,consts:[[1,"container"],[1,"navbar","navbar-light","bg-light"],[1,"form-inline"],["type","search","placeholder","Busca matricula/nome","aria-label","Search",1,"form-control","mr-sm-2",3,"formControl"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"click"],[1,"btn","btn-outline-success","my-2","my-sm-0",3,"routerLink"],[1,"bi","bi-person-plus-fill"],["class","table table-hover",4,"ngIf","ngIfElse"],["loading",""],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[1,"float-end"],[1,"btn","btn-outline-warning","mb-1","btn-sm",3,"routerLink"],[1,"btn","btn-outline-danger","mb-1","btn-sm",3,"click"],["role","status",1,"spinner-border"],[1,"sr-only"]],template:function(n,o){if(1&n&&(l.TgZ(0,"div",0),l._uU(1,"\n  "),l.TgZ(2,"legend"),l._uU(3,"Funcionarios"),l.qZA(),l._UZ(4,"br"),l._uU(5,"\n  "),l.TgZ(6,"nav",1),l._uU(7,"\n    "),l.TgZ(8,"div",2),l._uU(9,"\n      "),l._UZ(10,"input",3),l._uU(11,"\n\n      "),l.TgZ(12,"button",4),l.NdJ("click",function(){return o.buscar()}),l._uU(13,"Procurar"),l.qZA(),l._uU(14,"\n      "),l.TgZ(15,"button",5),l._uU(16,"\n        Novo "),l._UZ(17,"i",6),l._uU(18,"\n      "),l.qZA(),l._uU(19,"\n    "),l.qZA(),l._uU(20,"\n  "),l.qZA(),l._uU(21,"\n"),l.qZA(),l._uU(22,"\n\n"),l.TgZ(23,"div",0),l._uU(24,"\n  "),l.YNc(25,x,30,1,"table",7),l.ALo(26,"async"),l._uU(27,"\n"),l.qZA(),l._uU(28,"\n\n"),l.YNc(29,F,7,0,"ng-template",null,8,l.W1O)),2&n){var i=l.MAs(30);l.xp6(10),l.Q6J("formControl",o.queryField),l.xp6(5),l.Q6J("routerLink","cadastrar"),l.xp6(10),l.Q6J("ngIf",l.lcZ(26,4,o.funcionarios$))("ngIfElse",i)}},directives:[u.Fj,u.JJ,u.oH,s.rH,a.O5,a.sg],pipes:[a.Ov],styles:[""]}),S)},{path:"cadastrar",component:v},{path:"atualizar/:id",component:v}],N=function(){var n=function n(){i(this,n)};return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[[s.Bz.forChild(J)],s.Bz]}),n}(),I=((w=function n(){i(this,n)}).\u0275fac=function(n){return new(n||w)},w.\u0275mod=l.oAB({type:w}),w.\u0275inj=l.cJS({imports:[[a.ez,N,u.u5,u.UX]]}),w)}}])}();