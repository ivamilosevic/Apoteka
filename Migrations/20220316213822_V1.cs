using Microsoft.EntityFrameworkCore.Migrations;

namespace WebProjekat.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Lekovi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    RezimIzdavanja = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    FarmaceutskiOblik = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Gramaza = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lekovi", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Proizvodjaci",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Firma = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Adresa = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Grad = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: false),
                    Telefon = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Ime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Proizvodjaci", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Nabavke",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LekID = table.Column<int>(type: "int", nullable: true),
                    ProizvodjacID = table.Column<int>(type: "int", nullable: true),
                    Kolicina = table.Column<int>(type: "int", nullable: false),
                    Cena = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nabavke", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Nabavke_Lekovi_LekID",
                        column: x => x.LekID,
                        principalTable: "Lekovi",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Nabavke_Proizvodjaci_ProizvodjacID",
                        column: x => x.ProizvodjacID,
                        principalTable: "Proizvodjaci",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Nabavke_LekID",
                table: "Nabavke",
                column: "LekID");

            migrationBuilder.CreateIndex(
                name: "IX_Nabavke_ProizvodjacID",
                table: "Nabavke",
                column: "ProizvodjacID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Nabavke");

            migrationBuilder.DropTable(
                name: "Lekovi");

            migrationBuilder.DropTable(
                name: "Proizvodjaci");
        }
    }
}
