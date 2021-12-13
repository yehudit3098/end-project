using System.Collections.Generic;
using Dal;
using DTO;

namespace BL
{
    public class BLSearch
    {
        public static string SearchProfession(string text)
        {
            List<int> professionsCouldWatch = new List<int>();
            List<CategoryDTO> categoriesCouldWatch = new List<CategoryDTO>();
            string[] textToWords = text.Split(' ');
            List<ProfessionDTO> professions = new List<ProfessionDTO>();
            List<CategoryDTO> categories = new List<CategoryDTO>();
            foreach (var profession in Dal.DalProfession.GetProfessions())
                professions.Add(ConvertTypes.ConvertEntity<Profession, ProfessionDTO>(profession));
            foreach (var item in professions)
                foreach (string word in textToWords)
                    if (item.nameProfession.Equals(word))//no good if 2 words
                        professionsCouldWatch.Add(item.idProfession);
            //TODO if the list is empty to write smart search
            foreach (var category in Dal.DalCategory.GetCategories())
                categories.Add(ConvertTypes.ConvertEntity<Category, CategoryDTO>(category));
            foreach (var item in categories)
                if(professionsCouldWatch.Contains(int.Parse(item.professionId.ToString())))
                    foreach (string word in textToWords)
                        if (item.nameCategory.Equals(word))//no good if 2 words
                            categoriesCouldWatch.Add(item);
            //TODO if the list is empty to write smart search
            string result = null;
            foreach (var item in categoriesCouldWatch)
            {
                result += " " + item.professionId + " " + item.nameCategory + "";//to add from file
            }
            return result;
        }
    }
}