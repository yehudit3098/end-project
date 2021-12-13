using Dal;
using DTO;

namespace BL
{
    public class BLExpert
    {
        public static void AddExpert(ExpertDTO expert)
        {
            Dal.DalExpert.AddExpert(ConvertTypes.ConvertDTO<ExpertDTO,Expert>(expert));
        }

        public static ExpertDTO GetExpertByEnter(string userName, string expertPassword)
        {
            return Dal.DalExpert.GetExpertByEnter(userName, expertPassword)==null?null: ConvertTypes.ConvertEntity<Expert,ExpertDTO>(Dal.DalExpert.GetExpertByEnter(userName, expertPassword));
        }
    }
}