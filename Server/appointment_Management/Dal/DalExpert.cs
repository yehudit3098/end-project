using System;
using System.Collections.Generic;
using DTO;

namespace Dal
{
    public class DalExpert
    {
        public static void AddExpert(Expert expert)
        {
            try
            {
                using (appointment_managementEntities2 am1 = new appointment_managementEntities2())
                {
                    am1.Experts.Add(expert);
                    am1.SaveChanges();
                }
            }
            catch (Exception)
            {
                Console.WriteLine("error add expert");
            }

        }

        public static Expert GetExpertByEnter(string expertName, string expertPassword)
        {
            using (appointment_managementEntities2 am1 = new appointment_managementEntities2())
            {
                foreach (Expert expert in am1.Experts)
                    if (expert.mailExpert.Equals(expertName) && expert.passwordExpert.Equals(expertPassword))
                        return expert;
            }
            return null;
        }

        public static IEnumerable<Expert> GetExperts()
        {
            using (appointment_managementEntities2 am1 = new appointment_managementEntities2())
            {
                return am1.Experts;
            }
        }
    }
}