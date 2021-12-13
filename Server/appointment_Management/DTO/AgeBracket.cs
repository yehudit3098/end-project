using System;

namespace DTO
{
    public class AgeBracket: IDTO
    {
        public int idAgeBracket { get; set; }
        public string nameAgeBracket { get; set; }
        public Nullable<int> fromAge { get; set; }
        public Nullable<int> toAge { get; set; }
    }
}
