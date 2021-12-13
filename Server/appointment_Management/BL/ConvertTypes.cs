using Dal;
using DTO;
using System.Reflection;

namespace BL
{
    public class ConvertTypes
    {
        public static TDTO ConvertEntity<TEntity, TDTO>(TEntity Entity) where TDTO : IDTO where TEntity : IEntity
        {
            return Convert<TEntity,TDTO>(Entity);
        }
        public static TEntity ConvertDTO<TDTO, TEntity>(TDTO DTO) where TDTO : IDTO where TEntity : IEntity
        {
            return Convert<TDTO,TEntity>(DTO);
        }
        private static TDTO Convert<TEntity, TDTO>(TEntity Entity)
        {
            Assembly asem = Assembly.GetAssembly(typeof(TDTO));
            TDTO dtoObject = (TDTO)asem.CreateInstance((typeof(TDTO)).FullName );           
           
            foreach (var propOfDTO in dtoObject.GetType().GetProperties())
            {
                var propEntity =  Entity.GetType().GetProperty(propOfDTO.Name);
                if (propEntity  == null) continue;
                {
                    propOfDTO.SetValue(dtoObject, propEntity .GetValue(Entity));
                }
            }
            return dtoObject;
        }
    }
}