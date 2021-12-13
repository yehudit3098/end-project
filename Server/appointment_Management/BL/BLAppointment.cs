using Dal;
using DTO;
using System.Collections.Generic;
using System.Linq;

namespace BL
{
    public class BLAppointment
    {
        private static appointment_managementEntities2 NTT = new appointment_managementEntities2();

        public static List<AppointmentDTO> GetAppointmentsByExpert(int idExpert)
        {
            //List<AppointmentDTO> appointments = new List<AppointmentDTO>();
            //foreach (var appointment in Dal.Appointment.GetAppointments())
            //{
            //    appointments.Add(ConvertTypes.ConvertEntity<Appointment, AppointmentDTO>(appointment));
            //}
            //return appointments.FindAll(x => x.)


            var res = (from a in NTT.Appointments
                       join e in NTT.ExpertInDays
                       on a.expertInDayId equals e.idExpertrInDay
                       join e2 in NTT.Experts on e.expertId equals e2.idExpert
                       where e2.idExpert == idExpert
                       select a
               ).ToList().Select(a =>
                   ConvertTypes.ConvertEntity<Appointment, AppointmentDTO>(a)
               ).ToList();

            return res;

            //foreach (Appointment item in DalAppointment.GetAppointments())
            //{
            //    foreach (var item2 in res)
            //    {
            //        if (item.idaAppointment == item2.idaAppointment)
            //            yield return ConvertTypes.ConvertEntity<Appointment, AppointmentDTO>(item);
            //    }

            //}
            // return res.Select(s => ConvertTypes.ConvertEntity<Appointment, AppointmentDTO>(s)).ToList();
            //return res.Select(x => ConvertTypes.ConvertEntity<Appointment, AppointmentDTO>(x)).ToList();

            //List<Appointment> appointments = DalAppointment.GetAppointments().ToList();
            //List<Dal.ExpertInDay> expertInDays = DalExpertInDay.GetExpertInDay().ToList();
            //List<Expert> experts = DalExpert.GetExperts().ToList();
            //foreach (var item in collection)
            //{

            //}
            //return null;
        }
    }
}
