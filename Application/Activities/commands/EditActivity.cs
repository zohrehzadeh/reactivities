using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistance;
using MediatR;
using AutoMapper;

namespace Application.Activities.commands
{
    public class EditActivity
    {
         public class Command: IRequest{
            public required Activity Activity { get; set; }
        }
        public class Handler(AppDbContext context, IMapper mapper): IRequestHandler<Command>{
            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await context.Activities.FindAsync([request.Activity.Id],cancellationToken)
                ?? throw new Exception("Activity not found");
                mapper.Map(request.Activity, activity);
                context.Activities.Update(activity);
               await context.SaveChangesAsync(cancellationToken);
                
            }
        }
    }
}