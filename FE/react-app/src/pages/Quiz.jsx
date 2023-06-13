import Navbar from "../components/Navbar";

const Quiz = () => {
    return(
        <main className="container">
            <Navbar></Navbar>
            <header>
                <br/>
                <h2>퀴즈 1</h2>
                <progress value="1" max="100"></progress>
            </header>
            <article id="article">
                <h2>Article</h2>
                <p>

                </p>
            </article>

            <label form="text">정답</label>
            <input type="text" id="text" name="text"/>
            <small>단어의 의미를 입력하고 Enter 를 누르세요</small>
        </main>
    )
}

export default Quiz;