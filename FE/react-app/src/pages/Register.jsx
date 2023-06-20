const Register = () => {
    return(
        <dialog open>
            <article>
                <hgroup>
                    <h1>Register</h1>
                    <h2>Register pages</h2>
                </hgroup>

                <form>
                    <label htmlFor="text">Useranme</label>
                    <input type="text" id="text" name="text" placeholder="Username"/>

                    <label htmlFor="text">Password</label>
                    <input type="password" id="text" name=" text" placeholder=" Password"/>
                    <input type=" password" id=" text" name=" text" placeholder=" Confirm password"/>

                    <label htmlFor=" text">Email</label>
                    <input type=" text" id=" text" name=" text" placeholder=" Email"/>

                    <button type="submit" className=" contrast" onClick="event.preventDefault()">가입하기</button>
                </form>

                <label htmlFor="valid">Username
                    <input
                        type="text"
                        id="valid"
                        name="valid"
                        placeholder="park"
                        aria-invalid="false"
                    />
                </label>

                <label htmlFor="invalid">
                    Username
                    <input
                        type="text"
                        id="invalid"
                        name="invalid"
                        placeholder="park"
                        aria-invalid="true"
                    />
                    <small>이미 중복되는 아이디 입니다.</small>
                </label>
            </article>
        </dialog>

);
    ;}

export default Register;