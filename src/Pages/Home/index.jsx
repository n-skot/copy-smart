import ButtonElement from "../../Components/Button"

export default function Home() {
  return (
    <>
      <section className="mb-10 lg:columns-2">
        <img src="https://imgs.search.brave.com/QGumOBIi70hjSVRUyWRT5CY8H2mT-B07561kE-nfl5g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi8wLzBiL0Ry/YWdvbl9CYWxsX1pf/bG9nby5zdmcvNTEy/cHgtRHJhZ29uX0Jh/bGxfWl9sb2dvLnN2/Zy5wbmc" />
        <h1 className="font-medium">Copy Smart Digital</h1>
      </section>
      <section id="locales" className="lg:hidden md:block sm:columns-2 md:columns-2 sm:flex sm:justify-around text-center mt-3 mb-3">
        <div className="border-blue-800 border-2 w-52 p-5 border-solid decoration-solid rounded-md">
          <h3 className="">Serdan</h3>
          <ButtonElement text="Ver mas" link="/serdan" />
        </div>
        <div className="border-blue-800 border-2 w-52 p-5 border-solid decoration-solid rounded-md">
          <h3 className="">Jacarangas</h3>
          <ButtonElement text="Ver mas" link="/Jacarangas" />
        </div>
      </section>
      <section className="sm:columns-1 md:columns-md lg:columns-3">
        <div>
          <article>
            <img />Imagen
            <p>Nombre</p>
          </article>
          <p>Descripcion</p>
        </div><div>
          <article>
            <img />Imagen
            <p>Nombre</p>
          </article>
          <p>Descripcion</p>
        </div><div>
          <article>
            <img />Imagen
            <p>Nombre</p>
          </article>
          <p>Descripcion</p>
        </div>
      </section>
    </>
  )
}
