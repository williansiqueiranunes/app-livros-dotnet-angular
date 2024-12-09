using Livraria.Api.Models;

namespace Livraria.Api.DTO;

public class BookUpdateDto
{
    public Guid Id { get; set; }
    public string Titulo { get; set; }
    public string Autor { get; set; }
    public string Genero { get; set; }
    public int Ano { get; set; }
    
    public static Book ToModel(BookUpdateDto dto) => new()
    {
        Id = dto.Id,
        Titulo = dto.Titulo,
        Autor = dto.Autor,
        Genero = dto.Genero,
        Ano = dto.Ano
    };
}