import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { FuncionarioComponent } from './funcionario.component';
import { FuncionarioCadastroComponent } from './funcionario-cadastro/funcionario-cadastro.component';
import { FuncionarioDetalheComponent } from './funcionario-detalhe/funcionario-detalhe.component';


@NgModule({
  declarations: [
    FuncionarioComponent,
    FuncionarioCadastroComponent,
    FuncionarioDetalheComponent
  ],
  imports: [
    CommonModule,
    FuncionarioRoutingModule
  ]
})
export class FuncionarioModule { }
