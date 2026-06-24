var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Base de datos falsa — igual que hacías en servidor.js
var hoteles = new List<Hotel>
{
    new Hotel(1, "Hotel Mallorca", 4, 120),
    new Hotel(2, "Hotel Ibiza", 3, 80),
    new Hotel(3, "Hotel Menorca", 5, 200)
};

// GET /hoteles — devuelve todos los hoteles
app.MapGet("/hoteles", () =>
{
    return hoteles;
});

// GET /hoteles/1 — devuelve un hotel por id
app.MapGet("/hoteles/{id}", (int id) =>
{
    var hotel = hoteles.FirstOrDefault(h => h.Id == id);
    // FirstOrDefault es como el .find() de JavaScript

    if (hotel == null)
    {
        return Results.NotFound(new { error = "Hotel no encontrado" });
        // Results.NotFound es el equivalente a res.status(404).json(...)
    }

    return Results.Ok(hotel);
});

app.Run();

// record en vez de class — más corto para objetos simples de datos
record Hotel(int Id, string Nombre, int Estrellas, double Precio);