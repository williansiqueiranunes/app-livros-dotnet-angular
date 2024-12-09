using Livraria.Api.Context;
using Livraria.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Livraria.Api.Repository;

public class BookRepository(DatabaseContext context) : IBookRepository
{
    private readonly DatabaseContext _context = context;

    public async Task<List<Book>> GetAll()
    {
        return await _context.Books.ToListAsync();
    }

    public async Task<Book> GetById(Guid id)
    {
        return await _context.Books.FirstAsync(book => book.Id == id);
    }

    public async Task Insert(Book book)
    {
        _context.Add(book);
        await _context.SaveChangesAsync();
    }

    public async Task Update(Book book)
    {
        var model = await _context.Books.FirstAsync(b => b.Id == book.Id);
        model.Titulo = book.Titulo;
        model.Autor = book.Autor;
        model.Genero = book.Genero;
        model.Ano = book.Ano;
        _context.Update(model);
        await _context.SaveChangesAsync();
    }

    public async Task Delete(Guid id)
    {
        var model = await _context.Books.FirstAsync(b => b.Id == id);
        _context.Books.Remove(model);
        await _context.SaveChangesAsync();
    }
}