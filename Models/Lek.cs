using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System;

namespace Models
{
    public class Lek
    {
        [Key]
        public int ID { get; set; }

        [Required]
        [MaxLength(50)]
        public string Naziv { get; set; }
		
        [Required]
        [MaxLength(50)]
        public string RezimIzdavanja { get; set; }
		
        [Required]
        [MaxLength(50)]
        public string FarmaceutskiOblik { get; set; }

        [Required]
        [MaxLength(20)]
        public string Gramaza { get; set; }

        [JsonIgnore]
        public List<Nabavka> NabavkaLekovi { get; set; }
        
    }
}