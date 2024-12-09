using Livraria.Api.DTO;
using Livraria.Api.Models;
using Livraria.Api.Repository;
using Livraria.Api.Services;
using Microsoft.AspNetCore.Mvc;

namespace Livraria.Api.Controllers;

[ApiController]
[Route("api/book")]
public class BookController(IBookService bookService)
{
    private readonly IBookService _bookService = bookService;
    
    [HttpGet("getAll")]
    public async Task<List<BookReadDto>> GetAll()
    {
        return await _bookService.GetAll();
    }
    
    [HttpGet("{id}")]
    public async Task<BookReadDto> GetById(string id)
    {
        return await _bookService.GetById(Guid.Parse(id));
    }
    
    [HttpPost]
    public async Task Post([FromBody] BookCreateDto book)
    {
        await _bookService.Insert(book);
    }
    
    [HttpPut]
    public async Task Put([FromBody] BookUpdateDto book)
    {
        await _bookService.Update(book);
    }
    
    [HttpDelete("{id}")]
    public async Task Delete(string id)
    {
        await _bookService.Delete(Guid.Parse(id));
    }
}