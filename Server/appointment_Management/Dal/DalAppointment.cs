using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Dal
{
   public class DalAppointment
    {
        public static IEnumerable<Appointment> GetAppointments()
        {
            using (appointment_managementEntities2 am1 = new appointment_managementEntities2())
            {
                return am1.Appointments;
            }
        }
    }
}
