import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData: any = {};

  onSubmit() {
    try {
      const jsonData = {
        matricula: this.formData.matricula,
        senha: this.formData.senha,
      };

      fetch('http://localhost:8080/login/usuario', {
        method: 'POST',
        body: JSON.stringify(jsonData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // 200 = sucesso, se obter sucesso
          if (data.code === 200) {
            // salvar o nome e o token no local storage
            localStorage.setItem('user_chave', JSON.stringify(data.nome)); // Enviar e salvar no local storage
            localStorage.setItem('token', JSON.stringify(data.token)); // Enviar e salvar no local storage
            Swal.fire('Login realizado com sucesso!');

            // Leva para a rota da dashboard
            window.location.href = '/dashboard';
          } else {
            // Se não obter sucesso
            Swal.fire('Usuário ou senha não existe!');
          }
        })
        .catch(() => {
          // Se não obter sucesso
          Swal.fire('Erro ao fazer login!');
        });
    } catch (error) {
      console.error(error);
      Swal.fire('Erro ao fazer login!');
    }
  }
}
