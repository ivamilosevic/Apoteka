using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System;

namespace Models
{
    public class Nabavka
    {
        [Key]
        public int ID { get; set; }

        [JsonIgnore]
        public Lek Lek { get; set; }
    
        public Proizvodjac Proizvodjac { get; set; }

        [Required]
        public int Kolicina { get; set; }

        [Required]
        public int Cena { get; set; }
    }
}