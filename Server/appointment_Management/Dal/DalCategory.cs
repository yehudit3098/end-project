using System;
using System.Collections.Generic;
using System.Linq;

namespace Dal
{
    public class DalCategory
    {
        public static IEnumerable<Category> GetCategories()
        {
            using (appointment_managementEntities2 am1 = new appointment_managementEntities2())
            {
                return am1.Categories;
            }
        }
    }
}