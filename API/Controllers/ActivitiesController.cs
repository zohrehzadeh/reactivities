using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Persistance;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace API.Controllers
{
    public class ActivitiesController(AppDbContext context): BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await context.Activities.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(string id)
        {
           // var activity = await context.Activities.FindAsync(id);
            var activity = await context.Activities.FirstOrDefaultAsync(el => el.Id ==id);

            if (activity == null) return NotFound();
            return activity;
        }
    }
}