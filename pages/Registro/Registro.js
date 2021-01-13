import Head from 'next/head';
import Link from 'next/link'
export default function Registro() {

    return(
        <>
        <Head>
        <title>Registro Comunity</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="form-container">
            <form>
                <img src="https://www.flaticon.es/svg/vstatic/svg/921/921356.svg?token=exp=1610553013~hmac=e2818590daebc764f7b9eb322468ac81" alt="icono-comunidad" />
                <label><h2>Registrate en Comunity</h2></label>
                <div>
                    <h3>Telefono</h3>
                    <label><input type="text" id="user" placeholder="Ingrese tu numero telefonico"/></label>
                </div>
                <div>
                    <h3>Contraseña</h3>
                    <label><input type="password" id="password" placeholder="Ingresa tu nueva contraseña"/></label>
                </div>
                <div><input className="input-enviar" type="submit" value="Registrarse"/></div>
                <Link href="/Login/IndexLogin"><a>¿Ya tienes una cuenta? Inicia Session Aqui</a></Link>
              

            </form>
        </div>
        </>
    )
}