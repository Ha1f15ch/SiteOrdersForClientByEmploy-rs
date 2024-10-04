﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelsEntity
{
    [Table("TypeListData", Schema = "meta")]
    public class TypeListData
    {   
        public TypeListData() { }

        [Key]
        public string NameType { get; set; }
        public string Description { get; set; }

        public ICollection<ListAboutItem> ListAboutItems { get; set; }
    }
}
