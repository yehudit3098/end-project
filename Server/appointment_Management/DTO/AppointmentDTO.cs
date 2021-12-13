using System;

namespace DTO
{
    public class AppointmentDTO:IDTO
    {
        public int idaAppointment { get; set; }
        public Nullable<System.DateTime> dateAppointment { get; set; }
        public Nullable<int> expertInDayId { get; set; }
        public Nullable<System.TimeSpan> timeAppointment { get; set; }
        public Nullable<int> customerId { get; set; }
    }
}
