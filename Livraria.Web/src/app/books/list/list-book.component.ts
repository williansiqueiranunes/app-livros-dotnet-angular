import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { Book, BookService } from '../book.service';

@Component({
  selector: 'app-list-book',
  imports: [ MatCardModule, MatButtonModule, MatTableModule, MatIconModule, RouterLink ],
  templateUrl: './list-book.component.html',
  styleUrl: './list-book.component.css'
})
export class ListBookComponent {
  private bookService = inject(BookService);
  private dialog = inject(MatDialog);
  nameColumns: string[] = ['id', 'titulo', 'autor', 'genero', 'ano'];
  displayedColumns: string[] = [...this.nameColumns, 'acao'];
  dataSource: Book[] = [];

  ngOnInit() {
     this.getAll();
  }

  private getAll() {
    this.bookService.getAll().subscribe(books => {
      this.dataSource = books;
    });
  }

  deletar(book: Book) {
    const dialogRef = this.dialog.open(DeleteDialog, {
      width: '250px',
      data: { book }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result && result == 's') {
        this.bookService.delete(book.id!).subscribe(() => {
          this.getAll();
        });
      }
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  imports: [ MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-dialog-content>
      Você deseja deletear este livro?
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>Não</button>
      <button mat-button (click)="deletar()" cdkFocusInitial>Sim</button>
    </mat-dialog-actions>
  `,
})
export class DeleteDialog {
  readonly dialogRef = inject(MatDialogRef<DeleteDialog>);

  deletar() {
    this.dialogRef.close('s');
  }
}
