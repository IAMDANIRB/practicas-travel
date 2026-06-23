Hotel hotel1 = new Hotel();
hotel1.Nombre = "Hotel Mallorca";
hotel1.Estrellas = 4;
hotel1.Precio = 120;
hotel1.Disponible = true;

Console.WriteLine(hotel1.Describir());

List<Hotel> hoteles = new List<Hotel>();
hoteles.Add(hotel1);

Hotel hotel2 = new Hotel();
hotel2.Nombre = "Hotel Ibiza";
hotel2.Estrellas = 3;
hotel2.Precio = 80;
hotel2.Disponible = false;
hoteles.Add(hotel2);

foreach (Hotel h in hoteles)
{
    Console.WriteLine(h.Describir());
}

// La clase va al final del archivo
public class Hotel
{
    public string Nombre { get; set; }
    public int Estrellas { get; set; }
    public double Precio { get; set; }
    public bool Disponible { get; set; }

    public string Describir()
    {
        return Nombre + " - " + Estrellas + " estrellas - " + Precio + "€";
    }
}