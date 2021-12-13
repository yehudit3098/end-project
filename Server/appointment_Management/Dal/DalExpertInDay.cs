using System;
using System.Collections.Generic;

namespace Dal
{
    public class DalExpertInDay
    {
        public static IEnumerable<ExpertInDay> GetExpertInDay()
        {
            using (appointment_managementEntities2 am1 = new appointment_managementEntities2())
            {
                return am1.ExpertInDays;
            }
        }
    }
}