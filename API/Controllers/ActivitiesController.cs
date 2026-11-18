using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Persistance;
using Domain;
using Microsoft.AspNetCore.Mvc;
using MediatR;
using Application.Activities.Queries;
using Application.Activities.commands;
namespace API.Controllers
{
    public class ActivitiesController: BaseApiController
    {
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
         var xxxx= await Mediator.Send(new GetActivityList.Query());
           return xxxx;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Activity>> GetActivity(string id)
        {
            return await Mediator.Send(new GetActivityDetail.Query{Id = id});
        }

        [HttpPost]
        public async Task<ActionResult<string>> CreateActivity(Activity activity)
        {
           return await Mediator.Send(new CreateActivity.Command{Activity = activity});
        }

        [HttpPut]
        public async Task<ActionResult> EditActivity(Activity activity)
        {
           await Mediator.Send(new EditActivity.Command{Activity = activity});
           return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteActivity(string id)
        {
           await Mediator.Send(new DeleteActivity.Command{Id = id});
           return Ok();
        }
    }
}