using System;

namespace DTO
{
    public class ExpertInDayDTO : IDTO
    { 
        public int idExpertrInDay { get; set; }
        public Nullable<int> expertId { get; set; }
        public Nullable<int> dayId { get; set; }
        public Nullable<System.TimeSpan> startTime { get; set; }
        public Nullable<System.TimeSpan> endTime { get; set; }
    }
}
