const Login = () => {
    return(
        <dialog open>
            <article>
                <hgroup>
                    <h1>Sign in</h1>
                    <h2>Login pages</h2>
                </hgroup>
                <form>
                    <input
                        type="text"
                        name="login"
                        placeholder="Id"
                        aria-label="Login"
                        autoComplete="nickname"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        aria-label="Password"
                        autoComplete="current-password"
                        required
                    />
                    <fieldset>
                        {/*<label htmlFor="remember">*/}
                        {/*    <input type="checkbox" role="switch" id="remember" name="remember"/>*/}
                        {/*    Remember me*/}
                        {/*</label>*/}
                    </fieldset>
                    <button type="submit" className="contrast" onClick="event.preventDefault()">Login</button>
                </form>
            </article>
        </dialog>
    );
;}

export default Login;