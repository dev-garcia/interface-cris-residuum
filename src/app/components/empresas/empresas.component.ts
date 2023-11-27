import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
})
export class EmpresasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  empresas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      processing: true,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },

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
      createdRow: (row: Node, data: any, index: number) => {
        // Vincular o evento do clique ao botão de exclusão
        $('td .btn-editar', row).on('click', () => {
          this.editarEmpresa(data.id);
        });
        $('td .btn-excluir', row).on('click', () => {
          this.excluirEmpresa(data.id);
        });
      },
      columns: [
        { data: 'id' },
        { data: 'nome_fantasia' },
        { data: 'cnpj' },
        { data: 'cep' },
        { data: 'bairro' },
        { data: 'rua' },
        { data: 'numero' },
        { data: 'razao_social' },
        { data: 'email' },
        { data: 'telefone' },
        {
          render: function (_data: any, type: any, full: any) {
            return `
            <div class="inline-flex">
            <button
              data-modal-target="editarEmpresaModal"
              data-modal-toggle="editarEmpresaModal"
              type="button"
              id="${full.id}"
              class="btn-editar rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Editar
            </button>
          
            <button
              class="btn-excluir rounded border border-red-500 bg-transparent px-4 py-2 font-semibold text-red-700 hover:border-transparent hover:bg-red-500 hover:text-white"
              id="${full.id}"
            >
              Excluir
            </button>
          </div>
            `;
          },
        },
      ],
    };
  }
  editarEmpresa(id: number): void {
    // Abrir o modal
    let modal = document.getElementById('editarEmpresaModal');
    if (modal) {
      modal.style.display = 'block';
    } else {
      console.error('Modal element not found');
    }
  }

  excluirEmpresa(id: number): void {
    // Confirmação do usuário se deve excluir ou cancelar a ação

    Swal.fire({
      title: 'Tem certeza que deseja excluir esta empresa?',
      showDenyButton: true,
      confirmButtonText: `Sim`,
      denyButtonText: `Não`,
    }).then((result) => {
      /* isConfirmed e isDenied sao nomes de propriedades especificas definidas pela biblioteca SweetAlert2. */
      if (result.isConfirmed) {
        this.http
          .delete<any>('http://localhost:8080/deletar_empresa', {
            body: { id: id },
          })
          .subscribe((resp) => {
            console.log(resp.message);

            // Recarrega a pagina apos excluir
            window.location.reload();
          });
      } else if (result.isDenied) {
        Swal.fire('A empresa não foi excluída', '', 'info');
      }
    });
  }
}
