using DTO;
using System.Collections.Generic;
using System.Net.Http;
using System.Text;
using System.Web.Http;

namespace WebApi2.Controllers
{
    [System.Web.Http.Cors.EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Values")]
    public class ValuesController : ApiController
    {
        // GET api/values
        
        [Route("GetAppointmentsByExpert/{idExpert}")]
        public IEnumerable<AppointmentDTO> GetAppointmentsByExpert(int idExpert)
        {
            return BL.BLAppointment.GetAppointmentsByExpert(idExpert);
        }

        // GET api/values/5
        [Route("Get"),HttpGet]
        public HttpResponseMessage Get()
        {
            HttpResponseMessage response = new HttpResponseMessage();
            response.Content = new StringContent( "id_list_message=t-" + "שלום וברוכים הבאים נא אמור מה ברצונך לעשות!!",Encoding.UTF8, "text/html");
            return response;
        }
        [HttpGet]
        [Route("GetExpertByEnter/{expertName}/{expertPassword}")]
        public ExpertDTO GetExpertByEnter(string expertName ,string expertPassword)
        {
           return BL.BLExpert.GetExpertByEnter(expertName,expertPassword);
        }

        // POST api/values
        [Route("AddExpert")]
        public void AddExpert([FromBody] ExpertDTO expert)
        {
            BL.BLExpert.AddExpert(expert);
        }
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
