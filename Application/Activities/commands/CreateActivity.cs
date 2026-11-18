using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistance;
using MediatR;

namespace Application.Activities.commands
{
    public class CreateActivity
    {
        public class Command: IRequest<string>{
            public required Activity Activity { get; set; }
        }
        public class Handler(AppDbContext context): IRequestHandler<Command, string>{
            public async Task<string> Handle(Command request, CancellationToken cancellationToken)
            {
                context.Activities.AddAsync(request.Activity);
                await  context.SaveChangesAsync(cancellationToken);
                return request.Activity.Id;
            }
        }
    }
}