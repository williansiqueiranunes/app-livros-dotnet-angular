using Livraria.Api.Models;

namespace Livraria.Api.DTO;

public class BookCreateDto
{
    public string Titulo { get; set; }
    public string Autor { get; set; }
    public string Genero { get; set; }
    public int Ano { get; set; }

    public static Book ToModel(BookCreateDto dto) => new()
    {
        Titulo = dto.Titulo,
        Autor = dto.Autor,
        Genero = dto.Genero,
        Ano = dto.Ano
    };
}