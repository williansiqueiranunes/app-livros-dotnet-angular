using Livraria.Api.Models;

namespace Livraria.Api.DTO;

public class BookReadDto
{
    public Guid Id { get; set; }
    public string Titulo { get; set; }
    public string Autor { get; set; }
    public string Genero { get; set; }
    public int Ano { get; set; }

    public static BookReadDto ToDto(Book book) => new()
    {
        Id = book.Id,
        Titulo = book.Titulo,
        Autor = book.Autor,
        Genero = book.Genero,
        Ano = book.Ano
    };
}