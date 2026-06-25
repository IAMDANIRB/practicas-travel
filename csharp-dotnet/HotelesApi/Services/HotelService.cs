using HotelesApi.Models;
// using importa el namespace de arriba, como un import en TS

namespace HotelesApi.Services;

public class HotelService
{
    private readonly List<Hotel> _hoteles = new()
    {
        new Hotel(1, "Hotel Mallorca", 4, 120),
        new Hotel(2, "Hotel Ibiza", 3, 80),
        new Hotel(3, "Hotel Menorca", 5, 200)
    };
    // private readonly: solo accesible dentro de la clase, y no se puede reasignar

    public List<Hotel> ObtenerTodos()
    {
        return _hoteles;
    }

    public Hotel? ObtenerPorId(int id)
    {
        // el ? después de Hotel significa que puede devolver null
        return _hoteles.FirstOrDefault(h => h.Id == id);
    }
}