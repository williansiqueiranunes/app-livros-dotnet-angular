using Livraria.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Livraria.Api.Context;

public class DatabaseContext(DbContextOptions<DatabaseContext> options) : DbContext(options)
{
    public DbSet<Book> Books { get; set; }
}