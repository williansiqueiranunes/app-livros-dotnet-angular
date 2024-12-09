using Livraria.Api.DTO;
using Livraria.Api.Repository;

namespace Livraria.Api.Services;

public class BookService(IBookRepository bookRepository) : IBookService
{
    private readonly IBookRepository _bookRepository = bookRepository;

    public async Task<List<BookReadDto>> GetAll()
    {
        var books = await _bookRepository.GetAll();
        return books.Select(BookReadDto.ToDto).ToList();
    }

    public async Task<BookReadDto> GetById(Guid id)
    {
        var book = await _bookRepository.GetById(id);
        return BookReadDto.ToDto(book);
    }

    public async Task Insert(BookCreateDto book)
    {
        var model = BookCreateDto.ToModel(book);
        await _bookRepository.Insert(model);
    }

    public async Task Update(BookUpdateDto book)
    {
        var model = BookUpdateDto.ToModel(book);
        await _bookRepository.Update(model);
    }

    public async Task Delete(Guid id)
    {
        await _bookRepository.Delete(id);
    }
}