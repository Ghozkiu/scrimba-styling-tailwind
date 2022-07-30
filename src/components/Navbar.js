export default function Navbar() {
    return (
        <nav className="bg-zinc-900">
            <div className="h-20 grid grid-cols-2 content-center">
                <div>
                <p className="ml-10 text-2xl font-bold text-teal-200 "><img class="App-logo mr-2 inline w-10" src="../logo192.png" alt='React Logo' />ReactFacts</p>
                </div>
                <div>
                <p className="mr-10 text-xl font-bold text-end text-stone-200">React Course - Project 1</p>
                </div>
            </div>
        </nav>
    )
}