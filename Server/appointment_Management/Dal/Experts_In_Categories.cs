//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Experts_In_Categories
    {
        public int idExpertInCategory { get; set; }
        public Nullable<int> categoryId { get; set; }
        public Nullable<int> professionId { get; set; }
        public Nullable<int> cityId { get; set; }
        public Nullable<System.TimeSpan> careLength { get; set; }
        public Nullable<int> ageBracketId { get; set; }
        public Nullable<int> expertId { get; set; }
    
        public virtual Age_Brackets Age_Brackets { get; set; }
        public virtual Category Category { get; set; }
        public virtual City City { get; set; }
        public virtual Expert Expert { get; set; }
        public virtual Profession Profession { get; set; }
    }
}