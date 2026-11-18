using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Domain;
using Persistance;
using MediatR;

namespace Application.Activities.Queries
{
    public class GetActivityList
    {
        public class Query: IRequest<List<Activity>>{}
        public class Handler(AppDbContext context): IRequestHandler<Query, List<Activity>>{
            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
               return await context.Activities.ToListAsync(cancellationToken);
            }
        }
    }
}