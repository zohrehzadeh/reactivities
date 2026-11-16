using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistance
{
    public class AppDbContext(DbContextOptions options) : DbContext (options)
    {
        public required DbSet<Activity> Activities { get; set; }
    }
}