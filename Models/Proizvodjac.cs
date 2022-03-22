using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using System;

namespace Models
{
    public class Proizvodjac
    {
        [Key]
        public int ID{ get; set; }

        [Required]
        [MaxLength(50)]
        public string Firma { get; set; }
		
        [Required]
        [MaxLength(50)]
        public string Adresa { get; set; }

        [Required]
        [MaxLength(20)]
        public string Grad { get; set; }

        [Required]
        [MaxLength(50)]
        public string Telefon { get; set; } 
  
        [Required]
        [MaxLength(50)]
        public string Ime { get; set; }
         
        [Required]
        [MaxLength(50)]
        public string Prezime { get; set; }

        [JsonIgnore]
        public List<Nabavka> NabavkaProizvodjaci { get; set; }

    }
}