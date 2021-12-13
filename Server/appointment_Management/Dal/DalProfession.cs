using DTO;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Dal
{
    public class DalProfession
    {
        public static IEnumerable<Profession> GetProfessions()
        {
            using(appointment_managementEntities2 am1=new appointment_managementEntities2())
            {
                return am1.Professions;
            }
        }
    }
}