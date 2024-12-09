using Livraria.Api.Models;

namespace Livraria.Api.Repository;

public interface IBookRepository
{
    public Task<List<Book>> GetAll();
    public Task<Book> GetById(Guid id);
    public Task Insert(Book book);
    public Task Update(Book book);
    public Task Delete(Guid id);
}