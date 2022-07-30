export default function Main(){
    return (
        <div className="h-screen md:grid md:grid-cols-2 grid-cols-1 sm:w-full  bg-zinc-800">
            <div className="md:pt-10 md:pl-10">
                <h1 className="text-4xl font-bold mb-5 text-slate-100 text-center sm:text-left">Fun facts about React</h1>
                <ul className="ml-10 marker:text-teal-200 list-disc list-outside">
                    <li className="mb-3 mb:text-xl text-slate-100">React native is built by Facebook and they have made it MIT license, that means it is open source.</li>
                    <li className="mb-3 text-slate-100">React Native is Java Script based &can be used to create android, iOS and windows apps also.</li>
                    <li className="mb-3 text-slate-100">React native saves 40% to 90% time in developing the apps on different platforms?</li>
                </ul>
            </div>
        </div>
    )
}