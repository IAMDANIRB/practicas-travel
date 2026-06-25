using HotelesApi.Services;

var builder = WebApplication.CreateBuilder(args);

// Registramos el servicio para poder usarlo en las rutas
builder.Services.AddSingleton<HotelService>();
// AddSingleton: crea una sola instancia y la reutiliza siempre

var app = builder.Build();

// GET /hoteles
app.MapGet("/hoteles", (HotelService service) =>
{
    return service.ObtenerTodos();
});
// HotelService se "inyecta" automáticamente — .NET te lo pasa solo

// GET /hoteles/{id}
app.MapGet("/hoteles/{id}", (int id, HotelService service) =>
{
    var hotel = service.ObtenerPorId(id);

    if (hotel == null)
    {
        return Results.NotFound(new { error = "Hotel no encontrado" });
    }

    return Results.Ok(hotel);
});

app.Run();