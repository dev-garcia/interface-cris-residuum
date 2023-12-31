import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  empresas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .get<any>('http://localhost:8080/listar_empresas')
          .subscribe((resp) => {
            that.empresas = resp.clientes_empresas;

            callback({
              recordsTotal: resp.clientes_empresas.length,
              recordsFiltered: resp.clientes_empresas.length,
              data: resp.clientes_empresas,
            });
          });
      },
      columns: [
        { data: 'id' },
        { data: 'nome' },
        { data: 'matricula' },
        { data: 'senha' },
        {
          render: function (data: any, type: any, full: any) {
            return `
          <div class="inline-flex">
            <button class="py2 rounded border border-blue-500 bg-transparent px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white" onclick="editarEmpresa(${full.id})">Editar</button>
            <button class="text-red-700:border-transparent rounded border border-red-500 bg-transparent px-4 py-2 font-semibold hover:bg-red-500 hover:text-white" onclick="excluirEmpresa(${full.id})">Excluir</button>
          </div>
        `;
          },
        },
      ],
    };
  }
  editarEmpresa(id: number): void {
    // Aqui você pode redirecionar o usuário para a página de edição da empresa ou abrir um modal de edição, dependendo da sua preferência.
    // Por enquanto, vou apenas exibir uma mensagem no console.
    console.log(`Editar empresa ID: ${id}`);
  }

  excluirEmpresa(id: number): void {
    // Aqui você pode criar uma confirmação com o usuário antes de realizar a exclusão.
    if (confirm('Tem certeza que deseja excluir esta empresa?')) {
      // Se o usuário confirmar, você pode fazer a chamada para excluir a empresa no servidor.
      this.http
        .delete<any>('http://localhost:8080/deletar_empresa', {
          body: { id: id },
        })
        .subscribe((resp) => {
          console.log(resp.message);

          // Atualize a lista de empresas após a exclusão, se necessário.
          this.atualizarListaEmpresas();
        });
    }
  }

  // Esta função pode ser usada para atualizar a lista de empresas após a exclusão.
  atualizarListaEmpresas() {
    this.http
      .get<any>('http://localhost:8080/listar_empresas')
      .subscribe((resp) => {
        this.empresas = resp.clientes_empresas;
      });
  }
}
