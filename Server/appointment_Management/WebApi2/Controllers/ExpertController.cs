using DTO;
using System.Collections.Generic;
using System.Web.Http;

namespace WebApi2.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Expert")]
    public class ExpertController : ApiController
    {

        // GET: api/Expert
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpGet]
        [ Route("Login/{userName}/{password}")]
        public ExpertDTO Login( string userName,string password)
        {
            return BL.BLExpert.GetExpertByEnter(userName, password);
        }

        // GET: api/Expert/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Expert
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Expert/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Expert/5
        public void Delete(int id)
        {
        }
    }
}
