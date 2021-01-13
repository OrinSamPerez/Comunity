import Link from 'next/link';
import {useRouter} from 'next/router'

export default function IndexLogin(props){
    const route = useRouter()
    return(
        <main>
            <div className="form-container">
                <form>
                    <img src="https://www.flaticon.es/svg/vstatic/svg/921/921356.svg?token=exp=1610553013~hmac=e2818590daebc764f7b9eb322468ac81" alt="icono-comunidad" />
                    <label><h2>Iniciar sesión en Comunity</h2></label>
                    <div>
                        <h3>Telefono</h3>
                        <label><input type="text" id="user" placeholder="Escribe tu numero telefonico"/></label>
                    </div>
                    <div>
                        <h3>Contraseña</h3>
                        <label><input type="password" id="password" placeholder="Escribe tu contraseña aqui"/></label>
                    </div>
                    <div><input className="input-enviar" type="submit" value="Iniciar Sessión"/></div>
                    <Link href="/Registro/Registro"><a>Regístrate en comunity |</a></Link>
                    <Link href="Registro"><a> ¿Olvidaste la contraseña?</a></Link>

                </form>
                
            </div>
            
        </main>
    )
}