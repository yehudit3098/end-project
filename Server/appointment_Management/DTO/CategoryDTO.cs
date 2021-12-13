using System;

namespace DTO
{
    public class CategoryDTO:IDTO
    {
        public int idCategory { get; set; }
        public string nameCategory { get; set; }
        public Nullable<int> professionId { get; set; }
    }
}
