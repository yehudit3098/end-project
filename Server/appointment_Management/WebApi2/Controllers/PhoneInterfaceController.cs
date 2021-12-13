using System.Collections.Generic;
using System.Web.Http;

namespace WebApi2.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Values")]
    public class PhoneInterfaceController : ApiController
    {
        // GET: api/PhoneInterface
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/PhoneInterface/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/PhoneInterface
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/PhoneInterface/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/PhoneInterface/5
        public void Delete(int id)
        {
        }

        [Route("SearchProfession")]
        public string SearchProfession(string text)
        {
            return BL.BLSearch.SearchProfession(text);
        }
    }
}
