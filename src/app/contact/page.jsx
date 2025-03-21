export function FormPage() {
    return (
        <div>
            <form>
                <div>
                    <label htmlFor="nameU">Nombre: </label>
                    <input type="text" name="nameU" id="nameU"/>
                </div>
                <div>
                    <label htmlFor="correo">Correo: </label>
                    <input type="email" name="correo" id="correo"/>
                </div>
                <div>
                    <label htmlFor="mensaje">Mensaje: </label>
                    <textarea name="mensaje" id="mensaje"/>
                </div>
            </form>
        </div>
    );
}