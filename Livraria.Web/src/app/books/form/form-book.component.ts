import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-form-book',
  imports: [ MatCardModule, MatButtonModule, MatIconModule, FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink ],
  templateUrl: './form-book.component.html',
  styleUrl: './form-book.component.css'
})
export class FormBookComponent {
  private bookService = inject(BookService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  acao = signal('Adicionar');
  idBook?: string;
  livroForm = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    autor: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    ano: new FormControl<number | null>(null, [Validators.required]),
  });

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.idBook = params.get('id')!;
      if (this.idBook) {
        this.acao.set('Editar');
        this.bookService.get(this.idBook).subscribe(book => {
          this.livroForm.controls.titulo.setValue(book.titulo);
          this.livroForm.controls.autor.setValue(book.autor);
          this.livroForm.controls.genero.setValue(book.genero);
          this.livroForm.controls.ano.setValue(book.ano);
        })
      }
    });
  }

  salvar() {
    const book: Book = {
      id: this.idBook,
      titulo: this.livroForm.controls.titulo.getRawValue() || '',
      autor: this.livroForm.controls.autor.getRawValue() || '',
      genero: this.livroForm.controls.genero.getRawValue() || '',
      ano: this.livroForm.controls.ano.getRawValue() || 0,
    };

    this.bookService.save(book).subscribe(() => {
      this.router.navigate(['/livros']);
    })
  }
}
