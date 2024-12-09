using Livraria.Api.DTO;

namespace Livraria.Api.Services;

public interface IBookService
{
    public Task<List<BookReadDto>> GetAll();
    public Task<BookReadDto> GetById(Guid id);
    public Task Insert(BookCreateDto book);
    public Task Update(BookUpdateDto book);
    public Task Delete(Guid id);
}