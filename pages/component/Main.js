export default function Main({username, setInputValue}) {
    return (
        <main>
            <h1 className="title">
                Quick <a href="/">Username</a> Search!
            </h1>

            <p className="description">
                Lookup your username on all social media.
            </p>

            <div className="form-group col-sm-10 col-md-8 col-lg-8 col-xl-8 pt-sm-4 pt-md-4 pt-lg-4 pt-xl-4">
                <input type='text'
                       name='username'
                       onChange={(e) => { setInputValue(e.target.value) }}
                       value={username}
                       className="form-control form-control-lg"
                />
            </div>
        </main>
    )
}