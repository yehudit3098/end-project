using System;

namespace DTO
{
    public class ExpertInCategory
    {
        public int idExpertInCategory { get; set; }
        public Nullable<int> categoryId { get; set; }
        public Nullable<int> professionId { get; set; }
        public Nullable<int> cityId { get; set; }
        public Nullable<System.TimeSpan> careLength { get; set; }
        public Nullable<int> ageBracketId { get; set; }
    }
}
